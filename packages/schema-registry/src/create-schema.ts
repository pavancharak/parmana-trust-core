import {
  schemas
} from "./store.js";

import type {
  Schema
} from "./types.js";

export function createSchema(
  schema: Schema
): Schema {

  schemas.set(
    schema.schemaId,
    schema
  );

  return schema;

}