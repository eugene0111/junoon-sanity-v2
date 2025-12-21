import {defineField, defineType} from 'sanity'

const reel = defineType({
  name: 'reel',
  title: 'Reel',
  type: 'document',
  fields: [
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
    }),
  ],
  options: {
    singleton: true,
  },
})

export default reel
