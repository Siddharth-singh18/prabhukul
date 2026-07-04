import { BarChart3, Boxes, IndianRupee, Plus, ShoppingBag } from "lucide-react";
import { products } from "@/lib/data";
import { formatINR } from "@/lib/utils";

export const metadata = {
  title: "Vendor Dashboard"
};

export default function VendorDashboard() {
  return (
    <main className="min-h-screen bg-ivory px-6 py-32 text-charcoal dark:bg-charcoal dark:text-ivory">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Vendor dashboard</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold">Manage your apothecary.</h1>
          </div>
          <button className="flex w-fit items-center gap-2 rounded-full bg-maroon px-5 py-3 font-semibold text-white">
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ["Revenue", "₹4.8L", IndianRupee],
            ["Products", "24", Boxes],
            ["Order requests", "36", ShoppingBag],
            ["Conversion", "8.2%", BarChart3]
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="glass rounded-2xl p-6">
              <Icon className="h-7 w-7 text-maroon dark:text-gold" />
              <p className="mt-5 font-serif text-4xl font-semibold">{value as string}</p>
              <p className="mt-1 text-sm text-charcoal/60 dark:text-white/60">{label as string}</p>
            </div>
          ))}
        </div>
        <section className="glass mt-8 overflow-hidden rounded-2xl">
          <div className="border-b border-gold/20 p-6">
            <h2 className="font-serif text-3xl font-semibold">Product listings</h2>
          </div>
          <div className="divide-y divide-gold/15">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="grid gap-3 p-5 md:grid-cols-[1fr_.8fr_.5fr_.6fr] md:items-center">
                <span className="font-semibold">{product.name}</span>
                <span className="text-charcoal/60 dark:text-white/60">{product.category}</span>
                <span>{formatINR(product.price)}</span>
                <div className="flex gap-2">
                  <button className="rounded-full border border-gold/30 px-4 py-2 text-sm">Edit</button>
                  <button className="rounded-full border border-maroon/30 px-4 py-2 text-sm text-maroon dark:text-gold">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
