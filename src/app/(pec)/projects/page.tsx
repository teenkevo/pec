import { LoadingSkeleton } from "@/components/loading-skeleton";
import {
  ALL_INDUSTRIES_QUERY,
  INDUSTRIES,
} from "@/features/industries/lib/queries";
import ProjectsView from "@/features/projects/ui/view/projects-view";
import {
  ALL_PROJECTS_QUERY,
  PROJECT_TYPE,
} from "@/features/projects/lib/queries";

import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";

const getProjectsData = async (): Promise<{
  projects: PROJECT_TYPE[];
  industries: INDUSTRIES;
}> => {
  const [projectsResponse, industriesResponse] = await Promise.all([
    sanityFetch({
      query: ALL_PROJECTS_QUERY,
    }),
    sanityFetch({
      query: ALL_INDUSTRIES_QUERY,
    }),
  ]);
  return {
    projects: projectsResponse.data,
    industries: industriesResponse.data,
  };
};

export default async function Page() {
  const data = await getProjectsData();

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ProjectsView projects={data.projects} industries={data.industries} />
    </Suspense>
  );
}
