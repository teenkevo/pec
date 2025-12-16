import { groq } from "next-sanity";
import { BlockContent } from "../../../../sanity.types";

export const SINGLE_JOB_QUERY = groq`
  *[_type == "job" && (slug.current == $slug || jobId == $jobId)][0]{
    _id,
    title,
    jobId,
    "industries": industries[]->title,
    location,
    type,
    postedDate,
    aboutTheTeam,
    aboutTheRole,
    roles,
    requirements,
    aboutTheCompany,
    expiryDate,
    isFeatured
  }
`;

export type SINGLE_JOB_RESULT = {
  _id: string;
  title: string;
  jobId?: string;
  industries?: string[];
  location?: string;
  type?: "full-time" | "part-time" | "contract" | "internship";
  postedDate?: string;
  aboutTheTeam?: string;
  aboutTheRole?: string;
  roles?: string[];
  requirements?: string[];
  aboutTheCompany?: BlockContent;
  expiryDate?: string;
  isFeatured?: boolean;
};

export const ALL_JOBS_QUERY = groq`
  *[_type == "job"] | order(postedDate desc) {
    _id,
    title,
    jobId,
    "slug": slug.current,
    "industries": industries[]->title,
    location,
    type,
    postedDate,
    aboutTheTeam,
    aboutTheRole,
    roles,
    requirements,
    aboutTheCompany,
    expiryDate,
    isFeatured
  }
`;

export type ALL_JOBS_RESULT = {
  _id: string;
  title: string;
  jobId?: string;
  slug?: string;
  industries?: string[];
  location?: string;
  type?: "full-time" | "part-time" | "contract" | "internship";
  postedDate?: string;
  aboutTheTeam?: string;
  aboutTheRole?: string;
  roles?: string[];
  requirements?: string[];
  aboutTheCompany?: BlockContent;
  expiryDate?: string;
  isFeatured?: boolean;
};
