"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Leaf, MapPin, Minus, Plus, ShoppingBag, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { benefits, blogs, categories, faqs, products, testimonials, whyUs } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { AvatarBadge, BrandProductVisual, HeroProductScene, StoryVisual } from "./brand-visuals";
import { Reveal, fadeUp, staggerContainer } from "./motion";

export function HomeExperience() {
  return (
    <main className="overflow-hidden bg-ivory text-charcoal dark:bg-charcoal dark:text-ivory">
      <Hero />
      <Story />
      <Products />
      <Benefits />
      <Testimonials />
      <WhyChooseUs />
      <Journal />
      <Faq />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-t-[1.5rem] bg-[radial-gradient(circle_at_70%_20%,rgba(201,161,92,.16),transparent_28%),linear-gradient(105deg,#fffdf8_0%,#ffffff_45%,#f7fbf5_100%)] px-6 pb-14 pt-16 dark:bg-[linear-gradient(105deg,#101510_0%,#151515_45%,#102319_100%)]">
      <div className="absolute inset-0 bg-mandala bg-[length:24px_24px] opacity-[0.035]" />
      <div className="absolute -left-14 top-20 text-forest/10 dark:text-gold/10">
        <Leaf className="h-64 w-64 rotate-45 fill-current" />
      </div>
      <div className="absolute -right-12 top-28 text-forest/10 dark:text-gold/10">
        <Leaf className="h-72 w-72 -rotate-45 fill-current" />
      </div>
      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="z-10 pt-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.36em] text-[#c4861f]"
          >
            <span className="h-px w-8 bg-gold" /> Prabhukul Ayurveda
          </motion.p>
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-3xl font-serif text-6xl font-bold leading-[0.92] md:text-8xl"
          >
            <motion.span variants={fadeUp} className="block text-forest dark:text-white">Purity in</motion.span>
            <motion.span variants={fadeUp} className="block bg-gradient-to-r from-[#b17a14] via-gold to-[#8f650f] bg-clip-text text-transparent">
              Every Ritual
            </motion.span>
          </motion.h1>
          <div className="my-7 flex items-center gap-4 text-gold">
            <span className="h-px w-32 bg-gold" />
            <Leaf className="h-5 w-5" />
            <span className="h-px w-32 bg-gold" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="max-w-xl text-lg leading-8 text-charcoal/75 dark:text-white/70"
          >
            Premium teas, oils and wellness rituals crafted for Indian homes with clean botanicals, honest sourcing and timeless taste.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/products" className="rounded-full bg-forest px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(12,82,38,.18)] hover:bg-maroon">
              Explore Our Teas
              <Leaf className="ml-2 inline h-4 w-4" />
            </Link>
            <Link href="/about" className="rounded-full border border-forest/45 bg-white/70 px-8 py-4 font-semibold text-forest backdrop-blur hover:bg-forest/5 dark:bg-white/10 dark:text-white">
              Know Our Story
            </Link>
          </motion.div>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["100% Natural", "No Additives"],
              ["Rich Aroma", "Great Taste"],
              ["Trusted by", "Thousands"]
            ].map(([title, text]) => (
              <div key={title} className="flex items-center gap-3 rounded-xl border border-[#eee6db] bg-white/85 p-4 shadow-[0_14px_36px_rgba(46,74,61,.08)] dark:border-white/10 dark:bg-white/10">
                <CheckCircle2 className="h-8 w-8 text-forest dark:text-gold" />
                <div>
                  <p className="text-sm font-bold text-forest dark:text-white">{title}</p>
                  <p className="text-xs text-charcoal/65 dark:text-white/60">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
          <HeroProductScene />
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-forest/60 dark:text-white/60 md:block"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative px-6 py-24">
      <div className="absolute inset-0 bg-mandala bg-[length:18px_18px] opacity-[0.04]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <StoryVisual />
        </Reveal>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Heritage, bottled gently</p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">
            Rituals from the courtyard, refined for the city.
          </h2>
          <div className="gold-line my-8" />
          <p className="text-lg leading-8 text-charcoal/70 dark:text-white/70">
            Prabhukul combines vaidya-led ingredient wisdom with modern sensorial formulation. Every oil, mask and tonic is designed
            to feel graceful on the shelf and honest on the body.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Small batch", "No shortcuts", "India-first"].map((item) => (
              <div key={item} className="glass rounded-2xl p-4 text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Products() {
  const [active, setActive] = useState("All");
  const addItem = useCartStore((state) => state.addItem);
  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((product) => product.category === active)),
    [active]
  );

  return (
    <section id="products" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">The apothecary</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">Daily rituals, elevated.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === category ? "border-maroon bg-maroon text-white" : "border-gold/40 hover:bg-gold/15"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.article
                layout
                key={product.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="glass group overflow-hidden rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <BrandProductVisual
                    title={product.name}
                    subtitle={product.category}
                    tone={product.tone as "green" | "maroon" | "gold"}
                    className="rounded-none transition duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-maroon">
                    {product.badge}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-maroon dark:text-gold">{product.category}</p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold">{product.name}</h3>
                    </div>
                    <p className="font-semibold">{formatINR(product.price)}</p>
                  </div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-charcoal/65 dark:text-white/65">{product.description}</p>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => addItem(product)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 font-semibold text-white hover:bg-maroon"
                  >
                    <ShoppingBag className="h-4 w-4" /> Add to Cart
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-[#141414]">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Reveal key={benefit.label} delay={index * 0.05} className="glass rounded-2xl p-6">
              <Icon className="h-8 w-8 text-maroon dark:text-gold" />
              <p className="mt-6 font-serif text-5xl font-semibold">{benefit.value}</p>
              <p className="mt-2 text-sm leading-6 text-charcoal/65 dark:text-white/65">{benefit.label}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Customer notes</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold">Loved in real routines.</h2>
      </Reveal>
      <div className="mt-10 overflow-hidden">
        <div className="marquee flex w-max gap-5">
          {doubled.map((item, index) => (
            <article key={`${item.name}-${index}`} className="glass w-[320px] rounded-2xl p-5 md:w-[420px]">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 min-h-20 leading-7 text-charcoal/75 dark:text-white/75">&ldquo;{item.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <AvatarBadge name={item.name} />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-charcoal/55 dark:text-white/55">{item.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-prabhukul" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Why Prabhukul</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold">Clean, certified, culturally rooted.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {whyUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05} className="glass rounded-2xl p-6 text-center">
                <Icon className="mx-auto h-9 w-9 text-maroon dark:text-gold" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/65 dark:text-white/65">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section id="journal" className="bg-white px-6 py-24 dark:bg-[#141414]">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Journal</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold">Ayurveda, without the noise.</h2>
          </div>
          <Link href="/blog/dinacharya-modern-mornings" className="font-semibold text-maroon dark:text-gold">
            Read the journal
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <Reveal key={blog.slug} delay={index * 0.05} className="glass overflow-hidden rounded-2xl">
              <BrandProductVisual title={blog.category} subtitle="Prabhukul Journal" tone={blog.tone as "green" | "maroon" | "gold"} className="rounded-none" />
              <div className="p-5">
                <p className="text-sm text-maroon dark:text-gold">{blog.category} · {blog.readTime}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{blog.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/65 dark:text-white/65">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} className="mt-5 inline-block font-semibold">
                  Read More
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">FAQ</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold">Everything before your first ritual.</h2>
        </Reveal>
        <div className="grid gap-3">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="glass rounded-2xl p-5">
              <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 text-left">
                <span className="font-semibold">{question}</span>
                {open === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
              <AnimatePresence initial={false}>
                {open === index ? (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-4 text-sm leading-6 text-charcoal/65 dark:text-white/65"
                  >
                    {answer}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        <Reveal className="glass rounded-2xl p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">Contact</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold">Begin a better ritual.</h2>
          <form className="mt-8 grid gap-4">
            {["Name", "Email"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-medium">
                {label}
                <input className="rounded-xl border border-gold/30 bg-white/55 px-4 py-3 outline-none focus:border-maroon dark:bg-white/5" />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea rows={5} className="rounded-xl border border-gold/30 bg-white/55 px-4 py-3 outline-none focus:border-maroon dark:bg-white/5" />
            </label>
            <button className="rounded-full bg-maroon px-6 py-3 font-semibold text-white hover:bg-forest">Send Message</button>
          </form>
        </Reveal>
        <Reveal className="relative overflow-hidden rounded-2xl bg-forest p-8 text-white">
          <div className="absolute inset-0 bg-mandala bg-[length:20px_20px] opacity-10" />
          <div className="relative">
            <Leaf className="h-10 w-10 text-gold" />
            <h3 className="mt-6 font-serif text-4xl font-semibold">Visit the Prabhukul Experience Studio</h3>
            <p className="mt-4 leading-7 text-white/75">
              18, Amaltas Lane, Indiranagar, Bengaluru. Open for consultations, product discovery and private ritual workshops.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold" /> Bengaluru · Mumbai · Delhi NCR</div>
              <div className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-gold" /> Vaidya consultations by appointment</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
