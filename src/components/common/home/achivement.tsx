"use client";

import AchievementContent from "../AchievementContent";
import AchievementHero from "../AchievementHero.tsx";
import AchievementStats from "../AchievementStats";

 
export default function AchievementSection() {
  return (
    <section className="pb-24">

      <AchievementHero />

      {/* Floating Card */}
      <div className="container relative z-20 mx-auto -mt-36 px-4">
        <div className="overflow-hidden bg-white shadow-2xl lg:grid lg:grid-cols-2">
          {/* Left */}
          <AchievementContent />

          {/* Right */}
          <AchievementStats />
        </div>
      </div>
    </section>
  );
}