export const productCategories = [
  "Magic", "Pokémon", "Lorcana", "Yu-Gi-Oh!", "Board Games", "Accessories",
] as const;

export type ProductCategory = (typeof productCategories)[number];
export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  /** Mock retail price in US dollars. */
  price: number;
  stockStatus: StockStatus;
  quantity?: number;
  showImagePlaceholder?: boolean;
}
