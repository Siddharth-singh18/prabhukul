"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Menu,
  Moon,
  Package,
  Phone,
  Search,
  ShoppingBag,
  Sun,
  UserRound,
  X,
  Youtube
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { SearchOverlay } from "./search-overlay";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Shop", "/products"],
  ["Why Prabhukul", "/#why-prabhukul"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.totalItems);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky left-0 right-0 top-0 z-40 border-b border-[#e9e2d7] bg-white/95 text-[#1c241d] shadow-[0_8px_28px_rgba(46,74,61,.06)] backdrop-blur-xl dark:border-white/10 dark:bg-charcoal/95 dark:text-white">
        <div
          className={`hidden overflow-hidden border-b border-[#ece6dc] transition-all duration-300 ease-out dark:border-white/10 lg:block ${
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-forest dark:text-gold" />
              <span>Pure & Authentic Indian Tea - Trusted by Generations</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="hover:text-forest dark:hover:text-gold">Distributor Enquiry</Link>
              <span className="h-5 w-px bg-[#cfc7ba]" />
              <Link href="/products" className="hover:text-forest dark:hover:text-gold">Bulk Orders</Link>
              <div className="flex items-center gap-4 text-charcoal/80 dark:text-white/80">
                <Facebook className="h-5 w-5" />
                <Instagram className="h-5 w-5" />
                <Youtube className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <nav className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 lg:px-6 ${scrolled ? "py-2.5" : "py-5"}`}>
          <Link href="/" className="flex items-center gap-3">
            <span
              className={`relative grid rotate-45 place-items-center border-charcoal bg-white shadow-sm transition-all duration-300 dark:border-gold dark:bg-charcoal ${
                scrolled ? "h-10 w-10 border-[3px]" : "h-14 w-14 border-4"
              }`}
            >
              <span className={`-rotate-45 font-black text-maroon transition-all duration-300 ${scrolled ? "text-sm" : "text-xl"}`}>श्री</span>
            </span>
            <span>
              <span className={`block font-serif font-bold leading-none tracking-wide text-forest transition-all duration-300 dark:text-gold ${scrolled ? "text-2xl" : "text-3xl"}`}>PRABHUKUL</span>
              <span className={`mt-1 text-sm font-medium text-forest transition-all duration-300 dark:text-white/70 ${scrolled ? "hidden" : "block"}`}>Strong & Reliable</span>
            </span>
          </Link>

          <div className={`hidden items-center font-medium transition-all duration-300 lg:flex ${scrolled ? "gap-7 text-sm" : "gap-10 text-[15px]"}`}>
            {links.map(([label, href]) => {
              const active = href === "/" ? pathname === "/" : !href.includes("#") && pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`relative transition hover:text-forest dark:hover:text-gold ${scrolled ? "py-3" : "py-4"} ${active ? "text-forest dark:text-gold" : ""}`}
                >
                  {label}
                  {label === "Shop" ? <ChevronDown className="ml-1 inline h-4 w-4" /> : null}
                  {active ? <span className="absolute bottom-0 left-0 h-0.5 w-full bg-forest dark:bg-gold" /> : null}
                </Link>
              );
            })}
          </div>

          <div className={`flex items-center transition-all duration-300 ${scrolled ? "gap-1.5" : "gap-3"}`}>
            <Link href="/dashboard/user" aria-label="Account" className="hidden rounded-full p-2 hover:bg-forest/10 lg:block">
              <UserRound className="h-6 w-6" />
            </Link>
            <button aria-label="Wishlist" className="relative hidden rounded-full p-2 hover:bg-forest/10 lg:block">
              <Heart className="h-6 w-6" />
              <span className="absolute -right-0.5 top-1 grid h-5 w-5 place-items-center rounded-full bg-forest text-[10px] text-white">0</span>
            </button>
            <button aria-label="Cart" className="relative rounded-full p-2 hover:bg-forest/10">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -right-0.5 top-1 grid h-5 w-5 place-items-center rounded-full bg-forest text-[10px] text-white">
                {totalItems}
              </span>
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 hover:bg-forest/10"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href="tel:+917017266882" className={`hidden items-center gap-3 rounded-full border border-[#e5ded3] shadow-sm transition-all duration-300 xl:flex ${scrolled ? "px-3 py-2" : "px-4 py-3"}`}>
              <span className={`grid place-items-center rounded-full bg-forest text-white transition-all duration-300 ${scrolled ? "h-8 w-8" : "h-10 w-10"}`}>
                <Phone className="h-5 w-5" />
              </span>
              <span className={`text-sm leading-tight transition-all duration-300 ${scrolled ? "hidden 2xl:block" : "block"}`}>
                <span className="block text-charcoal/70 dark:text-white/60">Call Us Now</span>
                <strong className="block text-lg text-forest dark:text-gold">7017268682</strong>
              </span>
            </a>
            <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className="rounded-full p-2 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        <div className={`hidden overflow-hidden px-5 transition-all duration-300 ease-out lg:block ${scrolled ? "max-h-0 pb-0 opacity-0" : "max-h-24 pb-5 opacity-100"}`}>
          <div className="mx-auto grid max-w-7xl grid-cols-[240px_1fr_220px] gap-3">
            <button className="flex items-center justify-between rounded-md bg-forest px-6 py-4 font-semibold text-white shadow-sm">
              <span className="flex items-center gap-3"><Menu className="h-5 w-5" /> All Categories</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-[260px_1fr_110px] rounded-md border border-[#e6dfd3] bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <button className="flex items-center justify-between border-r border-[#e6dfd3] px-5 text-left dark:border-white/10">
                Select a category <ChevronDown className="h-4 w-4" />
              </button>
              <button onClick={() => setSearchOpen(true)} className="flex items-center gap-3 px-5 text-left text-charcoal/50 dark:text-white/50">
                <Search className="h-4 w-4" /> Search for products...
              </button>
              <button onClick={() => setSearchOpen(true)} className="m-1 rounded-md bg-forest font-semibold text-white">
                Search
              </button>
            </div>
            <div className="flex items-center justify-around rounded-md bg-white px-4 shadow-sm dark:bg-white/5">
              <Package className="h-6 w-6" />
              <span className="h-8 w-px bg-[#e6dfd3] dark:bg-white/10" />
              <Heart className="h-6 w-6" />
              <span className="h-8 w-px bg-[#e6dfd3] dark:bg-white/10" />
              <ShoppingBag className="h-6 w-6" />
            </div>
          </div>
        </div>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-y-0 right-0 z-50 w-72 bg-ivory p-6 shadow-2xl dark:bg-charcoal"
          >
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="ml-auto block rounded-full p-2">
              <X />
            </button>
            <div className="mt-8 grid gap-5 text-lg">
              {links.map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
