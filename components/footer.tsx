import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-14 text-white">
      <div className="gold-line mx-auto max-w-7xl" />
      <div className="mx-auto mt-10 grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_1.1fr]">
        <div>
          <h2 className="font-serif text-3xl">Prabhukul</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Authentic Indian Ayurveda rituals, made modern through refined formulation, honest sourcing and sensorial design.
          </p>
        </div>
        <div>
          <p className="font-medium text-gold">Quick Links</p>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            <a href="#story">Our Story</a>
            <a href="#products">Products</a>
            <a href="#journal">Journal</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div>
          <p className="font-medium text-gold">Products</p>
          <div className="mt-4 grid gap-2 text-sm text-white/65">
            <span>Skin Rituals</span>
            <span>Hair Care</span>
            <span>Wellness Drops</span>
            <span>Herbal Teas</span>
          </div>
        </div>
        <div>
          <p className="font-medium text-gold">Newsletter</p>
          <div className="mt-4 flex rounded-full border border-gold/30 p-1">
            <input aria-label="Email" placeholder="you@example.com" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button aria-label="Subscribe" className="rounded-full bg-gold p-3 text-charcoal">
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-5 flex gap-3 text-white/70">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Linkedin className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
