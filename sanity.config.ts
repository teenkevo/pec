"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { SINGLETON_TYPES, structure } from "./src/sanity/structure";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "PEC Content Management",
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => !SINGLETON_TYPES.has(templateItem.templateId)
        );
      }
      return prev;
    },

    actions: (prev, { schemaType }) => {
      if (SINGLETON_TYPES.has(schemaType)) {
        return prev.filter((originalAction) =>
          singletonActions.has(originalAction.action!)
        );
      }
      return prev;
    },
  },
});
