import { defineField, defineType } from "sanity";

export const applicant = defineType({
  name: "applicant",
  title: "Applicant",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn profile",
      type: "url",
    }),
    defineField({
      name: "portfolio",
      title: "Portfolio or website",
      type: "url",
    }),
    defineField({
      name: "resume",
      title: "Resume / CV",
      type: "file",
      options: {
        storeOriginalFilename: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "additionalInfo",
      title: "Additional information",
      type: "text",
      rows: 5,
      description:
        "Motivation, context, or anything else they want us to know.",
    }),
    defineField({
      name: "job",
      title: "Job applied for",
      type: "reference",
      to: [{ type: "job" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stage",
      title: "Stage",
      type: "string",
      options: {
        list: [
          { title: "Applied", value: "applied" },
          { title: "Screening", value: "screening" },
          { title: "Interview", value: "interview" },
          { title: "Offer", value: "offer" },
          { title: "Hired", value: "hired" },
          { title: "Rejected", value: "rejected" },
        ],
        layout: "radio",
      },
      initialValue: "applied",
    }),
    defineField({
      name: "interviewDate",
      title: "Interview date",
      type: "datetime",
      description: "If the stage is interview, set the scheduled date/time.",
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "stage",
      jobTitle: "job.title",
    },
    prepare(selection) {
      const stageRaw = selection.subtitle as string | undefined;
      const jobTitle = selection.jobTitle as string | undefined;

      const subtitleParts = [];
      if (stageRaw) {
        const stage =
          stageRaw.charAt(0).toUpperCase() + stageRaw.slice(1).toLowerCase();
        subtitleParts.push(stage);
      }
      if (jobTitle) subtitleParts.push(jobTitle);

      return {
        title: selection.title,
        subtitle: subtitleParts.join(" – "),
      };
    },
  },
});
