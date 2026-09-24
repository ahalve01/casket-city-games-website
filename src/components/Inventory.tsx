import { useState } from "react";
import { mockInventory } from "../data/inventory";
import { productCategories, type ProductCategory } from "../types/inventory";
import ProductCard from "./ProductCard";

export default function Inventory() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [search, setSearch] = useState("");
  const query = search.trim().toLocaleLowerCase();
  const products = mockInventory.filter((product) =>
    (category === "All" || product.category === category) &&
    `${product.name} ${product.category}`.toLocaleLowerCase().includes(query),
  );

  return (
    <section className="section inventory-section" id="inventory" aria-labelledby="inventory-heading">
      <div className="section-heading">
        <p className="eyebrow">EXPLORE THE SHELVES</p>
        <h2 id="inventory-heading">What's In Stock</h2>
        <p>Find your next booster box, game night favorite, or tabletop essential.</p>
      </div>
      <p className="inventory-demo-note"><strong>Mock inventory preview.</strong> Products, prices, and stock levels are sample data, not live store availability.</p>

      <div className="inventory-controls">
        <div className="inventory-filters" role="group" aria-label="Filter products by category">
          {(["All", ...productCategories] as const).map((option) => (
            <button key={option} type="button" aria-pressed={category === option} onClick={() => setCategory(option)}>{option}</button>
          ))}
        </div>
        <div className="inventory-search">
          <label htmlFor="inventory-search">Search products</label>
          <input id="inventory-search" type="search" placeholder="Search by name or category…" value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>
      </div>

      <p className="inventory-results" role="status">{products.length} {products.length === 1 ? "product" : "products"} found</p>
      {products.length > 0 ? (
        <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      ) : (
        <div className="inventory-empty">
          <h3>No products found</h3>
          <p>Try another search or category.</p>
          <button className="button secondary" type="button" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button>
        </div>
      )}

      <div className="inventory-singles">
        <div>
          <h3>Looking for singles?</h3>
          <p>Trading card singles are handled separately through our TCGplayer Pro storefront.</p>
        </div>
        <a className="button primary" href="https://casketcitygames.tcgplayerpro.com" target="_blank" rel="noreferrer">Shop Singles on TCGplayer Pro →</a>
      </div>
    </section>
  );
}
