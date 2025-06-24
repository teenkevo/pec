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
      url
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
  internalFile?: { asset: { url: string } };
  industry?: { title: string };
}
