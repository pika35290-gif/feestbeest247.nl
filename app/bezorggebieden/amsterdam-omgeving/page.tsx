import type { Metadata } from 'next';
import Link from '@/components/Link';
import type { CSSProperties } from 'react';
import { CallButton, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { gassen } from '@/lib/gassen';
import { gebieden } from '@/lib/gebieden';
import { omgeving, omgevingFaq } from '@/lib/omgeving';
import { pageMeta } from '@/lib/meta';
import { breadcrumbs, omgevingService, faqPage } from '@/lib/schema';

export const metadata: Metadata = pageMeta({
  title: 'Gas bezorgen in Amsterdam en omstreken',
  description:
    'Helium, CO₂, lasgassen en propaan bezorgd in heel Amsterdam en omstreken: Amstelveen, Zaandam, Haarlem, Hoofddorp, Purmerend, Almere en meer. Dag en nacht bereikbaar.',
  path: '/bezorggebieden/amsterdam-omgeving/',
});

export default function AmsterdamOmgeving() {
  const hoofdsteden = new Set(gebieden.map((g) => g.naam));
  const slugByNaam = new Map(gebieden.map((g) => [g.naam, g.slug]));

  return (
    <>
      <JsonLd
        data={[
          omgevingService(),
          faqPage(omgevingFaq),
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Bezorggebieden', path: '/bezorggebieden/' },
            { name: 'Amsterdam en omstreken', path: '/bezorggebieden/amsterdam-omgeving/' },
          ]),
        ]}
      />

      <section className="phero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/bezorggebieden/">Bezorggebieden</Link></li>
            <li aria-current="page">Amsterdam en omstreken</li>
          </ol>
          <h1>Gas bezorgen in Amsterdam en omstreken.</h1>
          <p className="lead in" style={{ '--d': 100 } as CSSProperties}>
            Van het Centrum tot Purmerend, van Haarlem tot Almere. Wij brengen helium, CO&#8322;, lasgassen en propaan tot aan je deur, dag en nacht bereikbaar.
          </p>
          <div className="cta-row in" style={{ '--d': 200 } as CSSProperties}>
            <WhatsAppButton where="omgeving" text="Hallo, ik wil graag gas laten bezorgen in de omgeving van Amsterdam." />
            <CallButton where="omgeving" />
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head" data-r="l">
            <p className="eyebrow">Waar we komen</p>
            <h2 className="h2">Een regio, vijf gebieden.</h2>
            <p className="lead">Kies je gebied of bekijk of jouw plaats erbij staat. Plaatsen met een eigen pagina zijn aan te tikken.</p>
          </div>
          <div className="areas">
            {omgeving.map((r, i) => (
              <div key={r.naam} className="area" data-r="" style={{ '--o': `${(i % 2) * 8}%` } as CSSProperties}>
                <h3 className="h3">{r.naam}</h3>
                <p>{r.tekst}</p>
                <div className="chips" style={{ marginTop: '.6rem' }}>
                  {r.plaatsen.map((p) =>
                    hoofdsteden.has(p) ? (
                      <Link key={p} className="chip sm" style={{ cursor: 'pointer' }} href={`/bezorggebieden/${slugByNaam.get(p)}/`}>
                        {p} &rsaquo;
                      </Link>
                    ) : (
                      <span key={p} className="chip sm">{p}</span>
                    ),
                  )}
                </div>
              </div>
            ))}
            <div className="area" data-r="" style={{ '--o': '8%' } as CSSProperties}>
              <h3 className="h3">Amsterdam zelf</h3>
              <p>Alle stadsdelen: Centrum, West, Oost, Zuid, Noord, Nieuw-West en Zuidoost.</p>
              <Link className="more" href="/bezorggebieden/amsterdam/">Gas bezorgen in Amsterdam &rsaquo;</Link>
            </div>
          </div>
          <p className="note">Staat jouw plaats er niet bij? Stuur ons je adres. We bezorgen vaak ook net buiten deze gebieden.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head center" data-r="">
            <p className="eyebrow">Wat we bezorgen</p>
            <h2 className="h2">Vier gassen, overal in de regio.</h2>
          </div>
          <div className="bento" style={{ gap: '.8rem' }}>
            {gassen.map((x, i) => (
              <Link key={x.slug} href={`/gassen/${x.slug}/`} className="area" data-r="" style={{ '--o': `${(i % 2) * 8}%` } as CSSProperties}>
                <h3 className="h3">{x.naam}</h3>
                <p>{x.kort}</p>
                <span className="more">Meer informatie &rsaquo;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head center" data-r="">
            <h2 className="h2">Vragen over bezorgen in de omgeving.</h2>
          </div>
          <div className="faq" data-r="">
            {omgevingFaq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap" data-r="s">
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem,7.5vw,5rem)' }}>
            Gas nodig? <span className="grad">Nu.</span>
          </h2>
          <p className="lead">Stuur een bericht of bel, dan rijden wij.</p>
          <div className="cta-row">
            <WhatsAppButton where="omgeving-final" text="Hallo, ik wil graag gas laten bezorgen in de omgeving van Amsterdam." />
            <CallButton where="omgeving-final" />
          </div>
        </div>
      </section>
    </>
  );
}
