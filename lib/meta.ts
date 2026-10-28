import type { Metadata } from 'next';
import { ogImages } from './og';
import { site } from './site';

type Input = { title: string; description: string; path: string; home?: boolean };

/* Eén plek voor canonical, Open Graph en Twitter, zodat elke pagina een eigen, kloppende set heeft. */
export function pageMeta({ title, description, path, home }: Input): Metadata {
  const full = home ? title : `${title} | ${site.name}`;
  return {
    title: home ? { absolute: full } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      siteName: site.name,
      url: path,
      title: full,
      description,
      images: ogImages,
    },
    twitter: { card: 'summary_large_image', title: full, description, images: ogImages.map((i) => i.url) },
  };
}
