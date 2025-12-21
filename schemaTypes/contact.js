import {defineField, defineType} from 'sanity'

const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
  ],
  options: {
    singleton: true,
  },
})

export default contact
