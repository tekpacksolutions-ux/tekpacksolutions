import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import LandingSection from '@/app/(pages)/(home)/sections/LandingSection'
import MetricSection from '@/app/(pages)/(home)/sections/MetricSection'
import TrustSection from '@/app/(pages)/(home)/sections/TrustSection'
import SolutionSection from '@/app/(pages)/(home)/sections/SolutionSection'
import AboutSection from '@/app/(pages)/(home)/sections/AboutSection'
import MachineSection from '@/app/(pages)/(home)/sections/MachineSection'
import ContactSection from '@/app/(pages)/(home)/sections/ContactSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automatic Filling & Packing Machines Manufacturer | TEKPACK',
  description:
    'TEKPACK manufactures high-efficiency automatic filling machines, industrial pouch packing systems, and custom automated packaging lines in Salem, India.',
  keywords: [
    'automatic filling machine',
    'packing machine manufacturer',
    'pouch packing machine',
    'industrial packaging systems',
    'Salem India machinery',
  ],
}

export default function HomePage() {
  return (
    <PageLayout>
      <LandingSection />
      <MetricSection />
      <TrustSection />
      <SolutionSection />
      <AboutSection />
      <MachineSection />
      <ContactSection />
    </PageLayout>
  )
}
