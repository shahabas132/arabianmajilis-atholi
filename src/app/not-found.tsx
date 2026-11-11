import Link from 'next/link';
import { Monogram } from '@/components/brand/Monogram';
import { BrandDiamond } from '@/components/brand/BrandDiamond';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink text-cream flex items-center justify-center px-4 py-32 text-center relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 space-y-6">
        <div className="w-20 h-20 mx-auto text-gold-mid">
          <Monogram className="w-full h-full" />
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-[0.3em] uppercase text-gold-mid">
          <BrandDiamond size={6} />
          <span>Error 404</span>
          <BrandDiamond size={6} />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl text-cream font-light">
          Platter Not Found.
        </h1>

        <p className="text-sm text-sage/80 font-sans font-light leading-relaxed">
          The culinary corridor you are seeking appears to have moved, or perhaps this dish is still slow-cooking in the underground pit.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-green hover:bg-green-bright text-cream text-xs font-sans uppercase tracking-[0.2em] border border-gold-mid/40 shadow-xl"
          >
            <span>Return to Majlis Home</span>
            <BrandDiamond size={6} className="text-gold-light" />
          </Link>
        </div>
      </div>
    </div>
  );
}
