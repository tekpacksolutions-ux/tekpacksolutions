import { TagIcon } from '@sanity/icons'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: TagIcon,
  fields: [
    {
      name: 'label',
      title: 'UI Label (Badge)',
      type: 'string',
      description: 'Text to display as a badge in the UI',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Industry ID (Slug)',
      type: 'slug',
      description: 'Unique identifier used for URLs. Click "Generate" to create from the name.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
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
      name: 'machines',
      title: 'Associated Machines',
      type: 'array',
      description: 'Machines used in this industry',
      of: [{ type: 'reference', to: [{ type: 'machine' }] }],
    },
  ],
}
