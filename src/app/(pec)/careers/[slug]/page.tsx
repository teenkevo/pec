import {
  SINGLE_JOB_QUERY,
  SINGLE_JOB_RESULT,
} from "@/features/careers/lib/queries";
import { SingleJobView } from "@/features/careers/ui/views/single-job-view";
import { sanityFetch } from "@/sanity/lib/live";
import { Metadata, ResolvingMetadata } from "next";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import { notFound } from "next/navigation";
import { Suspense } from "react";
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  let baseSlug = slug;
  let jobId: string | undefined;

  const lastHyphenIndex = slug.lastIndexOf("-");
  if (lastHyphenIndex > 0) {
    const possibleId = slug.slice(lastHyphenIndex + 1);
    if (possibleId.length === 10) {
      baseSlug = slug.slice(0, lastHyphenIndex);
      jobId = possibleId;
    }
  }

  const {
    data: job,
  }: {
    data: SINGLE_JOB_RESULT;
  } = await sanityFetch({
    query: SINGLE_JOB_QUERY,
    params: { slug: baseSlug, jobId },
  });

  if (!job) {
    return {
      title: "Job not found | PEC",
    };
  }

  return {
    title: job.title,
    description: job.aboutTheRole,
    openGraph: {
      title: job.title,
      description: job.aboutTheRole,
      images: [
        {
          url: "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742780530/og-pec_1_nuscap.png",
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  let baseSlug = slug;
  let jobId: string | undefined;

  const lastHyphenIndex = slug.lastIndexOf("-");
  if (lastHyphenIndex > 0) {
    const possibleId = slug.slice(lastHyphenIndex + 1);
    if (possibleId.length === 10) {
      baseSlug = slug.slice(0, lastHyphenIndex);
      jobId = possibleId;
    }
  }

  const {
    data: job,
  }: {
    data: SINGLE_JOB_RESULT;
  } = await sanityFetch({
    query: SINGLE_JOB_QUERY,
    params: { slug: baseSlug, jobId },
  });

  if (!job) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <SingleJobView job={job} />
    </Suspense>
  );
}
