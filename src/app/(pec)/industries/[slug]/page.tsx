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

interface Props {
  params: Promise<{ slug: string }>;
}

export const getStaticParams = async () => {
  const { data: industries } = await sanityFetch({
    query: ALL_INDUSTRIES_QUERY,
  });

  return industries.map((industry: { slug: string }) => ({
    slug: industry.slug,
  }));
}

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

  const {
    data: projects,
  }: {
    data: PROJECT_TYPE[];
  } = await sanityFetch({
    query: INDUSTRY_PROJECTS_QUERY,
    params: {
      slug,
      featuredProjectId: industry.featuredProject._id,
    },
  });

  return (
    //TODO: ADD AN ACTUAL LOADING COMPONENT
    <Suspense fallback={<p>Loading...data</p>}>
      <SingleIndustryView industry={industry} projects={projects} />
    </Suspense>
  );
}
