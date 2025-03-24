import { type SchemaTypeDefinition } from "sanity";
import { client } from "./client";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [client],
};
