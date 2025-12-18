import { inventory } from '../data/inventory';

export default function FeaturedGrid() {
  return (
    <section
      id='featured'
      className='mx-auto max-w-6xl px-4 py-12'
    >
      <div className='flex items-end justify-between gap-4'>
        <div>
          <p className='text-xs uppercase tracking-[0.28em] text-white/60'>
            Inventory
          </p>
          <h2 className='mt-2 text-2xl font-semibold tracking-tight text-white'>
            Featured pieces
          </h2>
        </div>

        <a
          className='text-sm text-white/70 hover:text-[#93C5FD] transition'
          href='#contact'
        >
          Request a specific model
        </a>
      </div>

      <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {inventory.map((w) => (
          <div
            key={w.id}
            className='group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10'
          >
            {/* Image placeholder (swap to next/image later) */}
            <div className='relative aspect-[4/3] overflow-hidden rounded-xl bg-white/10'>
              {/* Subtle highlight */}
              <div className='pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100'>
                <div className='absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#2563EB]/20 blur-2xl' />
              </div>

              {/* Corner tag */}
              <div className='absolute left-3 top-3 rounded-full border border-white/15 bg-[#070A14]/60 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur'>
                Verified
              </div>
            </div>

            <div className='mt-4'>
              <div className='flex items-start justify-between gap-3'>
                <div className='font-medium text-white/90'>{w.name}</div>
                <div className='shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#93C5FD]'>
                  Inquire
                </div>
              </div>

              <div className='mt-1 text-sm text-white/70'>{w.note}</div>

              <div className='mt-3 flex items-center justify-between'>
                <div className='text-sm font-semibold text-white'>
                  {w.price ?? 'Inquire'}
                </div>

                <a
                  href='#contact'
                  className='text-sm font-semibold text-[#93C5FD] hover:text-[#BFDBFE] transition'
                >
                  Contact →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional bottom note */}
      <p className='mt-6 text-xs text-white/60'>
        Inventory rotates frequently. Request specific references or a model
        list anytime.
      </p>
    </section>
  );
}
