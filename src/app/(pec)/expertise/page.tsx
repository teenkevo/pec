import { LoadingSkeleton } from "@/components/loading-skeleton";
import ExpertiseView from "@/features/expertise/ui/views/expertise-view";

import { GET_PUBLICATIONS_PAGINATED_QUERY, Publication } from "@/features/publications/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";
import { Expertise } from "../../../../sanity.types";
import { EXPERTISE_QUERY } from "@/features/expertise/lib/queries";

const getPageData = async (): Promise<{
  expertise: Expertise[];
  publications: Publication[];
}> => {
  const [projectsResponse, publicationsResponse] =
    await Promise.all([
      sanityFetch({
        query: EXPERTISE_QUERY,
      }),
      sanityFetch({
        query: GET_PUBLICATIONS_PAGINATED_QUERY,
      }),
      ,
    ]);

  return {
    expertise: projectsResponse.data,
    publications: publicationsResponse.data,
  };
};

export default async function Page() {
const {expertise, publications} = await getPageData()
  
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ExpertiseView expertise={expertise} publications={publications} />
    </Suspense>
  );
}
