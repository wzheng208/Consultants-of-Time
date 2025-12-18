const faqs = [
  {
    q: 'Do you authenticate?',
    a: 'Yes—each piece is verified and condition is disclosed transparently.',
  },
  {
    q: 'Shipping?',
    a: 'Insured shipping available. Local NYC meetup may be possible.',
  },
  {
    q: 'Trades?',
    a: 'Case-by-case depending on model and condition.',
  },
];

export default function FAQ() {
  return (
    <section
      id='faq'
      className='mx-auto max-w-6xl px-4 py-12'
    >
      <div className='rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8'>
        {/* Section header */}
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-xs uppercase tracking-[0.28em] text-white/60'>
              Details
            </p>
            <h2 className='mt-2 text-2xl font-semibold tracking-tight text-white'>
              Frequently asked
            </h2>
          </div>
          <div className='hidden md:block text-sm text-white/60'>
            Discreet. Transparent. Trusted.
          </div>
        </div>

        {/* FAQ items */}
        <div className='mt-6 grid gap-3'>
          {faqs.map((f) => (
            <details
              key={f.q}
              className='group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium text-white/90'>
                <span>{f.q}</span>
                <span className='ml-4 text-[#93C5FD] transition group-open:rotate-45'>
                  +
                </span>
              </summary>

              <p className='mt-3 text-sm leading-relaxed text-white/70'>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
