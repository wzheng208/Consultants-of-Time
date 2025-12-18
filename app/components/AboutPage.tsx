export default function About() {
  return (
    <section
      id='about'
      className='mx-auto max-w-6xl px-4 py-12'
    >
      <div className='rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-10'>
        <p className='text-xs uppercase tracking-[0.28em] text-[var(--muted)]'>
          About
        </p>

        <h2 className='mt-2 text-2xl font-semibold tracking-tight md:text-3xl'>
          Consultants of Time
        </h2>

        <div className='mt-6 grid gap-8 md:grid-cols-2'>
          {/* About Us */}
          <div>
            <h3 className='text-lg font-semibold'>About Us</h3>
            <div className='mt-3 space-y-4 text-[var(--muted)] leading-relaxed'>
              <p>
                Consultants of Time was founded by Kevin, a passionate luxury
                watch enthusiast who has been actively engaged in the buying,
                selling, and trading of luxury timepieces since 2018.
              </p>
              <p>
                What began as a hobby to enjoy the art and craftsmanship of
                luxury watches evolved into a trusted business serving hundreds
                of clients through buying, selling, and trading.
              </p>
              <p>
                Kevin personally conducts initial and final quality control
                checks of every timepiece, ensuring each watch meets strict
                standards of excellence.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className='text-lg font-semibold'>Why Choose Us?</h3>
            <div className='mt-3 space-y-4 text-[var(--muted)] leading-relaxed'>
              <p>
                Choosing the perfect luxury watch is not just a financial
                investment, but an emotional one. We take a personalized
                approach—understanding your preferences to recommend the right
                piece.
              </p>
              <p>
                If a watch you desire isn’t in stock, we can source it through
                an extensive global network of associates.
              </p>
            </div>

            {/* Disclaimer card */}
            <div className='mt-5 rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-4'>
              <p className='text-sm text-[var(--muted)] leading-relaxed'>
                <span className='font-semibold text-[var(--foreground)]'>
                  Note:
                </span>{' '}
                Consultants of Time is an independent luxury watch dealer. We
                are not associated with and are not authorized dealers of any of
                the brands we list or sell.
              </p>
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='#contact'
            className='inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]'
          >
            Inquire Now
          </a>
          <a
            href='#featured'
            className='inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold transition hover:bg-[var(--accent-soft)]'
          >
            View Featured
          </a>
        </div>
      </div>
    </section>
  );
}
