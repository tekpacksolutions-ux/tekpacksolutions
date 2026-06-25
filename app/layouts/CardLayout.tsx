import React from 'react'
import AppIcon from '@/components/AppIcon'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'

function CardIcon({ className }: { className?: string }) {
  return (
    <div className={cn('bg-foreground absolute -right-3 -bottom-3 z-10 rounded-xl p-2', className)}>
      <div className={'bg-background text-foreground border-foreground rounded-md p-3'}>
        <AppIcon name={'arrow-up-right'} strokeWidth={3} />
      </div>
    </div>
  )
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className={'text-foreground text-lg font-bold tracking-tight uppercase'}>
      {children ?? 'Packaging System Variant'}
    </h3>
  )
}

function CardDescription({ children }: { children: React.ReactNode }) {
  if (!children) return null
  return <p className={'text-foreground/60 text-sm leading-relaxed font-medium'}>{children}</p>
}

function CardIAsset(props: { imageUrl: string | null; imageAlt: string | null; className?: string }) {
  const finalSrc = props.imageUrl && props.imageUrl.trim() !== '' ? props.imageUrl : '/image/demos.jpg'
  const finalAlt =
    props.imageAlt && props.imageAlt.trim() !== ''
      ? props.imageAlt
      : 'Automatic filling and packing machine variant layout'

  return (
    <div className={cn('relative h-40 w-full overflow-hidden rounded-md bg-zinc-100', props.className)}>
      <Image
        src={finalSrc}
        alt={finalAlt}
        fill
        sizes='(max-width: 768px) 100vw, 33vw'
        priority
        className={'object-cover transition-all duration-400 ease-in-out group-hover:scale-105'}
      />
    </div>
  )
}

function Card({ id, slug, children }: { id: string; slug: string; children: React.ReactNode }) {
  const fallbackId = id ?? React.useId()
  const cleanHref = slug ? `/${slug}` : '#_request_quote'

  return (
    <li
      id={fallbackId}
      className={
        'bg-background group relative flex cursor-pointer flex-col gap-2 overflow-hidden rounded-md border border-zinc-200/60 p-3 shadow-sm transition-all duration-400 ease-in-out hover:border-cyan-600/30'
      }>
      {/*
        SEO Enhancement: Wraps entire interactive payload contextually.
        No sub-lists or tables are allowed to sit natively within an anchor directly.
      */}
      <Link href={cleanHref} replace={false} className='block h-full w-full'>
        <article className='flex h-full flex-col justify-between gap-3'>
          <div className='flex w-full flex-col gap-2'>{children}</div>
        </article>
      </Link>
    </li>
  )
}

function CardBadge({ children }: { children: React.ReactNode }) {
  if (!children || String(children).trim() === '') return null
  return (
    <span
      className={
        'bg-foreground text-background absolute top-5 left-5 z-20 rounded-md p-1 px-2 text-xs font-semibold tracking-wider uppercase'
      }>
      {children}
    </span>
  )
}

export { Card, CardIAsset, CardHeader, CardDescription, CardIcon, CardBadge }
