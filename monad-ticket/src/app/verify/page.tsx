import { PageWrapper } from "../../components/layout/PageWrapper";
import { QRScanner } from "../../components/verify/QRScanner";

export default function VerifyPage() {
  return (
    <PageWrapper narrow>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Venue Ticket Verification
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Scan a visitor&apos;s ticket QR code to verify it on-chain.
        </p>
      </div>
      <QRScanner />
    </PageWrapper>
  );
}
