export default function Footer() {
  return (
    <footer className='border-t border-[var(--border)]'>
      <div className='mx-auto max-w-6xl px-4 py-10'>
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Brand */}
          <div>
            <div className='font-semibold tracking-tight'>
              Consultants of Time
            </div>
            <p className='mt-2 text-sm text-[var(--muted)]'>
              Independent luxury watch dealer specializing in sourcing,
              authentication, and discreet transactions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className='text-sm font-semibold'>Navigate</div>
            <ul className='mt-3 space-y-2 text-sm text-[var(--muted)]'>
              <li>
                <a
                  href='#featured'
                  className='hover:text-[var(--foreground)]'
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='hover:text-[var(--foreground)]'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#faq'
                  className='hover:text-[var(--foreground)]'
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='hover:text-[var(--foreground)]'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className='text-sm font-semibold'>Contact</div>
            <ul className='mt-3 space-y-2 text-sm text-[var(--muted)]'>
              <li>
                <a
                  href='tel:9296714667'
                  className='hover:text-[var(--foreground)]'
                >
                  929-671-4667
                </a>
              </li>
              <li>
                <a
                  href='mailto:Info@ConsultantsofTime.com'
                  className='hover:text-[var(--foreground)]'
                >
                  Info@ConsultantsofTime.com
                </a>
              </li>
              {/* <li>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-[var(--foreground)]'
                >
                  Instagram
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='mt-8 border-t border-[var(--border)] pt-6 text-center text-xs tracking-wide text-[var(--muted)]'>
          © {new Date().getFullYear()} Consultants of Time · Independent dealer
          · Not affiliated with any watch brand
        </div>
      </div>
    </footer>
  );
}
