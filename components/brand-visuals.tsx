import { Leaf, Play, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandProductVisualProps = {
  title: string;
  subtitle?: string;
  tone?: "green" | "maroon" | "gold";
  className?: string;
};

const tones = {
  green: "from-forest via-[#355d4d] to-[#18352b]",
  maroon: "from-maroon via-[#97313c] to-[#421018]",
  gold: "from-gold via-[#d8b974] to-[#896b2f]"
};

export function BrandProductVisual({ title, subtitle = "Ayurveda Ritual", tone = "green", className }: BrandProductVisualProps) {
  return (
    <div className={cn("relative min-h-[220px] overflow-hidden rounded-2xl bg-[#f6efe3]", className)}>
      <div className="absolute -right-10 -top-8 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-forest/15 blur-2xl" />
      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-forest shadow-sm">
        <Leaf className="h-3 w-3" /> Prabhukul
      </div>
      <div className="relative flex h-full min-h-[220px] items-end justify-center gap-4 p-7">
        <div className={cn("h-44 w-28 rounded-xl bg-gradient-to-br p-3 text-white shadow-2xl", tones[tone])}>
          <div className="grid h-full rounded-lg border border-gold/50 p-3 text-center">
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold">Prabhukul</span>
            <strong className="self-center font-serif text-xl leading-none">{title}</strong>
            <span className="self-end text-[10px] text-white/70">{subtitle}</span>
          </div>
        </div>
        <div className={cn("h-32 w-24 rounded-xl bg-gradient-to-br p-3 text-white shadow-xl", tones[tone])}>
          <div className="grid h-full rounded-lg border border-gold/45 p-2 text-center">
            <span className="text-[9px] uppercase tracking-[0.18em] text-gold">Prabhukul</span>
            <strong className="self-center font-serif text-base leading-none">{title.split(" ")[0]}</strong>
            <span className="self-end text-[9px] text-white/70">50g</span>
          </div>
        </div>
        <div className="relative mb-1 h-20 w-20 rounded-full bg-white shadow-xl ring-8 ring-white/50">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#9b5426] to-[#e5a54b]" />
          <div className="absolute -right-4 top-8 h-4 w-8 rounded-full border-4 border-white" />
        </div>
      </div>
    </div>
  );
}

export function HeroProductScene() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fffaf1] via-white to-[#ecf6ee] p-6 shadow-[0_30px_90px_rgba(46,74,61,.16)]">
      <div className="absolute -right-16 top-6 h-56 w-56 rounded-full bg-green-200/45 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gold/20 to-transparent" />
      <div className="absolute right-4 top-10 rotate-12 text-forest/20">
        <Leaf className="h-28 w-28" />
      </div>
      <div className="absolute bottom-8 right-8 h-44 w-44 rounded-full bg-white/80 shadow-2xl" />
      <div className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-gradient-to-br from-[#85401d] to-[#e0a04f]" />
      <div className="absolute bottom-24 right-5 h-8 w-14 rounded-full border-[10px] border-white" />
      <div className="absolute bottom-14 left-12 h-56 w-36 rotate-[-6deg] rounded-2xl bg-gradient-to-br from-forest via-[#315846] to-[#10261e] p-4 text-white shadow-2xl">
        <div className="grid h-full rounded-xl border border-gold/50 p-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold">Prabhukul</span>
          <strong className="self-center font-serif text-3xl leading-none">Diamond Tea</strong>
          <span className="self-end text-[11px] text-white/70">Tulsi · Saffron · Rose</span>
        </div>
      </div>
      <div className="absolute bottom-16 left-40 h-72 w-48 rotate-3 rounded-2xl bg-gradient-to-br from-forest via-[#38624f] to-[#10261e] p-5 text-white shadow-2xl">
        <div className="grid h-full rounded-xl border border-gold/50 p-5 text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">Prabhukul</span>
          <strong className="self-center font-serif text-4xl leading-none">Diamond Tea</strong>
          <span className="self-end text-xs text-white/70">Premium Ayurvedic Blend</span>
        </div>
      </div>
      <div className="absolute left-8 top-8 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-forest shadow-sm">
        Purity packed fresh
      </div>
    </div>
  );
}

export function StoryVisual() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fdf7ed] to-[#e9f4ed] p-8 shadow-glass">
      <div className="absolute inset-0 bg-mandala bg-[length:20px_20px] opacity-[0.08]" />
      <div className="relative grid h-full min-h-[396px] place-items-center rounded-[1.5rem] border border-gold/30 bg-white/55">
        <div className="text-center">
          <Sparkles className="mx-auto h-10 w-10 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-maroon">From Our Gardens</p>
          <h3 className="mt-3 font-serif text-4xl font-semibold text-forest">To Your Cup</h3>
          <button aria-label="Play story" className="mx-auto mt-8 grid h-16 w-16 place-items-center rounded-full bg-forest text-white shadow-glow">
            <Play className="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AvatarBadge({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-maroon to-forest font-semibold text-white">
      {initials}
    </div>
  );
}
