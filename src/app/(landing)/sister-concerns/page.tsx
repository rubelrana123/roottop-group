import type { Metadata } from 'next'
import JsonLd from '@/components/common/JsonLd'
import ExploreMore from '@/components/common/ExploreMore'
import { breadcrumbJsonLd, pageMetadata, webpageJsonLd } from '@/lib/seo'
import GroupCompanyCard from '@/components/common/GroupCompanyCard'
import PageHero from '@/components/common/PageHero'

export const metadata: Metadata = pageMetadata.sisterConcerns

export default function SisterConcern() {
  return (
    <>
      <JsonLd
        data={[
          webpageJsonLd({
            title: 'RootTOP Group Sister Concerns',
            description:
              'Portfolio companies and sister concerns across RootTOP Group business sectors.',
            path: '/sister-concerns',
            type: 'CollectionPage',
          }),
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Sister Concerns', href: '/sister-concerns' },
          ]),
        ]}
      />

      <PageHero
        title="Our Sister Concerns"
        subtitle="Our Business Ecosystem"
        description="Discover the companies that strengthen the RootTOP Group ecosystem through expertise in civil engineering, IT, agriculture, international trade, investment, consultancy, and real estate."
        image="/banner_sister.png"
        imageAlt="RootTOP Group sister companies and corporate ecosystem"
      />

      <section
        aria-label="RootTOP Group sister concerns"
        className="relative z-30 overflow-visible py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GroupCompanyCard />
        </div>
      </section>

      <ExploreMore />
    </>
  )
}
