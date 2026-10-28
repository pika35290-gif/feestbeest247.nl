import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import Link from '@/components/Link';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  title: 'Voorwaarden',
  description: `Algemene voorwaarden van ${site.name} voor het bestellen en bezorgen van gas.`,
  path: '/voorwaarden/',
});

export default function Voorwaarden() {
  return (
    <section className="phero">
      <div className="wrap prose">
        <ol className="crumbs">
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">Voorwaarden</li>
        </ol>
        <h1>Voorwaarden.</h1>
        <p>Laatst bijgewerkt: {site.updated}.</p>

        <h2>Bestellen</h2>
        <p>
          Je bestelling is definitief zodra wij hem bevestigen en de totaalprijs met je hebben afgestemd. De prijs
          die we noemen is de prijs die je betaalt.
        </p>

        <h2>Bezorging</h2>
        <p>
          We bezorgen in Amsterdam, Amstelveen, Zaandam, Haarlem en Almere. Een verwachte bezorgtijd is een
          inschatting, geen vaste afspraak. Is er niemand aanwezig op het adres, dan nemen wij telefonisch contact
          met je op.
        </p>

        <h2>Gebruik van gas</h2>
        <p>
          Je bent zelf verantwoordelijk voor veilig gebruik en opslag van het gas, volgens de aanwijzingen op de fles
          en de gebruiksaanwijzing van je apparatuur. We leveren gassen voor de doeleinden die op deze site staan.
        </p>

        <h2>Klachten</h2>
        <p>
          Is er iets mis met je bestelling? Laat het ons zo snel mogelijk weten via {site.phoneText}
          {site.email && <> of {site.email}</>}. We zoeken samen naar een oplossing.
        </p>

        <h2>Toepasselijk recht</h2>
        <p>Op alle bestellingen is Nederlands recht van toepassing.</p>
      </div>
    </section>
  );
}
