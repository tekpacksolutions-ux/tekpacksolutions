import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import { getCategoryBySlug } from '@/app/data/getCategoryBySlug'
import MachineCard from '@/components/MachineCard'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import { CATEGORY_BY_SLUG_QUERY_RESULT } from '@/sanity.types'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Programmatically builds dynamic metadata based on the machinery category
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data: CATEGORY_BY_SLUG_QUERY_RESULT = await getCategoryBySlug(slug)

  if (!data) return {}

  const categoryName = data.name ?? 'Packaging'
  const fallbackDesc = `Explore commercial high-speed ${categoryName.toLowerCase()} systems and custom line configurations built for industrial output.`
  const cleanDesc = data.description ? `${data.description.slice(0, 155)}...` : fallbackDesc

  return {
    title: `${categoryName} Machines & Automated Line Variants | TEKPACK`,
    description: cleanDesc,
  }
}

export default async function CategorySlugPage({ params }: PageProps) {
  const slug = await params
  const data: CATEGORY_BY_SLUG_QUERY_RESULT = await getCategoryBySlug(slug.slug)
  if (!data) return notFound()

  // Null-Safe defaults to prevent mapping or formatting crashes
  const categoryName = data.name ?? 'Packaging Machinery'
  const categoryDescription = data.description ?? ''
  const machinesList = data.machines ?? []

  // Dynamic ItemList Schema injection for Google to parse industrial product sub-variants
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': `${categoryName} Variants Portfolio`,
    'description': `Industrial machinery and custom variants matching the ${categoryName.toLowerCase()} automation classification.`,
    'itemListElement': machinesList
      .filter((item) => item && item.slug)
      .map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `https://www.tekpack.in/machine/${item.slug}`,
        'name': item.name ?? 'Industrial Automated System',
      })),
  }

  return (
    <PageLayout className={'relative gap-2 p-5'}>
      {/* Schema injected safely outside text nodes */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <PageHeaderSection>
        <div className={'flex h-full max-w-4xl flex-col items-start justify-center gap-2 p-5 sm:p-20'}>
          <h1 className={'font-clash text-4xl font-semibold sm:text-6xl'}>{categoryName}</h1>
          <SectionDescription>{categoryDescription}</SectionDescription>
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
