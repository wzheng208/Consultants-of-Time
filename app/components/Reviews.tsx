'use client';

import { useEffect, useMemo, useState } from 'react';
import { reviews } from '../data/reviews';

export default function Reviews() {
  const [page, setPage] = useState(0);

  // Total "pages" depends on how many we show at once.
  // We'll render 1/2/3 via CSS, but compute pages assuming 3-at-a-time
  // to keep rotation sensible on desktop.
  const perPage = 3;
  const pageCount = Math.max(1, Math.ceil(reviews.length / perPage));

  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  useEffect(() => {
    const id = window.setInterval(next, 7000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  const start = page * perPage;

  // Always pick up to 3 reviews; on smaller screens CSS will just hide extras.
  const visible = useMemo(() => {
    const slice = reviews.slice(start, start + perPage);
    // If we’re near the end and have fewer than 3, wrap around for a full set
    if (slice.length < perPage) {
      return slice.concat(reviews.slice(0, perPage - slice.length));
    }
    return slice;
  }, [start]);

  const dots = useMemo(
    () => Array.from({ length: pageCount }, (_, i) => i),
    [pageCount]
  );

  return (
    <section
      id='reviews'
      className='mx-auto max-w-6xl px-4 py-12'
    >
      <div className='flex items-end justify-between gap-4'>
        <div>
          <p className='text-xs uppercase tracking-[0.28em] text-[var(--muted)]'>
            Reviews
          </p>
          <h2 className='mt-2 text-2xl font-semibold tracking-tight'>
            What clients say
          </h2>
          <div className='mt-3 space-y-4 text-[var(--muted)] leading-relaxed'>
            <p>
              What Our Clients Say We value long-term relationships with our
              clients and provide ongoing support and communication for all
              their timepiece-related needs. Whether it&apos;s upgrading a timepiece,
              facilitating a trade-in, or sourcing a specific piece, we are
              dedicated to meeting the needs of our clients
            </p>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={prev}
            className='rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm font-semibold hover:bg-[var(--accent-soft)] transition'
            aria-label='Previous reviews'
          >
            ←
          </button>
          <button
            type='button'
            onClick={next}
            className='rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm font-semibold hover:bg-[var(--accent-soft)] transition'
            aria-label='Next reviews'
          >
            →
          </button>
        </div>
      </div>

      <div className='mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {visible.map((r, idx) => (
          <article
            key={`${page}-${idx}-${r.name}`}
            className={`
              rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6
              transition hover:bg-[var(--accent-soft)]
              ${idx === 1 ? 'hidden md:block' : ''}
              ${idx === 2 ? 'hidden lg:block' : ''}
            `}
          >
            <div className='text-4xl leading-none text-[var(--accent)]'>“</div>
            <p className='mt-3 text-sm leading-relaxed text-[var(--foreground)]'>
              {r.text}
            </p>

            <div className='mt-6'>
              <div className='text-sm font-semibold'>{r.name}</div>
              <div className='text-sm text-[var(--muted)]'>{r.location}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className='mt-5 flex items-center justify-center gap-2'>
        {dots.map((d) => (
          <button
            key={d}
            type='button'
            onClick={() => setPage(d)}
            className={`h-2.5 w-2.5 rounded-full border border-[var(--border)] transition ${
              d === page
                ? 'bg-[var(--accent)]'
                : 'bg-[var(--card)] hover:bg-[var(--accent-soft)]'
            }`}
            aria-label={`Go to review set ${d + 1}`}
          />
        ))}
      </div>

      <p className='mt-4 text-xs text-[var(--muted)] text-center'>
        Replace with verified client feedback.
      </p>
    </section>
  );
}
