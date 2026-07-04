"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { blogs, products } from "@/lib/data";
import { formatINR } from "@/lib/utils";

const trending = ["Kumkumadi", "Bhringraj", "Triphala", "Tulsi tea"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { products: [], blogs: [] };
    return {
      products: products.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(q)),
      blogs: blogs.filter((item) => `${item.title} ${item.category}`.toLowerCase().includes(q))
    };
  }, [query]);

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
                        onClick={() => setQuery(item)}
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
                    <div key={item.id} className="flex items-center gap-4 rounded-xl border border-gold/25 p-3">
                      <Image src={item.image} alt={item.name} width={72} height={72} className="h-16 w-16 rounded-lg object-cover" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-charcoal/60 dark:text-white/60">{item.category} · {formatINR(item.price)}</p>
                      </div>
                    </div>
                  ))}
                  {results.blogs.map((item) => (
                    <a key={item.slug} href={`/blog/${item.slug}`} className="rounded-xl border border-gold/25 p-4 hover:bg-gold/10">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-charcoal/60 dark:text-white/60">{item.readTime} · {item.category}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
