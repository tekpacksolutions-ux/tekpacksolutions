import { ReactNode } from 'react'

export default function SectionHeader({ children }: { children: ReactNode }) {
  if (!children) return null
  return <span className={'font-clash block text-2xl font-semibold uppercase sm:text-4xl'}>{children}</span>
}
