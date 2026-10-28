/* Plaatsen rondom Amsterdam voor de pagina "Gas bezorgen in Amsterdam en omstreken".
   Pas deze lijst aan op jullie echte bezorgrayon: alleen plaatsen die je echt bedient. */

export type Regio = { naam: string; tekst: string; plaatsen: string[] };

export const omgeving: Regio[] = [
  {
    naam: 'Amstelland en Zuid',
    tekst: 'Direct tegen Amsterdam aan, dus meestal het snelst bij je.',
    plaatsen: ['Amstelveen', 'Duivendrecht', 'Ouderkerk aan de Amstel', 'Diemen', 'Uithoorn', 'Aalsmeer'],
  },
  {
    naam: 'Haarlemmermeer en Schiphol',
    tekst: 'Van woonwijk tot bedrijventerrein rond de luchthaven.',
    plaatsen: ['Badhoevedorp', 'Hoofddorp', 'Nieuw-Vennep', 'Schiphol'],
  },
  {
    naam: 'Zaanstreek en Waterland',
    tekst: 'Noordelijk van het IJ, tot aan Purmerend.',
    plaatsen: ['Zaandam', 'Koog aan de Zaan', 'Oostzaan', 'Landsmeer', 'Purmerend', 'Broek in Waterland', 'Monnickendam'],
  },
  {
    naam: 'Kennemerland',
    tekst: 'Westelijk richting Haarlem en de duinen.',
    plaatsen: ['Halfweg', 'Haarlem', 'Heemstede', 'Bloemendaal'],
  },
  {
    naam: 'Gooi en Flevoland',
    tekst: 'Oostelijk langs het IJmeer.',
    plaatsen: ['Weesp', 'Muiden', 'Almere'],
  },
];

export const alleOmgevingPlaatsen = omgeving.flatMap((r) => r.plaatsen);

export const omgevingFaq = [
  {
    q: 'Bezorgen jullie in heel Amsterdam en omstreken?',
    a: 'Ja, in alle stadsdelen van Amsterdam en in de plaatsen eromheen die je hierboven ziet. Staat jouw plaats er niet bij? Stuur ons je adres, dan kijken we wat er kan.',
  },
  {
    q: 'Kost bezorgen buiten Amsterdam extra?',
    a: 'Je hoort de totaalprijs bij je bestelling, voordat we gaan rijden. Die hangt af van het gas, het aantal flessen en de plaats.',
  },
  {
    q: 'Hoe snel kan het bij mij zijn?',
    a: 'Dat hangt af van waar je zit en hoe druk het is. Stuur een bericht of bel, dan hoor je direct wanneer de koerier kan komen.',
  },
];
