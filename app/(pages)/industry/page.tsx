import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import SolutionCard from '@/components/SolutionCard'
import { getIndustries } from '@/app/data/getIndustries'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import { INDUSTRIES_QUERY_RESULT } from '@/sanity.types'
import { Metadata } from 'next'

interface ApplicationProps {}

export const metadata: Metadata = {
  title: 'Industrial Packaging & Automated Filling Solutions by Industry | TEKPACK',
  description:
    'Explore TEKPACK’s automated packing and filling machine setups across food, spice, chemical, and consumer goods manufacturing industries globally.',
  keywords: [
    'industrial packing machine lines',
    'food packaging systems',
    'chemical filling equipment',
    'B2B packaging manufacturer',
  ],
}

export default async function Application({}: ApplicationProps) {
  const data: INDUSTRIES_QUERY_RESULT = await getIndustries()
  console.log(data)
  return (
    <PageLayout className={'relative gap-2 p-5'}>
      <PageHeaderSection>
        <div className={'flex h-full max-w-5xl flex-col items-start justify-center gap-2 p-5 sm:p-20'}>
          <h1 className={'font-clash text-2xl font-semibold sm:text-6xl'}>
            Industrial Packaging Solutions & Industries Served
          </h1>
          <SectionDescription>
            Many multinational producers of leading brands of both food and nonfood products are part of our clientele.
            The increase of customer benefits is TEKPACK’s first priority. Our automatic filling and packing machine
            technology not only has to be sophisticated and functional, it has to be profitable. Technical know-how,
            high innovative capacity and the ability to offer custom automation solutions for difficult and complex
            industrial packaging tasks have brought TEKPACK to the leading position.
          </SectionDescription>
        </div>
      </PageHeaderSection>
      // Change this section inside your page grid:
      <main id='main-content' className='w-full'>
        <ul className={'grid w-full grid-cols-1 gap-5 py-5 sm:grid-cols-3'}>
          {data.map((item) => (
            <SolutionCard key={item._id} {...item} slug={`industry/${item.slug}`} />
          ))}
        </ul>
      </main>
      <ContactSection />
    </PageLayout>
  )
}
