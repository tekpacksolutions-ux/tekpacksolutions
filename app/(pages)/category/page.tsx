import { CATEGORY_QUERY_RESULT } from '@/sanity.types'
import { getCategories } from '@/app/data/getCategories'
import PageLayout from '@/app/layouts/PageLayout'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import SolutionCard from '@/components/SolutionCard'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automatic Packaging Machinery Categories | TEKPACK Line Systems',
  description:
    'Explore TEKPACK’s full manufacturing catalog of industrial machinery categories: automatic filling machines, high-speed vertical form fill seal (VFFS) packing systems, and variant options.',
  keywords: [
    'automatic filling machines',
    'pouch packing variants',
    'industrial line machinery',
    'packaging mechanisms',
  ],
}

export default async function CategoryPage() {
  const rawData: CATEGORY_QUERY_RESULT = await getCategories()

  // Safe array fallback guard to prevent .map() crash on null records
  const data = rawData ?? []

  return (
    <PageLayout className={'relative gap-2 p-5'}>
      <PageHeaderSection>
        <div className={'flex h-full max-w-5xl flex-col items-start justify-center gap-2 p-5 sm:p-10'}>
          <h1 className={'font-clash text-2xl font-semibold sm:text-5xl uppercase'}>
            Automatic Packaging Machinery & Filling Systems by Category
          </h1>
          <SectionDescription>
            Different material states demand distinct engineering approaches. We customize our feeding, sealing, and
            gas-flushing automation systems to perfectly match the precise flow characteristics, density, and hygiene
            requirements of your specific operational processing vertical.
          </SectionDescription>
        </div>
      </PageHeaderSection>

      <main id='main-content' className='w-full'>
        {data.length > 0 && (
          <ul className={'grid w-full grid-cols-1 gap-5 py-5 sm:grid-cols-3'}>
            {data
              .filter((item) => item !== null && item !== undefined)
              .map((item) => (
                /* Removed the <li> wrapper here because <SolutionCard> handles it inside <Card> */
                <SolutionCard key={item._id} {...item} slug={`category/${item.slug ?? ''}`} />
              ))}
          </ul>
        )}
      </main>

      <ContactSection />
    </PageLayout>
  )
}
