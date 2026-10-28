import type { CSSProperties } from 'react';

/* Apple-stijl: woorden lichten op terwijl je scrolt. Pure CSS (animation-timeline), geen JavaScript.
   Zonder ondersteuning of met "minder beweging" staat de tekst gewoon volledig verlicht. */
export function Words({ text }: { text: string }) {
  return (
    <p className="words">
      {text.split(' ').map((w, i) => (
        <span key={i} style={{ '--i': i } as CSSProperties}>
          {w}{' '}
        </span>
      ))}
    </p>
  );
}
