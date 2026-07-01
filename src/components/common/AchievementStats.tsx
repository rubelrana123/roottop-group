"use client";

import StatCard from "./StatCard";

export const stats = [
  {
    id: 1,
    number: "150+",
    title: "Major Infrastructure",
    subtitle: "Projects Completed",
  },
  {
    id: 2,
    number: "5+",
    title: "Years of Experience",
    subtitle: "With Pride",
  },
  {
    id: 3,
    number: "$200+",
    title: "Million Turnover",
    subtitle: "Revenue",
  },
  {
    id: 4,
    number: "500+",
    title: "Skilled Professionals",
    subtitle: "Employed",
  },
];

interface AchievementStatsProps {
  className?: string;
}

export default function AchievementStats({
  className,
}: AchievementStatsProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${className ?? ""}`}
    >
      {stats.map((item) => (
        <StatCard
          key={item.id}
          number={item.number}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}