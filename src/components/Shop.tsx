import { SHOW_INVENTORY } from "../config";

export default function Shop() {
  return (
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

        {SHOW_INVENTORY ? (
          <a className="shop-card" href="#inventory">
            <span>In-Store Inventory</span>
            <strong>Browse Inventory →</strong>
          </a>
        ) : (
          <div className="shop-card">
            <span>In-Store Inventory</span>
            <strong>Coming Soon</strong>
          </div>
        )}
      </div>
    </section>
  );
}
