import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export const ALL_INDUSTRIES_QUERY = `
  *[_type == "industry"]{
  _id,
    title,
    subtitle,
    description,
    "slug": slug.current,
    mainImage,
  }
`;

export const SINGLE_INDUSTRY_QUERY = `
  *[_type == "industry" && slug.current == $slug][0] {
    title,
    subtitle,
    "slug": slug.current,
    mainImage,
    ourView {
      content,
     industryLead-> {
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
      },
      industry-> {
      title,
      "slug": slug.current
      }
    }
  }
`;

// excluding featured project
export const INDUSTRY_PROJECTS_QUERY = `
  *[_type == "project" && industry->slug.current == $slug && _id != $featuredProjectId] | order(_createdAt desc) {
  _id,
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

export type INDUSTRIES = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  mainImage: SanityAsset;
}[];

export type SINGLE_INDUSTRY_RESULT = {
  title: string;
  subtitle: string;
  slug: string;
  mainImage: SanityAsset;
  ourView: {
    content: string;
    industryLead: {
      name: string;
      image: SanityAsset;
      role: string;
    };
  };
  featuredProject: PROJECT_TYPE;
};
