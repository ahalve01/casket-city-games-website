const cardRates = [
  { name: "Bulk commons & uncommons", cash: "$3 per pound", credit: "$4 per pound" },
  { name: "Bulk rares", cash: "$0.10 each", credit: "$0.15 each" },
  { name: "Bulk mythics", cash: "$0.25 each", credit: "$0.35 each" },
  { name: "Market singles valued over $1", cash: "Up to 50% of market value", credit: "Up to 60% of market value" },
];

export default function BuybackPolicy() {
  return (
    <section className="section buyback-policy" id="buyback-policy" aria-labelledby="buyback-heading">
      <a className="button secondary buyback-home-link" href="/">← Back to Homepage</a>
      <div className="section-heading">
        <p className="eyebrow">MAKE ROOM FOR YOUR NEXT FAVORITE</p>
        <h1 id="buyback-heading">Buyback Policy</h1>
        <p>Give your cards and games a new home. Choose cash or store credit with the offers below.</p>
      </div>

      <div className="buyback-block">
        <h3>Trading Cards</h3>
        <div className="buyback-rates">
          {cardRates.map((rate) => (
            <div className="buyback-rate" key={rate.name}>
              <h4>{rate.name}</h4>
              <dl>
                <div><dt>Cash</dt><dd>{rate.cash}</dd></div>
                <div><dt>Store credit</dt><dd>{rate.credit}</dd></div>
              </dl>
            </div>
          ))}
        </div>
        <ul>
          <li>Higher offers may be available for rare or highly demanded cards.</li>
          <li>Premium cards, including rares, mythics, foils, promos, showcase cards, and special treatments, may be individually evaluated.</li>
        </ul>
      </div>

      <div className="buyback-block">
        <h3>Card Condition &amp; Preparation</h3>
        <ul>
          <li>Standard offers are based on Lightly Played (LP) through Near Mint (NM) condition.</li>
          <li>Heavily played, damaged, altered, or counterfeit cards may receive a reduced offer or be declined.</li>
          <li>Before weighing, bulk cards should be loose and removed from sleeves, binders, and deck boxes. Keep dice and other items separate from the cards.</li>
        </ul>
      </div>

      <div className="buyback-block">
        <h3>Used Board Games</h3>
        <div className="buyback-rate">
          <dl>
            <div><dt>Cash</dt><dd>30% of value</dd></div>
            <div><dt>Store credit</dt><dd>40% of value</dd></div>
          </dl>
        </div>
        <p>We value games using average eBay sold pricing, with obvious outliers removed.</p>
        <ul>
          <li>Offers are based on condition, completeness, and current demand.</li>
          <li>Games must be complete and playable. Light wear is acceptable.</li>
          <li>Casket City Games reserves the right to decline any game.</li>
        </ul>
      </div>
    </section>
  );
}
