import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const INDUSTRY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "industry" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    name,
    label,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " enterprise facility"),
    description,
    "challenges": coalesce(challenges, []),
    "solution_text": coalesce(solution_text, []),
    "machines": coalesce(machines[]-> {
      _id,
      label,
      "slug": slug.current,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      "imageAlt": coalesce(image.alt, name + " production line machine"),
      "features": coalesce(features[]{key, value}, []),
      "specifications": coalesce(specifications[]{key, value}, [])
    }, [])
  }
`)

export async function getIndustryBySlug(slug: string) {
  return await client.fetch(
    INDUSTRY_BY_SLUG_QUERY,
    { slug },
    {
      next: { tags: ['industries'], revalidate: 0 },
    }
  )
}
