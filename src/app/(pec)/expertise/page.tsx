import { LoadingSkeleton } from "@/components/loading-skeleton";
import ExpertiseView from "@/features/expertise/ui/views/expertise-view";

import { GET_PUBLICATIONS_PAGINATED_QUERY, Publication } from "@/features/publications/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";

export default async function Page() {
    const { data: publications }: { data: Publication[]} = await sanityFetch({
      query: GET_PUBLICATIONS_PAGINATED_QUERY,
    });
  
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ExpertiseView publications={publications} />
    </Suspense>
  );
}
