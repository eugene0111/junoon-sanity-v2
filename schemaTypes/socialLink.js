import {defineField, defineType} from 'sanity'

const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
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
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
    },
  },
})

export default socialLink
