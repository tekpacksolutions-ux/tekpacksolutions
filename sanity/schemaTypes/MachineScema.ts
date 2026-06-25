import { ComponentIcon } from '@sanity/icons'

export default {
  name: 'machine',
  title: 'Machine',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Machine ID (Slug)',
      type: 'slug',
      description: 'Unique identifier used for URLs. Click "Generate" to create from the name.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'label',
      title: 'UI Label (Badge)',
      type: 'string',
      description: 'e.g., "Best Seller", "New", "Industrial Grade"',
    },
    {
      name: 'price',
      title: 'Starting Price',
      description: 'Starting Price is Actually helps the Google to rank',
      type: 'number',
    },
    {
      name: 'isHighlighted',
      title: 'Highlight on Landing Page?',
      type: 'boolean',
      description: 'Toggle on to feature this item on the main landing page hero/carousel.',
      initialValue: false, // Defaults to unhighlighted for new documents
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for accessibility and SEO.',
        },
      ],
    },
    {
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'industry' }] }],
    },
    {
      name: 'solutions',
      title: 'Solutions Provided',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'solution' }] }],
    },
    {
      name: 'categories',
      title: 'category Provided',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'keyValuePair',
          title: 'Feature',
          fields: [
            { name: 'key', title: 'Feature Name (Key)', type: 'string' },
            { name: 'value', title: 'Detail (Value)', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'keyValuePair',
          title: 'Specification',
          fields: [
            { name: 'key', title: 'Spec Name (Key)', type: 'string' },
            { name: 'value', title: 'Detail (Value)', type: 'string' },
          ],
        },
      ],
    },
  ],
}
