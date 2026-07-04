 
import { cn } from '@/lib';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function UploadBtn({ className, ...props }: any) {
  return (
    <label
      {...props}
      className={cn(
        `size-10 cursor-pointer grid place-items-center absolute rounded-md bg-white/20 backdrop-blur-[20px] right-4 top-4`,
        className
      )}
    >
      
    </label>
  );
}
