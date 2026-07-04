"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Search, ShoppingBag, Sun, UserRound, X } from "lucide-react";
import Link from "next/link";
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
  const totalItems = useCartStore((state) => state.totalItems);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4">
        <nav className={`glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 text-forest transition-all duration-300 dark:text-white ${scrolled ? "shadow-glass" : ""}`}>
          <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-semibold tracking-wide">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-sm text-gold dark:bg-gold dark:text-charcoal">P</span>
            Prabhukul
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-maroon dark:hover:text-gold">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button aria-label="Open search" onClick={() => setSearchOpen(true)} className="rounded-full p-2 hover:bg-gold/15">
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 hover:bg-gold/15"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link href="/dashboard/user" aria-label="Account" className="rounded-full p-2 hover:bg-gold/15">
              <UserRound className="h-5 w-5" />
            </Link>
            <button aria-label="Cart" className="relative rounded-full p-2 hover:bg-gold/15">
              <ShoppingBag className="h-5 w-5" />
              {totalItems ? (
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-maroon text-[10px] text-white">
                  {totalItems}
                </span>
              ) : null}
            </button>
            <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className="rounded-full p-2 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
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
