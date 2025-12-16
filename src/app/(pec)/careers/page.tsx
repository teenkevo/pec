import { Navigation } from "@/components/layout/navigation";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import CareersView from "@/features/careers/ui/views/careers-view";
import { Suspense } from "react";
import {
  ALL_JOBS_QUERY,
  ALL_JOBS_RESULT,
} from "@/features/careers/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at PEC",
  description:
    "Join a team of passionate engineers and consultants dedicated to building sustainable infrastructure that makes a difference.",
  openGraph: {
    title: "Careers at PEC",
    description:
      "Join a team of passionate engineers and consultants dedicated to building sustainable infrastructure that makes a difference.",
    images: [
      {
        url: "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742780530/og-pec_1_nuscap.png",
      },
    ],
  },
};

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
