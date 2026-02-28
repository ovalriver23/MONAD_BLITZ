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
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    scannerRef.current.render(
      async (decodedText) => {
        scannerRef.current?.clear();
        setScanning(false);
        try {
          const res = await fetch("/api/verify-qr", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payload: decodedText }),
          });
          const data: TicketVerifyResult = await res.json();
          setResult(data);
        } catch {
          setResult({ valid: false, error: "Verification request failed" });
        }
      },
      (_err) => {} // ignore scan errors
    );
  };

  useEffect(() => {
    return () => {
      scannerRef.current?.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="space-y-4">
      {!scanning && (
        <Button onClick={startScanner} fullWidth>
          Start QR Scan
        </Button>
      )}

      <div id="qr-reader" className="rounded-xl overflow-hidden" />

      {result && (
        <div
          className={`rounded-xl p-4 text-sm font-medium ${
            result.valid
              ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {result.valid ? (
            <div className="space-y-1">
              <p>✓ Valid ticket</p>
              <p className="font-normal opacity-80">Token #{result.tokenId}</p>
              <p className="font-normal opacity-80">Event #{result.eventId}</p>
            </div>
          ) : (
            <p>✕ Invalid — {result.error}</p>
          )}
        </div>
      )}

      {result && (
        <Button variant="secondary" size="sm" fullWidth onClick={() => setResult(null)}>
          Scan Another
        </Button>
      )}
    </div>
  );
}
