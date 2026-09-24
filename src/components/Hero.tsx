import logo from "../assets/casket-city-logo.png";

export default function Hero() {
  return (
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
  );
}
