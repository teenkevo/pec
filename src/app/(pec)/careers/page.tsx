import { Navigation } from "@/components/layout/navigation";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import CareersView from "@/features/careers/ui/views/careers-view";
import { Suspense } from "react";
import {
  ALL_JOBS_QUERY,
  ALL_JOBS_RESULT,
} from "@/features/careers/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

const getJobsData = async (): Promise<ALL_JOBS_RESULT[]> => {
  const { data }: { data: ALL_JOBS_RESULT[] } = await sanityFetch({
    query: ALL_JOBS_QUERY,
  });
  return data;
};
const Page = async () => {
  const jobs = await getJobsData();

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <>
        <div className="relative w-full bg-black">
          <Navigation />
        </div>

        <CareersView jobs={jobs} />
      </>
    </Suspense>
  );
};

export default Page;
