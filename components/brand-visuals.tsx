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
    <div className="relative min-h-[560px] overflow-hidden">
      <div className="absolute bottom-8 right-10 h-[390px] w-[520px] rounded-t-full border-[14px] border-[#d9bd8a]/45 bg-white/55 shadow-[inset_0_0_60px_rgba(201,161,92,.16)]" />
      <div className="absolute bottom-2 right-20 h-36 w-[520px] rounded-[50%] bg-white shadow-[0_22px_70px_rgba(46,74,61,.18)]" />
      <div className="absolute -left-2 bottom-24 text-forest/40">
        <Leaf className="h-28 w-28 rotate-12 fill-current" />
      </div>
      <div className="absolute left-20 bottom-40 text-forest/50">
        <Leaf className="h-20 w-20 -rotate-12 fill-current" />
      </div>
      <div className="absolute right-0 top-24 text-forest/18">
        <Leaf className="h-32 w-32 -rotate-45 fill-current" />
      </div>

      <div className="absolute bottom-32 left-32 h-72 w-48 rotate-[-1deg] rounded-[10px] bg-gradient-to-br from-[#082719] via-forest to-[#0c3727] p-4 text-white shadow-[0_28px_60px_rgba(9,42,27,.32)]">
        <div className="absolute inset-y-0 right-0 w-10 bg-black/20" />
        <div className="absolute right-3 top-12 h-24 w-8 rounded-sm bg-white/85 text-[6px] text-charcoal" />
        <div className="relative grid h-full rounded-md border border-gold/55 p-4 text-center">
          <span className="mx-auto grid h-9 w-9 rotate-45 place-items-center border-2 border-gold">
            <span className="-rotate-45 text-xs text-gold">श्री</span>
          </span>
          <strong className="self-center font-serif text-3xl leading-none text-gold">Prabhukul</strong>
          <span className="rounded bg-gold px-2 py-1 text-[9px] font-bold text-forest">Strong and Reliable</span>
          <span className="mt-3 text-lg font-bold uppercase tracking-[0.22em]">Diamond Tea</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-gold">Purity with Taste</span>
          <span className="self-end text-right text-xs font-semibold">250 g</span>
        </div>
      </div>

      <div className="absolute bottom-40 left-72 h-96 w-64 rotate-2 rounded-[12px] bg-gradient-to-br from-[#082719] via-[#0f4a33] to-[#051b12] p-5 text-white shadow-[0_35px_90px_rgba(9,42,27,.36)]">
        <div className="absolute inset-y-0 right-0 w-14 bg-black/20" />
        <div className="absolute right-4 top-28 h-36 w-10 rounded-sm bg-white/85 text-[7px] text-charcoal" />
        <div className="relative grid h-full rounded-lg border border-gold/60 p-5 text-center">
          <span className="mx-auto grid h-11 w-11 rotate-45 place-items-center border-2 border-gold">
            <span className="-rotate-45 text-sm text-gold">श्री</span>
          </span>
          <strong className="self-center font-serif text-5xl leading-none text-gold drop-shadow">Prabhukul</strong>
          <span className="mx-auto rounded bg-gold px-3 py-1 text-[10px] font-bold text-forest">Strong and Reliable</span>
          <span className="mt-3 text-2xl font-bold uppercase tracking-[0.24em]">Diamond Tea</span>
          <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Purity with Taste</span>
          <span className="self-end text-right text-sm font-semibold">250 g</span>
        </div>
      </div>

      <div className="absolute bottom-24 right-16 h-36 w-36 rounded-full bg-white shadow-[0_22px_60px_rgba(46,74,61,.20)] ring-[12px] ring-white/70">
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#b96e28] via-[#e6a94c] to-[#8a4218]" />
        <div className="absolute -right-8 top-14 h-12 w-16 rounded-full border-[12px] border-white" />
      </div>
      <div className="absolute bottom-8 right-0 h-32 w-64 rounded-[50%] bg-white shadow-[0_18px_60px_rgba(46,74,61,.16)]">
        <div className="absolute left-16 top-10 h-8 w-28 rounded-[50%] bg-gold/20" />
        <div className="absolute right-8 top-8 h-2 w-36 rotate-[-18deg] rounded-full bg-gold" />
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
