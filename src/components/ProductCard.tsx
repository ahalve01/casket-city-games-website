import type { Product, StockStatus } from "../types/inventory";

const statusClasses: Record<StockStatus, string> = {
  "In Stock": "in-stock",
  "Low Stock": "low-stock",
  "Out of Stock": "out-of-stock",
};
const priceFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      {product.showImagePlaceholder && (
        <div className="product-placeholder" aria-hidden="true">
          <span>CCG</span>
          <small>Image coming soon</small>
        </div>
      )}
      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-price">{priceFormatter.format(product.price)}</p>
        <div className="product-availability">
          <span className={`stock-badge ${statusClasses[product.stockStatus]}`}>{product.stockStatus}</span>
          {product.quantity !== undefined && <span className="product-quantity">{product.quantity} available</span>}
        </div>
      </div>
    </article>
  );
}
