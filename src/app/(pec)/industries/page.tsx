import {
  ALL_INDUSTRIES_QUERY,
  INDUSTRIES,
} from "@/features/industries/lib/queries";
import IndustriesView from "@/features/industries/ui/views/industries-view";
import {
  ALL_PROJECTS_QUERY,
  PROJECT_TYPE,
} from "@/features/projects/lib/queries";

import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";

const getHomeData = async (): Promise<{
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
  const data = await getHomeData();

  return (
    <Suspense fallback={<p>Loading...data</p>}>
      <IndustriesView projects={data.projects} industries={data.industries} />
    </Suspense>
  );
}
