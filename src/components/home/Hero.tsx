'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { Monogram } from '@/components/brand/Monogram';

// Lazy load Hero3D on client-side only
const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-pulse opacity-80">
        <img
          src="/images/mandi-hero-platter.png"
          alt="Arabian Majlis Authentic Mandi Platter"
          className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        />
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-ink pt-24 pb-16 lg:py-0">
      {/* Background Ambience & Radial Glow */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-green/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-gold-dark/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Content Container - Wider max width and grander layout */}
      <div className="relative z-10 max-w-[1440px] xl:max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[calc(100dvh-5.5rem)]">
        {/* Left Column: Headline & Editorial CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 pt-4 lg:pt-0"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-gold-mid/30 bg-green/30 backdrop-blur-sm">
            <BrandDiamond size={7} className="text-gold-light" />
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-cream/90 font-medium">
              Atholi, Kozhikode · Estd 2018
            </span>
            <BrandDiamond size={7} className="text-gold-light" />
          </div>

          {/* Main H1 Title */}
          <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.75rem)] font-light leading-[1.08] tracking-tight text-cream">
            Taste beyond <br />
            <span className="italic font-normal text-gold-gradient">
              tradition.
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-lg text-base sm:text-lg text-sage/85 font-sans font-light leading-relaxed">
            The authentic culinary heritage of the Arab world, slow-cooked over wood and charcoal, infused with the vibrant soul of Malabar hospitality.
          </p>

          {/* Action Button Group */}
          <div className="w-full sm:w-auto pt-2 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-3.5 bg-green hover:bg-green-bright text-cream text-xs font-sans tracking-[0.25em] uppercase border border-gold-mid/50 hover:border-gold-light transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
            >
              <span>Explore The Menu</span>
              <BrandDiamond size={7} className="text-gold-light group-hover:rotate-90 transition-transform duration-300" />
            </Link>

            <Link
              href="/order"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-cream/5 text-cream text-xs font-sans tracking-[0.25em] uppercase border border-sage/30 hover:border-gold-mid transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Order on WhatsApp</span>
              <span className="text-gold-mid group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <a
            href="/menu/atholi-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-sans tracking-wider uppercase text-gold-mid/80 hover:text-gold-light transition-colors flex items-center gap-1.5 pt-1 self-center lg:self-start"
          >
            <span>Download Official Atholi Menu (PDF · 19 MB)</span>
            <span>↓</span>
          </a>

          {/* Key Metrics / Highlights */}
          <div className="pt-6 border-t border-sage/10 w-full grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-gold-light font-medium">100%</div>
              <div className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-sage/60">Dum Charcoal</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-gold-light font-medium">20+</div>
              <div className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-sage/60">Locations</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-gold-light font-medium">₹110+</div>
              <div className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-sage/60">Fresh Plates</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Mandi Platter (Well-proportioned, comfortable zoom) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 xl:col-span-6 h-125 lg:h-[590px] xl:h-[580px] max-h-[75vh] w-full flex items-center justify-center relative"
        >
          {/* Subtle Rotating Ring Background */}
          <div className="absolute inset-4 sm:inset-8 border border-gold-mid/15 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
          <div className="absolute inset-10 sm:inset-16 border border-sage/10 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

          {/* Desktop 3D Canvas */}
          <div className="hidden md:block w-full h-full relative cursor-grab active:cursor-grabbing">
            <Hero3D />
          </div>

          {/* Mobile Fallback: Floating Authentic Mandi Platter */}
          <div className="md:hidden flex flex-col items-center justify-center text-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] animate-[bounce_4s_ease-in-out_infinite]">
              <img
                src="/images/mandi-hero-platter.png"
                alt="Arabian Majlis Authentic Mandi Platter"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-mid mt-4 flex items-center gap-1.5">
              <BrandDiamond size={6} />
              <span>Authentic Dum Mandi Platter</span>
              <BrandDiamond size={6} />
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.3em] text-sage/50">Scroll To Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <BrandDiamond size={6} className="text-gold-mid" />
        </motion.div>
      </div>
    </section>
  );
}
