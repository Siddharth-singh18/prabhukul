"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Search, X, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { blogs, products } from "@/lib/data";
import { formatINR } from "@/lib/utils";

const trending = ["Kumkumadi", "Bhringraj", "Triphala", "Tulsi tea"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { products: [], blogs: [] };
    return {
      products: products.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(q)),
      blogs: blogs.filter((item) => `${item.title} ${item.category}`.toLowerCase().includes(q))
    };
  }, [query]);

  const goToShopSearch = (value = query) => {
    const params = new URLSearchParams();
    if (value.trim()) params.set("q", value.trim());
    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 bg-charcoal/35 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="glass mx-auto mt-8 max-w-3xl rounded-2xl p-4 md:mt-20"
          >
            <div className="flex items-center gap-3 border-b border-gold/30 pb-4">
              <Search className="h-5 w-5 text-maroon dark:text-gold" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search oils, teas, rituals..."
                className="w-full bg-transparent text-lg outline-none placeholder:text-charcoal/45 dark:placeholder:text-white/45"
              />
              <button aria-label="Close search" onClick={onClose} className="rounded-full p-2 hover:bg-gold/15">
                <X className="h-5 w-5" />
              </button>
            </div>

            {!query ? (
              <div className="grid gap-4 py-6 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-maroon dark:text-gold">Trending</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {trending.map((item) => (
                      <button
                        key={item}
                        onClick={() => goToShopSearch(item)}
                        className="rounded-full border border-gold/40 px-4 py-2 text-sm hover:bg-gold/15"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-maroon dark:text-gold">Recent</p>
                  <p className="mt-3 text-sm text-charcoal/65 dark:text-white/65">Night rituals, wellness drops, neem mask</p>
                </div>
              </div>
            ) : (
              <div className="max-h-[65vh] overflow-y-auto py-5">
                <p className="text-sm text-charcoal/60 dark:text-white/60">
                  {results.products.length + results.blogs.length} results for &ldquo;{query}&rdquo;
                </p>
                <div className="mt-4 grid gap-3">
                  {results.products.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        router.push(`/products?category=${encodeURIComponent(item.category)}&q=${encodeURIComponent(item.name)}`);
                        onClose();
                      }}
                      className="flex items-center gap-4 rounded-xl border border-gold/25 p-3 text-left hover:bg-gold/10"
                    >
                      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-forest text-center font-serif text-sm font-semibold text-gold">
                        PK
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-charcoal/60 dark:text-white/60">{item.category} · {formatINR(item.price)}</p>
                        <p className={`mt-1 flex items-center gap-1 text-xs font-semibold ${item.stock > 0 ? "text-forest dark:text-gold" : "text-maroon"}`}>
                          {item.stock > 0 ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                          {item.stock > 0 ? `${item.stock} in stock` : "Out of stock"}
                        </p>
                      </div>
                    </button>
                  ))}
                  {results.blogs.map((item) => (
                    <Link key={item.slug} href={`/blog/${item.slug}`} onClick={onClose} className="rounded-xl border border-gold/25 p-4 hover:bg-gold/10">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-charcoal/60 dark:text-white/60">{item.readTime} · {item.category}</p>
                    </Link>
                  ))}
                  {!results.products.length && !results.blogs.length ? (
                    <div className="rounded-xl border border-dashed border-gold/35 p-6 text-center">
                      <p className="font-semibold">Abhi ye product available nahi hai</p>
                      <p className="mt-1 text-sm text-charcoal/60 dark:text-white/60">Shop page par dusri category try karo ya later check karo.</p>
                      <button onClick={() => goToShopSearch()} className="mt-4 rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white">
                        Search in shop
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
