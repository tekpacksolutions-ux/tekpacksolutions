import React from 'react'
import BackgroundVideoSection from '@/app/sections/BackgroundVideoSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingSection() {
  return (
    <section className={'relative w-full overflow-hidden rounded-md'}>
      <BackgroundVideoSection src={'/video/background.mp4'} />
      <header className={'absolute inset-0 z-20 flex w-full flex-col items-start justify-center p-5 sm:p-20'}>
        <LandingContentLayout />
        <LandingCTA />
      </header>
    </section>
  )
}

function LandingContentLayout() {
  return (
    <div className={'flex flex-col gap-3'}>
      <h1
        className={'text-background font-clash max-w-2xl text-5xl font-semibold uppercase sm:max-w-5xl sm:text-7xl'}
        aria-label={'TEKPACK Title'}>
        Automate Production with Automatic{' '}
        <span className={'inline-flex text-cyan-500'}>Filling & Packing Machines</span>
      </h1>
      <p className={'text-background max-w-5xl sm:text-xl'} aria-label={'TEKPACK Description'}>
        For over 15 years, TEKPACK has manufactured high-efficiency, custom-engineered packaging machinery and
        multi-variant filling lines. Built for speed. Designed for precision. Made in Salem, India.
      </p>
    </div>
  )
}

function LandingCTA() {
  return (
    <div className={'mt-5 flex w-full flex-col gap-3 sm:flex-row'}>
      <Link href={'/contact'}>
        <Button aria-label={'Request a Technical Consultation'}>
          <span>Request a Technical Consultation</span>
        </Button>
      </Link>
      <Link href={'/machine'}>
        <Button variant={'secondary'} aria-label={'Explore Machinery Catalog'}>
          <span>Explore Machinery Catalog</span>
        </Button>
      </Link>
    </div>
  )
}
