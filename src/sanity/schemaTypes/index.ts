import { type SchemaTypeDefinition } from "sanity";
import { client } from "./client";
import { industry } from "./industry";
import { team } from "./team";
import { project } from "./project";
import { expertise } from "./expertise";
import { galleryImage } from "./gallery-image";
import aboutUs from "./about";
import { blockContentType } from "./blockContentType";
import blogPost from "./blog-post";
import publication from "./publication";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    client,
    industry,
    team,
    project,
    expertise,
    galleryImage,
    aboutUs,
    blogPost,
    blockContentType,
    publication,
  ],
};
