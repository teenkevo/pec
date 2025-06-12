import { Metadata } from "next";
import Landing from "@/features/landing/landing";
import { sanityFetch } from "@/sanity/lib/live";
import {
  PROJECT_TYPE,
  TOP_PROJECTS_QUERY,
} from "@/features/projects/lib/queries";
import { Suspense } from "react";
import {
  ALL_INDUSTRY_QUERY,
  INDUSTRIES,
} from "@/features/industries/lib/queries";

export const metadata: Metadata = {
  title: "Professional Engineering Consultants (PEC) Limited",
  description:
    "PEC transforms industries with innovative civil engineering and geotechnical solutions.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  openGraph: {
    title: "Professional Engineering Consultants Limited",
    description:
      "PEC transforms industries with innovative civil engineering and geotechnical solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742780530/og-pec_1_nuscap.png",
      },
    ],
  },
};

const getHomeData = async (): Promise<{
  projects: PROJECT_TYPE[];
  industries: INDUSTRIES;
}> => {
  const [projectsResponse, industriesResponse] = await Promise.all([
    sanityFetch({
      query: TOP_PROJECTS_QUERY,
    }),
    sanityFetch({
      query: ALL_INDUSTRY_QUERY,
    }),
  ]);

  return {
    projects: projectsResponse.data,
    industries: industriesResponse.data,
  };
};

export default async function Page() {
  const { projects, industries } = await getHomeData();
  return (
    <Suspense fallback={<p>Loading...data</p>}>
      <Landing />
    </Suspense>
  );
}
