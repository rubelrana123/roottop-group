import {
  Users,
  HandPlatter,
  Gift,
  UtensilsCrossed,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  Plane,
  BadgeDollarSign,
} from 'lucide-react';
import SectionHeading from '../SectionHeading';

const benefits = [
  {
    title: 'Friendly Working Environment',
    icon: Users,
  },
  {
    title: 'Prayer Place',
    icon: HandPlatter,
  },
  {
    title: 'Surprise Appreciation Gifts',
    icon: Gift,
  },
  {
    title: 'Snacks and Unlimited Tea',
    icon: UtensilsCrossed,
  },
  {
    title: 'Learning Opportunity',
    icon: GraduationCap,
  },
  {
    title: 'Upgrade Skills',
    icon: Lightbulb,
  },
  {
    title: 'Yearly Salary Review',
    icon: TrendingUp,
  },
  {
    title: 'Flexible Leave & Holidays',
    icon: Plane,
  },
  {
    title: '2 Festival Bonus',
    icon: BadgeDollarSign,
  },
];

export default function CareerBenefits() {
  return (
    <section className="bg-[#EDF6FA] py-20">
      <div className="container mx-auto px-5">
        <SectionHeading
          badge="Why Join Us"
         
          title="Benefit & Opportunities"
          description="We believe great people deserve a great workplace. RootTOP Group offers a supportive culture, 
          continuous learning opportunities, and rewarding benefits to help you grow professionally and personally."
        />
        {/* <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-primary font-semibold uppercase tracking-widest">
            Why Join Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            <span className="text-primary">Benefit</span> & Opportunities
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We believe great people deserve a great workplace. RootTOP Group
            offers a supportive culture, continuous learning opportunities, and
            rewarding benefits to help you grow professionally and personally.
          </p>
        </div> */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-800 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
