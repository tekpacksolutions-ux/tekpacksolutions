import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import MachineCard from '@/components/MachineCard'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import { SOLUTION_BY_SLUG_QUERY_RESULT } from '@/sanity.types'
import { notFound } from 'next/navigation'
import { getSolutionBySlug } from '@/app/data/getSolutionBySlug'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Programmatic industrial metadata constructor
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data: SOLUTION_BY_SLUG_QUERY_RESULT = await getSolutionBySlug(slug)

  if (!data) return {}

  const solutionName = data.name ?? 'Industrial Material Packaging'
  const defaultDesc = `Discover high-performance turnkey machinery lines engineered specifically for ${solutionName.toLowerCase()} applications and product profiles.`
  const safeDesc = data.description ? `${data.description.slice(0, 155)}...` : defaultDesc

  return {
    title: `${solutionName} Turnkey Packaging & Filling Lines | TEKPACK Systems`,
    description: safeDesc,
  }
}

export default async function SolutionSlugPage({ params }: PageProps) {
  const slug = await params
  const data: SOLUTION_BY_SLUG_QUERY_RESULT = await getSolutionBySlug(slug.slug)

  if (!data) return notFound()

  // Safe fallback states for pristine database mapping
  const solutionTitle = data.name ?? 'Industrial Packaging Solution'
  const solutionDescription = data.description ?? ''
  const machinesList = data.machines ?? []

  // Structural Search Engine Optimization Schema Map
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': `Machinery Line Solutions for ${solutionTitle}`,
    'description': `Automated machinery variants optimized for processing and packaging ${solutionTitle.toLowerCase()} materials.`,
    'itemListElement': machinesList
      .filter((item) => item && item.slug)
      .map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `https://www.tekpack.in/machine/${item.slug}`,
        'name': item.name ?? 'Automated Line Variant',
      })),
  }

  return (
    <PageLayout className={'relative gap-2 p-5'}>
      {/* Injected Product Schema Map */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <PageHeaderSection>
        <div className={'flex h-full max-w-4xl flex-col items-start justify-center gap-2 p-5 sm:p-20'}>
          <h1 className={'font-clash text-foreground text-4xl font-semibold sm:text-6xl'}>{solutionTitle}</h1>
          <SectionDescription>{solutionDescription}</SectionDescription>
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
