import { Award, BadgeCheck, Leaf, Sparkles } from "lucide-react";
import { HeroProductScene, StoryVisual } from "@/components/brand-visuals";

export const metadata = {
  title: "About Prabhukul",
  description: "The story, sourcing and formulation philosophy behind Prabhukul Ayurveda."
};

const values = [
  ["Purity First", "Every ritual starts with carefully selected herbs, clean carriers and batch-led accountability.", Leaf],
  ["Indian Heritage", "Inspired by household Ayurveda, seasonal wisdom and ingredients trusted across generations.", Award],
  ["Modern Testing", "A practical formulation system designed for urban routines, consistency and repeat use.", BadgeCheck],
  ["Sensory Rituals", "Products that feel beautiful on the shelf and meaningful in the everyday rhythm of home.", Sparkles]
];

export default function AboutPage() {
  return (
    <main className="bg-ivory text-charcoal dark:bg-charcoal dark:text-ivory">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fffaf3] to-[#edf7ee] px-6 pb-20 pt-32 dark:from-charcoal dark:via-[#151515] dark:to-[#13231c]">
        <div className="absolute inset-0 bg-mandala bg-[length:22px_22px] opacity-[0.04]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">About Prabhukul</p>
            <h1 className="mt-5 font-serif text-6xl font-semibold leading-[0.95] text-forest dark:text-white md:text-8xl">
              A legacy of purity and trust.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70 dark:text-white/70">
              Prabhukul is built for people who want Ayurveda to feel authentic, premium and easy to bring into daily life.
              We combine Indian botanical knowledge with refined packaging, thoughtful formulas and a calm digital experience.
            </p>
          </div>
          <HeroProductScene />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <StoryVisual />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Our philosophy</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">
              From careful gardens to graceful rituals.
            </h2>
            <div className="gold-line my-8" />
            <p className="text-lg leading-8 text-charcoal/70 dark:text-white/70">
              The brand is imagined around honesty: fewer claims, richer ingredient stories and products that can stand beside
              premium Indian wellness houses. Tea, oils, masks and supplements share one visual identity: deep green, maroon,
              saffron gold and a disciplined white canvas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-[#141414]">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">What we protect</p>
          <h2 className="mt-4 font-serif text-5xl font-semibold">The Prabhukul promise.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {values.map(([title, text, Icon]) => (
              <article key={title as string} className="glass rounded-2xl p-6">
                <Icon className="h-8 w-8 text-maroon dark:text-gold" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/65 dark:text-white/65">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
