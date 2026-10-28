import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import type { CSSProperties } from 'react';
import { CallButton, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { gassen } from '@/lib/gassen';
import { breadcrumbs } from '@/lib/schema';

export const metadata: Metadata = pageMeta({
  title: 'Gassen: helium, CO₂, lasgas en propaan',
  description: 'Alle gassen die wij bezorgen in Amsterdam en omgeving: helium voor ballonnen, CO₂ voor tap en aquarium, lasgassen en propaan/butaan. Bestel via WhatsApp of telefoon.',
  path: '/gassen/',
});

export default function Gassen() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Gassen', path: '/gassen/' }])} />
      <section className="phero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Gassen</li>
          </ol>
          <h1>Onze gassen.</h1>
          <p className="lead in" style={{ '--d': 100 } as CSSProperties}>
            Vier soorten gas, dag en nacht te bestellen en snel bezorgd in Amsterdam en omgeving.
          </p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="bento">
            {gassen.map((g) => (
              <Link
                key={g.slug}
                href={`/gassen/${g.slug}/`}
                className="tile"
                data-r="s"
              >
                <h2 className="h3" style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)' }}>{g.naam}</h2>
                <p>{g.kort}</p>
                <span className="more">Meer informatie</span>
                <span className="glyph" data-l={g.formule.length > 3 ? 4 : 2} aria-hidden="true">{g.formule}</span>
              </Link>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: '3rem' }}>
            <WhatsAppButton where="gassen" />
            <CallButton where="gassen" />
          </div>
        </div>
      </section>
    </>
  );
}
