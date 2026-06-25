import React from 'react'

export default function SectionDescription({ children }: { children: React.ReactNode }) {
  if (!children) return null
  return (
    <p
      className={
        'text-foreground/60 text-sm font-normal sm:text-lg sm:font-medium [&_span]:font-semibold [&_span]:text-cyan-600 sm:[&_span]:mx-1'
      }>
      {children}
    </p>
  )
}
