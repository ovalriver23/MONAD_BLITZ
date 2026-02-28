"use client";

import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Button } from "../ui/Button";
import type { TicketVerifyResult } from "../../types/ticket";

export function QRScanner() {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const [result, setResult] = useState<TicketVerifyResult | null>(null);
  const [scanning, setScanning] = useState(false);

  const startScanner = () => {
    setResult(null);
    setScanning(true);
    scannerRef.current = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        videoConstraints: { facingMode: "environment" },
      },
      false
    );
    scannerRef.current.render(
      async (decodedText) => {
        scannerRef.current?.clear();
        setScanning(false);
        try {
          // Parse the JSON payload from the QR code
          const payload = JSON.parse(decodedText);
          const { signature, timestamp, walletAddress, eventId } = payload;

          if (!signature || !timestamp || !walletAddress || eventId === undefined) {
            setResult({ valid: false, reason: "Geçersiz QR formatı" });
            return;
          }

          const res = await fetch("/api/verify-qr", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ signature, timestamp, walletAddress, eventId }),
          });
          const data: TicketVerifyResult = await res.json();
          setResult(data);
        } catch {
          setResult({ valid: false, reason: "QR kodu okunamadı veya doğrulama başarısız" });
        }
      },
      (_err) => { } // ignore scan errors
    );
  };

  const reset = () => {
    setResult(null);
    setScanning(false);
  };

  useEffect(() => {
    return () => {
      scannerRef.current?.clear().catch(() => { });
    };
  }, []);

  return (
    <div className="space-y-4">
      {!scanning && !result && (
        <Button onClick={startScanner} fullWidth>
          QR Taramayı Başlat
        </Button>
      )}

      <div id="qr-reader" className="rounded-xl overflow-hidden" />

      {result && (
        <div
          className={`rounded-2xl p-8 text-center ${result.valid
            ? "bg-green-100 dark:bg-green-900/30 border-2 border-green-500"
            : "bg-red-100 dark:bg-red-900/30 border-2 border-red-500"
            }`}
        >
          {result.valid ? (
            <div>
              <p className="text-5xl mb-3">✓</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                GEÇİŞ ONAYLANDI
              </p>
            </div>
          ) : (
            <div>
              <p className="text-5xl mb-3">✗</p>
              <p className="text-2xl font-bold text-red-700 dark:text-red-400">
                GEÇERSİZ BİLET
              </p>
              {result.reason && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-300">
                  {result.reason}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {result && (
        <Button variant="secondary" fullWidth onClick={reset}>
          Tekrar Tara
        </Button>
      )}
    </div>
  );
}
