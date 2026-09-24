import logo from "../assets/casket-city-logo.png";

export default function Footer() {
  return (
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
  );
}
