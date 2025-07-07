import { SanityAsset } from "@sanity/image-url/lib/types/types";

// LATEST PROJECTS SHOULD HAVE MAIN IMAGE AS THEY ARE USED IN THE HERO SECTION SLIDE SHOW
export const LATEST_PROJECTS_QUERY = `
*[_type == "industry"]{
  "latestProject": *[_type == "project" && references(^._id) && mainImage != null] | order(startDate desc)[0] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    industry-> {
      title,
      subtitle,
      "slug": slug.current
    },
    client-> {
      name
    },
    funder,
    valueOfService {
      currency,
      value
    },
    location {
      country,
      city
    },
    description,
    challenge,
    solution,
    images[] {
      image,
      caption,
    },
    involvedPhases[] {
      phase,
      expertiseApplied[]-> {
        _id,
        title,
        description,
        mainImage
      }
    },
    startDate,
    endDate,
    isCompleted
  }
}
`;

export const SINGLE_PROJECT_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    industry-> {
      title,
      subtitle,
      "slug": slug.current
    },
    client-> {
      name
    },
    funder,
    valueOfService {
      currency,
      value
    },
    location {
      country,
      city
    },
    description,
    challenge,
    solution,
    images[] {
      image,
      caption,
    },
    involvedPhases[] {
      phase,
      expertiseApplied[]-> {
        _id,
        title,
        description,
        mainImage
      }
    },
    startDate,
    endDate,
    isCompleted
  }
`;

export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(startDate desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    industry-> {
      title,
      subtitle,
      "slug": slug.current
    },
    client-> {
      name
    },
    funder,
    valueOfService {
      currency,
      value
    },
    location {
      country,
      city
    },
    description,
    challenge,
    solution,
    images[] {
      image,
      caption,
    },
    involvedPhases[] {
      phase,
      expertiseApplied[]-> {
        _id,
        title,
        description,
        mainImage
      }
    },
    startDate,
    endDate,
    isCompleted
  }
`;

export const TOP_PROJECTS_QUERY = `
  *[_type == "project"] | order(startDate desc)[0..6] {
    title,
    "slug": slug.current,
    mainImage,
    description,
    location {
      country,
      city
    },
    industry-> {
      title,
      subtitle,
      "slug": slug.current
    },
    startDate,
    endDate,
    isCompleted
  }
`;

export type SINGLE_PROJECT_RESULT = {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityAsset;
  industry: {
    subtitle: string;
    title: string;
    slug: string;
  };
  client: {
    name: string;
  };
  funder?: string;
  valueOfService?: {
    currency: string;
    value: number;
  };
  location: {
    country: string;
    city: string;
  };
  description?: string;
  challenge?: string;
  solution?: string;
  images?: {
    image: SanityAsset;
    caption?: string;
  }[];
  involvedPhases: {
    phase: string;
    expertiseApplied: {
      _id: string;
      title: string;
      description: string;
      mainImage: SanityAsset;
    }[];
  }[];
  startDate: string;
  endDate?: string;
  isCompleted: boolean;
};

export type PROJECT_TYPE = SINGLE_PROJECT_RESULT;

export type LATEST_INDUSTRY_PROJECT = {
  latestProject: PROJECT_TYPE | null;
};
