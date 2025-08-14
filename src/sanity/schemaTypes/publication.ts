import { defineField, defineType } from "sanity";

export default defineType({
  name: "publication",
  title: "Publications",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      description: "This image is an optional cover image for the publication",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),

    defineField({
      name: "publicationDate",
      title: "Publication Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Certification", value: "certification" },
          { title: "Company Profile", value: "company-profile" },
          { title: "Brand Guidelines", value: "brand-guidelines" },
          { title: "Report", value: "report" },
          { title: "Policy Brief", value: "policy-brief" },
          { title: "Research Paper", value: "research-paper" },
          { title: "White Paper", value: "white-paper" },
          { title: "Guide", value: "guide" },
          { title: "Press Statement", value: "press-statement" },
          { title: "Conference Proceedings", value: "conference-proceedings" },
          { title: "Technical Analysis", value: "technical-analysis" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publicationType",
      title: "Publication Type",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "internalFile",
      title: "Upload Publication",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
      hidden: ({ document }) => document?.publicationType !== "internal",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const { document } = context;
          if (document?.publicationType === "internal" && !field) {
            return "File is required for internal publications";
          }
          return true;
        }),
    }),

    defineField({
      name: "externalUrl",
      title: "External Link",
      type: "url",
      hidden: ({ document }) => document?.publicationType !== "external",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          const { document } = context;
          if (document?.publicationType === "external" && !field) {
            return "External URL is required for external publications";
          }
          return true;
        }),
    }),
    defineField({
      name: "industry",
      title: "Related Industry",
      type: "reference",
      to: [{ type: "industry" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      type: "category",
      date: "publicationDate",
    },
    prepare(selection) {
      const { title, type, date } = selection;
      return {
        title,
        subtitle: `${
          type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")
        } • ${new Date(date).getFullYear()}`,
      };
    },
  },
});
