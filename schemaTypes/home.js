import {defineArrayMember, defineField, defineType} from 'sanity'

const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'document',
      fields: [
        defineField({
          name: 'head',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'subhead',
          title: 'Subheading',
          type: 'string',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        }),
        defineField({
          name: 'sliderImages',
          title: 'Slider Images',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'image',
            }),
          ],
        }),
        defineField({
          name: 'sliderImagesMobile',
          title: 'Slider Images Mobile',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'image',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'document',
      fields: [
        defineField({
          name: 'head',
          title: 'Head',
          type: 'string',
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
        }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'document',
              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'number',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'document',
          fields: [
            defineField({
              name: 'instaHandle',
              title: 'Insta Handle',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Story',
      type: 'document',
      fields: [
        defineField({
          name: 'head',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        }),
        defineField({
          name: 'storygrams',
          title: 'Storygrams',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'reference',
              to: [{type: 'storygram'}],
            }),
          ],
        }),
      ],
    }),
  ],
  options: {
    singleton: true,
  },
})

export default home
