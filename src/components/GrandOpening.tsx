export default function GrandOpening() {
  return (
    <section className="grand-opening">
      <div className="grand-opening-badge">
        GRAND OPENING • SEPTEMBER 25
      </div>

      <div className="grand-opening-content">
        <div className="grand-opening-copy">
          <p className="eyebrow">WELCOME TO CASKET CITY</p>

          <h2>Our Doors Are Finally Opening.</h2>

          <p>
            Join us as we celebrate the official Grand Opening of
            Casket City Games. Come play, meet the community, explore the
            store, and help us kick off the next chapter.
          </p>

          <div className="opening-details">
            <div>
              <span>FRIDAY</span>
              <strong>September 25</strong>
            </div>

            <div>
              <span>STORE</span>
              <strong>Open 4 PM – 10 PM</strong>
            </div>

            <div>
              <span>MAGIC DRAFT</span>
              <strong>Doors 4 PM • Draft 5:30 PM</strong>
            </div>
          </div>

          <div className="grand-opening-actions">
            <a
              className="button primary"
              href="https://casket-city-events.adamhalverson.workers.dev/?event=magic-draft-grand-opening-2026-09-25"
              target="_blank"
              rel="noreferrer"
            >
              Reserve Your Draft Seat
            </a>

            <a className="button secondary" href="#visit">
              Get Directions
            </a>
          </div>
        </div>

        <div className="grand-opening-mark">
          <span>09</span>
          <strong>25</strong>
          <small>2026</small>
        </div>
      </div>
    </section>
  );
}
