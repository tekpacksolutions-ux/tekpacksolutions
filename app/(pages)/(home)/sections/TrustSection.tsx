import SectionHeader from '@/app/layouts/SectionHeader'
import SectionDescription from '@/app/layouts/SectionDescription'
import SectionLabel from '@/app/layouts/SectionLabel'
import { companies } from '@/app/data/getCompanyData'
import Image from 'next/image'

export default function TrustSection() {

  return (
    <section
      className={
        'bg-background text-foreground flex flex-col items-center justify-center gap-2 rounded-md p-5 text-center sm:p-20 sm:py-30'
      }>
      <article className={'col-span-2 flex max-w-5xl flex-col items-center justify-center gap-2 sm:gap-5'}>
        <SectionLabel>GLOBAL STANDARDS, TRUSTED LOCALLY</SectionLabel>
        <h2>
          <SectionHeader>Trusted by Leading Food, Spice, and Automatic Packing Line Operations</SectionHeader>
        </h2>
        <SectionDescription>
          We build our automated packaging systems using global standard engineering components to ensure effortless
          maintenance and absolute zero downtime worldwide.
        </SectionDescription>
      </article>
      <div className={'mt-5 grid w-full grid-cols-2 gap-5 saturate-0 sm:mt-10 sm:w-auto sm:grid-cols-4'}>
        {companies.map((item) => (
          <div key={item.id} className={'flex items-center justify-center rounded-md bg-white/50 p-5 sm:px-10'}>
            <div className={'relative h-10 w-20 overflow-hidden rounded-md sm:h-20 sm:w-40'}>
              <Image src={item.logo} alt={item.companyName} fill priority className={'object-contain'} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
