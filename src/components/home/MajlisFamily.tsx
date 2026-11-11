'use client';

import { motion } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { menuData } from '@/data/menu';

export default function MajlisFamily() {
  const { branches } = menuData;

  return (
    <section className="py-24 sm:py-32 bg-ink border-b border-sage/15 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>The Majlis Family</span>
            <BrandDiamond size={7} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-light">
            From Feroke to the Emirates. <br />
            <span className="italic text-gold-gradient font-normal">Our Expanding Culinary Presence.</span>
          </h2>
          <p className="mt-4 text-sm text-sage/75 font-sans font-light">
            Founded in Feroke in 2018, now sharing authentic Mandi and Arabian hospitality across 20+ locations.
          </p>
        </div>

        {/* Branch Clusters */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Kerala Branches */}
          <div className="space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-gold-mid font-medium block">
              Kerala Locations
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-sans">
              {branches.kerala.map((branch) => {
                const isAtholi = branch.toLowerCase() === 'atholi';
                return (
                  <span
                    key={branch}
                    className={`px-3.5 py-1.5 transition-all ${
                      isAtholi
                        ? 'bg-green text-gold-light border-2 border-gold-mid font-bold shadow-[0_0_20px_rgba(212,169,74,0.35)] scale-105'
                        : 'bg-green/15 text-cream/80 border border-sage/15 hover:border-gold-mid/40 hover:text-cream'
                    }`}
                  >
                    {branch} {isAtholi && '★ (You Are Here)'}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Tamil Nadu & UAE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-gold-mid font-medium block">
                Tamil Nadu
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-sans">
                {branches.tamilNadu.map((branch) => (
                  <span
                    key={branch}
                    className="px-3.5 py-1.5 bg-green/15 text-cream/80 border border-sage/15 hover:border-gold-mid/40"
                  >
                    {branch}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-gold-mid font-medium block">
                United Arab Emirates
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-sans">
                {branches.uae.map((branch) => (
                  <span
                    key={branch}
                    className="px-3.5 py-1.5 bg-green/15 text-cream/80 border border-sage/15 hover:border-gold-mid/40"
                  >
                    {branch}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Opening Shortly (Required by brief) */}
          <div className="pt-8 border-t border-sage/15 space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-emerald-400 font-semibold">
              <BrandDiamond size={6} className="text-emerald-400" />
              <span>Opening Shortly</span>
              <BrandDiamond size={6} className="text-emerald-400" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-sans">
              {branches.openingShortly.map((branch) => (
                <span
                  key={branch}
                  className="px-4 py-1.5 bg-green/30 border border-emerald-500/40 text-cream/90 italic font-serif"
                >
                  {branch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
