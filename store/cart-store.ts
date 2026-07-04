"use client";

import { create } from "zustand";
import { products } from "@/lib/data";

export type CartItem = (typeof products)[number] & { quantity: number };

type CartState = {
  items: CartItem[];
  wishlist: string[];
  addItem: (product: (typeof products)[number]) => void;
  removeItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  totalItems: number;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  wishlist: [],
  totalItems: 0,
  addItem: (product) =>
    set((state) => {
      if (product.stock <= 0) return state;
      const existing = state.items.find((item) => item.id === product.id);
      const items = existing
        ? state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.items, { ...product, quantity: 1 }];
      return { items, totalItems: items.reduce((sum, item) => sum + item.quantity, 0) };
    }),
  removeItem: (id) =>
    set((state) => {
      const items = state.items.filter((item) => item.id !== id);
      return { items, totalItems: items.reduce((sum, item) => sum + item.quantity, 0) };
    }),
  decreaseItem: (id) =>
    set((state) => {
      const items = state.items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0);
      return { items, totalItems: items.reduce((sum, item) => sum + item.quantity, 0) };
    }),
  clearCart: () => set({ items: [], totalItems: 0 }),
  toggleWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.includes(id)
        ? state.wishlist.filter((item) => item !== id)
        : [...state.wishlist, id]
    }))
}));
