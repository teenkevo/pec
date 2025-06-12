import { PROJECT_TYPE } from "@/features/projects/lib/queries";
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
      role: string;
    };
  };
  featuredProject: PROJECT_TYPE;
};
