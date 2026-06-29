import React from 'react';
import { cn } from '@/lib/utils';

type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariants;
  className?: string;
}

export default function Heading({
  variant = 'h2',
  className,
  ...props
}: SubTitleProps) {
  const Tag = variant;

  const baseStyles: Record<HeadingVariants, string> = {
    h1: 'text-5xl font-bold', //
    h2: 'text-3xl font-bold', //
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold', //
    h5: 'text-xl font-bold', //
    h6: 'text-base font-medium', //
  };

  return <Tag className={cn(baseStyles[variant], className)} {...props} />;
}
