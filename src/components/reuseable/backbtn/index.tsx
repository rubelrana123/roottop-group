/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { cn } from '@/lib';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackBtn({ className, label = 'Back' }: any) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={cn(
        'flex cursor-pointer items-center gap-2 text-primary font-bold',
        className
      )}
    >
      <ChevronLeft className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
