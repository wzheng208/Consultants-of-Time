'use client';

import { useMemo, useState } from 'react';

export default function Contact() {
  const [open, setOpen] = useState(false);

  const phoneDisplay = '929-671-4667';
  const phoneDigits = useMemo(
    () => phoneDisplay.replace(/[^\d]/g, ''),
    [phoneDisplay]
  );
  const email = 'Info@ConsultantsofTime.com';

  function close() {
    setOpen(false);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '').trim();
    const fromEmail = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();

    const subject = encodeURIComponent(
      `Watch Inquiry${name ? ` — ${name}` : ''}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    close();
    e.currentTarget.reset();
  }

  return (
    <section
      id='contact'
      className='mx-auto max-w-6xl px-4 pb-16'
    >
      <div className='relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10'>
        {/* Subtle glow (theme-aware) */}
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl' />
        </div>

        <p className='text-xs uppercase tracking-[0.28em] text-[var(--muted)]'>
          Inquiries
        </p>

        <h2 className='mt-2 text-2xl font-semibold tracking-tight md:text-3xl'>
          Ready to inquire?
        </h2>

        <p className='mt-2 max-w-xl text-[var(--muted)]'>
          Share the model you’re looking for, budget range, and preferred
          condition. We’ll respond quickly and discreetly.
        </p>

        {/* Contact details */}
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          <div className='rounded-2xl border border-[var(--border)] bg-[var(--background)]/40 p-5 backdrop-blur'>
            <div className='text-sm font-semibold'>Text</div>
            <a
              className='mt-2 inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition'
              href={`sms:${phoneDigits}`}
            >
              {phoneDisplay}
            </a>
            <div className='mt-1 text-xs text-[var(--muted)]'>
              Tap to open your messaging app
            </div>
          </div>

          <div className='rounded-2xl border border-[var(--border)] bg-[var(--background)]/40 p-5 backdrop-blur'>
            <div className='text-sm font-semibold'>Call</div>
            <a
              className='mt-2 inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition'
              href={`tel:${phoneDigits}`}
            >
              {phoneDisplay}
            </a>
            <div className='mt-1 text-xs text-[var(--muted)]'>
              Tap to call on mobile
            </div>
          </div>

          <div className='rounded-2xl border border-[var(--border)] bg-[var(--background)]/40 p-5 backdrop-blur'>
            <div className='text-sm font-semibold'>Email</div>
            <a
              className='mt-2 inline-block break-all text-[var(--accent)] hover:text-[var(--accent-hover)] transition'
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <div className='mt-1 text-xs text-[var(--muted)]'>
              Tap to email directly
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className='mt-6 flex flex-wrap gap-3'>
          <button
            type='button'
            onClick={() => setOpen(true)}
            className='inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition'
          >
            Contact Form
          </button>

          <a
            href={`mailto:${email}?subject=Watch%20Inquiry`}
            className='inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]/40 px-5 py-3 text-sm font-semibold hover:bg-[var(--accent-soft)] transition'
          >
            Email
          </a>
        </div>

        <p className='mt-6 text-xs text-[var(--muted)]'>
          NYC based • Insured shipping • References available upon request
        </p>
      </div>

      {/* Modal */}
      {open && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center p-4'
          role='dialog'
          aria-modal='true'
          aria-label='Contact form'
        >
          {/* Backdrop */}
          <button
            type='button'
            aria-label='Close contact form'
            onClick={close}
            className='absolute inset-0 bg-black/60'
          />

          {/* Panel */}
          <div className='relative w-full max-w-lg rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-xl'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-lg font-semibold tracking-tight'>
                  Contact Form
                </h3>
                <p className='mt-1 text-sm text-[var(--muted)]'>
                  This will open your email app with a prefilled draft to{' '}
                  <span className='font-semibold text-[var(--foreground)]'>
                    {email}
                  </span>
                  .
                </p>
              </div>

              <button
                type='button'
                onClick={close}
                className='rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm font-semibold hover:bg-[var(--accent-soft)] transition'
              >
                Close
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className='mt-6 grid gap-4'
            >
              <div className='grid gap-2'>
                <label
                  className='text-sm font-semibold'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  className='w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]'
                  placeholder='Your name'
                />
              </div>

              <div className='grid gap-2'>
                <label
                  className='text-sm font-semibold'
                  htmlFor='email'
                >
                  Your Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]'
                  placeholder='you@example.com'
                />
              </div>

              <div className='grid gap-2'>
                <label
                  className='text-sm font-semibold'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  className='w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]'
                  placeholder='Model, budget range, preferred condition, timeframe, etc.'
                />
              </div>

              <button
                type='submit'
                className='mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]'
              >
                Open Email Draft
              </button>

              <p className='text-xs text-[var(--muted)]'>
                Note: This opens your email client. Nothing is sent
                automatically.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
