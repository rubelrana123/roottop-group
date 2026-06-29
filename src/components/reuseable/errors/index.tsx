import { cn } from '@/lib';
import { CircleAlert } from 'lucide-react';
import React from 'react';

interface ErrorTextProps {
  error: string;
  className?: string;
}

export function ErrorInput({ error, className }: ErrorTextProps) {
  if (!error) return null;
  return (
    <>
      {error && (
        <p
          className={cn(
            'text-red-400 flex justify-end items-center text-right',
            className
          )}
        >
          <span className="mr-1"> {error}</span> <CircleAlert size={14} />
        </p>
      )}
    </>
  );
}
