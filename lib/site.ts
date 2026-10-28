/* Alle bedrijfsgegevens staan op één plek. Pas ze aan via .env.local of hier. */

const env = (v: string | undefined, fallback: string) => (v && v.trim() ? v.trim() : fallback);

export const site = {
  name: 'Feestbeest 247',
  legalName: 'Feestbeest 247',
  domain: 'feestbeest247.nl',
  url: 'https://feestbeest247.nl',
  tagline: 'Gas bezorgd in Amsterdam',
  /* Contact: bel- en WhatsApp-nummer. Overschrijven kan via .env.local (zie .env.example). */
  phone: env(process.env.NEXT_PUBLIC_PHONE, '+31852128051'),
  phoneText: env(process.env.NEXT_PUBLIC_PHONE_TEXT, '085 212 80 51'),
  whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP, '3197010270187'),
  email: env(process.env.NEXT_PUBLIC_EMAIL, ''),
  kvk: env(process.env.NEXT_PUBLIC_KVK, ''),
  btw: env(process.env.NEXT_PUBLIC_BTW, ''),
  /* Alleen op true laten als jullie echt dag en nacht bereikbaar zijn. */
  open247: true,
  hoursText: 'Dag en nacht bereikbaar',
  /* Optioneel: Google Ads / GA4 / GTM. Leeg = er wordt niets geladen. */
  gtmId: env(process.env.NEXT_PUBLIC_GTM_ID, ''),
  gtagId: env(process.env.NEXT_PUBLIC_GTAG_ID, ''),
  adsConversion: env(process.env.NEXT_PUBLIC_ADS_CONVERSION, ''),
  updated: '28 oktober 2026',
  lastmod: '2026-10-28',
} as const;

export const hasRealContact = true;

export const telHref = `tel:${site.phone}`;

export function waHref(text = 'Hallo, ik wil graag gas bestellen.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
