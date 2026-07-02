import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const HIGHLIGHTED_MACHINES_QUERY = defineQuery(`
  *[_type == "machine" && isHighlighted == true] | order(_updatedAt desc) {
    _id,
    "slug": slug.current,
    name,
    label,
    price,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " primary packaging hardware feature"),
    description,
    "features": coalesce(features[]{key, value}, []),
    "specifications": coalesce(specifications[]{key, value}, [])
  }
`)

export async function getHighlightedMachines() {
  return await client.fetch(
    HIGHLIGHTED_MACHINES_QUERY,
    {},
    {
      next: { tags: ['machines'] },
    }
  )
}