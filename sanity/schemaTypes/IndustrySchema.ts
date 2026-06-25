import { TagIcon } from '@sanity/icons'

export default {
  name: 'industry',
  title: 'Industry',
  type: 'document',
  icon: TagIcon,
  fields: [
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
      description: 'Toggle on to feature this item on the main landing page hero.',
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
      title: 'SolutionText',
      type: 'array',
      description: 'Textual solutions/case studies for this industry',
      of: [{ type: 'string' }],
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
