import { DynamicIcon, IconName } from 'lucide-react/dynamic'
import React from 'react'


interface AppIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: IconName
  size?: number | string
  color?: string
  strokeWidth?: number
  absoluteStrokeWidth?: boolean
}

export default function AppIcon({ name, ...props }: AppIconProps) {
  return <DynamicIcon name={name} {...props} />
}
