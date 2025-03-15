import { defineField, defineType } from "sanity";

export const testMethod = defineType({
  name: "testMethod",
  type: "document",
  title: "Test Methods",
  fields: [
    defineField({
      name: "standard",
      title: "Standard",
      type: "reference",
      to: [{ type: "standard" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      type: "string",
      title: "Code",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
