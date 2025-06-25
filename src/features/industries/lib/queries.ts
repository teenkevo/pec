import { PROJECT_TYPE } from "@/features/projects/lib/queries";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export const ALL_INDUSTRIES_QUERY = `
  *[_type == "industry"]| order(title desc){
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
  *[_type == "project" && industry->slug.current == $slug] | order(_createdAt desc) {
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

export const MENU_INDUSTRIES_QUERY = `
{
  "industries": *[_type == "industry"] | order(title asc) {
    title,
    "href": slug.current
  },
  "latestProject": *[_type == "project"] | order(_createdAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    description,
    mainImage,
    location {
      country,
      city
    },
    industry-> {
      title,
      "slug": slug.current
    },
    _createdAt
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
  featuredProject: PROJECT_TYPE | null;
};

export interface INDUSTRIES_MENU_DATA {
  industries: {
    title: string;
    href: string;
  }[];
  latestProject: PROJECT_TYPE;
}
