import AboutView from "@/features/about-us/ui/views/about-view";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";
import { type AboutUs } from "../../../../sanity.types";
import { BlogPosts, TOP_BLOG_POSTS_QUERY } from "@/features/blog/lib/queries";
import { LoadingSkeleton } from "@/components/loading-skeleton";

const getAboutData = async (): Promise<{
  aboutContent: AboutUs;
  posts: BlogPosts;
}> => {
  const [aboutResponse, postsResponse] = await Promise.all([
    sanityFetch({
      query: `*[_type == "aboutUs"][0]`,
    }),

    sanityFetch({
      query: TOP_BLOG_POSTS_QUERY,
    }),
  ]);

  return {
    aboutContent: aboutResponse.data,
    posts: postsResponse.data,
  };
};

export default async function Page() {
  const aboutData = await getAboutData();

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <AboutView aboutData={aboutData} />
    </Suspense>
  );
}
