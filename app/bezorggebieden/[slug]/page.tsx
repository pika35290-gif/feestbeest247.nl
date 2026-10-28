import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import { CallButton, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { gassen } from '@/lib/gassen';
import { gebieden, gebiedBySlug } from '@/lib/gebieden';
import { breadcrumbs } from '@/lib/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return gebieden.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = gebiedBySlug(slug);
  if (!g) return {};
  return pageMeta({ title: g.seoTitle, description: g.seoDescription, path: `/bezorggebieden/${g.slug}/` });
}

export default async function GebiedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = gebiedBySlug(slug);
  if (!g) notFound();
  const others = gebieden.filter((x) => x.slug !== g.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Bezorggebieden', path: '/bezorggebieden/' },
          { name: g.naam, path: `/bezorggebieden/${g.slug}/` },
        ])}
      />
      <section className="phero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/bezorggebieden/">Bezorggebieden</Link></li>
            <li aria-current="page">{g.naam}</li>
          </ol>
          <h1>{g.seoTitle}.</h1>
          <p className="lead in" style={{ '--d': 100 } as CSSProperties}>{g.intro}</p>
          <div className="cta-row in" style={{ '--d': 200 } as CSSProperties}>
            <WhatsAppButton where={`gebied-${g.slug}`} text={`Hallo, ik wil graag gas laten bezorgen in ${g.naam}.`} />
            <CallButton where={`gebied-${g.slug}`} />
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap two">
          <div data-r="l">
            <p className="eyebrow">In {g.naam}</p>
            <h2 className="h2">Wij komen langs.</h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>{g.tekst}</p>
          </div>
          <div data-r="">
            <p className="eyebrow">Wijken en buurten</p>
            <div className="chips" style={{ marginTop: '.6rem' }}>
              {g.wijken.map((w) => (
                <span key={w} className="chip sm">{w}</span>
              ))}
            </div>
            <p className="note">Zie je jouw buurt niet staan? Stuur ons je adres, we bezorgen vaak ook net buiten deze wijken.</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head" data-r="l">
            <p className="eyebrow">Wat bezorgen we in {g.naam}?</p>
            <h2 className="h2">Vier gassen, één telefoontje.</h2>
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
            <h2 className="h2">Ook in de buurt.</h2>
          </div>
          <div className="chips" style={{ justifyContent: 'center' }} data-r="s">
            {others.map((x) => (
              <Link key={x.slug} className="chip" href={`/bezorggebieden/${x.slug}/`}>
                {x.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
