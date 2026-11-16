'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Grid,
  X,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';

export interface MenuPageMeta {
  page: number;
  title: string;
  category: string;
  src: string;
}

export const MENU_PAGES: MenuPageMeta[] = [
  { page: 1,  title: 'Menu Cover',                    category: 'Cover',      src: '/menu/pages/page-1.webp'  },
  { page: 2,  title: 'Taste Beyond Tradition',        category: 'Story',      src: '/menu/pages/page-2.webp'  },
  { page: 3,  title: 'Soups & Broths',                category: 'Soup',       src: '/menu/pages/page-3.webp'  },
  { page: 4,  title: 'Fresh Arabian Salads',          category: 'Salads',     src: '/menu/pages/page-4.webp'  },
  { page: 5,  title: 'Appetizers & Starters',         category: 'Starters',   src: '/menu/pages/page-5.webp'  },
  { page: 6,  title: 'Charcoal Grills & Tawuk',      category: 'Grills',     src: '/menu/pages/page-6.webp'  },
  { page: 7,  title: 'Adnan & Turkish Seekh',         category: 'Kababs',     src: '/menu/pages/page-7.webp'  },
  { page: 8,  title: 'Signature Ali Nazik Kabab',     category: 'Kababs',     src: '/menu/pages/page-8.webp'  },
  { page: 9,  title: 'Cold Mezze Platter',            category: 'Mezze',      src: '/menu/pages/page-9.webp'  },
  { page: 10, title: 'Authentic Dips & Mezze',        category: 'Mezze',      src: '/menu/pages/page-10.webp' },
  { page: 11, title: 'Mazbi Heritage & Honey Mazbi',  category: 'Mazbi',      src: '/menu/pages/page-11.webp' },
  { page: 12, title: 'Gochu & Fil Fil Mazbi',         category: 'Mazbi',      src: '/menu/pages/page-12.webp' },
  { page: 13, title: 'Beef Mazbi & Ribs',             category: 'Mazbi',      src: '/menu/pages/page-13.webp' },
  { page: 14, title: 'Mandi & Mutton Haneeth',        category: 'Mandi',      src: '/menu/pages/page-14.webp' },
  { page: 15, title: 'Amber White Madhooth',          category: 'Mandi',      src: '/menu/pages/page-15.webp' },
  { page: 16, title: '2-in-1 Fish & Seafood',         category: 'Seafood',    src: '/menu/pages/page-16.webp' },
  { page: 17, title: 'Slow-Cooked Gravies',           category: 'Gravies',    src: '/menu/pages/page-17.webp' },
  { page: 18, title: 'Mix Grill Platter (2 Pax)',     category: 'Platters',   src: '/menu/pages/page-18.webp' },
  { page: 19, title: 'Indulgent Mega Platter (6 Pax)',category: 'Platters',   src: '/menu/pages/page-19.webp' },
  { page: 20, title: 'Mandi & Culture',               category: 'Back Cover', src: '/menu/pages/page-20.webp' },
];

type Direction = 'next' | 'prev';

/*
 * Realistic page-swipe animation
 * ─────────────────────────────────────────────────────────────────────────────
 * Both the incoming and outgoing pages animate SIMULTANEOUSLY (no mode="wait"),
 * just like swiping on a real phone or tablet:
 *
 *  • Incoming page  → slides in from the full edge (100%) with a soft left/right
 *    shadow to simulate the page being physically pushed into view.
 *  • Outgoing page  → drifts back only 25% (parallax) and fades, giving the
 *    illusion that the new page is sliding on top of the old one.
 *
 * The two values are intentionally asymmetric: 100% in vs 25% out is what
 * creates the layered "page-over-page" depth without any 3-D transform.
 */
const SWIPE_DURATION = 0.42; // seconds — consistent for both enter & exit

const pageVariants = {
  enter: (dir: Direction) => ({
    x: dir === 'next' ? '100%' : '-100%',
    opacity: 1,
    // Soft inset shadow on the leading edge — simulates page depth
    boxShadow:
      dir === 'next'
        ? '-18px 0 40px -4px rgba(0,0,0,0.55)'
        : '18px 0 40px -4px rgba(0,0,0,0.55)',
    zIndex: 2,
  }),
  center: {
    x: 0,
    opacity: 1,
    boxShadow: '0px 0 0px 0px rgba(0,0,0,0)',
    zIndex: 2,
  },
  exit: (dir: Direction) => ({
    // Parallax drift: outgoing page moves only 25% while incoming moves 100%
    x: dir === 'next' ? '-25%' : '25%',
    opacity: 0.35,
    boxShadow: '0px 0 0px 0px rgba(0,0,0,0)',
    zIndex: 1,
  }),
};

const pageTransition = {
  duration: SWIPE_DURATION,
  ease: [0.32, 0.72, 0, 1] as const, // iOS-style decelerate curve
};

export function VisualMenuBook() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [direction, setDirection]     = useState<Direction>('next');
  const [showGrid, setShowGrid]       = useState<boolean>(false);

  const totalPages  = MENU_PAGES.length;
  const currentMeta = MENU_PAGES[currentPage - 1];

  const touchStartX = useRef<number | null>(null);
  const dragStartX  = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    if (currentPage < totalPages) {
      setDirection('next');
      setCurrentPage((p) => p + 1);
    }
  }, [currentPage, totalPages]);

  const goToPrev = useCallback(() => {
    if (currentPage > 1) {
      setDirection('prev');
      setCurrentPage((p) => p - 1);
    }
  }, [currentPage]);

  const goTo = useCallback(
    (page: number) => {
      setDirection(page > currentPage ? 'next' : 'prev');
      setCurrentPage(page);
      setShowGrid(false);
    },
    [currentPage]
  );

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft')  goToPrev();
      if (e.key === 'Escape')     setShowGrid(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goToNext, goToPrev]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) goToNext();
    else if (delta > 50) goToPrev();
    touchStartX.current = null;
  };

  // Mouse drag (desktop)
  const onMouseDown = (e: React.MouseEvent) => { dragStartX.current = e.clientX; };
  const onMouseUp   = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 60) delta < 0 ? goToNext() : goToPrev();
    dragStartX.current = null;
  };

  return (
    <div className="w-full select-none flex flex-col" style={{ height: '100%' }}>

      {/* ── Compact toolbar ────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 bg-green/20 border border-gold-mid/25 mb-3 shrink-0 flex-wrap">
        {/* Left: title + page counter */}
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen size={14} className="text-gold-light shrink-0" />
          <span className="font-serif text-sm text-cream truncate">{currentMeta.title}</span>
          <span className="text-[10px] text-sage/50 font-sans shrink-0">
            {currentPage}/{totalPages}
          </span>
        </div>

        {/* Right: actions — All Pages grid toggle only */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowGrid((v) => !v)}
            className={`px-2.5 py-1 text-[11px] font-sans uppercase tracking-wider flex items-center gap-1 border transition-all cursor-pointer ${
              showGrid
                ? 'bg-gold-mid text-ink border-gold-mid'
                : 'bg-green/30 text-cream/70 hover:text-gold-light border-sage/20 hover:border-gold-mid/40'
            }`}
          >
            <Grid size={12} />
            <span className="hidden sm:inline">Pages</span>
          </button>
        </div>
      </div>

      {/* ── Grid thumbnail drawer ───────────────────────────────────── */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-3 overflow-hidden bg-ink border border-gold-mid/25 shrink-0"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-sage/15">
                <div className="flex items-center gap-1.5 text-gold-mid text-[11px] uppercase tracking-widest">
                  <Sparkles size={12} />
                  <span>Jump to any page</span>
                </div>
                <button onClick={() => setShowGrid(false)} className="text-sage/60 hover:text-cream text-xs flex items-center gap-1 cursor-pointer">
                  <X size={14} /> Close
                </button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 max-h-[40vh] overflow-y-auto pr-1">
                {MENU_PAGES.map((pm) => (
                  <button
                    key={pm.page}
                    onClick={() => goTo(pm.page)}
                    title={pm.title}
                    className={`group relative text-left border transition-all cursor-pointer ${
                      currentPage === pm.page
                        ? 'border-gold-mid shadow-[0_0_10px_rgba(209,160,84,0.3)]'
                        : 'border-sage/15 hover:border-gold-mid/50'
                    }`}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                      <Image src={pm.src} alt={pm.title} fill sizes="12vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-0.5 left-0.5 px-1 py-0.5 bg-ink/90 text-gold-light font-mono text-[8px]">{pm.page}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main reader — height fills whatever space is left ─────── */}
      {/*
        The outer div uses flex-1 so it stretches to fill the remaining height
        of the parent (which has an explicit height set by the page).
        overflow-hidden clips the sliding pages cleanly.
      */}
      <div
        className="relative flex-1 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {/* Left arrow */}
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-ink/90 border border-gold-mid/40 hover:border-gold-light text-gold-light hover:bg-gold-mid hover:text-ink flex items-center justify-center shadow-xl transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={goToNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-ink/90 border border-gold-mid/40 hover:border-gold-light text-gold-light hover:bg-gold-mid hover:text-ink flex items-center justify-center shadow-xl transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>

        {/* Page image — simultaneous swipe, no mode="wait" */}
        {/*
          AnimatePresence without mode="wait": enter & exit run at the same time,
          producing the realistic "page sliding over page" effect.
        */}
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/*
              Portrait box: height-first sizing. As tall as the container,
              as wide as the aspect ratio allows. Always fully visible.
            */}
            <div
              className="relative h-full border border-gold-mid/15"
              style={{
                aspectRatio: '1241 / 1754',
                maxHeight: '100%',
                boxShadow: '0 24px 64px -8px rgba(0,0,0,0.85)',
              }}
            >
              <Image
                src={currentMeta.src}
                alt={`${currentMeta.title} — Arabian Majlis Menu Page ${currentPage}`}
                fill
                priority={currentPage <= 3}
                sizes="(max-width: 768px) 70vw, 500px"
                className="object-contain"
                draggable={false}
              />

              {/* Page badge */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-ink/90 border border-gold-mid/40 text-gold-light font-sans text-[10px] tracking-wider flex items-center gap-1 shadow-lg pointer-events-none">
                <BrandDiamond size={4} />
                <span>{currentPage} / {totalPages}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Dot pagination ─────────────────────────────────────────── */}
      <div className="mt-3 flex items-center justify-center gap-2 shrink-0">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="p-1 text-sage/50 hover:text-gold-light disabled:opacity-20 disabled:pointer-events-none cursor-pointer transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots — scroll horizontally if needed */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none max-w-[260px] py-1">
          {MENU_PAGES.map((pm) => (
            <button
              key={pm.page}
              onClick={() => goTo(pm.page)}
              title={`Page ${pm.page}: ${pm.title}`}
              className={`shrink-0 rounded-full transition-all duration-200 cursor-pointer ${
                currentPage === pm.page
                  ? 'w-5 h-2 bg-gold-mid'
                  : 'w-2 h-2 bg-sage/25 hover:bg-gold-mid/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="p-1 text-sage/50 hover:text-gold-light disabled:opacity-20 disabled:pointer-events-none cursor-pointer transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <p className="mt-1.5 text-center text-[10px] text-sage/35 font-sans tracking-wide shrink-0">
        Swipe · Arrow keys · or click the arrows
      </p>
    </div>
  );
}
