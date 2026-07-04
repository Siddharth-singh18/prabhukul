"use client";

import { CheckCircle2, Heart, Search, ShoppingBag, XCircle } from "lucide-react";
import { useMemo } from "react";
import { BrandProductVisual } from "@/components/brand-visuals";
import { categories, products } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export function ProductCatalog({
  initialCategory = "All",
  query = "",
  likedOnly = false
}: {
  initialCategory?: string;
  query?: string;
  likedOnly?: boolean;
}) {
  const { addItem, toggleWishlist, wishlist } = useCartStore((state) => state);
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = initialCategory === "All" || product.category === initialCategory;
      const queryMatch =
        !normalizedQuery ||
        `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalizedQuery);
      const likedMatch = !likedOnly || wishlist.includes(product.id);
      return categoryMatch && queryMatch && likedMatch;
    });
  }, [initialCategory, likedOnly, normalizedQuery, wishlist]);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-forest dark:text-gold">
              {filtered.length} products {likedOnly ? "in liked items" : "available"}
            </p>
            {query || initialCategory !== "All" ? (
              <p className="mt-1 text-sm text-charcoal/60 dark:text-white/60">
                Showing {initialCategory === "All" ? "all categories" : initialCategory}
                {query ? ` for "${query}"` : ""}
              </p>
            ) : null}
          </div>
          <a href="/products" className="w-fit rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold">
            Reset filters
          </a>
        </div>

        {filtered.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => {
              const liked = wishlist.includes(product.id);
              const inStock = product.stock > 0;
              return (
                <article key={product.id} className="glass overflow-hidden rounded-2xl">
                  <div className="relative">
                    <BrandProductVisual
                      title={product.name}
                      subtitle={product.category}
                      tone={product.tone as "green" | "maroon" | "gold"}
                      className="rounded-none"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-maroon">
                      {product.badge}
                    </span>
                    <button
                      aria-label={liked ? "Remove from liked" : "Add to liked"}
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute right-4 top-4 rounded-full p-2 shadow-sm ${
                        liked ? "bg-maroon text-white" : "bg-white/85 text-forest"
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-maroon dark:text-gold">{product.category}</p>
                        <h2 className="mt-1 font-serif text-2xl font-semibold">{product.name}</h2>
                      </div>
                      <p className="font-semibold">{formatINR(product.price)}</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-charcoal/65 dark:text-white/65">{product.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className={`flex items-center gap-2 text-sm font-medium ${inStock ? "text-forest dark:text-gold" : "text-maroon"}`}>
                        {inStock ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        {inStock ? `${product.stock} in stock` : "Out of stock"}
                      </span>
                      <button
                        disabled={!inStock}
                        onClick={() => addItem(product)}
                        className="flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-maroon disabled:cursor-not-allowed disabled:bg-charcoal/25"
                      >
                        <ShoppingBag className="h-4 w-4" /> {inStock ? "Add" : "Sold out"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="grid min-h-[320px] place-items-center rounded-2xl border border-dashed border-gold/40 bg-white/60 p-8 text-center dark:bg-white/5">
            <div>
              <Search className="mx-auto h-10 w-10 text-gold" />
              <h2 className="mt-4 font-serif text-3xl font-semibold">Abhi ye item available nahi hai</h2>
              <p className="mt-2 text-charcoal/60 dark:text-white/60">
                Try another search or category. Is query ke liye products out of stock / unavailable hain.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
