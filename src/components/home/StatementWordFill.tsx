'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';

export default function StatementWordFill() {
  // Outer tall wrapper — gives scroll "breathing room" so the animation
  // completes fully before the section leaves the viewport.
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    // start: when the top of the wrapper hits the bottom of the viewport
    // end:   when the bottom of the wrapper hits the top of the viewport
    // The sticky inner panel stays pinned the whole time, so the animation
    // plays out during the extra scroll distance before the page moves on.
    offset: ['start end', 'end start'],
  });

  // Map the full [0,1] scroll range → animation runs in the first 60%,
  // leaving the last 40% of scroll room as a "hold" so words are fully visible.
  const animationProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const statementWords = [
    { text: 'Born', special: false },
    { text: 'to', special: false },
    { text: 'eat,', special: false },
    { text: 'Not', special: false },
    { text: 'to', special: false },
    { text: 'diet.', special: true },
  ];

  return (
    // Tall outer wrapper — 250vh gives enough scroll room for the animation
    // to complete while the sticky inner content remains fully visible.
    <div ref={wrapperRef} className="relative" style={{ height: '250vh' }}>
      {/* Sticky inner panel — stays pinned while user scrolls through the wrapper */}
      <div className="sticky top-0 h-screen flex items-center bg-ink border-y border-sage/10 overflow-hidden">
        <div className="absolute inset-0 bg-green/10 pointer-events-none" />
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Diamond Indicator */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gold-mid/30" />
            <BrandDiamond size={8} className="text-gold-light" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-gold-mid">
              The Philosophy
            </span>
            <BrandDiamond size={8} className="text-gold-light" />
            <div className="h-[1px] w-12 sm:w-20 bg-gold-mid/30" />
          </div>

          {/* Word-by-Word Kinetic Fill */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-7 gap-y-2 font-serif text-[clamp(2.5rem,7.5vw,6rem)] font-light leading-tight tracking-tight">
            {statementWords.map((word, index) => {
              // Each word animates sequentially across the first 60% of scroll
              const start = index / statementWords.length;
              const end = (index + 1) / statementWords.length;

              return (
                <WordItem
                  key={index}
                  word={word.text}
                  isSpecial={word.special}
                  progress={animationProgress}
                  range={[start, end]}
                />
              );
            })}
          </div>

          {/* Explanatory Brand Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 sm:mt-12 max-w-2xl mx-auto text-base sm:text-lg text-sage/80 font-sans font-light leading-relaxed"
          >
            Food is not merely sustenance—it is our connection, our celebratory feast, and our cultural story. At Arabian Majlis, every platter is an invitation to indulge without reservation.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

function WordItem({
  word,
  isSpecial,
  progress,
  range,
}: {
  word: string;
  isSpecial: boolean;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [10, 0]);
  const color = useTransform(
    progress,
    range,
    isSpecial ? ['rgba(212, 169, 74, 0.25)', '#F4E58A'] : ['rgba(240, 237, 228, 0.2)', '#F0EDE4']
  );

  return (
    <motion.span
      style={{ opacity, y, color }}
      className={`inline-block transition-colors duration-150 ${
        isSpecial ? 'italic font-normal' : ''
      }`}
    >
      {word}
    </motion.span>
  );
}
