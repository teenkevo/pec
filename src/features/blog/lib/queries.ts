import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { BlockContent } from "../../../../sanity.types";

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
export const INDUSTRY_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"&& industry->slug.current==$slug][0..4] | order(publishedAt desc) {
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

export const CATEGORY_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && category == $category] | order(publishedAt desc) {
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

export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    image,
    category,
    content,
    author ->{
      name,
      image,
      role
    },
    "nextPost": coalesce(
    
      *[_type == "blogPost" && category == ^.category && _id != ^._id && publishedAt < now()] | order(publishedAt desc)[0]{
        title,
        "slug": slug.current
      },
  
      *[_type == "blogPost" && _id != ^._id && publishedAt < now()] | order(publishedAt desc)[0]{
        title,
        "slug": slug.current
      }
    )
  }
`;

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  content: BlockContent;
  image: SanityAsset;
  category: string;
  author: { name: string; image: SanityAsset; role: string };
  nextPost?: { title: string; slug: string };
};

export type BlogPosts = Array<{
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  image: SanityAsset;
  category: string;
  author: { name: string; image: SanityAsset; role: string };
}>;
