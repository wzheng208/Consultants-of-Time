'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const NAV_ITEMS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  // Close the menu on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

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

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-5 text-sm'>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='hover:text-[var(--foreground)] transition'
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type='button'
          aria-label='Toggle navigation'
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className='md:hidden inline-flex items-center justify-center rounded-md border border-[var(--border)] p-2 text-[var(--foreground)]'
          style={{ WebkitAppearance: 'none', appearance: 'none' }}
        >
          {open ? (
            // X icon
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M6 6L18 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M18 6L6 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M4 7h16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M4 12h16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M4 17h16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel (right-aligned) */}
      {open && (
        <div className='md:hidden border-t border-[var(--border)]'>
          <nav className='mx-auto flex max-w-6xl flex-col items-end px-4 py-3 space-y-2 text-sm'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className='hover:text-[var(--foreground)] transition text-right'
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
