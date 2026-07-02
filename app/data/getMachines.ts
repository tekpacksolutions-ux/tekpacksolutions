import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const MACHINES_QUERY = defineQuery(`
  *[_type == "machine"] | order(_createdAt desc) {
    _id,
    "slug": slug.current,
    name,
    label,
    price,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " industrial packaging equipment"),
    description,
    "features": coalesce(features[]{key, value}, []),
    "specifications": coalesce(specifications[]{key, value}, [])
  }
`)

export async function getMachines() {
  return await client.fetch(MACHINES_QUERY,{},{
    next: { tags: ['machines'] },
  })
}