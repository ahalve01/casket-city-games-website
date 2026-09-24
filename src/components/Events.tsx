import { storeEvents } from "../data/events";
import EventCard from "./EventCard";

export default function Events({ fullPage = false }: { fullPage?: boolean }) {
  const events = fullPage ? storeEvents : storeEvents.filter((event) => event.highlighted).slice(0, 3);
  const Heading = fullPage ? "h1" : "h2";
  return (
    <section className={fullPage ? "section events-page" : "section"} id="events" aria-labelledby="events-heading">
      {fullPage && <a className="button secondary page-home-link" href="/">← Back to Homepage</a>}
      <div className="section-heading">
        <p className="eyebrow">GATHER AT CASKET CITY</p>
        <Heading id="events-heading">Upcoming Events</Heading>
        <p>Drafts, Commander, Pokémon, D&amp;D and more.</p>
      </div>
      <div className="card-grid">
        {events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
      {!fullPage && <a className="button secondary events-all-link" href="/events">View All Events</a>}
    </section>
  );
}
