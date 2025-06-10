import { SanityAsset } from "@sanity/image-url/lib/types/types";

export const SINGLE_INDUSTRY_QUERY = `
  *[_type == "industry" && slug.current == $slug][0] {
    title,
    subtitle,
    "slug": slug.current,
    mainImage,
    ourView {
      content,
      author-> {
        name,
        image,
        role
      }
    },
    featuredProject-> {
    _id,
      title,
      "slug": slug.current,
      mainImage,
      location {
        country,
        city
      }
    }
  }
`;

// excluding featured project
export const INDUSTRY_PROJECTS_QUERY = `
  *[_type == "project" && industry->slug.current == $slug && _id != $featuredProjectId] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    mainImage,
    location {
      country,
      city
    }
  }
`;

export type SINGLE_INDUSTRY_RESULT = {
  title: string;
  subtitle: string;
  slug: string;
  mainImage: SanityAsset;
  ourView: {
    content: string;
    author: {
      name: string;
      image: SanityAsset;
      role:string
    };
  };
  featuredProject: {
    _id: string;
    title: string;
    slug: string;
    mainImage: SanityAsset;
    location: {
      country: string;
      city: string;
    };
  };
};

export type PROJECT_TYPE = {
  title: string;
  slug: string;
  mainImage: SanityAsset;
  location: {
    country: string;
    city: string;
  };
};
