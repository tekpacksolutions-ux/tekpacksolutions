import { getHighlightedMachines } from '@/app/data/getHighlightedMachines'
import SectionLabel from '@/app/layouts/SectionLabel'
import SectionHeader from '@/app/layouts/SectionHeader'
import SectionDescription from '@/app/layouts/SectionDescription'
import { Button } from '@/components/ui/button'
import React from 'react'
import { HIGHLIGHTED_MACHINES_QUERY_RESULT } from '@/sanity.types'

import Image from 'next/image'
import MachineCard from '@/components/MachineCard'
import Link from 'next/link'

export default async function MachineSection() {
  const data: HIGHLIGHTED_MACHINES_QUERY_RESULT = await getHighlightedMachines()
  console.log(data)
  return (
    <section className={'flex flex-col gap-2'}>
      <div className={'bg-background relative overflow-hidden rounded-md p-5 sm:p-20'}>
        <article className={'flex max-w-4xl flex-col gap-2'}>
          <SectionLabel>Production-Ready Configurations</SectionLabel>
          <h2>
            <SectionHeader>Automatic Machinery Variants Engineered for Continuous Factory Duty</SectionHeader>
          </h2>
          <div>
            <SectionDescription>
              Built using heavy-duty, food-grade materials and premium automated control architectures. Select an
              engineering category to analyze production speeds, footprint specs, and filling line limits.
            </SectionDescription>
          </div>
          <div className='mt-4'>
            <Link href={'/machine'}>
              <Button>Explore more Machines</Button>
            </Link>
          </div>
        </article>
        <div
          className={
            'absolute top-0 right-0 hidden h-full w-200 mask-l-from-10% mask-l-to-100% mask-type-alpha saturate-50 sm:flex'
          }>
          <Image src={'/image/bg2.webp'} alt={'bg'} fill priority className={'object-cover'} />
        </div>
      </div>
      <ul className={'grid w-full grid-cols-1 gap-2 sm:grid-cols-3'}>
        {data.map((item) => (
          <MachineCard key={item._id} {...item} slug={`machine/${item.slug}`} />
        ))}
      </ul>
    </section>
  )
}
