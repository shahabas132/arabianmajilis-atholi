import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { Phone, MessageSquare, ShoppingBag, Clock, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function OrderPage() {
  const quickDishes = [
    { name: 'Mutton Mandi Haneeth', price: '₹830 (Half) / ₹1890 (Full)' },
    { name: 'Fil Fil Charcoal Mazbi', price: '₹500 (Half) / ₹985 (Full)' },
    { name: 'Gochu Spicy Mazbi', price: '₹500 (Half) / ₹985 (Full)' },
    { name: 'Honey Chilli Mazbi', price: '₹500 (Half) / ₹985 (Full)' },
    { name: 'Majlis House Platter (4 Pax)', price: '₹1199' },
    { name: 'Cold Mezze Platter (5 Dips)', price: '₹590' },
  ];

  return (
    <div className="min-h-screen bg-ink text-cream pt-28 pb-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>Atholi Express</span>
            <BrandDiamond size={7} />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light">
            Order Online. <br />
            <span className="italic text-gold-gradient font-normal">Fresh to Your Table.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-sage/80 font-sans font-light leading-relaxed">
            Direct takeaway pickup and rapid local delivery across Atholi and surrounding areas.
          </p>
        </div>

        {/* 3 Main Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Channel 1: WhatsApp Instant Order (Recommended) */}
          <div className="bg-green/30 border-2 border-gold-mid p-8 flex flex-col justify-between space-y-6 shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-gold-mid text-ink text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5">
              Fastest
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green flex items-center justify-center text-gold-light border border-gold-mid">
                <MessageSquare size={24} />
              </div>
              <h2 className="font-serif text-2xl text-cream font-medium">
                Order via WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-sage/85 font-sans font-light leading-relaxed">
                Chat directly with our Atholi kitchen desk. Send your menu choices, get instant confirmation, and track your delivery.
              </p>
            </div>
            <a
              href="https://wa.me/916282410280?text=Hi%20Arabian%20Majlis%20Atholi,%20I%20would%20like%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-gold-mid hover:bg-gold-light text-ink text-xs font-sans uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Channel 2: Direct Call */}
          <div className="bg-green/15 border border-sage/20 p-8 flex flex-col justify-between space-y-6 hover:border-gold-mid/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green/40 flex items-center justify-center text-gold-light border border-sage/20">
                <Phone size={24} />
              </div>
              <h2 className="font-serif text-2xl text-cream font-medium">
                Call The Branch
              </h2>
              <p className="text-xs sm:text-sm text-sage/85 font-sans font-light leading-relaxed">
                Speak directly to our restaurant manager for custom orders, large family feasts, or takeaway pickups.
              </p>
            </div>
            <a
              href="tel:+916282410280"
              className="w-full py-3.5 bg-green hover:bg-green-bright text-cream text-xs font-sans uppercase tracking-[0.2em] font-semibold border border-gold-mid/40 flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>Call +91 62824 10280</span>
            </a>
          </div>

          {/* Channel 3: Delivery Partners */}
          <div className="bg-green/15 border border-sage/20 p-8 flex flex-col justify-between space-y-6 hover:border-gold-mid/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green/40 flex items-center justify-center text-gold-light border border-sage/20">
                <ShoppingBag size={24} />
              </div>
              <h2 className="font-serif text-2xl text-cream font-medium">
                Delivery Apps
              </h2>
              <p className="text-xs sm:text-sm text-sage/85 font-sans font-light leading-relaxed">
                Order via your favorite food delivery apps with door-to-door tracking and digital payment options.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-ink/70 hover:bg-ink text-cream text-center text-xs font-sans uppercase tracking-wider border border-sage/20 hover:border-gold-mid transition-all"
              >
                Swiggy
              </a>
              <a
                href="https://zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-ink/70 hover:bg-ink text-cream text-center text-xs font-sans uppercase tracking-wider border border-sage/20 hover:border-gold-mid transition-all"
              >
                Zomato
              </a>
            </div>
          </div>
        </div>

        {/* Quick WhatsApp One-Tap Order Templates */}
        <div className="border border-sage/20 bg-green/10 p-8 mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-2xl text-cream font-medium">
                One-Tap Quick Order
              </h3>
              <p className="text-xs text-sage/75 font-sans mt-0.5">
                Click any favorite dish to prefill your WhatsApp order message instantly:
              </p>
            </div>
            <div className="flex items-center gap-3 hidden sm:flex">
              <a
                href="/menu/atholi-menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans uppercase tracking-wider text-gold-mid hover:text-gold-light flex items-center gap-1"
              >
                <span>Menu PDF (19MB)</span>
              </a>
              <span className="text-sage/30">·</span>
              <Link
                href="/menu"
                className="text-xs font-sans uppercase tracking-wider text-gold-light hover:underline"
              >
                View Full Menu →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickDishes.map((dish) => (
              <a
                key={dish.name}
                href={`https://wa.me/916282410280?text=Hi%20Arabian%20Majlis%20Atholi,%20I%20would%20like%20to%20order%20${encodeURIComponent(dish.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-ink/80 border border-sage/15 hover:border-gold-mid transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-serif text-base text-cream group-hover:text-gold-light transition-colors">
                    {dish.name}
                  </h4>
                  <span className="text-[11px] font-mono text-gold-mid/90 block mt-0.5">
                    {dish.price}
                  </span>
                </div>
                <MessageSquare size={16} className="text-sage/40 group-hover:text-gold-light transition-colors shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
