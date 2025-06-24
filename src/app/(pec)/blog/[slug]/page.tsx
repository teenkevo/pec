import { LoadingSkeleton } from "@/components/loading-skeleton";
import {
  SINGLE_PROJECT_QUERY,
  SINGLE_PROJECT_RESULT,
} from "@/features/projects/lib/queries";
import { BlogPostView } from "@/features/blog/ui/views/blog-post-view";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BLOG_POST_BY_SLUG_QUERY, BlogPost } from "@/features/blog/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const {
    data: post,
  }: {
    data: BlogPost;
  } = await sanityFetch({
    query: BLOG_POST_BY_SLUG_QUERY,
    params: {
      slug,
    },
  });
  console.log(post, slug)

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <BlogPostView postData={post} />
    </Suspense>
  );
}
