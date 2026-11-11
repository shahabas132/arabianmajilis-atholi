'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { MapPin, Clock, Phone, Navigation, MessageSquare, CheckCircle } from 'lucide-react';

export default function BranchCard() {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check if open (11:30 to 23:30)
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const openMinutes = 11 * 60 + 30; // 11:30 AM
    const closeMinutes = 23 * 60 + 30; // 11:30 PM
    setIsOpenNow(totalMinutes >= openMinutes && totalMinutes <= closeMinutes);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-ink border-b border-sage/15 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>Atholi Flagship</span>
            <BrandDiamond size={7} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-light">
            Visit Us in Atholi. <br />
            <span className="italic text-gold-gradient font-normal">A sanctuary of Arabian hospitality.</span>
          </h2>
        </div>

        {/* Split Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-sage/20 bg-green/20 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Details Column */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Branch Title & Open Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-cream font-medium">
                    Arabian Majlis, Atholi
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-sage/70 font-sans">
                    Kozhikode, Kerala
                  </span>
                </div>

                {/* Live Open Now Badge */}
                <div
                  className={`px-3 py-1 text-xs font-sans font-semibold uppercase tracking-wider flex items-center gap-1.5 border ${
                    isOpenNow
                      ? 'bg-green-bright/20 border-green-bright text-emerald-400'
                      : 'bg-clay/20 border-clay text-amber-300'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                  <span>{isOpenNow ? 'Open Now' : 'Closed · Opens 11:30 AM'}</span>
                </div>
              </div>

              {/* Meta items */}
              <div className="space-y-4 pt-4 text-sm text-sage/85 font-sans font-light">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-light mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-cream block font-medium">Location & Landmark</strong>
                    <span>Main Road, Near Atholi Bridge, Atholi, Kozhikode, Kerala 673315</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gold-light mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-cream block font-medium">Operating Hours</strong>
                    <span>11:30 AM – 11:30 PM (Open 7 Days a Week)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-gold-light mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-cream block font-medium">Phone Enquiries</strong>
                    <a href="tel:+916282410280" className="hover:text-gold-light transition-colors">
                      +91 62824 10280
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-sage/15 flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Arabian+Majlis+Atholi+Kozhikode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-green hover:bg-green-bright text-cream text-xs font-sans uppercase tracking-[0.2em] font-semibold border border-gold-mid/40 hover:border-gold-light transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation size={15} className="text-gold-light" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://wa.me/916282410280?text=Hi%20Arabian%20Majlis%20Atholi,%20I%20would%20like%20to%20reserve%20a%20table"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-transparent hover:bg-cream/5 text-cream text-xs font-sans uppercase tracking-[0.2em] font-medium border border-sage/30 hover:border-gold-mid transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={15} className="text-gold-mid" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Interactive Map & Architecture Showcase (Right Column) */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full bg-ink/90 border-t lg:border-t-0 lg:border-l border-sage/15 overflow-hidden flex flex-col">
            {/* Embedded Stylized Map Frame */}
            <div className="relative flex-1 w-full h-full min-h-[320px]">
              <iframe
                title="Arabian Majlis Atholi Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.186641777413!2d75.7662!3d11.3965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIzJzQ3LjQiTiA3NcKwNDYnMDYuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%) opacity(0.85)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 right-4 bg-ink/90 backdrop-blur-md p-3 border border-gold-mid/40 shadow-xl pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-serif text-cream">
                  <BrandDiamond size={6} className="text-gold-light" />
                  <span>Atholi, Calicut</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
