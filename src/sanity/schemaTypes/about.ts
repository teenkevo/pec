import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutUs",
  title: "About Us",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "About us",
          readOnly: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue: "A leading engineering consultancy in Uganda",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "heroImage",
          title: "Hero Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // What We Do Section
    defineField({
      name: "whatWeDo",
      title: "What We Do Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "What we do",
          readOnly: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue:
            "Helping design and build resilient infrastructure since 2008",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Statistics Section
    defineField({
      name: "statistics",
      title: "Statistics Section",
      type: "array",
      of: [
        {
          type: "object",
          name: "statistic",
          title: "Statistic",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description: "e.g., '50+', '16', '#1'",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "e.g., 'Employees', 'Years of Experience'",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              description: "e.g., 'Team of experts', 'Proven Expertise'",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "value",
              description: "subtitle",
            },
            prepare({ title, subtitle, description }) {
              return {
                title: `${subtitle} - ${title}`,
                subtitle: description,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    // Mission Section
    defineField({
      name: "mission",
      title: "Mission Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Mission",
          readOnly: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "missionStatement",
          title: "Mission Statement",
          type: "string",
          description: "The main mission statement",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "missionImage",
          title: "Mission Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "additionalTitle",
          title: "Additional Section Title",
          type: "string",
          description: "e.g., 'Keeping the bigger picture in mind'",
        }),
      ],
    }),

    // Vision Section
    defineField({
      name: "vision",
      title: "Vision Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Vision",
          readOnly: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "visionStatement",
          title: "Vision Statement",
          type: "string",
          description: "The main vision statement",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Values Section
    defineField({
      name: "values",
      title: "Values Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Values",
          readOnly: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue: "Four guiding principles",
          readOnly: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "valuesList",
          title: "Values List",
          type: "array",
          of: [
            {
              type: "object",
              name: "value",
              title: "Value",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  description: "e.g., 'Customer-centric', 'Respect'",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "number",
                },
                prepare({ title, subtitle }) {
                  return {
                    title: `${title}`,
                  };
                },
              },
            },
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    // Strategy Section
    defineField({
      name: "strategy",
      title: "Strategy Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Strategy",
          readOnly: true,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue: "Three strategic priorities",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Us",
        subtitle: "Company information and values",
      };
    },
  },
});
