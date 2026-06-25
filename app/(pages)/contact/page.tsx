import React from 'react'
import PageLayout from '@/app/layouts/PageLayout'
import ContactForm from './ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Engineering Procurement | TEKPACK Automation',
  description:
    'Connect with our engineering automation desk. Submit custom machinery line configurations and plant RFP specifications.',
}

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactForm />
    </PageLayout>
  )
}
