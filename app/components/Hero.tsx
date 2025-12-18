export default function Hero() {
  return (
    <section className='mx-auto max-w-6xl px-4 pt-14 pb-12'>
      <div className='grid items-center gap-10 md:grid-cols-2'>
        {/* Copy */}
        <div>
          <p className='text-xs uppercase tracking-[0.28em] text-white/60'>
            Curated • Verified • Discreet
          </p>

          <h1 className='mt-3 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl'>
            Trusted luxury watches,
            <br className='hidden sm:block' />
            sourced and verified.
          </h1>

          <p className='mt-4 max-w-xl text-lg text-white/70'>
            Authentication, transparent condition notes, and fast insured
            shipping — handled with care and discretion.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            {/* Primary CTA */}
            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E40AF] transition'
            >
              Inquire Now
            </a>

            {/* Secondary CTA */}
            <a
              href='#featured'
              className='inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition'
            >
              View Featured
            </a>
          </div>

          <p className='mt-5 text-xs text-white/60'>
            NYC based • Insured shipping • References available upon request
          </p>
        </div>

        {/* Visual / Hero image placeholder */}
        <div className='relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B122B] via-[#070A14] to-[#0B122B] p-6'>
          {/* Subtle glow */}
          <div className='pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#2563EB]/20 blur-3xl' />

          <div className='relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10'>
            {/* Badge */}
            <div className='absolute left-3 top-3 rounded-full border border-white/15 bg-[#070A14]/60 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur'>
              Featured piece
            </div>
          </div>

          <p className='mt-3 text-sm text-white/70'>
            Replace this block with a hero watch image.
          </p>
        </div>
      </div>
    </section>
  );
}
