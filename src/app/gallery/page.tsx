'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Food' | 'Ambience' | 'Team' | 'Events';
  image: string;
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Mutton Mandi Haneeth Platter',
    category: 'Food',
    image: '/images/dishes/mutton-mandi.jpg',
    aspect: 'aspect-square',
  },
  {
    id: 2,
    title: 'Atholi Dining Hall Ambience',
    category: 'Ambience',
    image: '/images/ambience/atholi-branch.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 3,
    title: 'Fil Fil Charcoal Mazbi',
    category: 'Food',
    image: '/images/dishes/fil-fil-mazbi.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 4,
    title: 'The Dum Smoke Opening',
    category: 'Food',
    image: '/images/journey/dum-smoke.jpg',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 5,
    title: 'Traditional Pit Roasting',
    category: 'Food',
    image: '/images/journey/slow-cook.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 6,
    title: 'Gochu Red Glaze Mazbi',
    category: 'Food',
    image: '/images/dishes/gochu-mazbi.jpg',
    aspect: 'aspect-square',
  },
  {
    id: 7,
    title: 'Communal Feasting Gathering',
    category: 'Events',
    image: '/images/story/story-teaser.jpg',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 8,
    title: 'Aromatic Whole Spices Selection',
    category: 'Food',
    image: '/images/journey/rice-spices.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 9,
    title: 'Honey Chilli Glazed Chicken',
    category: 'Food',
    image: '/images/dishes/honey-mazbi.jpg',
    aspect: 'aspect-[3/4]',
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Ambience', 'Team', 'Events'];

  const filteredItems = galleryItems.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="min-h-screen bg-ink text-cream pt-28 pb-32">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
          <BrandDiamond size={7} />
          <span>Visual Archive</span>
          <BrandDiamond size={7} />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light">
          Moments & Feasts. <br />
          <span className="italic text-gold-gradient font-normal">The Majlis in Frame.</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-sage/80 font-sans font-light">
          Explore the authentic textures of slow charcoal cooking, our riverside Atholi ambience, and joyful communal celebrations.
        </p>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-sans uppercase tracking-[0.2em] transition-all ${
                selectedCategory === cat
                  ? 'bg-green text-gold-light border border-gold-mid/60 font-semibold shadow-md'
                  : 'bg-green/10 text-cream/70 hover:text-gold-mid border border-sage/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Dynamic Grid Layout */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden border border-sage/15 bg-green/20 hover:border-gold-mid/60 transition-all duration-300"
              >
                <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/10 transition-colors duration-300" />
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-ink/90 via-ink/20 to-transparent">
                  <div className="flex justify-end">
                    <span className="p-2 bg-ink/80 border border-gold-mid/40 text-gold-light">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-gold-mid">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-cream font-medium">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal with Keyboard & Swipe Navigation */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-ink/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between z-20">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-light">
                <span>{lightboxIndex + 1}</span>
                <span className="text-sage/40">/</span>
                <span className="text-sage/60">{filteredItems.length}</span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 bg-green/40 hover:bg-green text-cream border border-gold-mid/40 hover:border-gold-light transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image Stage */}
            <div className="relative w-full max-w-4xl h-[65vh] sm:h-[75vh] flex items-center justify-center my-auto">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Caption & Controls */}
            <div className="w-full max-w-xl flex items-center justify-between gap-4 text-center z-20">
              <button
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                className="p-3 bg-green/40 hover:bg-green text-cream border border-sage/20 hover:border-gold-mid transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold-mid block mb-1">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-cream font-medium">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>

              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev! + 1) % filteredItems.length)
                }
                className="p-3 bg-green/40 hover:bg-green text-cream border border-sage/20 hover:border-gold-mid transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
