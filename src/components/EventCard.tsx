import type { StoreEvent } from "../data/events";

export default function EventCard({ event }: { event: StoreEvent }) {
  return (
    <article className="feature-card">
      <span className="card-date">{event.label}</span>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <a href={event.link.href} target={event.link.external ? "_blank" : undefined} rel={event.link.external ? "noreferrer" : undefined}>
        {event.link.label}
      </a>
    </article>
  );
}
