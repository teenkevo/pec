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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ourView",
      title: "Our View",
      type: "object",
      fields: [
        defineField({
          name: "content",
          title: "Our View Content",
          type: "text",
          description: "The main content describing your view on this industry",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "industryLead",
          title: "Industry Lead",
          type: "reference",
          to: [{ type: "team" }],
          description: "Team member who represents this view",
        }),
      ],
      preview: {
        select: {
          content: "content",
          authorName: "author.name",
        },
        prepare(selection) {
          const { content, authorName } = selection;
          return {
            title: content ? `${content.substring(0, 50)}...` : "Our View",
            subtitle: authorName ? `By ${authorName}` : "No author selected",
          };
        },
      },
    }),
    defineField({
      name: "featuredProject",
      title: "Featured Project",
      type: "reference",
      to: [{ type: "project" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
