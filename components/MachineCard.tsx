import { Card, CardBadge, CardDescription, CardHeader, CardIAsset, CardIcon } from '@/app/layouts/CardLayout'
import React from 'react'

interface MachineItemProps {
  _id: string
  slug: string | null
  name: string | null
  label: string | null
  description: string | null
  imageUrl: string | null
  imageAlt: string | null
  price?: number | null
  specifications?: { key: string | null; value: string | null }[] | null
  features?: { key: string | null; value: string | null }[] | null
}

export default function MachineCard({
  name,
  label,
  description,
  _id,
  slug,
  price,
  imageUrl,
  imageAlt,
  features,
  specifications,
}: MachineItemProps) {
  if (!slug) return null

  // Pristine filter loops to ensure rendering engines don't process blank objects
  const validFeatures = (features ?? []).filter((f): f is { key: string; value: string } => !!f?.key && !!f?.value)
  const validSpecs = (specifications ?? []).filter((s): s is { key: string; value: string } => !!s?.key && !!s?.value)

  const hasFeatures = validFeatures.length > 0
  const hasSpecs = validSpecs.length > 0

  return (
    <Card id={_id} slug={slug}>
      <CardBadge>{label}</CardBadge>
      <CardIAsset imageUrl={imageUrl} imageAlt={imageAlt} className={'h-60'} />

      <div className={'flex w-full flex-col gap-1'}>
        <CardHeader>{name ?? 'Industrial Machinery Line'}</CardHeader>
        <CardDescription>{description}</CardDescription>

        {price && price > 0 && (
          <p className={'mt-1 flex items-baseline gap-1 text-sm font-semibold text-cyan-600'}>
            <span>Price:</span>
            <span className='text-foreground text-base font-bold'>₹{price.toLocaleString('en-IN')}</span>
            <span className={'text-foreground/50 text-xs font-medium'}>starting onwards</span>
          </p>
        )}
      </div>

      {/* Render layout rows within static block divisions to safeguard anchor tracking targets */}
      <div className='mt-2 flex w-full flex-col gap-3 text-xs'>
        {hasFeatures && (
          <div className='flex flex-col gap-1.5'>
            <div className='text-background bg-foreground rounded-md px-2 py-1 font-semibold tracking-wider uppercase'>
              Key Structural Features
            </div>
            <div className='flex flex-col gap-1 rounded-md border border-zinc-100 bg-zinc-50/80 p-1.5'>
              {validFeatures.map((item, idx) => (
                <div
                  key={item.key + idx}
                  className={'grid grid-cols-2 border-b border-zinc-200/50 py-0.5 last:border-0'}>
                  <span className={'text-foreground/80 font-semibold'}>{item.key}</span>
                  <span className='text-foreground/70 truncate text-right'>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasSpecs && (
          <div className='flex flex-col gap-1.5'>
            <div className='text-background bg-foreground rounded-md px-2 py-1 font-semibold tracking-wider uppercase'>
              Engineering Specifications
            </div>
            <div className='flex flex-col gap-1 rounded-md border border-zinc-100 bg-zinc-50/80 p-1.5'>
              {validSpecs.map((item, idx) => (
                <div
                  key={item.key + idx}
                  className={'grid grid-cols-2 border-b border-zinc-200/50 py-0.5 last:border-0'}>
                  <span className={'text-foreground/80 font-semibold'}>{item.key}</span>
                  <span className='text-foreground/70 truncate text-right'>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {!hasSpecs && !hasFeatures && <CardIcon />}
    </Card>
  )
}
