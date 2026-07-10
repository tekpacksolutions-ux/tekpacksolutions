import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const SOLUTION_BY_SLUG_QUERY = defineQuery(`
  *[_type == "solution" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    name,
    label,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " processing line"),
    description,
    "challenges": coalesce(challenges, []),
    "solution_text": coalesce(solution_text, []),
    "machines": coalesce(machines[]-> {
      _id,
      label,
      "slug": slug.current,
      name,
      price,
      description,
      "imageUrl": image.asset->url,
      "imageAlt": coalesce(image.alt, name + " variant layout"),
      "features": coalesce(features[]{key, value}, []),
      "specifications": coalesce(specifications[]{key, value}, [])
    }, [])
  }
`)

export async function getSolutionBySlug(slug: string) {
  return await client.fetch(
    SOLUTION_BY_SLUG_QUERY,
    { slug },
    {
      next: { tags: ['solutions'], revalidate: 0 },
    }
  )
}