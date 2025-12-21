import {defineField, defineType} from 'sanity'

const collection = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
  ],
})

export default collection
