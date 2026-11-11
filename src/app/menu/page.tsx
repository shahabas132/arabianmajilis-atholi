'use client';

import { motion } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { VisualMenuBook } from '@/components/menu/VisualMenuBook';
import { MessageSquare, Download, ExternalLink } from 'lucide-react';

export default function MenuPage() {
  return (
    /*
     * Full-viewport layout — nothing scrolls. Everything is sized to fit
     * exactly one screen height so the user sees the complete menu page
     * without any vertical scrolling.
     *
     * Stack (top → bottom, all heights fixed):
     *   Navbar clearance  : 64px  (pt-16)
     *   Page header        : 72px
     *   Booklet container  : flex-1 (all remaining space)
     *   WhatsApp bar       : 52px  (fixed, doesn't consume layout space)
     *
     * The booklet component internally does `flex-1` on the image area,
     * so the image grows to fill whatever height the container provides.
     */
    <div className="h-screen bg-ink text-cream flex flex-col overflow-hidden pt-16">

      {/* ── Compact page header (fixed height ~72px) ───────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="shrink-0 flex items-center justify-between gap-4 px-4 sm:px-8 py-2 border-b border-sage/10"
      >
        {/* Left: brand label */}
        <div className="flex items-center gap-2 min-w-0">
          <BrandDiamond size={7} className="text-gold-mid shrink-0" />
          <div className="min-w-0">
            <h1 className="font-serif text-base sm:text-lg text-cream font-light leading-tight truncate">
              Atholi Menu
            </h1>
            <p className="text-[11px] text-sage/55 font-sans hidden sm:block">
              20-page illustrated booklet · Swipe or use arrows to browse
            </p>
          </div>
        </div>

        {/* Right: PDF links */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="/menu/atholi-menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-[11px] font-sans uppercase tracking-wider bg-green/30 hover:bg-green text-cream/70 hover:text-gold-light border border-sage/20 hover:border-gold-mid/50 flex items-center gap-1.5 transition-all"
          >
            <ExternalLink size={12} />
            <span className="hidden sm:inline">Open PDF</span>
          </a>
          <a
            href="/menu/atholi-menu.pdf"
            download="Arabian-Majlis-Atholi-Menu.pdf"
            className="px-4 py-1.5 text-[11px] font-sans uppercase tracking-[0.18em] font-bold bg-gold-mid hover:bg-gold-light text-ink flex items-center gap-1.5 shadow transition-all"
          >
            <Download size={12} />
            <span>Download</span>
          </a>
        </div>
      </motion.header>

      {/* ── Booklet — takes all remaining height ───────────────────── */}
      {/*
        pb-14 leaves room for the fixed WhatsApp band at the bottom
        (52px ≈ 3.25rem), so the bottom of the booklet is never obscured.
        px-10 sm:px-16 gives the left/right arrow buttons room to live
        outside the booklet frame without being clipped.
      */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex-1 min-h-0 px-8 sm:px-14 py-2 pb-14"
      >
        <VisualMenuBook />
      </motion.main>

      {/* ── WhatsApp order band (fixed bottom) ────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-green/98 border-t border-gold-mid/40 py-2.5 px-4 shadow-[0_-8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <BrandDiamond size={7} className="text-gold-light shrink-0 hidden sm:inline" />
            <div className="min-w-0">
              <span className="font-serif text-sm text-cream font-medium block leading-tight">
                Craving Arabian Majlis at home?
              </span>
              <p className="text-[11px] text-sage/70 font-sans hidden sm:block">
                Hot takeaway & delivery across Atholi.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/916282410280?text=Hi%20Arabian%20Majlis%20Atholi,%20I%20would%20like%20to%20place%20an%20order%20from%20the%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2 bg-gold-mid hover:bg-gold-light text-ink font-sans text-xs uppercase tracking-[0.18em] font-bold flex items-center gap-1.5 shadow-lg transition-all"
          >
            <MessageSquare size={14} />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
