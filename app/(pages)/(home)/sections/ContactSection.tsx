import SectionLabel from '@/app/layouts/SectionLabel'
import SectionHeader from '@/app/layouts/SectionHeader'
import SectionDescription from '@/app/layouts/SectionDescription'
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <section>
      <div className={'bg-background relative overflow-hidden rounded-md p-5 sm:p-20'}>
        <article className={'flex flex-col gap-2 sm:max-w-4xl'}>
          <SectionLabel>SECURE YOUR PRODUCTION LINE</SectionLabel>
          <h2>
            <SectionHeader>Request a Technical Consultation and Customized Machinery Proposal</SectionHeader>
          </h2>
          <div>
            <SectionDescription>
              Dont let manual inefficiencies or faulty seals bottleneck your factory floor output. Connect directly
              with our Salem-based application engineers to map out your layout footprint, material densities, and
              target operational speeds. Whether you need a standalone servo-driven auger system or a fully integrated
              turnkey automatic packing machine line, TEKPACK delivers standard-setting hardware engineered to scale.
            </SectionDescription>
          </div>
          <div className='mt-4'>
            <Button>Request a Custom Quote</Button>
          </div>
        </article>
        <div
          className={
            'absolute top-0 right-0 hidden h-full w-150 mask-l-from-10% mask-l-to-100% mask-type-alpha saturate-50 sm:flex'
          }>
          <Image src={'/image/bg3.webp'} alt={'bg'} fill priority className={'-scale-x-100 object-cover'} />
        </div>
      </div>
    </section>
  )
}
