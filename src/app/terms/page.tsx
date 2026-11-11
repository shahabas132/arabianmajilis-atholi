import { BrandDiamond } from '@/components/brand/BrandDiamond';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ink text-cream pt-28 pb-32">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>Dining Guidelines</span>
            <BrandDiamond size={7} />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-cream font-medium">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs font-sans text-sage/60 uppercase tracking-widest">
            Arabian Majlis Atholi Branch
          </p>
        </div>

        <div className="space-y-6 text-sm text-sage/85 font-sans font-light leading-relaxed border-t border-sage/15 pt-8">
          <h2 className="font-serif text-xl text-cream">1. Table Reservations</h2>
          <p>
            Table reservation requests submitted online are subject to confirmation by our Atholi branch manager based on live seating availability. Reserved tables are held for up to 15 minutes past the agreed time.
          </p>

          <h2 className="font-serif text-xl text-cream pt-4">2. Menu Pricing & Availability</h2>
          <p>
            All prices are in Indian Rupees (INR) and are inclusive of statutory taxes unless otherwise indicated. Fresh seafood items (such as 2-in-1 Fish and Pepper Fish) are priced as per catch size on the day of dining.
          </p>

          <h2 className="font-serif text-xl text-cream pt-4">3. Takeaway & Delivery</h2>
          <p>
            Orders placed via WhatsApp or phone are freshly prepared over charcoal. Estimated preparation and delivery times depend on traffic and weather conditions around Atholi and Kozhikode.
          </p>
        </div>
      </div>
    </div>
  );
}
