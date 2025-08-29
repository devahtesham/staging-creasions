import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // metadata
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
    }),

    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'A brief description of the blog post for SEO purposes.',
    }),

    defineField({
      name: 'metaKeywords',
      type: 'string',
      title: 'Meta Keywords',
    }),

    // Title of the post
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Slug is required'),

    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,  // Allows image cropping
      },
      validation: (Rule) => Rule.required().error('Main Image is required'),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text', // Alt text for SEO
        }),
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required().error('Description is required'),
    }),


    // Published date
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
      validation: (Rule) => Rule.required().error('Published Date is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return { ...selection, subtitle: 'Blog' }
    },
  },
})
