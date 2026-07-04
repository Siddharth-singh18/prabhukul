import { ProductCatalog } from "@/components/product-catalog";
import { categories } from "@/lib/data";

export const metadata = {
  title: "Shop Prabhukul",
  description: "Explore Prabhukul teas, oils, skincare and wellness products."
};

export default function ProductsPage({
  searchParams
}: {
  searchParams?: { category?: string; q?: string; liked?: string };
}) {
  const selectedCategory = categories.includes(searchParams?.category ?? "")
    ? searchParams?.category ?? "All"
    : "All";
  const query = searchParams?.q ?? "";
  const likedOnly = searchParams?.liked === "true";

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

      <ProductCatalog initialCategory={selectedCategory} query={query} likedOnly={likedOnly} />
    </main>
  );
}
