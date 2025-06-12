import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog",
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
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "News", value: "news" },
          { title: "Insights", value: "insights" },
          { title: "Press Release", value: "press" },
          { title: "Event", value: "event" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "focusArea",
      title: "Related Focus Area",
      type: "reference",
      to: [{ type: "focusArea" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image",
      focusArea: "focusArea.title",
    },
    prepare(selection) {
      const { title, media, focusArea } = selection;
      return {
        title,
        subtitle: `${focusArea ? `${focusArea} | ` : ""}`,
        media,
      };
    },
  },
});
