import {defineField, defineType} from 'sanity'

const storygram = defineType({
  name: 'storygram',
  title: 'Storygram',
  type: 'document',
  fields: [
    defineField({
      name: 'head',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'text',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
  ],
})

export default storygram
