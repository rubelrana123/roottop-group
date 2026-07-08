"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CountNumberProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountNumber({
  end,
  start = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CountNumberProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          className={className}
        />
      )}
    </div>
  );
}