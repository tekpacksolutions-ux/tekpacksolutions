import React from 'react'

export default function MetricSection() {
  return (
    <section aria-labelledby='metrics-heading '>
      <h2 id='metrics-heading' className='sr-only'>
        Tekpack Performance and Engineering Metrics
      </h2>
      <ul className='grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-4'>
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </ul>
    </section>
  )
}

interface Metric {
  title: string
  description: string
  icon?: string
}

const metrics: Metric[] = [
  {
    title: '15+',
    description: 'Years of Packaging Engineering Excellence',
  },
  {
    title: '500+',
    description: 'Successful Industrial Machinery Installations Globally',
  },
  {
    title: '24/7',
    description: 'Technical Support and Production Maintenance',
  },
  {
    title: '100%',
    description: 'Custom Automation and Filling Line Solutions',
  },
]

interface MetricCardProps extends Metric {}

function MetricCard({ title, description }: MetricCardProps) {
  return (
    <li className='bg-background relative flex min-h-40 flex-col justify-between rounded-md p-5'>
      <p className='text-foreground font-clash text-6xl font-semibold sm:text-7xl'>{title}</p>
      <p className='text-foreground max-w-60 pt-5 font-sans text-xl font-medium capitalize'>{description}</p>
    </li>
  )
}
