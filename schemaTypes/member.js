import {defineField, defineType} from 'sanity'

const member = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),

    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'designation',
    },
  },
})

export default member
