export default function Events() {
  return (
    <section className="section" id="events">
      <div className="section-heading">
        <p className="eyebrow">GATHER AT CASKET CITY</p>
        <h2>Upcoming Events</h2>
        <p>
          Drafts, Commander, Pokémon, D&amp;D and more.
        </p>
      </div>

      <div className="card-grid">
        <article className="feature-card">
          <span className="card-date">FRI • SEP 25</span>
          <h3>Grand Opening Magic Draft</h3>
          <p>
            Doors open at 4 PM. Join us for Magic and help us
            celebrate opening weekend.
          </p>
          <a
            href="https://casket-city-events.adamhalverson.workers.dev/?event=magic-draft-grand-opening-2026-09-25"
            target="_blank"
            rel="noreferrer"
          >
            Reserve Your Seat →
          </a>
        </article>

        <article className="feature-card">
          <span className="card-date">WEEKLY</span>
          <h3>Commander Nights</h3>
          <p>
            Bring a deck, grab a table, and meet other Commander
            players from the community.
          </p>
          <a href="#">View Events →</a>
        </article>

        <article className="feature-card">
          <span className="card-date">AT CASKET CITY</span>
          <h3>D&amp;D and Open Play</h3>
          <p>
            Adventures, one-shots, Pokémon open play and other
            community game nights.
          </p>
          <a
            href="https://casket-city-events.adamhalverson.workers.dev/?event=dnd-phandelver-2026-09-27"
            target="_blank"
            rel="noreferrer"
          >
            Sign Up for D&amp;D →
          </a>
        </article>
      </div>
    </section>
  );
}
