import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const INDUSTRIES_QUERY = defineQuery(`
  *[_type == "industry"] | order(name asc) {
    _id,
    "slug": slug.current,
    name,
    label,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " manufacturing workflow"),
    description,
    "challenges": coalesce(challenges, []),
    "solution_text": coalesce(solution_text, [])
  }
`)

export async function getIndustries() {
  return await client.fetch(
    INDUSTRIES_QUERY,
    {},
    {
      next: { tags: ['industries'], revalidate: 0 },
    }
  )
}