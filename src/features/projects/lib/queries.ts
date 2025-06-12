import { SanityAsset } from "@sanity/image-url/lib/types/types";

export const TOP_PROJECTS_QUERY = `
  *[_type == "project"] | order(_createdAt desc)[0..3] {
    title,
    "slug": slug.current,
    mainImage,
    location {
      country,
      city
    },
    industry-> {
      title,
      "slug": slug.current
    }
  }
`;

export type PROJECT_TYPE = {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityAsset;
  location: {
    country: string;
    city: string;
  };
  industry: {
    title: string;
    slug: string;
  };
};
