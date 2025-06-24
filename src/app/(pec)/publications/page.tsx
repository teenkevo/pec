import { Navigation } from "@/components/layout/navigation";
import { GET_PUBLICATIONS_QUERY } from "@/features/publications/lib/queries";
import { PublicationsSkeleton } from "@/features/publications/ui/components/publications-skeleton";
import { PublicationsView } from "@/features/publications/ui/views/publictions-view";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";



export default async function Page() {
    const {data} = await sanityFetch({
        query: GET_PUBLICATIONS_QUERY
    })
  return (
    <>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>
      <div className="px-4 md:px-14 py-12 relative">
        <div className="max-w-6xl">
          <span className="text-navy-800 py-1 text-lg">Publications</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-navy-800 tracking-tighter leading-10 mt-5">
            Recent research, reports, and insights
          </h1>
        </div>
  

        <Suspense fallback={<PublicationsSkeleton />}>
          <PublicationsView publications={data} />
        </Suspense>
      </div>
    </>
  );
}

