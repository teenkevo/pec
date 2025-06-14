import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Image with Caption",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "caption",
      media: "image",
    },
  },
});
