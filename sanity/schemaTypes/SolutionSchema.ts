import { HighlightIcon } from '@sanity/icons'

export default {
  name: 'solution',
  title: 'Solution',
  type: 'document',
  icon: HighlightIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Solution ID (Slug)',
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
      description: 'Text to display as a badge in the UI',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'isHighlighted',
      title: 'Highlight on Landing Page?',
      type: 'boolean',
      description: 'Toggle on to feature this item on the main landing page hero/carousel.',
      initialValue: false, // Defaults to unhighlighted for new documents
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
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'solution_text',
      title: 'Solution Text',
      type: 'array',
      description: 'Specific details of the solution process',
      of: [{ type: 'string' }],
    },
    {
      name: 'machines',
      title: 'Associated Machines',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'machine' }] }],
    },
  ],
}
