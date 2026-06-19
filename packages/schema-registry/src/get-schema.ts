import {
  supabase
} from "@parmana/database";

import type {
  Schema
} from "./types.js";

export async function getSchema(
  schemaId: string
): Promise<Schema | undefined> {

  const {
    data,
    error
  } = await supabase
    .from("schemas")
    .select("*")
    .eq(
      "schema_id",
      schemaId
    )
    .single();

  if (error) {
    return undefined;
  }

  return {
    schemaId: data.schema_id,
    policyId: data.policy_id,
    version: data.version,
    fields: data.fields
  };
}