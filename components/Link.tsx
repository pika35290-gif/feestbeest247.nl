import type { AnchorHTMLAttributes } from 'react';

/* Gewone <a>: voor een statische site zijn volledige paginawissels van een paar KB sneller
   en robuuster dan client-side routing (geen RSC-prefetch, werkt op elke statische host).
   Vloeiende overgangen komen van CSS view-transitions. */
export default function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />;
}
