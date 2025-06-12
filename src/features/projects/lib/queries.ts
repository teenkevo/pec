import { SanityAsset } from "@sanity/image-url/lib/types/types";

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(_createdAt desc) {
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
