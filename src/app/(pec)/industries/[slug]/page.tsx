import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  SINGLE_INDUSTRY_QUERY,
  INDUSTRY_PROJECTS_QUERY,
  SINGLE_INDUSTRY_RESULT,
  ALL_INDUSTRIES_QUERY,
} from "@/features/industries/lib/queries";
import { SingleIndustryView } from "@/features/industries/ui/views/single-industry-view";
import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import {
  BlogPosts,
  INDUSTRY_BLOG_POSTS_QUERY,
} from "@/features/blog/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = await client.fetch(ALL_INDUSTRIES_QUERY);

  return industries.map((industry: { slug: string }) => ({
    slug: industry.slug,
  }));
}

const getIndustryData = async (
  industry: string,
  featuredProject?: string
): Promise<{
  projects: PROJECT_TYPE[];
  posts: BlogPosts;
}> => {
  const [projectsResponse, postsResponse] = await Promise.all([
    sanityFetch({
      query: INDUSTRY_PROJECTS_QUERY,
      params: {
        slug: industry,
        featuredProjectId: featuredProject || null,
      },
    }),
    sanityFetch({
      query: INDUSTRY_BLOG_POSTS_QUERY,
      params: {
        slug: industry,
      },
    }),
  ]);

  return {
    projects: projectsResponse.data,
    posts: postsResponse.data,
  };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const {
    data: industry,
  }: {
    data: SINGLE_INDUSTRY_RESULT;
  } = await sanityFetch({
    query: SINGLE_INDUSTRY_QUERY,
    params: {
      slug,
    },
  });

  if (!industry) {
    notFound();
  }

  const industryData = await getIndustryData(
    industry.slug,
    industry?.featuredProject?._id
  );

  return (
    //TODO: ADD AN ACTUAL LOADING COMPONENT
    <Suspense fallback={<p>Loading...data</p>}>
      <SingleIndustryView industryData={{ industry, ...industryData }} />
    </Suspense>
  );
}
