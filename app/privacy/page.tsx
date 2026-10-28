import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  title: 'Privacyverklaring',
  description: `Zo gaat ${site.name} om met je persoonsgegevens.`,
  path: '/privacy/',
});

export default function Privacy() {
  return (
    <section className="phero">
      <div className="wrap prose">
        <ol className="crumbs">
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">Privacy</li>
        </ol>
        <h1>Privacyverklaring.</h1>
        <p>Laatst bijgewerkt: {site.updated}.</p>

        <h2>Wie zijn wij?</h2>
        <p>
          {site.legalName} bezorgt gas in Amsterdam en omgeving. {site.kvk && <>KvK-nummer {site.kvk}. </>}
          Je bereikt ons via {site.phoneText}
          {site.email && <> of {site.email}</>}.
        </p>

        <h2>Welke gegevens gebruiken wij?</h2>
        <p>Alleen wat nodig is om je bestelling te bezorgen:</p>
        <ul>
          <li>je naam en telefoonnummer;</li>
          <li>je bezorgadres en je bestelling (gas, aantal flessen, opmerkingen).</li>
        </ul>
        <p>
          Bestel je via WhatsApp of het formulier, dan stuur je deze gegevens zelf naar ons toe. Het formulier op
          deze site slaat niets op: het opent WhatsApp met je bericht.
        </p>

        <h2>Waarvoor gebruiken wij ze?</h2>
        <p>
          Om je bestelling te ontvangen, te bevestigen en te bezorgen, en om contact met je op te nemen als er iets
          is met je levering. Wij verkopen je gegevens niet.
        </p>

        <h2>Hoe lang bewaren wij ze?</h2>
        <p>
          Niet langer dan nodig voor de bezorging en de administratie. Facturen bewaren we zo lang als de
          belastingwet vraagt.
        </p>

        <h2>Cookies en meten</h2>
        <p>
          Deze site gebruikt standaard geen cookies. Als wij meetinstrumenten zoals Google Analytics of Google Ads
          inschakelen, doen we dat pas nadat je daar toestemming voor geeft in de cookiemelding. Je kunt je keuze
          altijd wijzigen door de gegevens van deze site in je browser te wissen.
        </p>

        <h2>Je rechten</h2>
        <p>
          Je mag je gegevens inzien, laten verbeteren of laten verwijderen. Neem contact met ons op, dan regelen we
          dat. Ben je het niet eens met hoe wij met je gegevens omgaan, dan kun je een klacht indienen bij de
          Autoriteit Persoonsgegevens.
        </p>
      </div>
    </section>
  );
}
