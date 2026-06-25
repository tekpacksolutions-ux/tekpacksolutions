import React from 'react'
import { cn } from '@/app/utils/cn'
import Image from 'next/image'

interface PageHeaderSectionProps {
  children: React.ReactNode
  className?: string
}

export default function PageHeaderSection({ children, className }: PageHeaderSectionProps) {
  return (
    <section className={cn('relative  sm:min-h-[50vh] w-full overflow-hidden rounded-md p-2 sm:p-5', className)}>
      <div className={'relative z-10 h-full w-full'}>{children}</div>
      <div className={'absolute top-0 right-0 h-full w-full'}>
        <Image src={'/image/background.webp'} alt={'bg'} fill priority className={'object-cover'} />
      </div>
      <div className={'absolute bottom-0 left-0 h-full w-full'}>
        <Image src={'/image/background2.webp'} alt={'bg'} fill priority className={'rotate-180 object-cover'} />
      </div>
    </section>
  )
}
