export type Gas = {
  slug: string;
  naam: string;
  formule: string;
  kort: string;
  intro: string;
  gebruik: { titel: string; tekst: string }[];
  weetjes: string[];
  veiligheid: string[];
  seoTitle: string;
  seoDescription: string;
};

export const gassen: Gas[] = [
  {
    slug: 'helium',
    naam: 'Helium',
    formule: 'He',
    kort: 'Licht, veilig en feestelijk.',
    intro:
      'Helium is lichter dan lucht en niet brandbaar. Daarom laat het ballonnen zweven en is het dé keuze voor feesten, evenementen en winkelopeningen.',
    gebruik: [
      { titel: 'Ballonnen', tekst: 'Folieballonnen en latexballonnen voor verjaardagen, bruiloften en babyshowers.' },
      { titel: 'Evenementen', tekst: 'Ballonbogen en decoraties voor feesten, beurzen en openingen.' },
      { titel: 'Winkel en horeca', tekst: 'Opvallen bij acties, openingen en terrasdagen.' },
    ],
    weetjes: [
      'Helium is een edelgas en reageert niet met andere stoffen.',
      'Hoe lang een ballon blijft zweven hangt af van het type ballon en de temperatuur.',
    ],
    veiligheid: [
      'Adem helium nooit rechtstreeks uit een fles in. Het verdringt zuurstof.',
      'Gebruik helium in een ruimte met voldoende frisse lucht.',
      'Zet de fles rechtop en vast, uit de zon en niet in een warme auto.',
    ],
    seoTitle: 'Helium bezorgen in Amsterdam',
    seoDescription:
      'Helium voor ballonnen laten bezorgen in Amsterdam en omgeving. Voor feesten, evenementen en winkels. Bestel snel via WhatsApp of telefoon.',
  },
  {
    slug: 'co2',
    naam: 'CO₂',
    formule: 'CO₂',
    kort: 'Voor tap, aquarium en keuken.',
    intro:
      'Koolzuurgas (CO₂) is het gas achter bruisend bier en frisdrank, en een basis voor planten in een aquarium. Handig voor horeca, thuis en op locatie.',
    gebruik: [
      { titel: 'Horeca en tap', tekst: 'Koolzuur voor biertap, frisdrankinstallaties en postmix.' },
      { titel: 'Aquarium', tekst: 'CO₂-bemesting voor gezonde waterplanten in je aquarium.' },
      { titel: 'Thuis en op locatie', tekst: 'Voor een bruisende drank bij een feest of event.' },
    ],
    weetjes: [
      'CO₂ is zwaarder dan lucht en zakt naar beneden.',
      'Voor tap en aquarium heb je een drukregelaar nodig die bij CO₂ past.',
    ],
    veiligheid: [
      'Gebruik CO₂ in goed geventileerde ruimtes. In kleine of lage ruimtes verdringt het zuurstof.',
      'Zet de fles altijd rechtop en vast.',
      'Controleer slangen en aansluitingen op lekkage.',
    ],
    seoTitle: 'CO₂ fles bezorgen in Amsterdam',
    seoDescription:
      'CO₂ flessen laten bezorgen in Amsterdam en omgeving. Voor horeca, tap en aquarium. Snel geleverd, bestel via WhatsApp of telefoon.',
  },
  {
    slug: 'lasgassen',
    naam: 'Lasgassen',
    formule: 'Ar',
    kort: 'Argon en mengsels voor een nette las.',
    intro:
      'Voor een schone, sterke las heb je het juiste beschermgas nodig. Wij leveren argon en argon/CO₂-mengsels voor TIG-, MIG- en MAG-lassen.',
    gebruik: [
      { titel: 'TIG-lassen', tekst: 'Zuiver argon voor roestvrij staal, aluminium en fijn werk.' },
      { titel: 'MIG/MAG-lassen', tekst: 'Argon/CO₂-mengsels voor staal in werkplaats en bouw.' },
      { titel: 'Werkplaats en klus', tekst: 'Voor bedrijven, garages en hobbyisten.' },
    ],
    weetjes: [
      'Beschermgas houdt zuurstof uit de lasboog en voorkomt poreuze lassen.',
      'Het juiste mengsel hangt af van het materiaal en de lasmethode.',
    ],
    veiligheid: [
      'Zet de fles altijd rechtop en vast met een ketting of beugel.',
      'Werk in een geventileerde ruimte. Beschermgas verdringt zuurstof.',
      'Gebruik een drukregelaar die past bij het gas.',
    ],
    seoTitle: 'Lasgas bezorgen in Amsterdam',
    seoDescription:
      'Lasgas, argon en argon/CO₂-mengsels laten bezorgen in Amsterdam en omgeving. Voor TIG, MIG en MAG. Bestel via WhatsApp of telefoon.',
  },
  {
    slug: 'propaan-butaan',
    naam: 'Propaan en butaan',
    formule: 'C₃H₈',
    kort: 'Warmte voor buiten en onderweg.',
    intro:
      'Propaan en butaan zijn brandstofgassen voor de barbecue, het terras en de camping. Een eigen vlam, waar je ook bent.',
    gebruik: [
      { titel: 'Barbecue en buitenkeuken', tekst: 'Gas voor de gasbarbecue, plancha en buitenkeuken.' },
      { titel: 'Terrasverwarming', tekst: 'Warmte voor het terras van een café, restaurant of je eigen tuin.' },
      { titel: 'Camping en klussen', tekst: 'Voor kooktoestellen, kachels en brandertjes onderweg.' },
    ],
    weetjes: [
      'Propaan werkt ook bij lage temperaturen, butaan is geschikter voor milde dagen.',
      'Controleer welke aansluiting en regelaar jouw apparaat nodig heeft.',
    ],
    veiligheid: [
      'Gebruik propaan en butaan buiten of in een goed geventileerde ruimte, nooit in een kelder of onder het maaiveld.',
      'Zet de fles rechtop, uit de buurt van open vuur en hitte.',
      'Controleer aansluitingen met zeepwater en let op de geur van gas.',
    ],
    seoTitle: 'Propaan en butaan bezorgen in Amsterdam',
    seoDescription:
      'Propaan en butaan voor barbecue, terras en camping laten bezorgen in Amsterdam en omgeving. Bestel snel via WhatsApp of telefoon.',
  },
];

export const gasBySlug = (slug: string) => gassen.find((g) => g.slug === slug);
