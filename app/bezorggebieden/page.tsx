import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import type { CSSProperties } from 'react';
import { CallButton, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { gebieden } from '@/lib/gebieden';
import { breadcrumbs } from '@/lib/schema';

export const metadata: Metadata = pageMeta({
  title: 'Bezorggebieden: Amsterdam, Amstelveen, Zaandam, Haarlem, Almere',
  description: 'Wij bezorgen gas in heel Amsterdam en in Amstelveen, Zaandam, Haarlem en Almere. Bekijk alle bezorggebieden en bestel via WhatsApp of telefoon.',
  path: '/bezorggebieden/',
});

export default function Bezorggebieden() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Bezorggebieden', path: '/bezorggebieden/' },
        ])}
      />
      <section className="phero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Bezorggebieden</li>
          </ol>
          <h1>Bezorggebieden.</h1>
          <p className="lead in" style={{ '--d': 100 } as CSSProperties}>
            Heel Amsterdam en de steden eromheen. Staat jouw plaats er niet bij? Stuur ons je adres, dan kijken we wat er kan.
          </p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="areas">
            <Link href="/bezorggebieden/amsterdam-omgeving/" className="area" data-r="" style={{ gridColumn: '1 / -1' }}>
              <h2 className="h3">Heel Amsterdam en omstreken</h2>
              <p>Van Purmerend tot Hoofddorp en van Haarlem tot Almere: alle plaatsen rond Amsterdam op een rij.</p>
              <span className="more">Bekijk de hele regio &rsaquo;</span>
            </Link>
            {gebieden.map((g, i) => (
              <Link key={g.slug} href={`/bezorggebieden/${g.slug}/`} className="area" data-r="" style={{ '--o': `${(i % 2) * 8}%` } as CSSProperties}>
                <h2 className="h3">{g.naam}</h2>
                <p>{g.intro}</p>
                <div className="chips" aria-hidden="true">
                  {g.wijken.slice(0, 4).map((w) => (
                    <span key={w} className="chip sm">{w}</span>
                  ))}
                </div>
                <span className="more">Bekijk {g.naam} &rsaquo;</span>
              </Link>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: '3rem' }}>
            <WhatsAppButton where="gebieden" />
            <CallButton where="gebieden" />
          </div>
        </div>
      </section>
    </>
  );
}
