import type { Metadata } from 'next'
import JsonLd from '@/components/common/JsonLd'
import ExploreMore from '@/components/common/ExploreMore' 
import { pageMetadata, webpageJsonLd } from '@/lib/seo'
import GroupCompanyCard from '@/components/common/GroupCompanyCard'
import PageHero from '@/components/common/PageHero'

export const metadata: Metadata = pageMetadata.sisterConcerns

export default function SisterConcern() {
  return (
    <>
      <JsonLd
        data={webpageJsonLd({
          title: 'RootTOP Group Sister Concerns',
          description:
            'Portfolio companies and sister concerns across RootTOP Group business sectors.',
          path: '/sister-concerns',
        })}
      />
      <section aria-labelledby="sister-concerns-title">
        <h1 id="sister-concerns-title" className="sr-only">
          RootTOP Group Sister Concerns
        </h1>

      <PageHero
        title="Our Sister Concerns"
        subtitle="Our Business Ecosystem"
        description="Discover the companies that strengthen the RootTOP Group ecosystem through expertise in construction, IT, agriculture, international trade, investment, consultancy, and real estate."
        image="/sister-concern-banner.jpg"
        imageAlt="RootTOP Group sister companies and corporate ecosystem"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GroupCompanyCard />
        </div>
      </section>

 
        <ExploreMore />
      </section>
    </>
  )
}
