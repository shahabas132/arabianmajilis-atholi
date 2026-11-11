import type { Metadata, Viewport } from 'next';
import { Jost, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CustomCursor from '@/components/layout/CustomCursor';
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#003A2F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Arabian Majlis Atholi | Authentic Mandi, Mazbi & Arabian Dining',
  description:
    'Experience the culinary heritage of the Arab world fused with Malabar warmth at Arabian Majlis Atholi, Kozhikode. Authentic slow-cooked Mandi, charcoal flame grills, and signature Mazbi.',
  keywords: [
    'Arabian Majlis',
    'Atholi',
    'Kozhikode',
    'Mandi',
    'Mazbi',
    'Kabab',
    'Calicut Restaurant',
    'Arabian Food Kerala',
  ],
  authors: [{ name: 'Arabian Majlis' }],
  openGraph: {
    title: 'Arabian Majlis Atholi | Authentic Mandi & Culture',
    description:
      'Born to eat, not to diet. Authentic slow-cooked Mandi, charcoal Mazbi, and Arabian dining at Atholi, Calicut.',
    url: 'https://arabianmajlisatholi.com',
    siteName: 'Arabian Majlis Atholi',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Restaurant JSON-LD structured data (Per Quality Gate requirements in brief)
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Arabian Majlis Atholi',
    image: 'https://arabianmajlisatholi.com/images/hero-mandi.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Road, Near Atholi Bridge',
      addressLocality: 'Atholi, Kozhikode',
      addressRegion: 'Kerala',
      postalCode: '673315',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.3965',
      longitude: '75.7684',
    },
    url: 'https://arabianmajlisatholi.com',
    telephone: '+916282410280',
    servesCuisine: ['Arabian', 'Middle Eastern', 'Mandi', 'Barbecue'],
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:30',
        closes: '23:30',
      },
    ],
    menu: 'https://arabianmajlisatholi.com/menu',
  };

  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-cream selection:bg-green-bright selection:text-cream">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
