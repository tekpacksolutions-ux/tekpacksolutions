import React from 'react'
import NavbarSection from '@/app/sections/NavbarSection'
import FooterSection from '@/app/sections/FooterSection'
import { cn } from '@/app/utils/cn'

interface PageLayoutProps {
  children?: React.ReactNode
  className?: string
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div
      className={cn('bg-foreground relative flex min-h-screen max-w-screen flex-col gap-1 p-2 font-sans', className)}>
      <NavbarSection />
      {/* Wrapped in a semantic main landmark tag for optimal crawler processing */}
      <main id='main-content' className={'flex h-full w-full flex-col gap-2'}>
        {children}
      </main>
      <FooterSection />
    </div>
  )
}
