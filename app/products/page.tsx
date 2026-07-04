import { CheckCircle2, ShoppingBag } from "lucide-react";
import { BrandProductVisual } from "@/components/brand-visuals";
import { categories, products } from "@/lib/data";
import { formatINR } from "@/lib/utils";

export const metadata = {
  title: "Shop Prabhukul",
  description: "Explore Prabhukul teas, oils, skincare and wellness products."
};

export default function ProductsPage() {
  return (
    <main className="bg-ivory text-charcoal dark:bg-charcoal dark:text-ivory">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fffaf3] to-[#eef7ef] px-6 pb-16 pt-32 dark:from-charcoal dark:via-[#151515] dark:to-[#13231c]">
        <div className="absolute inset-0 bg-mandala bg-[length:22px_22px] opacity-[0.04]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Shop Prabhukul</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h1 className="font-serif text-6xl font-semibold leading-[0.95] text-forest dark:text-white md:text-8xl">
              Ayurveda for every shelf.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-charcoal/70 dark:text-white/70">
              A refined catalogue of teas, oils, masks and wellness blends. Each product uses Prabhukul visual language,
              so the storefront feels like one confident brand instead of random stock images.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-gold/40 bg-white/70 px-4 py-2 text-sm font-medium text-forest dark:bg-white/10 dark:text-white">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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
                  <span className="flex items-center gap-2 text-sm font-medium text-forest dark:text-gold">
                    <CheckCircle2 className="h-4 w-4" /> In stock
                  </span>
                  <button className="flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-maroon">
                    <ShoppingBag className="h-4 w-4" /> Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
