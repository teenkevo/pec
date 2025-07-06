import { SanityAsset } from "@sanity/image-url/lib/types/types";

export const LATEST_PROJECTS_QUERY = `
*[_type == "industry"]{
  "latestProject": *[_type == "project" && references(^._id)] | order(startDate desc)[0] {
    _id,
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
    }
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
    description,
    location {
      country,
      city
    },
    industry-> {
      title,
       subtitle,
      "slug": slug.current
    }
  }
`;

export const TOP_PROJECTS_QUERY = `
  *[_type == "project"] | order(startDate desc)[0..2] {
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
    }
  }
`;

export type SINGLE_PROJECT_RESULT = {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityAsset;
  industry: {
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
  startDate?: string;
  endDate?: string;
  isCompleted?: boolean;
};

export type PROJECT_TYPE = {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityAsset;
  description: string;
  location: {
    country: string;
    city: string;
  };
  industry: {
    title: string;
    subtitle: string;
    slug: string;
  };
};

export type LATEST_INDUSTRY_PROJECT = {
  latestProject: PROJECT_TYPE | null;
};
