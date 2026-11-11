import { BrandDiamond } from '@/components/brand/BrandDiamond';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ink text-cream pt-28 pb-32">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>Legal Notice</span>
            <BrandDiamond size={7} />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-cream font-medium">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-sans text-sage/60 uppercase tracking-widest">
            Last Updated: January 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-sage/85 font-sans font-light leading-relaxed border-t border-sage/15 pt-8">
          <p>
            At Arabian Majlis Atholi, we are committed to respecting and protecting the privacy of our diners and website visitors. This Privacy Policy outlines how your personal information is collected, used, and safeguarded.
          </p>

          <h2 className="font-serif text-xl text-cream pt-4">1. Information We Collect</h2>
          <p>
            When you request a table reservation or place an order via WhatsApp or phone, we may collect your name, contact telephone number, date/time preferences, and any specific dietary requests you share with us.
          </p>

          <h2 className="font-serif text-xl text-cream pt-4">2. Use of Information</h2>
          <p>
            The information you provide is used solely to confirm reservations, deliver food orders, and improve your dining experience at our Atholi branch. We do not sell, rent, or trade your personal data with third-party marketers.
          </p>

          <h2 className="font-serif text-xl text-cream pt-4">3. FSSAI & Regulatory Compliance</h2>
          <p>
            Arabian Majlis Atholi operates in full compliance with the Food Safety and Standards Authority of India (FSSAI Lic. No: 11324999000123). Food safety records and guest feedback are securely archived per statutory norms.
          </p>

          <h2 className="font-serif text-xl text-cream pt-4">4. Contacting Us</h2>
          <p>
            If you have questions regarding this policy or your personal data, you may reach our Atholi management team at <a href="mailto:privacy@arabianmajlisatholi.com" className="text-gold-light underline">privacy@arabianmajlisatholi.com</a> or via phone at +91 62824 10280.
          </p>
        </div>
      </div>
    </div>
  );
}
