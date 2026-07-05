"use client";

import AchievementContent from "../AchievementContent";
import AchievementHero from "../AchievementHero.tsx";
import AchievementStats from "../AchievementStats";

 
export default function AchievementSection() {
  return (
    <section className="pb-24">

      <AchievementHero />

      {/* Floating Card */}
<div className="container relative z-20 mx-auto -mt-16 px-4 sm:-mt-20 md:-mt-24 lg:-mt-32 xl:-mt-36">
  <div
    className="
      overflow-hidden
      rounded-xl
      bg-white
      shadow-2xl
      lg:grid
      lg:grid-cols-2
    "
  >
    {/* Left */}
    <AchievementContent />

    {/* Right */}
    <AchievementStats />
  </div>
</div>
    </section>
  );
}