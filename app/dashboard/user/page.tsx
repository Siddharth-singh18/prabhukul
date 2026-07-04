import { Heart, MapPin, Package, UserRound } from "lucide-react";

const orders = [
  ["PKL-1042", "Kumkumadi Glow Elixir", "Delivered", "Jun 28"],
  ["PKL-1031", "Tulsi Saffron Calm Tea", "In transit", "Jul 03"]
];

export const metadata = {
  title: "User Dashboard"
};

export default function UserDashboard() {
  return (
    <main className="min-h-screen bg-ivory px-6 py-32 text-charcoal dark:bg-charcoal dark:text-ivory">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Customer dashboard</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold">Your ritual cabinet.</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ["Orders", "8", Package],
            ["Wishlist", "14", Heart],
            ["Addresses", "3", MapPin],
            ["Profile", "Complete", UserRound]
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="glass rounded-2xl p-6">
              <Icon className="h-7 w-7 text-maroon dark:text-gold" />
              <p className="mt-5 font-serif text-4xl font-semibold">{value as string}</p>
              <p className="mt-1 text-sm text-charcoal/60 dark:text-white/60">{label as string}</p>
            </div>
          ))}
        </div>
        <section className="glass mt-8 rounded-2xl p-6">
          <h2 className="font-serif text-3xl font-semibold">Recent orders</h2>
          <div className="mt-5 grid gap-3">
            {orders.map(([id, product, status, date]) => (
              <div key={id} className="grid gap-2 rounded-xl border border-gold/20 p-4 md:grid-cols-4">
                <span className="font-semibold">{id}</span>
                <span>{product}</span>
                <span className="text-forest dark:text-gold">{status}</span>
                <span className="text-charcoal/60 dark:text-white/60">{date}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
