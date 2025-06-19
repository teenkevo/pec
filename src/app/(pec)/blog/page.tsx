import { ALL_BLOG_POSTS_QUERY, type BlogPosts } from "@/features/blog/lib/queries";
import { BlogView } from "@/features/blog/ui/views/blog-view";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{ category: string } | undefined>;
}

export default async function Page({ searchParams }: Props) {

  const {data: blogPosts}: {data: BlogPosts} = await sanityFetch({
    query: ALL_BLOG_POSTS_QUERY,
  })

  const searchParamsValues = await searchParams;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogView blogPosts={blogPosts} activeCategory={searchParamsValues?.category} />
    </Suspense>
  )
}
