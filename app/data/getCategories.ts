import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const CATEGORY_QUERY = defineQuery(`
  *[_type == "category"] | order(name asc) {
    _id,
    "slug": slug.current,
    name,
    label,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " packaging machinery category"),
    description
  }
`)

export async function getCategories() {
  return await client.fetch(CATEGORY_QUERY,{},{
    next: { tags: ['categories'] },
  })
}