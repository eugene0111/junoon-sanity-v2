import {defineField, defineType} from 'sanity'

const wallpaper = defineType({
  name: 'wallpaper',
  title: 'Wallpaper',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
  ],
})

export default wallpaper
