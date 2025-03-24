import { defineField, defineType } from "sanity";

export const client = defineType({
  name: "client",
  type: "document",
  title: "Clients",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
