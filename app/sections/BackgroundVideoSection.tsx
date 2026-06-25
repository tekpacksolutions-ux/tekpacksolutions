import React from 'react'

interface BackgroundVideoSectionProps {
  src: string
}

export default function BackgroundVideoSection({ src }: BackgroundVideoSectionProps) {
  return (
    <div className={'bg-foreground relative h-160 w-full'}>
      <div className={'from-foreground/50  to-foreground/50 absolute inset-0 z-10 bg-linear-to-b via-transparent'}></div>
      <video
        autoPlay
        loop
        muted
        controls={false}
        className={'h-full w-full object-cover brightness-40 saturate-50'}
        playsInline>
        <source src={src} type='video/mp4' aria-label='Background video' />
      </video>
    </div>
  )
}
