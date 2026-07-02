import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import { MACHINES_QUERY_RESULT } from '@/sanity.types'
import { getMachines } from '@/app/data/getMachines'
import MachineCard from '@/components/MachineCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automatic Packaging Machinery & Industrial Filling Lines | TEKPACK',
  description:
    'Browse our complete catalog of industrial-grade packaging equipment: elevator systems, continuous band sealers, dynamic filling lines, form-fill-seal (FFS) systems, and multihead weighers.',
  keywords: [
    'industrial packaging machinery',
    'form fill seal FFS machine',
    'automatic filling lines',
    'continuous band sealer manufacturer',
    'multihead weigher systems',
  ],
}

export default async function MachinePage() {
  const rawData: MACHINES_QUERY_RESULT = await getMachines()

  // Safe execution guard to defend against null database records during deployment builds
  const data = rawData ?? []

  return (
    <PageLayout className={'relative gap-2 p-5'}>
      <PageHeaderSection>
        <div className={'flex h-full max-w-6xl flex-col items-start justify-center gap-2 p-5 sm:p-10'}>
          <h1 className={'font-clash uppercase text-foreground text-2xl font-semibold sm:text-3xl text-balance'}>
            Industrial Packaging Machinery & Custom Automated Equipment
          </h1>
          <SectionDescription>
            Our diverse engineering range of robust packaging machinery spans high-performance bucket elevator systems,
            continuous band sealer machines, precise multihead filling machinery, high-speed Form-Fill-Seal (FFS)
            platforms, and automated wrapping systems.
          </SectionDescription>
        </div>
      </PageHeaderSection>

      <main id='main-content' className='w-full'>
        {data.length > 0 && (
          <ul className={'grid w-full grid-cols-1 gap-5 py-5 sm:grid-cols-3'}>
            {data
              .filter((item) => item !== null && item !== undefined)
              .map((item) => (
                <MachineCard key={item._id} {...item} slug={`machine/${item.slug ?? ''}`} />
              ))}
          </ul>
        )}
      </main>

      <ContactSection />
    </PageLayout>
  )
}
