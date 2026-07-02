import { client } from '@/sanity/lib/client'
import { defineQuery } from 'groq'
export const MACHINE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "machine" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    name,
    label,
    price,
    description,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name + " packaging machinery system close up spec"),
    "features": coalesce(features[]{key, value}, []),
    "specifications": coalesce(specifications[]{key, value}, []),
    
    "categories": coalesce(category[]-> {
      _id,
      "slug": slug.current,
      name,
      label,
      "imageUrl": image.asset->url,
      "imageAlt": coalesce(image.alt, name + " configuration category")
    }, []),
    
    "industries": coalesce(industries[]-> {
      _id,
      label,
      name,
      "slug": slug.current,
      description,
      "imageUrl": image.asset->url,
      "imageAlt": coalesce(image.alt, name + " sector match")
    }, []),
    
    "solutions": coalesce(solutions[]-> {
      _id,
      label,
      name,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      "imageAlt": coalesce(image.alt, name + " engineering application configuration")
    }, [])
  }
`)

export async function getMachineBySlug(slug: string) {
  return await client.fetch(MACHINE_BY_SLUG_QUERY, { slug },{
    next: { tags: ['machines'] },
  })
}