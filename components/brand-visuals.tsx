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
    <div className="relative mx-auto min-h-[360px] w-full max-w-[680px] overflow-visible sm:min-h-[460px] lg:min-h-[560px] lg:max-w-none">
      <div className="absolute bottom-7 left-1/2 h-[245px] w-[330px] -translate-x-1/2 rounded-t-full border-[9px] border-[#d9bd8a]/45 bg-white/55 shadow-[inset_0_0_60px_rgba(201,161,92,.16)] sm:h-[320px] sm:w-[440px] sm:border-[12px] lg:bottom-8 lg:right-10 lg:left-auto lg:h-[390px] lg:w-[520px] lg:translate-x-0 lg:border-[14px]" />
      <div className="absolute bottom-4 left-1/2 h-20 w-[330px] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_22px_70px_rgba(46,74,61,.18)] sm:h-28 sm:w-[440px] lg:bottom-2 lg:right-20 lg:left-auto lg:h-36 lg:w-[520px] lg:translate-x-0" />
      <div className="absolute left-0 bottom-20 text-forest/40 sm:bottom-24 lg:-left-2">
        <Leaf className="h-16 w-16 rotate-12 fill-current sm:h-24 sm:w-24 lg:h-28 lg:w-28" />
      </div>
      <div className="absolute left-10 bottom-32 text-forest/50 sm:left-20 sm:bottom-40">
        <Leaf className="h-12 w-12 -rotate-12 fill-current sm:h-20 sm:w-20" />
      </div>
      <div className="absolute right-0 top-24 text-forest/18">
        <Leaf className="h-20 w-20 -rotate-45 fill-current sm:h-32 sm:w-32" />
      </div>

      <div className="absolute bottom-24 left-[11%] h-44 w-28 rotate-[-1deg] rounded-[10px] bg-gradient-to-br from-[#082719] via-forest to-[#0c3727] p-2.5 text-white shadow-[0_28px_60px_rgba(9,42,27,.32)] sm:bottom-28 sm:left-[18%] sm:h-60 sm:w-40 sm:p-4 lg:bottom-32 lg:left-32 lg:h-72 lg:w-48">
        <div className="absolute inset-y-0 right-0 w-6 bg-black/20 sm:w-10" />
        <div className="absolute right-2 top-10 h-16 w-5 rounded-sm bg-white/85 text-[6px] text-charcoal sm:right-3 sm:top-12 sm:h-24 sm:w-8" />
        <div className="relative grid h-full rounded-md border border-gold/55 p-2 text-center sm:p-4">
          <span className="mx-auto grid h-6 w-6 rotate-45 place-items-center border border-gold sm:h-9 sm:w-9 sm:border-2">
            <span className="-rotate-45 text-[9px] text-gold sm:text-xs">श्री</span>
          </span>
          <strong className="self-center font-serif text-lg leading-none text-gold sm:text-3xl">Prabhukul</strong>
          <span className="rounded bg-gold px-1.5 py-0.5 text-[6px] font-bold text-forest sm:px-2 sm:py-1 sm:text-[9px]">Strong and Reliable</span>
          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] sm:mt-3 sm:text-lg sm:tracking-[0.22em]">Diamond Tea</span>
          <span className="text-[7px] uppercase tracking-[0.12em] text-gold sm:text-[10px] sm:tracking-[0.18em]">Purity with Taste</span>
          <span className="self-end text-right text-[8px] font-semibold sm:text-xs">250 g</span>
        </div>
      </div>

      <div className="absolute bottom-28 left-[38%] h-60 w-40 rotate-2 rounded-[12px] bg-gradient-to-br from-[#082719] via-[#0f4a33] to-[#051b12] p-3 text-white shadow-[0_35px_90px_rgba(9,42,27,.36)] sm:bottom-36 sm:left-[43%] sm:h-80 sm:w-52 sm:p-5 lg:bottom-40 lg:left-72 lg:h-96 lg:w-64">
        <div className="absolute inset-y-0 right-0 w-8 bg-black/20 sm:w-14" />
        <div className="absolute right-3 top-20 h-20 w-6 rounded-sm bg-white/85 text-[7px] text-charcoal sm:right-4 sm:top-28 sm:h-36 sm:w-10" />
        <div className="relative grid h-full rounded-lg border border-gold/60 p-3 text-center sm:p-5">
          <span className="mx-auto grid h-7 w-7 rotate-45 place-items-center border border-gold sm:h-11 sm:w-11 sm:border-2">
            <span className="-rotate-45 text-[10px] text-gold sm:text-sm">श्री</span>
          </span>
          <strong className="self-center font-serif text-2xl leading-none text-gold drop-shadow sm:text-5xl">Prabhukul</strong>
          <span className="mx-auto rounded bg-gold px-2 py-0.5 text-[7px] font-bold text-forest sm:px-3 sm:py-1 sm:text-[10px]">Strong and Reliable</span>
          <span className="mt-1 text-sm font-bold uppercase tracking-[0.18em] sm:mt-3 sm:text-2xl sm:tracking-[0.24em]">Diamond Tea</span>
          <span className="text-[8px] uppercase tracking-[0.14em] text-gold sm:text-[11px] sm:tracking-[0.24em]">Purity with Taste</span>
          <span className="self-end text-right text-[10px] font-semibold sm:text-sm">250 g</span>
        </div>
      </div>

      <div className="absolute bottom-16 right-[5%] h-24 w-24 rounded-full bg-white shadow-[0_22px_60px_rgba(46,74,61,.20)] ring-8 ring-white/70 sm:bottom-20 sm:right-[8%] sm:h-32 sm:w-32 sm:ring-[12px] lg:bottom-24 lg:right-16 lg:h-36 lg:w-36">
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#b96e28] via-[#e6a94c] to-[#8a4218] sm:inset-8" />
        <div className="absolute -right-5 top-10 h-8 w-11 rounded-full border-8 border-white sm:-right-8 sm:top-14 sm:h-12 sm:w-16 sm:border-[12px]" />
      </div>
      <div className="absolute bottom-3 right-[2%] h-20 w-40 rounded-[50%] bg-white shadow-[0_18px_60px_rgba(46,74,61,.16)] sm:bottom-5 sm:h-28 sm:w-56 lg:bottom-8 lg:right-0 lg:h-32 lg:w-64">
        <div className="absolute left-10 top-7 h-5 w-20 rounded-[50%] bg-gold/20 sm:left-16 sm:top-10 sm:h-8 sm:w-28" />
        <div className="absolute right-5 top-6 h-1.5 w-24 rotate-[-18deg] rounded-full bg-gold sm:right-8 sm:top-8 sm:h-2 sm:w-36" />
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
