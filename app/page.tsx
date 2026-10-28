import Link from '@/components/Link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { CallButton, OrderLink, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { LiveWidgets } from '@/components/LiveWidgets';
import { Words } from '@/components/Words';
import { gassen } from '@/lib/gassen';
import { pageMeta } from '@/lib/meta';
import { gebieden } from '@/lib/gebieden';
import { faq } from '@/lib/faq';
import { localBusiness, website } from '@/lib/schema';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  title: `Gas bezorgen in Amsterdam | ${site.name}`,
  description:
    'Helium, CO₂, lasgassen en propaan laten bezorgen in Amsterdam, Amstelveen, Zaandam, Haarlem en Almere. Dag en nacht bereikbaar. Bestel snel via WhatsApp of telefoon.',
  path: '/',
  home: true,
});

const ticker = [
  { n: 'Helium', gas: true },
  { n: 'Amsterdam' },
  { n: 'CO\u2082', gas: true },
  { n: 'Amstelveen' },
  { n: 'Lasgas', gas: true },
  { n: 'Zaandam' },
  { n: 'Propaan', gas: true },
  { n: 'Haarlem' },
  { n: 'Almere' },
];

const delay = (ms: number) => ({ '--d': ms }) as CSSProperties;
const off = (o: number) => ({ '--o': `${o}%` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <JsonLd data={[localBusiness(), website()]} />

      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-beam" aria-hidden="true" />
        <div className="hero-spot" aria-hidden="true" />
        <div className="wrap hero-in">
          <p className="pill in" style={delay(0)}>
            <span className="dot" aria-hidden="true" />
            {site.hoursText}
          </p>
          <h1 className="display">
            <span className="shine">Gas bezorgd in Amsterdam.</span>
            <span className="shine dim">Zonder gedoe.</span>
          </h1>
          <p className="lead in" style={delay(120)}>
            Helium, CO&#8322;, lasgassen en propaan. Wij brengen het naar je toe, in Amsterdam en omgeving.
          </p>
          <div className="cta-row in" style={delay(220)}>
            <WhatsAppButton where="hero" />
            <CallButton where="hero" className="" />
          </div>
        </div>
        <ul className="wrap stage">
          {gassen.map((g) => (
            <li key={g.slug}>
              <a href={`/gassen/${g.slug}/`} className="fm">
                <b>{g.formule}</b>
                <span>{g.naam}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="mq">
          {[0, 1].flatMap((k) =>
            ticker.map((t) => (
              <span key={`${k}-${t.n}`} className={t.gas ? 'f' : undefined}>
                {t.n}
              </span>
            )),
          )}
        </div>
      </div>

      <LiveWidgets />

      <section className="sec statement">
        <div className="wrap">
          <p className="eyebrow">Wat we doen</p>
          <Words text="Helium voor het feest. CO₂ voor de tap. Lasgas voor het werk. Propaan voor het terras. Wij brengen het." />
        </div>
      </section>

      <section className="sec" id="gassen">
        <div className="wrap">
          <div className="sec-head center" data-r="">
            <p className="eyebrow">Onze gassen</p>
            <h2 className="h2">Kies je gas.</h2>
            <p className="lead">Vier gassen, snel bij je thuisbezorgd. Tik op een gas voor alle details.</p>
          </div>
          <div className="bento">
            {gassen.map((g, i) => (
              <Link
                key={g.slug}
                href={`/gassen/${g.slug}/`}
                className="tile"
                style={off(i % 2 ? 6 : 0)}
                data-r={i % 2 ? 's' : 's'}
              >
                <h3>{g.naam}</h3>
                <p>{g.kort}</p>
                <span className="more">Meer informatie</span>
                <span className="glyph" data-l={g.formule.length > 3 ? 4 : 2} aria-hidden="true">{g.formule}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt" id="gebruik">
        <div className="wrap">
          <div className="sec-head center" data-r="">
            <p className="eyebrow">Waarvoor?</p>
            <h2 className="h2">Welk gas past bij jou?</h2>
          </div>
          <div className="seg" data-r="">
            <div className="seg-bar" role="radiogroup" aria-label="Waarvoor heb je gas nodig?">
              <input type="radio" name="u" id="u1" defaultChecked />
              <label htmlFor="u1">Feest</label>
              <input type="radio" name="u" id="u2" />
              <label htmlFor="u2">Horeca</label>
              <input type="radio" name="u" id="u3" />
              <label htmlFor="u3">Werk</label>
              <input type="radio" name="u" id="u4" />
              <label htmlFor="u4">Thuis</label>
              <span className="thumb" aria-hidden="true" />
            </div>
            <div className="panel" id="p1">
              <h3 className="h3">Voor een feest of evenement</h3>
              <p>Ballonnen zweven met helium. Ideaal voor verjaardagen, bruiloften, openingen en beurzen.</p>
              <div className="tags">
                <Link className="tag" href="/gassen/helium/">Helium</Link>
              </div>
            </div>
            <div className="panel" id="p2">
              <h3 className="h3">Voor café, restaurant en terras</h3>
              <p>Koolzuur voor de tap en propaan voor terrasverwarming en keuken. Op tijd geleverd, zodat je door kunt.</p>
              <div className="tags">
                <Link className="tag" href="/gassen/co2/">CO&#8322;</Link>
                <Link className="tag" href="/gassen/propaan-butaan/">Propaan en butaan</Link>
              </div>
            </div>
            <div className="panel" id="p3">
              <h3 className="h3">Voor werkplaats en bouw</h3>
              <p>Argon en argon/CO&#8322;-mengsels voor TIG-, MIG- en MAG-lassen. Geen stilstand omdat de fles leeg is.</p>
              <div className="tags">
                <Link className="tag" href="/gassen/lasgassen/">Lasgassen</Link>
                <Link className="tag" href="/gassen/propaan-butaan/">Propaan en butaan</Link>
              </div>
            </div>
            <div className="panel" id="p4">
              <h3 className="h3">Voor thuis en in de tuin</h3>
              <p>Gas voor de barbecue, CO&#8322; voor je aquarium of helium voor een verjaardag. Je hoeft er niet voor de deur uit.</p>
              <div className="tags">
                <Link className="tag" href="/gassen/propaan-butaan/">Propaan en butaan</Link>
                <Link className="tag" href="/gassen/co2/">CO&#8322;</Link>
                <Link className="tag" href="/gassen/helium/">Helium</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="werkwijze">
        <div className="wrap">
          <div className="sec-head" data-r="l">
            <p className="eyebrow">Zo werkt het</p>
            <h2 className="h2">Bestellen in drie stappen.</h2>
          </div>
          <div className="steps">
            <div className="step" data-r="" style={off(0)}>
              <em>1</em>
              <div>
                <h3 className="h3">Kies en bestel</h3>
                <p>Stuur een WhatsApp, bel ons of vul het formulier in. Welk gas, hoeveel flessen, waar naartoe.</p>
              </div>
            </div>
            <div className="step" data-r="" style={off(8)}>
              <em>2</em>
              <div>
                <h3 className="h3">Wij rijden</h3>
                <p>Je hoort de prijs voordat we gaan rijden. De koerier laat weten wanneer hij onderweg is.</p>
              </div>
            </div>
            <div className="step" data-r="" style={off(16)}>
              <em>3</em>
              <div>
                <h3 className="h3">Bezorgd</h3>
                <p>Je gas staat voor de deur. Klaar om te gebruiken.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="veilig">
        <div className="wrap safe">
          <div data-r="l">
            <p className="eyebrow">Veilig gebruik</p>
            <h2 className="h2">Gas is veilig als je weet hoe.</h2>
            <p className="lead">Elke gaspagina heeft zijn eigen tips. Dit zijn de basisregels voor alle gassen.</p>
          </div>
          <ul className="ticks" data-r="">
            <li>Zet de fles altijd rechtop en vast.</li>
            <li>Zorg voor goede ventilatie, zeker in kleine ruimtes.</li>
            <li>Gebruik een drukregelaar die bij het gas past.</li>
            <li>Houd flessen uit de zon en uit de buurt van open vuur.</li>
            <li>Controleer slangen en aansluitingen op lekkage.</li>
          </ul>
        </div>
      </section>

      <section className="sec" id="gebieden">
        <div className="wrap">
          <div className="sec-head center" data-r="">
            <p className="eyebrow">Bezorggebieden</p>
            <h2 className="h2">Amsterdam en omgeving.</h2>
            <p className="lead">Alle stadsdelen van Amsterdam, plus de steden eromheen.</p>
          </div>
          <div className="chips" style={{ justifyContent: 'center' }} data-r="s">
            <Link className="chip" href="/bezorggebieden/amsterdam-omgeving/">
              Heel Amsterdam e.o. &rsaquo;
            </Link>
            {gebieden.map((g) => (
              <Link key={g.slug} className="chip" href={`/bezorggebieden/${g.slug}/`}>
                {g.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt" id="vragen">
        <div className="wrap">
          <div className="sec-head center" data-r="">
            <h2 className="h2">Veelgestelde vragen.</h2>
          </div>
          <div className="faq" data-r="">
            {faq.slice(0, 5).map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
          <p className="center" style={{ marginTop: '2rem' }}>
            <Link href="/veelgestelde-vragen/">Alle vragen bekijken &rsaquo;</Link>
          </p>
        </div>
      </section>

      <section className="final">
        <div className="wrap" data-r="s">
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem,7.5vw,5rem)' }}>
            Gas nodig? <span className="grad">Nu.</span>
          </h2>
          <p className="lead">{site.hoursText}. Stuur een bericht of bel, dan rijden wij.</p>
          <div className="cta-row">
            <WhatsAppButton where="final" />
            <CallButton where="final" />
            <OrderLink className="" />
          </div>
        </div>
      </section>
    </>
  );
}
