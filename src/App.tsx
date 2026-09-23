import "./App.css";
import logo from "./assets/casket-city-logo.png";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="site">
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="hero-glow"></div>

          <div className="hero-content">
            <img
              className="hero-logo"
              src={logo}
              alt="Casket City Games"
            />

            <p className="eyebrow">PLAY • TRADE • COLLECT • BELONG</p>

            <h1>Your Table Is Waiting.</h1>

            <p className="hero-copy">
              Casket City Games is a place to play, meet people,
              discover new games, and become part of the community.
            </p>

            <div className="hero-buttons">
              <a className="button primary" href="#events">
                See What's Happening
              </a>

              <a className="button secondary" href="#visit">
                Visit the Store
              </a>
            </div>
          </div>
        </section>

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
              <a href="#">See What's Coming →</a>
            </article>
          </div>
        </section>

        <section className="shop-section" id="shop">
          <div>
            <p className="eyebrow">FIND YOUR NEXT GAME</p>
            <h2>Cards, Games & More</h2>
            <p>
              Trading cards, sealed product, accessories, board games,
              role-playing games, miniatures and plenty of dice.
            </p>
          </div>

          <div className="shop-links">
            <a
              className="shop-card"
              href="https://casketcitygames.tcgplayerpro.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>Trading Card Singles</span>
              <strong>Shop TCGplayer Pro →</strong>
            </a>

            <a className="shop-card" href="#">
              <span>In-Store Inventory</span>
              <strong>Coming Soon →</strong>
            </a>
          </div>
        </section>

        <section className="trade-section" id="trade">
          <p className="eyebrow">GIVE OLD CARDS A NEW HOME</p>
          <h2>Sell & Trade With Us</h2>
          <p>
            Have cards sitting around? Bring them to Casket City.
            We buy singles and bulk and offer cash or store credit.
          </p>

          <a className="button secondary" href="#">
            View Our Buy Policy
          </a>
        </section>

        <section className="visit-section" id="visit">
          <div>
            <p className="eyebrow">COME FIND US</p>
            <h2>Visit Casket City</h2>

            <address>
              14188 N. Morris Washington St. Ste. B<br />
              Batesville, IN 47006
            </address>

            <p>
              <a href="tel:+18596938133">(859) 693-8133</a><br />
              <a href="mailto:casketcitygames@gmail.com">
                casketcitygames@gmail.com
              </a>
            </p>
          </div>

          <div className="hours">
            <h3>Store Hours</h3>
            <p><span>Mon–Thu</span> 4 PM – 8 PM</p>
            <p><span>Friday</span> 4 PM – 10 PM</p>
            <p><span>Saturday</span> 12 PM – 10 PM</p>
            <p><span>Sunday</span> 12 PM – 8 PM</p>
          </div>
        </section>
      </main>

      <footer>
        <img src={logo} alt="" />

        <p>Play • Trade • Collect • Belong</p>

        <div className="socials">
          <a
            href="https://www.facebook.com/profile.php?id=61588450713370"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://instagram.com/casketcitygames"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://discord.gg/gwtqcbmjx"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>

          <a
            href="https://casketcitygames.tcgplayerpro.com"
            target="_blank"
            rel="noreferrer"
          >
            TCGplayer
          </a>
        </div>

        <small>
          © 2026 Casket City Games. Batesville, Indiana.
        </small>
      </footer>
    </div>
  );
}

export default App;
