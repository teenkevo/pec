import { defineField, defineType } from "sanity";
import { v4 as uuidv4 } from "uuid";

export const job = defineType({
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jobId",
      title: "Job ID",
      type: "string",
      description:
        "System-generated unique identifier for this job (used in URLs and integrations).",
      initialValue: () => uuidv4().replace(/-/g, "").slice(0, 10),
      readOnly: true,
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
      name: "industries",
      title: "Industries",
      type: "array",
      of: [{ type: "reference", to: [{ type: "industry" }] }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Add a city and country; e.g. Kampala, Uganda",
      initialValue: "Kampala, Uganda",
    }),
    defineField({
      name: "type",
      title: "Job type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
        ],
        layout: "radio",
      },
      initialValue: "full-time",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutTheTeam",
      title: "About the team",
      type: "text",
      rows: 3,
      description:
        "A brief summary about the team the candidate will be working with.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutTheRole",
      title: "About the role",
      type: "text",
      rows: 3,
      description: "A brief summary about the role.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "roles",
      title: "In this role, the candidate will...",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "requirements",
      title: "The candidate will thrive in this role if they...",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "aboutTheCompany",
      title: "About the company",
      type: "blockContent",
      description: "A brief summary about the company.",
      validation: (Rule) => Rule.required(),
      initialValue: [
        {
          _key: uuidv4(),
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: uuidv4(),
              _type: "span",
              marks: [],
              text: "Professional Engineering Consultants (PEC) is a multidisciplinary engineering consultancy dedicated to delivering sustainable, practical, and high-impact solutions for infrastructure and development challenges. We work across water resources, civil and structural engineering, environmental management, transportation, and climate resilience, supporting public and private sector clients throughout Uganda and the wider region.",
            },
          ],
        },
        {
          _key: uuidv4(),
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: uuidv4(),
              _type: "span",
              marks: [],
              text: "Our work is grounded in technical excellence, integrity, and a strong understanding of local and regional contexts. We combine rigorous engineering analysis with practical experience to design solutions that are safe, resilient, and responsive to community needs. From feasibility studies to detailed design and construction support, PEC is committed to delivering projects that create lasting social, environmental, and economic value.",
            },
          ],
        },
        {
          _key: uuidv4(),
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: uuidv4(),
              _type: "span",
              marks: [],
              text: "Engineering plays a critical role in shaping societies, protecting natural resources, and responding to climate change. At PEC, we recognize this responsibility and approach every project with a focus on sustainability, safety, and long-term impact. We value collaboration, diverse perspectives, and continuous learning as essential elements of delivering high-quality engineering services.",
            },
          ],
        },
        {
          _key: uuidv4(),
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: uuidv4(),
              _type: "span",
              marks: [],
              text: "PEC is an equal opportunity employer committed to fair and merit-based recruitment. We do not discriminate on the basis of race, religion, color, nationality, gender, age, disability, or any other characteristic protected by applicable law. We are committed to providing reasonable accommodations throughout the recruitment process and during employment to ensure equal access and opportunity for all qualified candidates.",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "postedDate",
      title: "Posted date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: "expiryDate",
      title: "Job ad expiry date",
      type: "datetime",
      description: "When this job should stop taking applications.",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured job",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "type",
    },
    prepare(selection) {
      const typeLabels: Record<string, string> = {
        "full-time": "Full Time",
        "part-time": "Part Time",
        contract: "Contract",
        internship: "Internship",
      };

      const subtitle =
        selection.subtitle && typeLabels[selection.subtitle as string]
          ? typeLabels[selection.subtitle as string]
          : selection.subtitle;

      return {
        ...selection,
        subtitle,
      };
    },
  },
});
