'use client';

import { useState } from 'react';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { MapPin, Clock, Phone, Navigation, MessageSquare, Send, Check } from 'lucide-react';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  guests: z.string().min(1, 'Please select number of guests'),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function VisitPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 Guests',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate server action
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hi Arabian Majlis Atholi, I would like to request a table:%0A- Name: ${formData.name || 'Guest'}%0A- Phone: ${formData.phone || 'N/A'}%0A- Date: ${formData.date || 'Today'}%0A- Time: ${formData.time || 'Dinner'}%0A- Guests: ${formData.guests}%0A- Message: ${formData.message || 'None'}`;
    window.open(`https://wa.me/916282410280?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-ink text-cream pt-28 pb-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
            <BrandDiamond size={7} />
            <span>Atholi Flagship</span>
            <BrandDiamond size={7} />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light">
            Reserve Your Majlis. <br />
            <span className="italic text-gold-gradient font-normal">Hospitality Awaits.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-sage/80 font-sans font-light leading-relaxed">
            Join us for an authentic dining experience by the river in Atholi, Kozhikode. Reserve your table or walk in anytime.
          </p>
        </div>

        {/* 2 Columns: Booking Form + Location Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Request A Table Form */}
          <div className="lg:col-span-6 bg-green/20 border border-sage/20 p-8 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-cream font-medium">
                Request a Table
              </h2>
              <p className="text-xs text-sage/75 font-sans mt-1">
                We will confirm your reservation immediately via WhatsApp or SMS.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto bg-green text-gold-light border border-gold-mid flex items-center justify-center">
                  <Check size={28} />
                </div>
                <h3 className="font-serif text-2xl text-cream font-medium">
                  Request Received!
                </h3>
                <p className="text-sm text-sage/80 font-sans max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our team at Atholi is reviewing your table request for {formData.guests} on {formData.date} at {formData.time}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="px-6 py-3 bg-gold-mid hover:bg-gold-light text-ink text-xs font-sans uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 mx-auto shadow-md"
                  >
                    <MessageSquare size={16} />
                    <span>Confirm Instantly via WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-sage/70 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Miyad Rahman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-ink/70 border border-sage/20 focus:border-gold-mid text-cream text-sm px-4 py-3 outline-none"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-sage/70 mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 62824 10280"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-ink/70 border border-sage/20 focus:border-gold-mid text-cream text-sm px-4 py-3 outline-none"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Date & Time Row (2 columns on tablet/desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-sage/70 mb-1.5">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-ink/70 border border-sage/20 focus:border-gold-mid text-cream text-sm px-4 py-3 outline-none"
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-sage/70 mb-1.5">
                      Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-ink/70 border border-sage/20 focus:border-gold-mid text-cream text-sm px-4 py-3 outline-none"
                    />
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-sage/70 mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-ink/70 border border-sage/20 focus:border-gold-mid text-cream text-sm px-4 py-3 outline-none"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3 – 4 Guests</option>
                    <option value="5-6 Guests (Platter Feast)">5 – 6 Guests (Platter Feast)</option>
                    <option value="7+ Large Majlis Party">7+ Large Majlis Party</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-sage/70 mb-1.5">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Birthday celebration, floor majlis seating preferred..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-ink/70 border border-sage/20 focus:border-gold-mid text-cream text-sm px-4 py-3 outline-none resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 bg-green hover:bg-green-bright text-cream text-xs font-sans uppercase tracking-[0.2em] font-semibold border border-gold-mid/40 hover:border-gold-light transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send size={15} className="text-gold-light" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Request'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="py-3.5 px-6 bg-transparent hover:bg-cream/5 text-gold-light text-xs font-sans uppercase tracking-[0.2em] font-medium border border-gold-mid/30 hover:border-gold-mid transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={15} />
                    <span>Via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Location, Hours & Map */}
          <div className="lg:col-span-6 space-y-8">
            {/* Info Card */}
            <div className="bg-green/15 border border-sage/20 p-8 space-y-6">
              <h3 className="font-serif text-2xl text-cream font-medium">
                Atholi Branch Details
              </h3>

              <div className="space-y-4 text-sm text-sage/85 font-sans font-light">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-light mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-cream block font-medium">Address</strong>
                    <span>Main Road, Near Atholi Bridge, Atholi, Kozhikode, Kerala 673315</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gold-light mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-cream block font-medium">Dining Hours</strong>
                    <span>Open Everyday: 11:30 AM – 11:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-gold-light mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-cream block font-medium">Direct Telephone</strong>
                    <a href="tel:+916282410280" className="hover:text-gold-light transition-colors">
                      +91 62824 10280
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Arabian+Majlis+Atholi+Kozhikode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green hover:bg-green-bright text-cream text-xs font-sans uppercase tracking-[0.2em] border border-gold-mid/40 shadow-md"
                >
                  <Navigation size={15} className="text-gold-light" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="h-80 w-full border border-sage/20 bg-ink relative overflow-hidden">
              <iframe
                title="Google Maps Location for Arabian Majlis Atholi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.186641777413!2d75.7662!3d11.3965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIzJzQ3LjQiTiA3NcKwNDYnMDYuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%) opacity(0.85)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
