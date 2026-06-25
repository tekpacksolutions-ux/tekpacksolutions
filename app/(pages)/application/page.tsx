import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import { getSolutions } from '@/app/data/getSolutions'
import SolutionCard from '@/components/SolutionCard'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import { SOLUTIONS_QUERY_RESULT } from '@/sanity.types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Turnkey Industrial Packaging Solutions by Application | TEKPACK Systems',
  description:
    'Explore custom automated machinery lines tailored to your material handling profile. TEKPACK designs custom feeding and sealing configurations for powders, liquids, and paste-like products.',
  keywords: [
    'powder filling solutions',
    'granule handling packaging',
    'liquid bottling machinery',
    'turnkey packing configurations',
  ],
}

export default async function ApplicationPage() {
  const rawData: SOLUTIONS_QUERY_RESULT = await getSolutions()

  const data = rawData ?? []

  return (
    <PageLayout className={'relative gap-2 p-5'}>
      <PageHeaderSection>
        <div className={'flex h-full max-w-5xl flex-col items-start justify-center gap-2 p-5 sm:p-20'}>
          <h1 className={'font-clash text-foreground text-2xl font-semibold uppercase sm:text-5xl'}>
            Industrial Packaging Solutions & Processing Systems by Material Application
          </h1>
          <SectionDescription>
            With deep technical engineering competence, we advise on selecting targeted packaging configurations
            engineered specifically for your target market—ranging from flexible pouch lines to shelf-ready display
            cartoning systems. Whether managing fine powders, non-free-flowing grains, abrasive granules, highly viscous
            paste, or free-flowing liquids, TEKPACK delivers the specialized mechanical material-handling know-how your
            facility demands.
          </SectionDescription>
        </div>
      </PageHeaderSection>

      <main id='main-content' className='w-full'>
        {data.length > 0 && (
          <ul className={'grid w-full grid-cols-1 gap-5 py-5 sm:grid-cols-3'}>
            {data
              .filter((item) => item !== null && item !== undefined)
              .map((item) => (
                <SolutionCard key={item._id} {...item} slug={`application/${item.slug ?? ''}`} />
              ))}
          </ul>
        )}
      </main>

      <ContactSection />
    </PageLayout>
  )
}
