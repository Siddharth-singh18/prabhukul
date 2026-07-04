"use client";

import { create } from "zustand";
import { products } from "@/lib/data";

export type CartItem = (typeof products)[number] & { quantity: number };

type CartState = {
  items: CartItem[];
  addItem: (product: (typeof products)[number]) => void;
  removeItem: (id: string) => void;
  totalItems: number;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalItems: 0,
  addItem: (product) =>
    set((state) => {
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
    })
}));
