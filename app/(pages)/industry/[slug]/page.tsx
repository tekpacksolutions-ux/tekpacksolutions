import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import MachineCard from '@/components/MachineCard'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import { INDUSTRY_BY_SLUG_QUERY_RESULT } from '@/sanity.types'
import { getIndustryBySlug } from '@/app/data/getIndustryBySlug'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data: INDUSTRY_BY_SLUG_QUERY_RESULT = await getIndustryBySlug(slug)

  if (!data) return {}

  const industryName = data.name ?? 'Industrial'
  const fallbackDesc = `High-efficiency automatic filling and packing machine variants built tailored for the ${industryName.toLowerCase()} industry vertical.`
  const cleanDesc = data.description ? `${data.description.slice(0, 155)}...` : fallbackDesc

  return {
    title: `Automated ${industryName} Packaging Machinery & Solutions | TEKPACK`,
    description: cleanDesc,
  }
}

export default async function IndustryPage({ params }: PageProps) {
  const slug = await params
  const data: INDUSTRY_BY_SLUG_QUERY_RESULT = await getIndustryBySlug(slug.slug)
  if (!data) return notFound()

  const industryName = data.name ?? 'Industrial'
  const industryDescription = data.description ?? ''
  const machinesList = data.machines ?? []

  // Safe schema data generation with defensive mapping
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': `${industryName} Packaging Machines Portfolio`,
    'description': `Automated filling and packaging machinery configurations optimized for the ${industryName.toLowerCase()} industry vertical.`,
    'itemListElement': machinesList
      .filter((item) => item && item.slug) // Ensures item and slug are valid
      .map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `https://www.tekpack.in/machine/${item.slug}`,
        'name': item.name ?? 'Automatic Packaging System',
      })),
  }

  return (
    <PageLayout className={'relative gap-2 p-5'}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <PageHeaderSection>
        <div className={'flex h-full max-w-4xl flex-col items-start justify-center gap-2 p-5 sm:p-20'}>
          <h1 className={'font-clash text-4xl font-semibold sm:text-6xl'}>
            {industryName} Packaging Machinery & Equipment
          </h1>
          <SectionDescription>{industryDescription}</SectionDescription>
        </div>
      </PageHeaderSection>
      <main id='main-content' className='w-full'>
        {machinesList.length > 0 && (
          <ul className={'grid w-full grid-cols-1 gap-5 py-5 sm:grid-cols-3'}>
            {machinesList
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
