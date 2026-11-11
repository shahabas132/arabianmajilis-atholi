'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monogram } from '@/components/brand/Monogram';
import { BrandDiamond } from '@/components/brand/BrandDiamond';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage to only run once per session
    const hasPreloaded = sessionStorage.getItem('arabian_majlis_preloaded');
    if (hasPreloaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('arabian_majlis_preloaded', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-ink flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-green/20 blur-3xl pointer-events-none" />

          {/* Monogram Draw Animation */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 text-gold-light mb-6"
          >
            <Monogram className="w-full h-full drop-shadow-[0_0_25px_rgba(212,169,74,0.35)]" />
          </motion.div>

          {/* Brand Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center space-y-2 z-10"
          >
            <h2 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase text-cream font-medium">
              Arabian Majlis
            </h2>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-mid">
              <span>Atholi</span>
              <BrandDiamond size={6} />
              <span>Mandi & Culture</span>
            </div>
          </motion.div>

          {/* Loading Progress Bar */}
          <motion.div
            className="mt-8 w-36 h-[2px] bg-sage/15 overflow-hidden z-10"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-r from-transparent via-gold-mid to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
