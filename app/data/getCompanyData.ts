export interface CompanyTestimonial {
  id: number
  companyName: string
  testimonial: string
  logo: string
  author: string
  author_role: string
  url?: string
}
export const companies: CompanyTestimonial[] = [
  {
    id: 1,
    companyName: 'AMMA',
    testimonial:
      'Integrating their continuous-duty filling systems completely redefined our bulk material handling throughput. The engineering precision handles our complex organic food flow characteristics seamlessly while preserving strict food safety tolerances.',
    logo: '/image/logo/AMMA.png',
    author: 'Liam Henderson',
    author_role: 'Director of Processing Operations',
  },
  {
    id: 2,
    companyName: 'DGARD',
    testimonial:
      'Our high-speed custom retail packaging lines demand zero room for error. The automated architectural scaling implemented here dropped our configuration changeover times by 40% and keeps our distribution fulfillment flawlessly aligned.',
    logo: '/image/logo/DGARD.jpeg',
    author: 'Matteo Di Nunzio',
    author_role: 'Head of Supply Chain & Retail Logistics',
  },
  {
    id: 3,
    companyName: 'Imayan',
    testimonial:
      'From industrial food-grade sorting down to the primary bagging architectures, the reliability has been bulletproof. Our continuous line limits have scaled smoothly without any drop in sealing integrity or structural uptime.',
    logo: '/image/logo/IMAYAM.jpeg',
    author: 'Farhan Al-Jamil',
    author_role: 'Chief Automation & Plants Engineer',
  },
  {
    id: 4,
    companyName: 'kpr',
    testimonial:
      'Handling highly abrasive material densities with precise grain-free product portions used to wear our systems down. This engineered feeding system safely automated our line limits while keeping clean hygiene standards.',
    logo: '/image/logo/KPR.png',
    author: 'Sarah Jenkins',
    author_role: 'VP of Global Manufacturing Excellence',
  },
  {
    id: 5,
    companyName: 'sellers',
    testimonial:
      'The high-speed horizontal flow wrapping integration was a massive technical upgrade for our facility. Upstream and downstream components communicate seamlessly, allowing us to hit maximum pillow-pack speeds safely.',
    logo: '/image/logo/SELLERS.png',
    author: 'Arjun Mehta',
    author_role: 'Senior Systems Automation Lead',
  },
  {
    id: 6,
    companyName: 'surya',
    testimonial:
      'Sourcing reliable, heavy-duty machinery parts and pneumatic components requires precision configurations. Their automated architectures provide our entire material line with complete, long-term operational durability.',
    logo: '/image/logo/SURYA.jpeg',
    author: 'Marcus Wong',
    author_role: 'Industrial Procurement & Safety Director',
  },
  {
    id: 7,
    companyName: 'tamilachi',
    testimonial:
      'Maintaining zero line defects over high volume industrial productions used to be a major bottleneck. The multi-axis control setups deployed here keep our secondary casing and pallet containment perfectly synchronized.',
    logo: '/image/logo/TAMILACHI.png',
    author: 'Elena Rostova',
    author_role: 'Operations Infrastructure Manager',
  },
  {
    id: 8,
    companyName: 'thamarai',
    testimonial:
      'Their team built a brilliant packaging architecture that dynamically scales with our density limits. Our end-of-line palletizing workflow went from being a labor-heavy bottleneck to our most productive segment.',
    logo: '/image/logo/THAMARAI.png',
    author: 'David Vance',
    author_role: 'Director of Technical Platform Engineering',
  },
]