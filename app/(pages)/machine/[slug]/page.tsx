import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import PageLayout from '@/app/layouts/PageLayout'
import { getMachineBySlug } from '@/app/data/getMachineBySlug'
import { MACHINE_BY_SLUG_QUERY_RESULT } from '@/sanity.types'
import SolutionCard from '@/components/SolutionCard'

interface MachinePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: MachinePageProps): Promise<Metadata> {
  const { slug } = await params
  const data: MACHINE_BY_SLUG_QUERY_RESULT = await getMachineBySlug(slug)
  if (!data) return {}
  return {
    title: `${data.name ?? 'Industrial Machinery'} | TEKPACK`,
    description: data.description ?? '',
  }
}

export default async function MachinePage({ params }: MachinePageProps) {
  const { slug } = await params
  const data: MACHINE_BY_SLUG_QUERY_RESULT = await getMachineBySlug(slug)

  if (!data) return notFound()

  const name = data.name ?? 'Thermoform Matrix 900'
  const description =
    data.description ??
    'High-performance automated packaging line variant engineered for continuous production environments.'
  const label = data.label ?? 'Certified Equipment'
  const imageUrl = data.imageUrl ?? '/image/demos.jpg'
  const imageAlt = data.imageAlt ?? 'TEKPACK system layout'

  const relatedCategories = (data.categories ?? []).slice(0, 3)
  const relatedSolutions = (data.solutions ?? []).slice(0, 3)
  const relatedIndustries = (data.industries ?? []).slice(0, 3)

  return (
    <PageLayout className='min-h-screen bg-black p-4 text-white md:p-6 lg:p-8'>
      {/* Parent Grid: 12-column layout */}
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12'>
        {/* SECTION 1: Main Content (Left, Spanning 8 Columns) */}
        <section className='flex flex-col gap-6 lg:col-span-8'>
          <div className='relative h-96 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900'>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              priority
              sizes='(max-width: 1024px) 100vw, 60vw'
              className='object-cover'
            />
          </div>

          <div className='flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-black shadow-sm'>
            <div className='border-b border-zinc-100 pb-3'>
              <span className='mb-1 block text-[10px] font-bold tracking-widest text-cyan-600 uppercase'>{label}</span>
              <h1 className='font-clash text-2xl font-bold tracking-tight text-zinc-950 uppercase md:text-3xl'>
                {name}
              </h1>
              <p className='mt-1.5 text-xs leading-relaxed font-medium text-zinc-500 md:text-sm'>{description}</p>
            </div>

            <div className='flex flex-col overflow-x-auto text-xs font-medium'>
              <table className='w-full table-auto border-collapse'>
                <thead>
                  <tr className='border-b-2 border-zinc-200 text-left text-[10px] tracking-wider text-zinc-400 uppercase'>
                    <th className='pb-1.5 font-bold'>Parameter / System Metric</th>
                    <th className='pb-1.5 pl-4 font-bold'>Engineering Spec Value</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-zinc-100'>
                  {data.features?.map((item, idx) => (
                    <tr key={`feat-${idx}`} className='hover:bg-zinc-50/60'>
                      <td className='py-2 text-[11px] font-bold text-zinc-900 uppercase'>{item.key}</td>
                      <td className='py-2 pl-4 font-semibold text-zinc-600'>{item.value}</td>
                    </tr>
                  ))}
                  {data.specifications?.map((item, idx) => (
                    <tr key={`spec-${idx}`} className='hover:bg-zinc-50/60'>
                      <td className='py-2 font-semibold text-zinc-500'>{item.key}</td>
                      <td className='py-2 pl-4 font-bold text-zinc-800'>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='mt-auto pt-2'>
              <Link
                href='/contact'
                className='inline-flex w-full items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-cyan-700'>
                Request Technical RFQ Quote
              </Link>
            </div>
          </div>
        </section>
        {/* SECTION 2: Explorer Matrix (Right, Spanning 4 Columns) */}
        <aside className='flex flex-col gap-8 lg:col-span-4'>
          {/* Solutions */}
          {relatedSolutions.length > 0 && (
            <div className='flex flex-col gap-4'>
              <h3 className='font-clash text-base font-bold tracking-wider text-cyan-500 uppercase'>Solutions</h3>
              <div className='flex flex-col gap-4'>
                {relatedSolutions.map((sol: any) => (
                  <SolutionCard key={sol._id} {...sol} slug={`/application/${sol.slug}`} />
                ))}
              </div>
            </div>
          )}

          {/* Classifications */}
          {relatedCategories.length > 0 && (
            <div className='flex flex-col gap-4'>
              <h3 className='font-clash text-base font-bold tracking-wider text-cyan-500 uppercase'>
                System Classifications
              </h3>
              <div className='flex flex-col gap-4'>
                {relatedCategories.map((cat: any) => (
                  <SolutionCard key={cat._id} {...cat} slug={`/category/${cat.slug}`} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </PageLayout>
  )
}
