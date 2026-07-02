'use client'

import React from 'react'
import PageHeaderSection from '@/app/sections/PageHeaderSection'
import SectionDescription from '@/app/layouts/SectionDescription'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function ContactForm() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdul-rahman-s-58261138a',
      icon: <FaLinkedin />,
      color: 'hover:bg-[#0A66C2]',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tekpack4?igsh=MWhiczMxa3BsZGNkcA==',
      icon: <FaInstagram />,
      color: 'hover:bg-[#E4405F]',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@tekpackofficial?si=_OIK99q-T5DmLiuy',
      icon: <FaYoutube />,
      color: 'hover:bg-[#FF0000]',
    },
    {
      name: 'X / Twitter',
      url: 'https://x.com/tek_packk',
      icon: <FaXTwitter />,
      color: 'hover:bg-[#000000]',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919150040034',
      icon: <FaWhatsapp />,
      color: 'hover:bg-[#25D366]',
    },
  ]

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    materialType: '',
    productionVolume: '',
    additionalRequirements: '',
  })

  const [loading, setLoading] = React.useState(false)
  const [statusMessage, setStatusMessage] = React.useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Explicit type assignment to avoid compilation warnings
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Something went wrong while routing your request.')
      }

      setStatusMessage({
        type: 'success',
        text: 'RFP received! Our engineering team will analyze your material vertical.',
      })
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        materialType: '',
        productionVolume: '',
        additionalRequirements: '',
      })
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit quote.'
      setStatusMessage({ type: 'error', text: errorMessage })
    } finally {
      // Syntax block completely restored and stripped of extraneous words
      setLoading(false)
    }
  }

  return (
    <PageHeaderSection className='h-auto min-h-[60vh]'>
      <div className={'grid grid-cols-1 gap-5 p-5 md:p-20 lg:grid-cols-2'}>
        <div className={'flex flex-col items-start justify-center gap-2 p-5'}>
          <h1 className={'font-clash text-foreground text-6xl font-semibold uppercase'}>Get in Touch</h1>
          <SectionDescription>
            Our goal is to provide you with excellent customer service while meeting all of your packaging automation
            needs. We provide the peace of mind that comes from working with one manufacturer, one service department
            and one point of contact.
          </SectionDescription>

          <div className='flex flex-wrap gap-3'>
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => window.open(social.url, '_blank')}
                className={`flex items-center gap-2 rounded-lg border border-cyan-600/20 bg-white cursor-pointer px-8 py-4  font-semibold text-black transition-all hover:text-white ${social.color}`}>
                <span className='text-lg'>{social.icon}</span>
                {social.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className={
              'flex flex-col gap-3 rounded-lg border border-cyan-600/20 bg-white p-6 backdrop-blur-sm md:p-10'
            }>
            <div className='flex flex-col'>
              <h3 className={'font-clash text-3xl font-semibold text-black uppercase'}>Request a Custom Quote</h3>
              <p className={'mt-1 text-sm font-semibold tracking-wider text-black/50'}>
                Share your production requirements. Our engineering team will analyze your material vertical.
              </p>
            </div>

            {statusMessage && (
              <div
                className={`rounded-md p-3 text-sm font-semibold ${
                  statusMessage.type === 'success'
                    ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border border-rose-200 bg-rose-50 text-rose-700'
                }`}>
                {statusMessage.text}
              </div>
            )}

            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Full Name'
              required
              disabled={loading}
              className={
                'rounded-md border-2 border-cyan-600 bg-white p-2 font-medium text-black focus:outline-none disabled:opacity-50'
              }
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Business Email'
              required
              disabled={loading}
              className={
                'rounded-md border-2 border-cyan-600 bg-white p-2 font-medium text-black focus:outline-none disabled:opacity-50'
              }
            />
            <input
              type='text'
              name='company'
              value={formData.company}
              onChange={handleChange}
              placeholder='Company Name'
              required
              disabled={loading}
              className={
                'rounded-md border-2 border-cyan-600 bg-white p-2 font-medium text-black focus:outline-none disabled:opacity-50'
              }
            />

            <select
              name='industry'
              value={formData.industry}
              onChange={handleChange}
              required
              disabled={loading}
              className={
                'rounded-md border-2 border-cyan-600 bg-white p-2 font-medium text-black focus:outline-none disabled:opacity-50'
              }>
              <option value='' disabled hidden>
                Select Target Industry
              </option>
              <option value='food-beverage'>Food & Beverage</option>
              <option value='pharmaceutical'>Pharmaceuticals & Medical</option>
              <option value='chemical'>Chemicals & Powders</option>
              <option value='cosmetics'>Cosmetics & Personal Care</option>
              <option value='manufacturing'>Industrial Manufacturing</option>
            </select>

            <input
              type='text'
              name='materialType'
              value={formData.materialType}
              onChange={handleChange}
              placeholder='Material Type (e.g., Granules, Free-flowing Liquid)'
              required
              disabled={loading}
              className={
                'rounded-md border-2 border-cyan-600 bg-white p-2 font-medium text-black focus:outline-none disabled:opacity-50'
              }
            />

            <select
              name='productionVolume'
              value={formData.productionVolume}
              onChange={handleChange}
              required
              disabled={loading}
              className={
                'rounded-md border-2 border-cyan-600 bg-white p-2 font-medium text-black focus:outline-none disabled:opacity-50'
              }>
              <option value='' disabled hidden>
                Target Production Output
              </option>
              <option value='low'>Low Volume (Pilot / Startup Scale)</option>
              <option value='medium'>Medium Volume (Mid-Scale Continuous)</option>
              <option value='high'>High Volume (Full Automation Assembly)</option>
            </select>

            <textarea
              name='additionalRequirements'
              value={formData.additionalRequirements}
              onChange={handleChange}
              placeholder='Specific constraints or custom integrations required (e.g., Gas-flushing)...'
              rows={3}
              disabled={loading}
              className={
                'rounded-md border-2 border-cyan-600 bg-white p-2 font-medium text-black focus:outline-none disabled:opacity-50'
              }
            />

            <button
              type='submit'
              disabled={loading}
              className={
                'rounded-md bg-cyan-600 p-2 font-semibold tracking-wide text-white uppercase transition-colors hover:bg-cyan-700 disabled:bg-cyan-600/50'
              }>
              {loading ? 'Submitting RFP...' : 'Submit RFP Data'}
            </button>
          </form>
        </div>
      </div>
    </PageHeaderSection>
  )
}
