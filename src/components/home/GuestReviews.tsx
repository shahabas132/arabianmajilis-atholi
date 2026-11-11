'use client';

import { motion } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: 'Faisal Rahman',
    role: 'Food Critic & Calicut Local',
    review:
      'The Mutton Haneeth at the Atholi branch is unmatched anywhere in Kozhikode. The bone marrow melts into the basmati grains, and the ghee smoke infusion transports you straight to the spice souks of Sana\'a.',
    rating: 5,
    tag: 'Mutton Mandi',
  },
  {
    author: 'Ayesha Mariyam',
    role: 'Frequent Diner',
    review:
      'The Fil Fil Mazbi is the culinary definition of perfection—charred skin with an unmistakable fiery green chilli kick that still respects the tender meat. Incredible ambience and authentic Arabian warmth.',
    rating: 5,
    tag: 'Fil Fil Mazbi',
  },
  {
    author: 'Dr. Vivek Menon',
    role: 'Family Feast Host',
    review:
      'We hosted our family reunion with the Majlis Mega Platter. The mix of kababs, honey glaze, and delicate rice left all 6 of us spellbound. Arabian Majlis Atholi is a true culinary landmark.',
    rating: 5,
    tag: 'Majlis Platter',
  },
];

export default function GuestReviews() {
  return (
    <section className="py-24 sm:py-32 bg-ink/95 border-b border-sage/15 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>Guest Impressions</span>
            <BrandDiamond size={7} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-light">
            Voices of the Majlis. <br />
            <span className="italic text-gold-gradient font-normal">Beloved across cultures.</span>
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-green/20 border border-sage/20 p-8 flex flex-col justify-between space-y-6 hover:border-gold-mid/50 transition-all duration-300 relative group"
            >
              {/* Star Rating & Tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gold-light">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4A94A" className="text-gold-mid" />
                  ))}
                </div>
                <span className="text-[10px] font-sans tracking-widest uppercase px-2.5 py-1 bg-ink/70 border border-gold-mid/30 text-gold-light">
                  {rev.tag}
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-base sm:text-lg text-cream/90 italic font-light leading-relaxed flex-1">
                "{rev.review}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-4 border-t border-sage/15 flex items-center gap-3">
                <div className="w-9 h-9 bg-green flex items-center justify-center text-gold-light font-serif text-base font-semibold border border-gold-mid/40">
                  {rev.author[0]}
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-cream">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] font-sans text-sage/70 font-light block">
                    {rev.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
