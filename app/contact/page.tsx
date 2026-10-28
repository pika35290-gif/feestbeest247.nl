import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import type { CSSProperties } from 'react';
import { CallButton, WhatsAppButton } from '@/components/Buttons';
import { JsonLd } from '@/components/JsonLd';
import { OrderForm } from '@/components/OrderForm';
import { breadcrumbs, localBusiness } from '@/lib/schema';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  title: 'Contact en bestellen',
  description: 'Gas bestellen in Amsterdam en omgeving? Bel, stuur een WhatsApp of gebruik het bestelformulier. Dag en nacht bereikbaar.',
  path: '/contact/',
});

export default function Contact() {
  return (
    <>
      <JsonLd data={[localBusiness(), breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])]} />
      <section className="phero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Contact</li>
          </ol>
          <h1>Contact en bestellen.</h1>
          <p className="lead in" style={{ '--d': 100 } as CSSProperties}>
            {site.hoursText}. Kies hoe je het liefst bestelt.
          </p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap two">
          <div data-r="l">
            <h2 className="h2">Direct contact.</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>Het snelst gaat het met een bericht of een telefoontje.</p>
            <div className="contact-list">
              <WhatsAppButton where="contact" />
              <CallButton where="contact" />
              {site.email && (
                <a className="btn ghost" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              )}
            </div>
            <p className="hours">{site.hoursText}. Bezorgd in Amsterdam, Amstelveen, Zaandam, Haarlem en Almere.</p>
          </div>
          <div id="bestellen" data-r="">
            <h2 className="h2" style={{ marginBottom: '1.4rem' }}>Online bestellen.</h2>
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
