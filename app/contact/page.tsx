import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact Prabhukul",
  description: "Contact Prabhukul for product queries, consultations, distribution and support."
};

export default function ContactPage() {
  return (
    <main className="bg-ivory text-charcoal dark:bg-charcoal dark:text-ivory">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fffaf3] to-[#eef7ef] px-6 pb-20 pt-32 dark:from-charcoal dark:via-[#151515] dark:to-[#13231c]">
        <div className="absolute inset-0 bg-mandala bg-[length:22px_22px] opacity-[0.04]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Contact</p>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl font-semibold leading-[0.95] text-forest dark:text-white md:text-8xl">
            Begin a better ritual with us.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70 dark:text-white/70">
            Reach out for product guidance, vendor partnerships, distribution enquiries or private Ayurveda consultation sessions.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_.9fr]">
          <form className="glass rounded-2xl p-6 md:p-8">
            <h2 className="font-serif text-4xl font-semibold">Send us a note.</h2>
            <div className="mt-8 grid gap-4">
              {["Name", "Email", "Subject"].map((label) => (
                <label key={label} className="grid gap-2 text-sm font-medium">
                  {label}
                  <input className="rounded-xl border border-gold/30 bg-white/70 px-4 py-3 outline-none focus:border-maroon dark:bg-white/5" />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-medium">
                Message
                <textarea rows={6} className="rounded-xl border border-gold/30 bg-white/70 px-4 py-3 outline-none focus:border-maroon dark:bg-white/5" />
              </label>
              <button className="rounded-full bg-maroon px-6 py-3 font-semibold text-white hover:bg-forest">Send Message</button>
            </div>
          </form>

          <aside className="relative overflow-hidden rounded-2xl bg-forest p-8 text-white">
            <div className="absolute inset-0 bg-mandala bg-[length:20px_20px] opacity-10" />
            <div className="relative">
              <Sparkles className="h-10 w-10 text-gold" />
              <h2 className="mt-6 font-serif text-4xl font-semibold">Prabhukul Experience Studio</h2>
              <p className="mt-4 leading-7 text-white/75">
                18, Amaltas Lane, Indiranagar, Bengaluru. Open for product discovery, gifting consultations and wellness workshops.
              </p>
              <div className="mt-8 grid gap-4 text-sm">
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold" /> Bengaluru · Mumbai · Delhi NCR</div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold" /> +91 70172 66882</div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold" /> care@prabhukul.in</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
