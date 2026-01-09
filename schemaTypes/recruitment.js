import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'recruitment',
  title: 'Recruitment',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position Name',
      type: 'string',
      description: 'e.g., Content Writer, Designer, or Photographer',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'reference',
      to: [{ type: 'department' }],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'customQuestions',
      title: 'Department Specific Questions',
      type: 'array',
      description: 'Add questions specifically for this role.',
      of: [
        {
          type: 'object',
          name: 'customQuestion',
          title: 'Custom Question',
          fields: [
            defineField({
              name: 'questionText',
              title: 'Question Text',
              type: 'string',
            }),
            defineField({
              name: 'fieldType',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Small Text Box', value: 'small text' },
                  { title: 'Large Text Box', value: 'large text' },
                  { title: 'Image Upload', value: 'image upload' },
                ],
                layout: 'radio', // Optional: displays options as radio buttons for easier selection
              },
              initialValue: 'small text',
            }),
            defineField({
              name: 'questionImage',
              title: 'Question Image',
              type: 'image',
              description: 'Optional: Display an image alongside the question (e.g., for photography critique).',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: 'questionText',
              subtitle: 'fieldType',
              media: 'questionImage',
            },
          },
        },
      ],
    }),
  ],
})
