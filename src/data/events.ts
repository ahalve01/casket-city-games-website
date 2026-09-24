export interface StoreEvent {
  id: string;
  label: string;
  title: string;
  description: string;
  highlighted: boolean;
  link: { href: string; label: string; external?: boolean };
}

// Display order also sets the order of highlighted homepage events.
export const storeEvents: StoreEvent[] = [
  {
    id: "grand-opening-magic-draft", label: "FRI • SEP 25", title: "Grand Opening Magic Draft",
    description: "Doors open at 4 PM. Join us for Magic and help us celebrate opening weekend.",
    highlighted: true,
    link: { href: "https://casket-city-events.adamhalverson.workers.dev/?event=magic-draft-grand-opening-2026-09-25", label: "Reserve Your Seat →", external: true },
  },
  {
    id: "commander-nights", label: "WEEKLY", title: "Commander Nights",
    description: "Bring a deck, grab a table, and meet other Commander players from the community.",
    highlighted: true,
    link: { href: "/events", label: "View Events →" },
  },
  {
    id: "dnd-open-play", label: "AT CASKET CITY", title: "D&D and Open Play",
    description: "Adventures, one-shots, Pokémon open play and other community game nights.",
    highlighted: true,
    link: { href: "https://casket-city-events.adamhalverson.workers.dev/?event=dnd-phandelver-2026-09-27", label: "Sign Up for D&D →", external: true },
  },
];
