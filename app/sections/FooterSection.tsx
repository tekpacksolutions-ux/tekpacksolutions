import React from 'react'
import Link from 'next/link'
import { getMachines } from '@/app/data/getMachines'
import { getCategories } from '@/app/data/getCategories'
import { getSolutions } from '@/app/data/getSolutions'
import { getIndustries } from '@/app/data/getIndustries'

export default async function FooterSection() {
  // Fetch lists directly on the server side for immediate global crawler visibility
  const [machines, categories, solutions, industries] = await Promise.all([
    getMachines().then((res) => (res ?? []).slice(0, 5)),
    getCategories().then((res) => (res ?? []).slice(0, 5)),
    getSolutions().then((res) => (res ?? []).slice(0, 5)),
    getIndustries().then((res) => (res ?? []).slice(0, 5)),
  ])

  return (
    <footer className={'bg-foreground text-background/50 border-t border-zinc-800/40 p-6 md:p-16 lg:p-20'}>
      <div className={'grid grid-cols-1 gap-10 lg:grid-cols-3'}>
        {/* Left Panel: Corporate Identifier & Contact Information */}
        <div className={'flex flex-col gap-6 lg:col-span-1'}>
          <div className={'flex flex-col gap-1'}>
            <h2 className={'font-clash text-5xl font-bold tracking-tight text-cyan-600 uppercase'}>Tekpack</h2>
            <p className={'text-background text-xl font-semibold tracking-wider uppercase'}>
              Next-Gen Packaging Technology
            </p>
          </div>

          <div className={'flex flex-col gap-3 text-sm'}>
            <div className='flex flex-col gap-0.5'>
              <p className={'text-background/40 text-xs font-bold tracking-widest uppercase'}>Corporate Headquarters</p>
              <address className={'text-background/80 max-w-sm leading-relaxed font-medium not-italic'}>
                98/453-A, Narasimman Rd, Sairaj Nagar,
                <br />
                Shevapet, Salem, Tamil Nadu 636002, India
              </address>
            </div>

            <div className='mt-1 flex flex-col gap-1'>
              <p className={'text-background/40 text-xs font-bold tracking-widest uppercase'}>
                Engineering & Procurement Sales
              </p>
              <div className='text-background flex flex-col gap-0.5 font-semibold'>
                <a href='tel:+919150040034' className='block transition-colors hover:text-cyan-500'>
                  +91 91500 40034
                </a>
                <a href='tel:+919150040037' className='block transition-colors hover:text-cyan-500'>
                  +91 91500 40037
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Crawler Directory Links */}
        <div className={'grid grid-cols-2 gap-8 text-sm md:grid-cols-4 lg:col-span-2'}>
          {/* Column 1: Core Machines Index */}
          <div className={'flex flex-col gap-3'}>
            <p className={'text-background font-bold tracking-wider uppercase'}>Machines</p>
            <div className='flex flex-col gap-2 font-medium'>
              {machines.map((item) => (
                <Link
                  key={item._id}
                  href={`/machine/${item.slug}`}
                  className='truncate transition-colors hover:text-cyan-500'>
                  {item.name}
                </Link>
              ))}
              <Link href='/machine' className='mt-1 font-semibold text-cyan-600 hover:underline'>
                View All Systems →
              </Link>
            </div>
          </div>

          {/* Column 2: System Categories */}
          <div className={'flex flex-col gap-3'}>
            <p className={'text-background font-bold tracking-wider uppercase'}>Categories</p>
            <div className='flex flex-col gap-2 font-medium'>
              {categories.map((item) => (
                <Link
                  key={item._id}
                  href={`/category/${item.slug}`}
                  className='truncate transition-colors hover:text-cyan-500'>
                  {item.name}
                </Link>
              ))}
              <Link href='/category' className='mt-1 font-semibold text-cyan-600 hover:underline'>
                All Classifications →
              </Link>
            </div>
          </div>

          {/* Column 3: Material Solutions */}
          <div className={'flex flex-col gap-3'}>
            <p className={'text-background font-bold tracking-wider uppercase'}>Solutions</p>
            <div className='flex flex-col gap-2 font-medium'>
              {solutions.map((item) => (
                <Link
                  key={item._id}
                  href={`/application/${item.slug}`}
                  className='truncate transition-colors hover:text-cyan-500'>
                  {item.name}
                </Link>
              ))}
              <Link href='/application' className='mt-1 font-semibold text-cyan-600 hover:underline'>
                All Materials →
              </Link>
            </div>
          </div>

          {/* Column 4: Market Segments & Social Networks */}
          <div className={'flex flex-col gap-6'}>
            <div className='flex flex-col gap-3'>
              <p className={'text-background font-bold tracking-wider uppercase'}>Industries</p>
              <div className='flex flex-col gap-2 font-medium'>
                {industries.map((item) => (
                  <Link
                    key={item._id}
                    href={`/industry/${item.slug}`}
                    className='truncate transition-colors hover:text-cyan-500'>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className={'flex flex-col gap-3'}>
              <p className={'text-background font-bold tracking-wider uppercase'}>Network Channels</p>
              <div className='text-background/80 flex flex-col gap-1.5 font-semibold'>
                <a
                  href='https://www.linkedin.com/in/abdul-rahman-s-58261138a'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transition-colors hover:text-cyan-500'>
                  LinkedIn
                </a>
                <a
                  href='https://www.instagram.com/tekpack4?igsh=MWhiczMxa3BsZGNkcA=='
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transition-colors hover:text-cyan-500'>
                  Instagram
                </a>
                <a
                  href='https://youtube.com/@tekpackofficial?si=_OIK99q-T5DmLiuy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transition-colors hover:text-cyan-500'>
                  YouTube Channel
                </a>
                <a
                  href='https://x.com/tek_packk'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block transition-colors hover:text-cyan-500'>
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Compliance Sub-Footer */}
      <div className='text-background/30 mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-6 text-xs font-medium sm:flex-row'>
        <p>© {new Date().getFullYear()} TEKPACK Lines Ltd. All rights reserved.</p>
        <div className='flex gap-4'>
          <Link href='/contact' className='transition-colors hover:text-cyan-500'>
            Request Engineering Quote
          </Link>
          <span>•</span>
          <Link href='/contact' className='transition-colors hover:text-cyan-500'>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
