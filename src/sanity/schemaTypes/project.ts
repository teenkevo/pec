import { defineField, defineType } from "sanity";

const PROJECT_PHASES = [
  { value: "planning", title: "Planning, feasibility, conceptual design" },
  { value: "design", title: "Design" },
  { value: "construction", title: "Construction" },
  { value: "operations", title: "Operations and maintenance" },
  { value: "decommissioning", title: "Decommissioning" },
];

export const project = defineType({
  name: "project",
  title: "Project",
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
      name: "mainImage",
      title: "Main Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "reference",
      to: [{ type: "industry" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "client" }],
    }),
    defineField({
      name: "funder",
      title: "Funder",
      type: "string",
    }),
    defineField({
      name: "valueOfService",
      title: "Value of Service",
      type: "string",
      description: "Example: EUR 1,036,918.17",
    }),
    defineField({
      name: "location",
      title: "Project Location",
      type: "object",
      fields: [
        defineField({
          name: "country",
          title: "Country",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "city",
          title: "City",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      preview: {
        select: {
          country: "country",
          city: "city",
        },
        prepare({ country, city }) {
          return {
            title: `${city}, ${country}`,
            subtitle: "Project Location",
          };
        },
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
    }),
    defineField({
      name: "images",
      title: "Project Gallery",
      description: "Additional project images (maximum 4)",
      type: "array",
      of: [{ type: "galleryImage" }],
      validation: (Rule) => Rule.max(4).error("Maximum 4 images allowed"),
    }),
    defineField({
      name: "involvedPhases",
      title: "Project Phases We Were Involved In",
      description:
        "Add only the phases your team was involved in for this project.",
      type: "array",
      of: [
        {
          type: "object",
          name: "projectPhase",
          title: "Project Phase",
          fields: [
            defineField({
              name: "phase",
              title: "Phase",
              type: "string",
              options: {
                list: PROJECT_PHASES,
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "expertiseApplied",
              title: "Expertise Applied in This Phase",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "expertise" }],
                },
              ],
              validation: (Rule) =>
                Rule.min(1).error("Add at least one expertise for this phase"),
            }),
          ],
          preview: {
            select: {
              phase: "phase",
              expertiseCount: "expertiseApplied.length",
            },
            prepare({ phase, expertiseCount }) {
              const phaseLabel =
                PROJECT_PHASES.find((p) => p.value === phase)?.title || phase;
              return {
                title: phaseLabel,
                subtitle: expertiseCount
                  ? `${expertiseCount} areas of expertise`
                  : "No expertise added",
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).error("Add at least one project phase"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client.name",
      media: "mainImage",
    },
  },
});
