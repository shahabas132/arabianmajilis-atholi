'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { ArrowRight } from 'lucide-react';

export default function StoryTeaser() {
  return (
    <section className="py-24 sm:py-32 bg-ink/90 border-b border-sage/15 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Showcase (Left on Desktop, Top on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[560px] w-full border border-gold-mid/30 bg-green/20 overflow-hidden shadow-2xl group"
          >
            <Image
              src="/images/story/story-teaser.jpg"
              alt="Arabian Majlis Dining Atmosphere"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />

            {/* Corner Emblem Badge */}
            <div className="absolute bottom-6 left-6 bg-ink/90 backdrop-blur-md px-4 py-3 border border-gold-mid/40 flex items-center gap-3">
              <BrandDiamond size={8} className="text-gold-light" />
              <div>
                <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold-mid">
                  Since 2018
                </div>
                <div className="font-serif text-sm text-cream font-medium">
                  Malabar Soul · Arabian Heritage
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content (Right on Desktop, Below on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid">
              <BrandDiamond size={7} />
              <span>The Journey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-light leading-tight">
              Taste beyond <br />
              <span className="italic font-normal text-gold-gradient">
                tradition.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-sage/85 font-sans font-light leading-relaxed">
              <p>
                At Arabian Majlis, we’ve brought together the rich culinary heritage of the Arab world—uniting iconic dishes from across Yemen, Lebanon, and Persia under one roof. Our menu reflects this journey, infused with a bold identity and a twist of nostalgia.
              </p>
              <p>
                From the irresistible Honey Chicken—where Middle Eastern charm meets a burst of Indian masala—to the fiery Peri Peri infused with African chillies, every dish tells a story. Even our take on traditional Mandi rice carries the essence of Kerala, offering a comforting taste of home for the Malayali soul.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/story"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-green hover:bg-green-bright text-cream text-xs font-sans tracking-[0.2em] uppercase border border-gold-mid/40 hover:border-gold-light transition-all duration-300 group shadow-lg"
              >
                <span>Read Full Story & Pillars</span>
                <ArrowRight size={16} className="text-gold-light group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
