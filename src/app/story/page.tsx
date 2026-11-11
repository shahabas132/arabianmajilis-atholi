import Image from 'next/image';
import Link from 'next/link';
import { BrandDiamond } from '@/components/brand/BrandDiamond';
import { Flame, Compass, Heart, UtensilsCrossed, ArrowRight } from 'lucide-react';

export default function StoryPage() {
  const pillars = [
    {
      icon: <UtensilsCrossed size={28} className="text-gold-light" />,
      title: 'Mandi Heritage',
      description:
        'Authentic underground earthen pit technique. Aged basmati rice delicately steamed by the falling juices of slow-braised meats, sealed with charcoal dum.',
    },
    {
      icon: <Flame size={28} className="text-gold-light" />,
      title: 'Mastery of Grill',
      description:
        'Every Mazbi and Kabab is touched by real hardwood charcoal flames, creating crispy blistered skin and locking in natural juices with our house spice rubs.',
    },
    {
      icon: <Heart size={28} className="text-gold-light" />,
      title: 'Majlis Culture',
      description:
        'In Arabic tradition, the Majlis is the sacred space of gathering, honour, and generous sharing. Here, strangers become companions over a shared platter.',
    },
    {
      icon: <Compass size={28} className="text-gold-light" />,
      title: 'Arabic With A Twist',
      description:
        'Honouring traditional Yemeni, Lebanese, and Persian recipes while celebrating the bold, spice-loving soul of the Malabar coast and Kerala nostalgia.',
    },
  ];

  const timelineEvents = [
    {
      year: '2018',
      title: 'The Feroke Inception',
      description:
        'Founded by food lover Miyad and a group of close friends in Feroke, Calicut. Driven by a singular desire to bring real, uncompromised Arabian Mandi to Kerala.',
    },
    {
      year: '2020',
      title: 'Perfecting The Charcoal Mazbi',
      description:
        'Developing proprietary spice glazes—Fil Fil, Gochu, and Honey Chilli—fusing global flavours with deep hardwood charcoal searing.',
    },
    {
      year: '2023',
      title: 'The Atholi Flagship Opens',
      description:
        'Opening our premier single-branch architectural destination in Atholi, Kozhikode, bringing fine Arabian dining to the riverside corridor.',
    },
    {
      year: 'Today',
      title: 'Crossing Borders',
      description:
        'Over 20 celebrated branches across Kerala, Tamil Nadu, and the UAE (Dubai, Sharjah, Abu Dhabi), serving thousands of delighted guests daily.',
    },
  ];

  return (
    <div className="min-h-screen bg-ink text-cream pt-28 pb-32">
      {/* Story Hero */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="flex items-center justify-center gap-2.5 text-xs font-sans tracking-[0.25em] uppercase text-gold-mid mb-3">
          <BrandDiamond size={7} />
          <span>Our Origins & Vision</span>
          <BrandDiamond size={7} />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light">
          Taste beyond <br />
          <span className="italic text-gold-gradient font-normal">tradition.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-sage/80 font-sans font-light leading-relaxed">
          The story of how a passionate gathering of friends from Feroke united authentic Arabian culinary techniques with the warmth of Kerala hospitality.
        </p>
      </div>

      {/* Editorial Narrative */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm sm:text-base text-sage/85 font-sans font-light leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-cream font-medium">
              A Celebration of Cultures
            </h3>
            <p>
              At Arabian Majlis, we’ve brought together the rich culinary heritage of the Arab world—uniting iconic dishes from across Yemen, Lebanon, and Persia under one roof. Our menu reflects this journey, infused with a bold identity and a twist of nostalgia.
            </p>
            <p>
              From the irresistible Honey Chicken—where Middle Eastern charm meets a burst of Indian masala—to the fiery Peri Peri infused with African chillies, every dish tells a story.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-cream font-medium">
              For the Malayali Soul
            </h3>
            <p>
              Even our take on traditional Mandi rice carries the essence of Kerala, offering a comforting taste of home for the Malayali soul. Every flavour is more than a recipe—it’s a celebration of cultures, delivered with heart.
            </p>
            <p>
              From a small town in Kerala, these flavours now travel across borders—each new taste discovery introduced by those same friends from Feroke. Arabian Majlis celebrates the best of Arab cuisine—crafted to delight every palate.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Excellence */}
      <div className="bg-green/20 border-y border-sage/15 py-24 mb-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-gold-mid block mb-2">
              Foundational Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream font-light">
              The Four Pillars of Majlis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-ink/80 border border-sage/15 p-8 flex flex-col justify-between space-y-4 hover:border-gold-mid/50 transition-all duration-300"
              >
                <div className="p-3 w-fit bg-green/30 border border-gold-mid/30">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl text-cream font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-sage/80 font-sans font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Heritage Timeline */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-gold-mid block mb-2">
            Chronology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream font-light">
            Our Journey Through Time
          </h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:bg-sage/15">
          {timelineEvents.map((evt, idx) => (
            <div
              key={evt.year}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 ${
                idx % 2 === 0 ? 'sm:flex-row-reverse text-left' : 'sm:text-right'
              }`}
            >
              {/* Content Box */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 space-y-2">
                <span className="font-mono text-sm font-semibold text-gold-light tracking-widest">
                  {evt.year}
                </span>
                <h3 className="font-serif text-2xl text-cream font-medium">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-sage/80 font-sans font-light leading-relaxed">
                  {evt.description}
                </p>
              </div>

              {/* Diamond Centerpiece Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 bg-ink border-2 border-gold-mid flex items-center justify-center text-gold-light z-10 shadow-lg">
                <BrandDiamond size={8} />
              </div>

              {/* Empty placeholder for symmetry */}
              <div className="hidden sm:block sm:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-xl mx-auto text-center px-4">
        <Link
          href="/visit"
          className="inline-flex items-center gap-3 px-8 py-4 bg-green hover:bg-green-bright text-cream text-xs font-sans tracking-[0.25em] uppercase border border-gold-mid/40 hover:border-gold-light transition-all shadow-xl"
        >
          <span>Visit Us At Atholi</span>
          <ArrowRight size={16} className="text-gold-light" />
        </Link>
      </div>
    </div>
  );
}
