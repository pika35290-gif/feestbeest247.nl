import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { Analytics } from '@/components/Analytics';
import { ogImages } from '@/lib/og';
import { behaviorScript } from '@/lib/behavior';
import { site } from '@/lib/site';

const description =
  'Helium, CO₂, lasgassen en propaan laten bezorgen in Amsterdam, Amstelveen, Zaandam, Haarlem en Almere. Dag en nacht bereikbaar. Bestel snel via WhatsApp of telefoon.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Gas bezorgen in Amsterdam | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: site.name,
    title: `Gas bezorgen in Amsterdam | ${site.name}`,
    description,
    images: ogImages,
  },
  twitter: { card: 'summary_large_image', images: ogImages.map((i) => i.url) },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <a className="skip" href="#main">
          Direct naar de inhoud
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <Analytics />
        <script dangerouslySetInnerHTML={{ __html: behaviorScript(site.adsConversion) }} />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ prerender: [{ where: { href_matches: '/*' }, eagerness: 'moderate' }] }),
          }}
        />
      </body>
    </html>
  );
}
