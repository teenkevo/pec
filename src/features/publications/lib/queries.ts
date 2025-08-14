export const GET_PUBLICATIONS_QUERY = `*[_type == "publication"] | order(publicationDate desc) {
  _id,
  title,
  summary,
  publicationDate,
  category,
  publicationType,
  externalUrl,
  internalFile {
    asset-> {
      url,
      size,
      mimeType
    }
  },
  industry-> {
    title
  }
}`;

export const GET_PUBLICATIONS_PAGINATED_QUERY = `*[_type == "publication"][0..5] | order(publicationDate desc) {
  _id,
  title,
  summary,
  publicationDate,
  category,
  publicationType,
  externalUrl,
  internalFile {
    asset-> {
      url,
      size,
      mimeType
    }
  },
  industry-> {
    title
  }
}`;

export const GET_COMPANY_PROFILE_QUERY = `*[_type == "publication" && category == "company-profile"][0] {
  _id,
  title,
  summary,
  publicationDate,
  category,
  publicationType,
  coverImage,
  externalUrl,
  internalFile {
    asset-> {
      url,
      size,
      mimeType
    }
  },
  industry-> {
    title
  }
}`;

export const PUBLICATIONS_BY_INDUSTRY_QUERY = `*[_type == "publication" && industry->slug.current==$slug][0..5] | order(publicationDate desc) {
  _id,
  title,
  summary,
  publicationDate,
  category,
  publicationType,
  externalUrl,
  internalFile {
    asset-> {
      url,
      size, 
      mimeType
    }
  },
  industry-> {
    title
  }
}`;

export interface Publication {
  _id: string;
  title: string;
  summary: string;
  publicationDate: string;
  category: string;
  publicationType: "internal" | "external";
  externalUrl?: string;
  internalFile?: {
    asset: { url: string; size: number; mimeType: string };
  };
  industry?: { title: string };
  coverImage?: { asset: { url: string } };
}
