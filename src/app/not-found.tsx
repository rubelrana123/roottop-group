import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary">
          Page not found
        </h1>

        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <nav
          aria-label="Helpful links"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          <Link
            href="/"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Go back home
          </Link>
          <Link href="/services" className="text-sm font-semibold text-slate-700 hover:text-primary">
            Our businesses
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-primary">
            Contact us
          </Link>
        </nav>
      </div>
    </main>
  );
}
