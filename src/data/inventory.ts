import type { Product } from "../types/inventory";

// Demonstration data only: prices and quantities do not represent store inventory.
export const mockInventory: Product[] = [
  { id: "magic-avatar", name: "Magic: Avatar The Last Airbender Play Booster Box", category: "Magic", price: 159.99, stockStatus: "In Stock", quantity: 8, showImagePlaceholder: true },
  { id: "magic-lorwyn", name: "Magic: Lorwyn Eclipsed Play Booster Box", category: "Magic", price: 149.99, stockStatus: "Low Stock", quantity: 2, showImagePlaceholder: true },
  { id: "pokemon-chaos", name: "Pokémon: Chaos Rising Mega Evolution Elite Trainer Box", category: "Pokémon", price: 59.99, stockStatus: "In Stock", quantity: 6, showImagePlaceholder: true },
  { id: "pokemon-order", name: "Pokémon: Perfect Order Bundle", category: "Pokémon", price: 29.99, stockStatus: "Out of Stock", quantity: 0, showImagePlaceholder: true },
  { id: "lorcana-jafar", name: "Lorcana: Reign of Jafar Illumineer's Trove", category: "Lorcana", price: 49.99, stockStatus: "Low Stock", quantity: 3, showImagePlaceholder: true },
  { id: "yugioh-chaos", name: "Yu-Gi-Oh!: Chaos Origins Booster Box", category: "Yu-Gi-Oh!", price: 89.99, stockStatus: "In Stock", quantity: 5, showImagePlaceholder: true },
  { id: "board-catan", name: "CATAN Base Game", category: "Board Games", price: 49.99, stockStatus: "In Stock", quantity: 4, showImagePlaceholder: true },
  { id: "board-ticket", name: "Ticket to Ride", category: "Board Games", price: 54.99, stockStatus: "Low Stock", quantity: 1, showImagePlaceholder: true },
  { id: "sleeves-purple", name: "Dragon Shield Matte Purple Sleeves — 100 Count", category: "Accessories", price: 12.99, stockStatus: "In Stock", quantity: 12, showImagePlaceholder: true },
  { id: "dice-purple", name: "Purple & Ivory Polyhedral Dice Set", category: "Accessories", price: 14.99, stockStatus: "In Stock", showImagePlaceholder: true },
];
