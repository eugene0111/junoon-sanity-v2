import {defineField, defineType} from 'sanity'

const developer = defineType({
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Lasr Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'title',
      media: 'image',
    },
  },
})

export default developer
