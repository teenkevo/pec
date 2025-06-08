import { defineField, defineType } from "sanity";

export const industry = defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ourView",
      title: "Our View",
      type: "text",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "team" }],
    }),
    defineField({
      name: "featuredProject",
      title: "Featured Project",
      type: "reference",
      to: [{ type: "project" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
