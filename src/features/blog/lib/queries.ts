import { SanityAsset } from "@sanity/image-url/lib/types/types";

export const ALL_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    summary,
    image,
    category,
    author ->{
      name,
      image,
      role
    }
  }
`;
export const TOP_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"][0..4] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    summary,
    image,
    category,
    author ->{
      name,
      image,
      role
    }
  }
`;


export type BlogPosts = Array<{
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  image: SanityAsset;
  category: string;
  author: {
    name: string;
    image: SanityAsset;
    role: string;
  };
}>;


