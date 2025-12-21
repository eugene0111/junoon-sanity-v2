import {defineArrayMember, defineField, defineType} from 'sanity'

const team = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'coordinator',
      title: 'Coordinator',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'descriptionHead',
      title: 'Description Head',
      type: 'string',
    }),
    defineField({
      name: 'descriptionSubhead',
      title: 'Description Subhead',
      type: 'string',
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'member'}]})],
    }),
  ],
  options: {
    singleton: true,
  },
})

export default team
