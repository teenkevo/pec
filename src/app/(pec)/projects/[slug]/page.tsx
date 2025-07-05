import { LoadingSkeleton } from "@/components/loading-skeleton";
import {
  SINGLE_PROJECT_QUERY,
  SINGLE_PROJECT_RESULT,
} from "@/features/projects/lib/queries";
import { ProjectView } from "@/features/projects/ui/view/single-project-view";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const {
    data: project,
  }: {
    data: SINGLE_PROJECT_RESULT;
  } = await sanityFetch({
    query: SINGLE_PROJECT_QUERY,
    params: {
      slug,
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ProjectView projectData={project} />
    </Suspense>
  );
}
 