import SectionHeader from '@/app/layouts/SectionHeader'
import React from 'react'
import SectionDescription from '@/app/layouts/SectionDescription'
import SectionLabel from '@/app/layouts/SectionLabel'

export default function AboutSection() {
  return (
    <section
      className={'bg-background flex flex-col items-center justify-center gap-4 rounded-md p-5 text-center sm:p-20'}>
      <div className={'flex max-w-5xl flex-col items-center gap-2 text-center font-medium'}>
        <SectionLabel>OVER 15 YEARS OF PACKAGING INNOVATION</SectionLabel>
        <h2>
          <SectionHeader>Manufacturing High-Performance Automatic Filling and Pouch Packing Lines</SectionHeader>
        </h2>
        <SectionDescription>
          Founded with a vision to revolutionize the automated packaging landscape, <span>TEKPACK</span> has spent
          <span> more than 15 years designing, manufacturing, and deploying</span> high-performance filling and packing
          systems. Based out of the industrial hub of Salem, Tamil Nadu, we engineer robust machinery that transforms
          raw production speeds into sustainable bottom-line growth.
        </SectionDescription>
      </div>
    </section>
  )
}
