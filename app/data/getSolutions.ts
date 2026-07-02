import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const SOLUTIONS_QUERY = defineQuery(`
  *[_type == "solution"] | order(name asc) {
    _id,
    "slug": slug.current,
    name,
    label,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " material handling solution"),
    description,
    "challenges": coalesce(challenges, []),
    "solution_text": coalesce(solution_text, [])
  }
`)

export async function getSolutions() {
  return await client.fetch(SOLUTIONS_QUERY,{},{
    next: { tags: ['solutions'] },
  })
}
