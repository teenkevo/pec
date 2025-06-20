import { Metadata } from "next";

import { sanityFetch } from "@/sanity/lib/live";
import {
  ALL_PROJECTS_QUERY,
  type PROJECT_TYPE,
} from "@/features/projects/lib/queries";
import { Suspense } from "react";
import {
  ALL_INDUSTRIES_QUERY,
  INDUSTRIES,
} from "@/features/industries/lib/queries";
import HomeView from "@/features/home/ui/views/home-view";
import { BlogPosts, TOP_BLOG_POSTS_QUERY } from "@/features/blog/lib/queries";

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
  posts: BlogPosts
}> => {
  const [projectsResponse, industriesResponse, postsResponse] =
    await Promise.all([
      sanityFetch({
        query: ALL_PROJECTS_QUERY,
      }),
      sanityFetch({
        query: ALL_INDUSTRIES_QUERY,
      }),
      sanityFetch({
        query: TOP_BLOG_POSTS_QUERY,
      }),
    ]);

  return {
    projects: projectsResponse.data,
    industries: industriesResponse.data,
    posts: postsResponse.data,
  };
};

export default async function Page() {
  const homeData = await getHomeData();
  return (
    //TODO ADD LOADING SKELETON
    <Suspense fallback={<p>Loading...data</p>}>
      <HomeView homeData={homeData} />
    </Suspense>
  );
}
