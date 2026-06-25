import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const HIGHLIGHTED_SOLUTIONS_QUERY = defineQuery(`
  *[_type == "solution" && isHighlighted == true] | order(_updatedAt desc) {
    _id,
    "slug": slug.current,
    name,
    label,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " custom automation package summary"),
    description,
    "challenges": coalesce(challenges, []),
    "solution_text": coalesce(solution_text, [])
  }
`)

export async function getHighlightedSolutions() {
  return await client.fetch(HIGHLIGHTED_SOLUTIONS_QUERY)
}