export default function Services() {
  return (
    <section
      id='services'
      className='mx-auto max-w-6xl px-4 py-12'
    >
      <div className='rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-10'>
        <p className='text-xs uppercase tracking-[0.28em] text-[var(--muted)]'>
          Services
        </p>

        <h2 className='mt-2 text-2xl font-semibold tracking-tight md:text-3xl'>
          We buy, sell, trade, source & consign luxury watches
        </h2>

        <p className='mt-4 max-w-3xl text-[var(--muted)] leading-relaxed'>
          Established in 2018, Consultants of Time is a luxury watch dealer in
          the NYC area. We’ve earned the trust of collectors and enthusiasts by
          assisting in the buying, selling, trading, sourcing, and consigning of
          luxury timepieces. As your trusted timepiece concierge, we provide
          discreet, professional, and transparent service.
        </p>

        <div className='mt-8 grid gap-6 md:grid-cols-2'>
          {/* Sell / Trade */}
          <div className='rounded-2xl border border-[var(--border)] bg-[var(--background)]/40 p-6 backdrop-blur'>
            <h3 className='text-lg font-semibold'>Sell or Trade</h3>
            <p className='mt-3 text-sm text-[var(--muted)] leading-relaxed'>
              We’ll determine the value of your timepiece and present a range of
              options to choose from. With Consultants of Time, you can expect a
              smooth, secure, fair, and professional transaction when selling or
              trading your watch.
            </p>

            <a
              href='#contact'
              className='mt-4 inline-flex text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)]'
            >
              Sell / Trade →
            </a>
          </div>

          {/* Consign */}
          <div className='rounded-2xl border border-[var(--border)] bg-[var(--background)]/40 p-6 backdrop-blur'>
            <h3 className='text-lg font-semibold'>Consign</h3>
            <p className='mt-3 text-sm text-[var(--muted)] leading-relaxed'>
              Our team will promptly evaluate your piece and offer a quote. If
              you are not in a rush to receive payment, consigning your
              timepiece can yield a higher payout compared to a typical buyout.
            </p>

            <a
              href='#contact'
              className='mt-4 inline-flex text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)]'
            >
              Learn about consigning →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
