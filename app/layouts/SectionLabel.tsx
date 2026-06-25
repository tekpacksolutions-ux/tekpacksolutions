import React from 'react'

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  if (!children) return null
  return (
    <span className={'block text-base font-semibold tracking-wider text-cyan-600 uppercase sm:text-xl'}>
      {children}
    </span>
  )
}
