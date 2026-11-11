'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { signatureDishes } from '@/data/menu';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function SignatureRail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-ink overflow-hidden border-b border-sage/15"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>Atholi Signatures</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-light">
            Crafted over charcoal. <br />
            <span className="italic text-gold-gradient font-normal">Four iconic feasts.</span>
          </h2>
        </div>

        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-gold-light hover:text-cream transition-colors group shrink-0"
        >
          <span>View Entire 10-Category Menu</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Horizontal Draggable / Scroll-Snap Rail */}
      <div
        ref={scrollTrackRef}
        data-cursor-drag
        className="w-full overflow-x-auto scrollbar-none px-4 sm:px-6 lg:px-8 pb-6 cursor-grab active:cursor-grabbing flex gap-6 lg:gap-8 snap-x snap-mandatory"
      >
        {signatureDishes.map((dish, idx) => (
          <SignatureCard key={dish.name} dish={dish} index={idx} />
        ))}
      </div>

      {/* Helper text on mobile */}
      <div className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest text-sage/40 mt-4 lg:hidden">
        <span>← Swipe to explore signatures →</span>
      </div>
    </section>
  );
}

function SignatureCard({ dish, index }: { dish: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="shrink-0 w-[82vw] sm:w-[420px] lg:w-[460px] bg-green/40 border border-sage/15 hover:border-gold-mid/60 transition-all duration-500 flex flex-col justify-between group snap-start relative overflow-hidden"
    >
      {/* Dish Image with Hover Zoom */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-ink/80">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 640px) 85vw, 460px"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

        {/* Badge */}
        {dish.badge && (
          <div className="absolute top-4 left-4 bg-green text-cream text-[10px] font-sans font-semibold uppercase tracking-widest px-3 py-1 border border-gold-mid/50 flex items-center gap-1.5 shadow-md">
            <BrandDiamond size={6} className="text-gold-light" />
            <span>{dish.badge}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-cream font-medium group-hover:text-gold-light transition-colors">
            {dish.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-sage/80 font-sans font-light leading-relaxed line-clamp-3">
            {dish.description}
          </p>
        </div>

        {/* Pricing System */}
        <div className="space-y-3 pt-4 border-t border-sage/15">
          {dish.prices && (
            <div className="flex items-center justify-between text-xs font-sans">
              <span className="text-sage/60 uppercase tracking-widest">With Fragrant Rice</span>
              <div className="flex items-center gap-3 font-mono font-medium text-cream">
                {dish.prices.length === 3 ? (
                  <>
                    <span><strong className="text-[10px] text-sage/60 uppercase">Qtr:</strong> ₹{dish.prices[2]}</span>
                    <span><strong className="text-[10px] text-sage/60 uppercase">Half:</strong> ₹{dish.prices[1]}</span>
                    <span className="text-gold-light"><strong className="text-[10px] text-sage/60 uppercase">Full:</strong> ₹{dish.prices[0]}</span>
                  </>
                ) : (
                  <>
                    <span><strong className="text-[10px] text-sage/60 uppercase">Half:</strong> ₹{dish.prices[1]}</span>
                    <span className="text-gold-light"><strong className="text-[10px] text-sage/60 uppercase">Full:</strong> ₹{dish.prices[0]}</span>
                  </>
                )}
              </div>
            </div>
          )}

          {dish.charcoal && (
            <div className="flex items-center justify-between text-[11px] font-sans text-sage/70">
              <span className="uppercase tracking-widest">Charcoal Only</span>
              <div className="flex items-center gap-2.5 font-mono">
                {dish.charcoal.length === 3 ? (
                  <>
                    <span>₹{dish.charcoal[2]}</span>
                    <span>/</span>
                    <span>₹{dish.charcoal[1]}</span>
                    <span>/</span>
                    <span>₹{dish.charcoal[0]}</span>
                  </>
                ) : (
                  <>
                    <span>₹{dish.charcoal[1]}</span>
                    <span>/</span>
                    <span>₹{dish.charcoal[0]}</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Quick Order CTA */}
        <div className="pt-2">
          <a
            href={`https://wa.me/916282410280?text=Hi%20Arabian%20Majlis%20Atholi,%20I%20would%20like%20to%20order%20${encodeURIComponent(dish.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-green hover:bg-green-bright text-cream text-[11px] font-sans uppercase tracking-[0.2em] font-semibold border border-gold-mid/40 hover:border-gold-light transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
          >
            <ShoppingBag size={14} className="text-gold-light" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
