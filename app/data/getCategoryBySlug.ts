import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    name,
    label,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " system setup"),
    description,
    "machines": coalesce(machines[]-> {
      _id,
      label,
      "slug": slug.current,
      name,
      price,
      description,
      "imageUrl": image.asset->url,
      "imageAlt": coalesce(image.alt, name + " variant overview"),
      "features": coalesce(features[]{key, value}, []),
      "specifications": coalesce(specifications[]{key, value}, [])
    }, [])
  }
`)

export async function getCategoryBySlug(slug: string) {
  return await client.fetch(CATEGORY_BY_SLUG_QUERY, { slug } , {
    next: { tags: ['categories'] },
  })
}