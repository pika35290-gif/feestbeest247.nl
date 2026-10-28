export type Gebied = {
  slug: string;
  naam: string;
  /* Hart van de stad, voor de optionele "waar ben ik"-check op de homepage (rekent lokaal, stuurt niets weg). */
  lat: number;
  lng: number;
  wijken: string[];
  intro: string;
  tekst: string;
  seoTitle: string;
  seoDescription: string;
};

export const gebieden: Gebied[] = [
  {
    slug: 'amsterdam',
    lat: 52.3676,
    lng: 4.9041,
    naam: 'Amsterdam',
    wijken: ['Centrum', 'West', 'Oost', 'Zuid', 'Noord', 'Nieuw-West', 'Zuidoost'],
    intro: 'In alle stadsdelen van Amsterdam bezorgen we gas aan de deur.',
    tekst:
      'Van een grachtenpand in het Centrum tot een werkplaats in Noord: we rijden door heel Amsterdam. Een paar flessen helium voor een feest, CO₂ voor je tap of propaan voor het terras, we brengen het tot waar jij bent.',
    seoTitle: 'Gas bezorgen in Amsterdam',
    seoDescription:
      'Helium, CO₂, lasgassen en propaan laten bezorgen in heel Amsterdam: Centrum, West, Oost, Zuid, Noord, Nieuw-West en Zuidoost. Dag en nacht bereikbaar.',
  },
  {
    slug: 'amstelveen',
    lat: 52.3114,
    lng: 4.8722,
    naam: 'Amstelveen',
    wijken: ['Groenelaan', 'Westwijk', 'Randwijck', 'Bovenkerk', 'Kostverloren', 'Waardhuizen'],
    intro: 'Gas bezorgd in Amstelveen, ook voor bedrijven en kantoren.',
    tekst:
      'Amstelveen ligt direct naast Amsterdam, dus je hoeft niet lang te wachten. We leveren aan particulieren, bedrijven en horeca in alle wijken.',
    seoTitle: 'Gas bezorgen in Amstelveen',
    seoDescription:
      'Helium, CO₂, lasgassen en propaan laten bezorgen in Amstelveen. Voor particulieren, bedrijven en horeca. Bestel via WhatsApp of telefoon.',
  },
  {
    slug: 'zaandam',
    lat: 52.4391,
    lng: 4.8294,
    naam: 'Zaandam',
    wijken: ['Zaandam Centrum', 'Poelenburg', 'Kogerveld', 'Peldersveld'],
    intro: 'Van werkplaats tot woonwijk: gas bezorgd in Zaandam.',
    tekst:
      'In Zaandam leveren we lasgassen en CO₂ aan werkplaatsen en horeca, maar ook helium en propaan voor thuis en voor feesten.',
    seoTitle: 'Gas bezorgen in Zaandam',
    seoDescription:
      'Helium, CO₂, lasgassen en propaan laten bezorgen in Zaandam en omgeving. Bestel via WhatsApp of telefoon.',
  },
  {
    slug: 'haarlem',
    lat: 52.3874,
    lng: 4.6462,
    naam: 'Haarlem',
    wijken: ['Centrum', 'Noord', 'Oost', 'Zuid-West', 'Schalkwijk'],
    intro: 'Gas bezorgd in Haarlem voor feest, horeca en werk.',
    tekst:
      'Een terras in het centrum, een feest in Schalkwijk of een garage in Haarlem-Noord: we brengen het gas waar het nodig is.',
    seoTitle: 'Gas bezorgen in Haarlem',
    seoDescription:
      'Helium, CO₂, lasgassen en propaan laten bezorgen in Haarlem en omgeving. Bestel via WhatsApp of telefoon.',
  },
  {
    slug: 'almere',
    lat: 52.3508,
    lng: 5.2647,
    naam: 'Almere',
    wijken: ['Almere Stad', 'Almere Buiten', 'Almere Haven', 'Almere Poort', 'Almere Hout'],
    intro: 'Gas bezorgd in alle wijken van Almere.',
    tekst:
      'Ook in Almere komen we langs. Handig voor een tuinfeest, een barbecue of een klus in de garage.',
    seoTitle: 'Gas bezorgen in Almere',
    seoDescription:
      'Helium, CO₂, lasgassen en propaan laten bezorgen in Almere. Bestel via WhatsApp of telefoon.',
  },
];

export const gebiedBySlug = (slug: string) => gebieden.find((g) => g.slug === slug);
