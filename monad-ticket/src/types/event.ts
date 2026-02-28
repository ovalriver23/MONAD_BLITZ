export interface Event {
  id: number;
  name: string;
  description: string;
  venue: string;
  city: string;
  date: string; // ISO string
  imageUrl: string;
  maxTickets: number;
  soldCount: number;
  priceWei: string; // bigint serialized as string
  priceEth: string;
  category: EventCategory;
  artist: string;
  exists: boolean;
}

export type EventCategory =
  | "concert"
  | "festival"
  | "theater"
  | "sports"
  | "comedy"
  | "other";

export interface EventFilters {
  category?: EventCategory;
  city?: string;
  available?: boolean; // only events with remaining tickets
  search?: string;
}

export type EventSortOption =
  | "date-asc"
  | "date-desc"
  | "price-asc"
  | "price-desc"
  | "name-asc";
