import { ChevronDown } from 'lucide-react';
import JsonLd from '@/components/common/JsonLd';
import SectionHeading from '@/components/common/SectionHeading';
import { homeFaqs } from '@/lib/faq';
import { faqJsonLd } from '@/lib/seo';

// Server component: native <details> gives an accessible accordion with no
// client JavaScript, and every answer is in the HTML for crawlers.
export default function HomeFaq() {
  return (
    <section id="faq" className="bg-white py-24">
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="About RootTOP Group"
          description="Quick answers about who we are, what we do and how to reach us."
        />

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {homeFaqs.map((faq, index) => (
            <details key={faq.question} className="group px-6 py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <h3>{faq.question}</h3>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
