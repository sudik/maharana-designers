"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const transparentHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        transparentHero
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          data-cursor-hover
          className={`flex items-center gap-2.5 font-serif text-xl tracking-tight transition-colors ${
            transparentHero ? "text-white" : "text-foreground"
          }`}
        >
          <Image
            src="/images/brand/logo-mark.png"
            alt="Maharana Designers"
            width={28}
            height={36}
            className="h-7 w-auto"
            priority
          />
          <span>Maharana Designers</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-cursor-hover
              className={`transition-colors hover:opacity-60 ${
                transparentHero ? "text-white" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            data-cursor-hover
            className="bg-cta hover:bg-cta-dark text-white px-5 py-2.5 rounded-full text-sm transition-colors"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          data-cursor-hover
          className="md:hidden relative z-[60] flex flex-col gap-1.5 w-7"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block h-px w-full ${
              open || !transparentHero ? "bg-foreground" : "bg-white"
            }`}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block h-px w-full ${
              open || !transparentHero ? "bg-foreground" : "bg-white"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 top-0 bg-background flex flex-col justify-center px-6 gap-6"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + links.length * 0.07 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block bg-cta text-white px-6 py-3 rounded-full text-sm mt-4"
              >
                Enquire Now
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
