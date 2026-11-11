import Hero from '@/components/home/Hero';
import StatementWordFill from '@/components/home/StatementWordFill';
import MandiJourney from '@/components/home/MandiJourney';
import SignatureRail from '@/components/home/SignatureRail';
import StoryTeaser from '@/components/home/StoryTeaser';
import BranchCard from '@/components/home/BranchCard';
import GuestReviews from '@/components/home/GuestReviews';
import MajlisFamily from '@/components/home/MajlisFamily';

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* 1. Hero with 3D Monogram & Parallax */}
      <Hero />

      {/* 2. Philosophy: Word-by-Word Scroll Fill */}
      <StatementWordFill />

      {/* 3. The Mandi Journey: Pinned 4-Chapter Storytelling */}
      <MandiJourney />

      {/* 4. Signature Dishes Rail with Kinetic Drag & 3D Tilt */}
      <SignatureRail />

      {/* 5. Story Teaser: Taste Beyond Tradition */}
      <StoryTeaser />

      {/* 6. Atholi Branch Card with Live Open Status & Directions */}
      <BranchCard />

      {/* 7. Guest Reviews (3 High-Craft Testimonial Cards) */}
      <GuestReviews />

      {/* 8. The Majlis Family Locations Matrix */}
      <MajlisFamily />
    </div>
  );
}
