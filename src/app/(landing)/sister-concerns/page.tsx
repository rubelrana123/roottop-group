import type { Metadata } from 'next'
import JsonLd from '@/components/common/JsonLd'
import ExploreMore from '@/components/common/ExploreMore'
import GroupCompanies from '@/components/common/home/groupCompany'
import { pageMetadata, webpageJsonLd } from '@/lib/seo'

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
        <GroupCompanies />
        <ExploreMore />
      </section>
    </>
  )
}
