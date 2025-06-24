import { LoadingSkeleton } from "@/components/loading-skeleton";
import { BlogPosts, CATEGORY_BLOG_POSTS_QUERY } from "@/features/blog/lib/queries";
import BlogCategoryView from "@/features/blog/ui/views/blog-category-view";
import {
  ALL_INDUSTRIES_QUERY,
  INDUSTRIES,
} from "@/features/industries/lib/queries";

import {
  ALL_PROJECTS_QUERY,
  PROJECT_TYPE,
} from "@/features/projects/lib/queries";

import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: Props) {
  const { category } = await params;

  const {data}:{
    data:BlogPosts
  } = await sanityFetch({
    query: CATEGORY_BLOG_POSTS_QUERY,
    params: {
      category,
    },
  });

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <BlogCategoryView posts={data} category={category} />
    </Suspense>
  );
}
