import { LoadingSkeleton } from "@/components/loading-skeleton";
import { BlogPostView } from "@/features/blog/ui/views/blog-post-view";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BLOG_POST_BY_SLUG_QUERY, BlogPost } from "@/features/blog/lib/queries";
import { Metadata, ResolvingMetadata } from "next";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
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

  return {
    title: post.title,
    description: post.category,
    openGraph: {
      title: post.title,
      description: post.category,
      images: [
        {
          url: urlFor(post.image).format("webp").quality(50).url() || "",
        },
      ],
    },
  };
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

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <BlogPostView postData={post} />
    </Suspense>
  );
}
