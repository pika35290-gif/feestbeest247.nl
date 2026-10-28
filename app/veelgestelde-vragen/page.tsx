import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import type { CSSProperties } from 'react';
import { CallButton, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { faq } from '@/lib/faq';
import { breadcrumbs, faqPage } from '@/lib/schema';

export const metadata: Metadata = pageMeta({
  title: 'Veelgestelde vragen over gas bezorgen',
  description: 'Antwoorden op veelgestelde vragen: welke gassen, waar we bezorgen, hoe je bestelt, bereikbaarheid en veilig gebruik.',
  path: '/veelgestelde-vragen/',
});

export default function Vragen() {
  return (
    <>
      <JsonLd
        data={[
          faqPage(),
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Veelgestelde vragen', path: '/veelgestelde-vragen/' },
          ]),
        ]}
      />
      <section className="phero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Veelgestelde vragen</li>
          </ol>
          <h1>Veelgestelde vragen.</h1>
          <p className="lead in" style={{ '--d': 100 } as CSSProperties}>Staat je vraag er niet bij? Stuur ons gerust een bericht.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="faq" data-r="">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: '3rem' }}>
            <WhatsAppButton where="faq" />
            <CallButton where="faq" />
          </div>
        </div>
      </section>
    </>
  );
}
