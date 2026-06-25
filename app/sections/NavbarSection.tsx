'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/app/utils/cn'

interface NavigationDataType {
  name: string
  href: string
  icon: string
}

const navigationData: NavigationDataType[] = [
  { name: 'Home', href: '/', icon: 'home' },
  { name: 'Industries', href: '/industry', icon: 'info' },
  { name: 'Solutions', href: '/application', icon: 'application' },
  { name: 'Machinery', href: '/category', icon: 'machine' },
  { name: 'Contact Us', href: '/contact', icon: 'contact' },
]

function LogoSection() {
  return (
    <div className='bg-background flex h-full w-full items-center justify-center'>
      <div className='relative h-full w-32 md:w-40'>
        <Image src='/image/FullLogo.png' alt='TEKPACK Logo' fill priority className='object-contain' />
      </div>
    </div>
  )
}

export default function NavbarSection() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav
        className={
          'bg-foreground sticky top-0 z-50 grid h-20 w-full grid-cols-3 place-content-stretch gap-2 p-2 *:overflow-hidden *:rounded-md sm:grid-cols-7'
        }>
        {/* Column 1: Logo (Visible Everywhere) */}
        <LogoSection />

        {/* Desktop Navigation Links (Hidden on mobile, spans 5 columns on desktop) */}
        <ul className='col-span-5 hidden h-full gap-2 *:overflow-hidden *:rounded-md sm:grid sm:grid-cols-5'>
          {navigationData.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <li key={item.name} className='bg-background relative h-full'>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'font-clash absolute inset-0 flex items-center justify-center p-2 text-center text-base font-semibold tracking-wide uppercase transition-colors lg:text-lg',
                    isActive ? 'bg-cyan-600 text-white' : 'text-foreground hover:bg-zinc-100'
                  )}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Column 2 (Mobile) / Column 7 (Desktop): Admin Panel Link */}
        <Link
          href={'/studio'}
          className='font-clash bg-background text-foreground flex items-center justify-center text-center text-sm font-semibold tracking-wide uppercase hover:bg-zinc-100 md:text-lg'>
          Admin
        </Link>

        {/* Column 3 (Mobile Only): Menubar Trigger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label='Toggle navigation menu'
          className='font-clash bg-background text-foreground flex flex-col items-center justify-center gap-1.5 text-xs font-semibold tracking-wider uppercase focus:outline-none active:bg-zinc-100 sm:hidden'>
          <div
            className={cn(
              'h-0.5 w-6 bg-current transition-transform duration-300',
              isOpen && 'translate-y-2 rotate-45'
            )}
          />
          <div className={cn('h-0.5 w-6 bg-current transition-opacity duration-300', isOpen && 'opacity-0')} />
          <div
            className={cn(
              'h-0.5 w-6 bg-current transition-transform duration-300',
              isOpen && '-translate-y-2 -rotate-45'
            )}
          />
          <span className='mt-0.5 text-[10px] tracking-widest'>Menu</span>
        </button>
      </nav>

      {/* Slide-out Overlay Drawer Panel for Mobile Views */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 sm:hidden',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setIsOpen(false)}>
        <div
          className={cn(
            'bg-foreground absolute top-24 right-2 left-2 flex max-h-[calc(100vh-7rem)] origin-top transform flex-col gap-2 rounded-xl border border-zinc-800 p-4 shadow-2xl transition-all duration-300',
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          )}
          onClick={(e) => e.stopPropagation()}>
          {navigationData.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'font-clash w-full rounded-lg py-4 text-center text-lg font-bold tracking-wider uppercase transition-all',
                  isActive ? 'bg-cyan-600 text-white shadow-md' : 'bg-background text-foreground hover:bg-zinc-100'
                )}>
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
