import { getHighlightedSolutions } from '@/app/data/getHighlightedSolutions'

import React from 'react'
import { HIGHLIGHTED_SOLUTIONS_QUERY_RESULT } from '@/sanity.types'
import SectionLabel from '@/app/layouts/SectionLabel'
import SectionHeader from '@/app/layouts/SectionHeader'
import SectionDescription from '@/app/layouts/SectionDescription'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import SolutionCard from '@/components/SolutionCard'
import Link from 'next/link'

export default async function SolutionSection() {
  const data: HIGHLIGHTED_SOLUTIONS_QUERY_RESULT = await getHighlightedSolutions()
  return (
    <section className={'flex w-full flex-col gap-2'}>
      <div className={'bg-background relative overflow-hidden rounded-md p-5 sm:p-20'}>
        <article className={'flex max-w-4xl flex-col gap-2'}>
          <SectionLabel>TAILORED PACKAGING ARCHITECTURES</SectionLabel>
          <h2>
            <SectionHeader>Custom Applications for Liquid, Powder, and Granule Packing Systems</SectionHeader>
          </h2>
          <div>
            <SectionDescription>
              Different materials demand distinct engineering approaches. We customize our feeding, sealing, and
              gas-flushing systems to perfectly match the flow characteristics, density, and hygiene requirements of
              your specific product application.
            </SectionDescription>
          </div>
          <div className='mt-4'>
            <Link href={'/application'}>
              <Button>Explore more Solutions</Button>
            </Link>
          </div>
        </article>
        <div
          className={
            'absolute top-0 right-0 hidden h-full w-200 mask-l-from-10% mask-l-to-100% mask-type-alpha saturate-50 sm:flex'
          }>
          <Image src={'/image/bg1.webp'} alt={'bg'} fill priority className={'object-cover'} />
        </div>
      </div>
      <ul className={'grid w-full grid-cols-1 gap-2 sm:grid-cols-4'}>
        {data.map((item) => (
          <SolutionCard key={item._id} {...item} slug={`application/${item.slug}`} />
        ))}
      </ul>
    </section>
  )
}
