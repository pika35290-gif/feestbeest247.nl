import type { MetadataRoute } from 'next';
import { gassen } from '@/lib/gassen';
import { gebieden } from '@/lib/gebieden';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
    url: `${site.url}${path}`,
    lastModified: site.lastmod,
    changeFrequency,
    priority,
  });

  return [
    page('/', 1, 'weekly'),
    page('/gassen/', 0.9),
    ...gassen.map((g) => page(`/gassen/${g.slug}/`, 0.8)),
    page('/bezorggebieden/', 0.9),
    page('/bezorggebieden/amsterdam-omgeving/', 0.9),
    ...gebieden.map((g) => page(`/bezorggebieden/${g.slug}/`, g.slug === 'amsterdam' ? 0.9 : 0.7)),
    page('/contact/', 0.8),
    page('/veelgestelde-vragen/', 0.6),
    page('/privacy/', 0.2, 'yearly'),
    page('/voorwaarden/', 0.2, 'yearly'),
  ];
}
