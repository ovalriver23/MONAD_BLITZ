import { Card, CardBody, CardTitle } from "../ui/Card";
import type { WaitlistEntry } from "../../types/waitlist";

interface WaitlistCardProps {
  entry: WaitlistEntry;
}

export function WaitlistCard({ entry }: WaitlistCardProps) {
  return (
    <Card>
      <CardTitle>Event #{entry.eventId}</CardTitle>
      <CardBody>
        <p>Position: #{entry.position}</p>
        <p>Status: {entry.status}</p>
        <p className="text-xs text-zinc-400">
          Joined: {new Date(entry.joinedAt).toLocaleDateString()}
        </p>
      </CardBody>
    </Card>
  );
}
