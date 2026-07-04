'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <p className="text-base font-semibold text-primary text-center">404</p>

        <h1 className="mt-4 text-5xl font-semibold text-center tracking-tight text-balance text-primary">
          Page not found
        </h1>

        <p className="mt-6 text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for
        </p>
        <div className="mt-10 flex items-center  justify-center gap-x-6">
          <Button
            className="rounded-full"
            onClick={() => router.back()}
            type="submit"
          >
            {' '}
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
}
