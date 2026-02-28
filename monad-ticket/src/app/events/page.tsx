"use client";

import { useState } from "react";
import { PageHeader, PageWrapper } from "../../components/layout/PageWrapper";
import { EventGrid } from "../../components/events/EventGrid";
import { Input } from "../../components/ui/Input";
import { useEvents } from "../../hooks/useEvents";

export default function EventsPage() {
  const { events, loading, error } = useEvents();
  const [search, setSearch] = useState("");

  const filtered = events.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageWrapper>
      <PageHeader
        title="Upcoming Events"
        description="Buy a soulbound ticket — yours forever, scalping impossible."
        actions={
          <Input
            placeholder="Search events…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-52"
          />
        }
      />
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <EventGrid events={filtered} loading={loading} />
    </PageWrapper>
  );
}
