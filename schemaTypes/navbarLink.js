import {defineField, defineType} from 'sanity'

const navbarLink = defineType({
  name: 'navbarLink',
  title: 'Navbar Link',
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
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})

export default navbarLink
