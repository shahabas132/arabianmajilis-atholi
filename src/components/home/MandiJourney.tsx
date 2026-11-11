'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';

interface Chapter {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
}

const chapters: Chapter[] = [
  {
    number: '01',
    title: 'Rice & Spices',
    subtitle: 'The Sacred Aromatic Foundation',
    description:
      'We begin with aged extra-long basmati rice, hand-measured against heirloom proportions of Persian saffron, green cardamom, Yemeni dried black limes, cinnamon quills, and star anise.',
    highlights: ['Aged Long-Grain Basmati', 'Sun-Dried Yemeni Limes', 'Hand-Selected Spices'],
    image: '/images/journey/rice-spices.jpg',
  },
  {
    number: '02',
    title: 'The Underground Pit',
    subtitle: 'Slow-Cooked Over Embers',
    description:
      'Traditional subterranean earthen pits burn with hardwood charcoal. Racks of spiced meat are suspended directly above the rice pot, allowing natural juices and rich bone marrow fat to drip into the grain throughout the slow braise.',
    highlights: ['Subterranean Clay Oven', 'Hardwood Charcoal Heat', 'Bone Marrow Infusion'],
    image: '/images/journey/slow-cook.jpg',
  },
  {
    number: '03',
    title: 'Dum & Pure Smoke',
    subtitle: 'The Ghee & Charcoal Alchemy',
    description:
      'Before unsealing, a glowing hot charcoal ember is placed in a small metal cup atop the rice and drizzled with molten pure ghee. The heavy copper lid is sealed tight, enveloping the meat in waves of velvety aromatic smoke.',
    highlights: ['Live Charcoal Embers', 'Pure Ghee Aromatics', 'Heritage Copper Degh'],
    image: '/images/journey/dum-smoke.jpg',
  },
  {
    number: '04',
    title: 'The Feast Served',
    subtitle: 'Warm Hospitality on a Golden Platter',
    description:
      'Presented hot on large communal platters: fall-apart succulent meat resting over steaming fragrant rice, garnished with toasted slivered almonds, golden sultanas, and served alongside spicy dakkoos sauce.',
    highlights: ['Communal Brass Platter', 'Toasted Almonds & Sultanas', 'Fresh Dakkoos & Lime'],
    image: '/images/journey/served.jpg',
  },
];

export default function MandiJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * chapters.length),
        chapters.length - 1
      );
      setActiveChapterIndex(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeChapter = chapters[activeChapterIndex];

  return (
    <section
      ref={containerRef}
      className="relative h-[320vh] bg-green/95 text-cream overflow-visible"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-cream/15 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <BrandDiamond size={8} className="text-gold-light" />
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-cream/90 font-medium">
              The Mandi Journey · 4 Chapters
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-gold-light">
            <span className="text-sm font-semibold">{activeChapter.number}</span>
            <span className="text-cream/40">/</span>
            <span className="text-cream/50">04</span>
          </div>
        </div>

        {/* Main Content Area: Split 50/50 Desktop, Plate 50dvh Top on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 py-4 lg:py-6">
          {/* Visual Showcase (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-6 h-[40dvh] sm:h-[45dvh] lg:h-[65dvh] w-full relative border border-gold-mid/30 bg-ink/60 overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.number}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeChapter.image}
                  alt={activeChapter.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={activeChapterIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-ink/80 px-3 py-1.5 border border-gold-mid/40 backdrop-blur-sm">
                  <BrandDiamond size={6} className="text-gold-light" />
                  <span className="text-[10px] font-sans tracking-widest uppercase text-cream font-medium">
                    Chapter {activeChapter.number} · {activeChapter.title}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Editorial Content (Right on Desktop, Below on Mobile) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 lg:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-gold-light font-sans flex items-center gap-2">
                  <span>Chapter {activeChapter.number}</span>
                  <BrandDiamond size={6} />
                  <span>{activeChapter.subtitle}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-light leading-tight">
                  {activeChapter.title}
                </h3>

                <p className="text-sm sm:text-base text-cream/80 font-sans font-light leading-relaxed max-w-xl">
                  {activeChapter.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 flex flex-wrap gap-2.5">
                  {activeChapter.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[11px] font-sans tracking-wider uppercase bg-cream/10 border border-cream/20 text-cream"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Chapter Progression Indicators */}
        <div className="grid grid-cols-4 gap-2 pt-4 border-t border-cream/15 shrink-0">
          {chapters.map((ch, idx) => (
            <div
              key={ch.number}
              onClick={() => {
                // Scroll into approximate fraction
                if (containerRef.current) {
                  const targetScroll =
                    containerRef.current.offsetTop +
                    (idx / chapters.length) * containerRef.current.offsetHeight;
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }
              }}
              className="cursor-pointer group py-1"
            >
              <div
                className={`h-[2px] transition-all duration-300 ${
                  activeChapterIndex === idx
                    ? 'bg-gold-light'
                    : 'bg-cream/20 group-hover:bg-cream/40'
                }`}
              />
              <div className="flex items-center justify-between text-[10px] tracking-wider uppercase mt-2">
                <span
                  className={
                    activeChapterIndex === idx
                      ? 'text-gold-light font-bold'
                      : 'text-cream/50'
                  }
                >
                  {ch.number}
                </span>
                <span className="hidden sm:inline text-cream/70 text-[9px]">
                  {ch.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
