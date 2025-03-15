import { defineQuery } from "next-sanity";
import { sanityFetch } from "../client";

export const getAllProjects = async () => {
  const ALL_PROJECTS_QUERY = defineQuery(`
        *[_type == "project"] {
          _id,
          name,
          startDate, 
          endDate, 
          stagesCompleted, 
          clients[]->{
            _id, 
            name,
          }
        }
  `);

  try {
    const projects = await sanityFetch({
      query: ALL_PROJECTS_QUERY,
      revalidate: 0,
    });

    // return data or empty array if no data is found
    return projects || [];
  } catch (error) {
    console.error("Error fetching all projects", error);
    return [];
  }
};
