import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'application',
  title: 'Recruitment Applications',
  type: 'document',
  fields: [
    defineField({ 
      name: 'name', 
      title: 'Applicant Name', 
      type: 'string' 
    }),
    defineField({ 
      name: 'email', 
      title: 'Email', 
      type: 'string' 
    }),
    defineField({ 
      name: 'position', 
      title: 'Applied For', 
      type: 'reference', 
      to: [{ type: 'recruitment' }] 
    }),
    defineField({
      name: 'answers',
      title: 'Form Answers',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'question', 
            title: 'Question', 
            type: 'string' 
          },
          { 
            name: 'textAnswer', 
            title: 'Text Answer', 
            type: 'text',
            description: 'Filled if the question was small or large text.'
          },
          { 
            name: 'imageAnswer', 
            title: 'Image Answer', 
            type: 'image',
            options: { hotspot: true },
            description: 'Filled if the recruit uploaded an image.'
          }
        ],
        preview: {
          select: {
            title: 'question',
            subtitle: 'textAnswer',
            media: 'imageAnswer'
          }
        }
      }]
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { 
        list: ['Pending', 'Reviewed', 'Accepted', 'Rejected'] 
      },
      initialValue: 'Pending'
    })
  ],
  readOnly: false, 
})