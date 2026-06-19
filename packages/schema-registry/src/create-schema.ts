import {
  supabase
} from "@parmana/database";

import type {
  Schema
} from "./types.js";

export async function createSchema(
  schema: Schema
): Promise<Schema> {

  const {
    error
  } = await supabase
    .from("schemas")
    .upsert({
      schema_id: schema.schemaId,
      policy_id: schema.policyId,
      version: schema.version,
      fields: schema.fields
    });

  if (error) {
    throw error;
  }

  return schema;
}