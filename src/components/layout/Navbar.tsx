'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Navigation, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { Monogram } from '@/components/brand/Monogram';
import { BrandDiamond } from '@/components/brand/BrandDiamond';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/story', label: 'Our Story' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/visit', label: 'Visit Atholi' },
  { href: '/order', label: 'Order Online' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ink/90 backdrop-blur-md border-b border-sage/10 py-3 shadow-2xl'
            : 'bg-transparent py-5 lg:py-7'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Atholi Signature */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Arabian Majlis Atholi Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 text-gold-mid group-hover:text-gold-light transition-colors">
              <Monogram className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-wider uppercase font-semibold text-cream leading-tight">
                Arabian Majlis
              </span>
              <span className="text-[10px] tracking-[0.25em] text-sage/70 uppercase font-sans flex items-center gap-1.5">
                Atholi <BrandDiamond size={6} className="text-gold-mid/80" /> Calicut
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs tracking-[0.2em] uppercase font-sans transition-all py-1.5 ${
                    isActive
                      ? 'text-gold-light font-medium'
                      : 'text-cream/80 hover:text-gold-mid'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold-light via-gold-mid to-gold-dark"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Order Now CTA */}
            <Link
              href="/order"
              className="px-6 py-2.5 bg-green hover:bg-green-bright text-cream text-xs font-sans tracking-[0.2em] uppercase border border-gold-mid/40 hover:border-gold-light transition-all duration-300 flex items-center gap-2 group shadow-lg"
            >
              <span>Order Now</span>
              <BrandDiamond size={7} className="text-gold-light group-hover:rotate-90 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cream hover:text-gold-mid focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay (Brand Green) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-green/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-28 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full text-center my-auto">
              <div className="w-12 h-12 text-gold-light mx-auto mb-2">
                <Monogram className="w-full h-full" />
              </div>
              <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-mid mb-4">
                <span>Born to eat, not to diet</span>
              </div>

              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block font-serif text-2xl sm:text-3xl py-2 transition-colors ${
                        isActive ? 'text-gold-light font-semibold' : 'text-cream/90 hover:text-gold-light'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center text-xs tracking-widest text-sage/60 uppercase">
              Atholi, Kozhikode · Since 2018
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mandatory Mobile Bottom Action Bar (Call · Order · Directions) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-ink/95 border-t border-sage/15 backdrop-blur-md px-4 py-2.5 flex items-center justify-around lg:hidden env(safe-area-inset-bottom)">
        <a
          href="tel:+916282410280"
          className="flex flex-col items-center gap-1 text-[11px] uppercase tracking-wider text-cream/90 hover:text-gold-mid min-h-[48px] justify-center px-3"
          aria-label="Call Atholi branch"
        >
          <Phone size={18} className="text-gold-mid" />
          <span>Call</span>
        </a>

        <div className="h-6 w-[1px] bg-sage/20" />

        <Link
          href="/order"
          className="flex items-center gap-2 px-5 py-2.5 bg-green text-cream text-[11px] font-sans font-semibold uppercase tracking-widest border border-gold-mid/40 shadow-md min-h-[48px]"
        >
          <ShoppingBag size={15} className="text-gold-light" />
          <span>Order Now</span>
        </Link>

        <div className="h-6 w-[1px] bg-sage/20" />

        <a
          href="https://maps.google.com/?q=Arabian+Majlis+Atholi+Kozhikode"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[11px] uppercase tracking-wider text-cream/90 hover:text-gold-mid min-h-[48px] justify-center px-3"
          aria-label="Get directions to Atholi branch"
        >
          <Navigation size={18} className="text-gold-mid" />
          <span>Directions</span>
        </a>
      </div>
    </>
  );
}
