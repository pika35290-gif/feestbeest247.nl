import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import { CallButton, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { gasBySlug, gassen } from '@/lib/gassen';
import { gebieden } from '@/lib/gebieden';
import { breadcrumbs, gasService } from '@/lib/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return gassen.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = gasBySlug(slug);
  if (!g) return {};
  return pageMeta({ title: g.seoTitle, description: g.seoDescription, path: `/gassen/${g.slug}/` });
}

export default async function GasPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = gasBySlug(slug);
  if (!g) notFound();
  const others = gassen.filter((x) => x.slug !== g.slug);

  return (
    <>
      <JsonLd
        data={[
          gasService(g),
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Gassen', path: '/gassen/' },
            { name: g.naam, path: `/gassen/${g.slug}/` },
          ]),
        ]}
      />
      <section className="phero gas">
        <div className="wrap phero-in">
          <div>
            <ol className="crumbs">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/gassen/">Gassen</Link></li>
              <li aria-current="page">{g.naam}</li>
            </ol>
            <h1>{g.seoTitle}.</h1>
            <p className="lead in" style={{ '--d': 100 } as CSSProperties}>{g.intro}</p>
            <div className="cta-row in" style={{ '--d': 200 } as CSSProperties}>
              <WhatsAppButton where={`gas-${g.slug}`} text={`Hallo, ik wil graag ${g.naam} bestellen.`} />
              <CallButton where={`gas-${g.slug}`} />
            </div>
          </div>
          <div className="hero-glyph" aria-hidden="true">
            <span data-l={g.formule.length > 3 ? 4 : 2}>{g.formule}</span>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head" data-r="l">
            <p className="eyebrow">Waarvoor?</p>
            <h2 className="h2">Gebruik van {g.naam}.</h2>
          </div>
          <div className="cards c3">
            {g.gebruik.map((u, i) => (
              <div key={u.titel} className="card" data-r="" style={{ '--o': `${i * 8}%` } as CSSProperties}>
                <h3>{u.titel}</h3>
                <p>{u.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap two">
          <div data-r="l">
            <p className="eyebrow">Goed om te weten</p>
            <h2 className="h2">Het belangrijkste in het kort.</h2>
            <ul className="ticks ink" style={{ marginTop: '1.8rem' }}>
              {g.weetjes.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
          <div data-r="">
            <p className="eyebrow">Veilig gebruik</p>
            <h2 className="h2">Veiligheid eerst.</h2>
            <ul className="ticks ink" style={{ marginTop: '1.8rem' }}>
              {g.veiligheid.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <p className="note">
              Lees altijd de aanwijzingen op de fles en in de gebruiksaanwijzing van je apparatuur. Twijfel je? Vraag het ons, we denken graag mee.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head center" data-r="">
            <h2 className="h2">Bezorgd in jouw stad.</h2>
            <p className="lead">{g.naam} bezorgen we in Amsterdam en de steden eromheen.</p>
          </div>
          <div className="chips" style={{ justifyContent: 'center' }} data-r="s">
            {gebieden.map((x) => (
              <Link key={x.slug} className="chip" href={`/bezorggebieden/${x.slug}/`}>
                {x.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head" data-r="l">
            <h2 className="h2">Andere gassen.</h2>
          </div>
          <div className="cards c3">
            {others.map((o) => (
              <Link key={o.slug} href={`/gassen/${o.slug}/`} className="area" data-r="">
                <h3 className="h3">{o.naam}</h3>
                <p>{o.kort}</p>
                <span className="more">Meer informatie &rsaquo;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
