import { Card, CardBadge, CardDescription, CardHeader, CardIAsset, CardIcon } from '@/app/layouts/CardLayout'
import React from 'react'
import { cn } from '@/app/utils/cn'

interface SolutionItemProps {
  _id: string
  slug: string | null
  name: string | null
  label: string | null
  description: string | null
  imageUrl: string | null
  imageAlt: string | null
  challenges?: string[] | null
  solution_text?: string[] | null
}

export default function SolutionCard({
  name,
  label,
  description,
  _id,
  slug,
  imageUrl,
  imageAlt,
  challenges,
  solution_text,
}: SolutionItemProps) {
  if (!slug) return null

  // String cleaning array interceptors
  const validChallenges = (challenges ?? []).filter((c) => c && c.trim() !== '')
  const validSolutions = (solution_text ?? []).filter((s) => s && s.trim() !== '')

  const isBigger = validChallenges.length > 0 && validSolutions.length > 0

  return (
    <Card id={_id} slug={slug}>
      <CardBadge>{label}</CardBadge>
      <CardIAsset imageUrl={imageUrl} imageAlt={imageAlt} className={'h-50'} />

      <div className={cn('w-full', isBigger ? 'max-w-full' : 'max-w-xs')}>
        <CardHeader>{name ?? 'Turnkey Assembly Line Solution'}</CardHeader>
        <CardDescription>{description}</CardDescription>
      </div>

      {/*
        Hydration Mismatch Fix: Elements converted from standard list items
        to distinct stack dividers. This prevents nesting illegal nodes inside links.
      */}
      {isBigger && (
        <div className={'mt-2 flex w-full flex-col gap-2 text-xs'}>
          <div className='flex flex-col gap-1.5'>
            <div className='text-background bg-foreground rounded-md px-2 py-1 font-semibold tracking-wider uppercase'>
              Processing Challenges
            </div>
            <div
              className={
                'text-foreground/80 flex flex-col gap-1.5 rounded-md border border-zinc-100 bg-zinc-50 p-2 font-medium'
              }>
              {validChallenges.map((item, index) => (
                <div key={index} className='flex items-start gap-1.5 leading-snug'>
                  <span className='block shrink-0 font-bold text-cyan-600'>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <div className='text-background bg-foreground rounded-md px-2 py-1 font-semibold tracking-wider uppercase'>
              Engineered Solutions
            </div>
            <div
              className={
                'text-foreground/80 flex flex-col gap-1.5 rounded-md border border-zinc-100 bg-zinc-50 p-2 font-medium'
              }>
              {validSolutions.map((item, index) => (
                <div key={index} className='flex items-start gap-1.5 leading-snug'>
                  <span className='block shrink-0 font-bold text-emerald-600'>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!isBigger && <CardIcon />}
    </Card>
  )
}
