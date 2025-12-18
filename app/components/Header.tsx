import Image from 'next/image';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
        {/* Brand */}
        <div className='flex items-center gap-3'>
          <Image
            src='/icon.png'
            alt='Consultants of Time logo'
            width={36}
            height={36}
            className='rounded-full'
            priority
          />
          <span className='font-semibold tracking-[0.08em]'>
            Consultants of Time
          </span>
        </div>

        {/* Navigation */}
        <nav className='flex items-center gap-5 text-sm'>
          <a
            href='#services'
            className='hover:text-[var(--foreground)] transition'
          >
            Services
          </a>
          <a
            href='#about'
            className='hover:text-[var(--foreground)] transition'
          >
            About Us
          </a>
          <a
            href='#reviews'
            className='hover:text-[var(--foreground)] transition'
          >
            Reviews
          </a>
          <a
            href='#faq'
            className='hover:text-[var(--foreground)] transition'
          >
            FAQ
          </a>
          <a
            href='#contact'
            className='hover:text-[var(--foreground)] transition'
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
