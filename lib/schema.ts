import { gassen, type Gas } from './gassen';
import { faq, type Faq } from './faq';
import { alleOmgevingPlaatsen } from './omgeving';
import { gebieden } from './gebieden';
import { hasRealContact, site } from './site';

const abs = (path: string) => `${site.url}${path}`;

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': abs('/#business'),
    name: site.name,
    url: abs('/'),
    description:
      'Helium, CO₂, lasgassen en propaan bezorgd in Amsterdam en omgeving.',
    image: abs('/og.png'),
    ...(hasRealContact ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.open247
      ? {
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        }
      : {}),
    areaServed: gebieden.map((g) => ({ '@type': 'City', name: g.naam })),
    knowsLanguage: 'nl',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gassen',
      itemListElement: gassen.map((g) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: g.naam, url: abs(`/gassen/${g.slug}/`) },
      })),
    },
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: abs('/'),
    name: site.name,
    inLanguage: 'nl-NL',
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function gasService(g: Gas) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${g.naam} bezorgen`,
    serviceType: 'Gasbezorging',
    provider: { '@id': abs('/#business') },
    areaServed: gebieden.map((x) => ({ '@type': 'City', name: x.naam })),
    url: abs(`/gassen/${g.slug}/`),
    description: g.seoDescription,
  };
}

export function faqPage(items: Faq[] = faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function omgevingService() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gas bezorgen in Amsterdam en omstreken',
    serviceType: 'Gasbezorging',
    provider: { '@id': abs('/#business') },
    areaServed: [{ '@type': 'City', name: 'Amsterdam' }, ...alleOmgevingPlaatsen.map((n) => ({ '@type': 'City', name: n }))],
    url: abs('/bezorggebieden/amsterdam-omgeving/'),
    description: 'Helium, CO₂, lasgassen en propaan bezorgd in heel Amsterdam en omstreken.',
  };
}
