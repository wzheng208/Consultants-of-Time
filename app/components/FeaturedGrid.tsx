import Image from 'next/image';
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
            Featured Pieces
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
            {/* Image */}
            <div className='relative aspect-square overflow-hidden rounded-xl bg-white/10'>
              <Image
                src={w.image}
                alt={`${w.brand} ${w.model} ${w.reference ?? ''}`}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 33vw'
              />

              <div className='absolute left-3 top-3 rounded-full border border-white/15 bg-[#070A14]/60 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur'>
                Verified
              </div>
            </div>

            {/* Info */}
            <div className='mt-4'>
              <div className='flex items-start justify-between gap-3'>
                <div className='font-medium text-white/90'>
                  {w.brand} {w.model}
                </div>
              </div>

              <div className='mt-1 text-sm text-white/70'>
                {w.reference} • {w.caseSize}
              </div>

              <div className='mt-2 text-xs text-white/60'>{w.note}</div>

              <div className='mt-3 flex items-center justify-between'>
                <div className='text-sm font-semibold text-white'>
                  Price: {w.price}
                </div>

                <a
                  href='#contact'
                  className='text-sm font-semibold text-[#93C5FD] hover:text-[#BFDBFE] transition underline-offset-4 hover:underline'
                >
                  Contact →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className='mt-6 text-xs text-white/60'>
        Inventory rotates frequently. Request specific references or a model
        list anytime.
      </p>
    </section>
  );
}
