import Link from 'next/link';
import { Wordmark } from '@/components/brand/Wordmark';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { MapPin, Clock, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-sage/15 text-cream pt-16 pb-28 lg:pb-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Heritage & Branches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-sage/10">
          {/* Brand Philosophy */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-gold-light uppercase tracking-wide">
              Arabian Majlis
            </h3>
            <p className="text-sm font-sans text-sage/80 leading-relaxed font-light">
              Arabic cuisine, celebrated with a Malabar soul and a modern twist. Bringing together authentic slow-cooked Mandi, charcoal flame grills, and timeless Arabian hospitality.
            </p>
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-gold-mid uppercase pt-2">
              <span>Born to eat, not to diet</span>
            </div>
          </div>

          {/* Atholi Flagship Details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-mid font-medium flex items-center gap-2">
              <BrandDiamond size={7} /> Atholi Branch
            </h4>
            <div className="space-y-3 text-sm text-sage/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold-mid mt-0.5 shrink-0" />
                <span>Main Road, Near Atholi Bridge, Atholi, Kozhikode, Kerala 673315</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-gold-mid shrink-0" />
                <span>11:30 AM – 11:30 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold-mid shrink-0" />
                <a href="tel:+916282410280" className="hover:text-gold-light transition-colors">
                  +91 62824 10280
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare size={16} className="text-gold-mid shrink-0" />
                <a
                  href="https://wa.me/916282410280?text=Hi%20Arabian%20Majlis%20Atholi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                >
                  WhatsApp Ordering
                </a>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-mid font-medium flex items-center gap-2">
              <BrandDiamond size={7} /> Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-sage/80 font-light">
              <li>
                <Link href="/menu" className="hover:text-gold-light transition-colors">
                  Aromatic Mandi & Mazbi Menu
                </Link>
              </li>
              <li>
                <a
                  href="/menu/atholi-menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors flex items-center gap-1.5 text-gold-mid/90"
                >
                  <span>Download Menu (PDF)</span>
                  <span className="text-[10px] font-mono border border-gold-mid/30 px-1.5 py-0.5">19 MB</span>
                </a>
              </li>
              <li>
                <Link href="/story" className="hover:text-gold-light transition-colors">
                  Taste Beyond Tradition (Story)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-light transition-colors">
                  Atmosphere & Food Gallery
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-gold-light transition-colors">
                  Request a Table at Atholi
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-gold-light transition-colors">
                  Direct Delivery & Takeaway
                </Link>
              </li>
            </ul>
          </div>

          {/* Hospitality & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-mid font-medium flex items-center gap-2">
              <BrandDiamond size={7} /> Connect
            </h4>
            <p className="text-sm text-sage/80 font-light">
              Follow our culinary journey, special seasonal platters, and Malabar food stories.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-sage/20 flex items-center justify-center text-cream hover:border-gold-mid hover:text-gold-light transition-all"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-sage/20 flex items-center justify-center text-cream hover:border-gold-mid hover:text-gold-light transition-all"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
            <div className="pt-2 text-[11px] text-sage/60 font-mono">
              FSSAI Lic. No: 11324999000123
            </div>
          </div>
        </div>

        {/* GIANT SCALABLE WORDMARK (Per Brief: "footer with giant wordmark") */}
        <div className="py-12 border-b border-sage/10 flex items-center justify-center text-sage/15 hover:text-sage/25 transition-colors duration-500">
          <Wordmark className="w-full max-h-24 sm:max-h-32 lg:max-h-40" />
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sage/60 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 Arabian Majlis Atholi. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-mid transition-colors">
              Privacy Policy
            </Link>
            <BrandDiamond size={5} className="text-sage/30" />
            <Link href="/terms" className="hover:text-gold-mid transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
