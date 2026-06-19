import {
  supabase
} from "@parmana/database";

import type {
  Schema
} from "./types.js";

export async function listSchemas(): Promise<Schema[]> {

  const {
    data,
    error
  } = await supabase
    .from("schemas")
    .select("*");

  if (error || !data) {
    return [];
  }

  return data.map(
    row => ({
      schemaId: row.schema_id,
      policyId: row.policy_id,
      version: row.version,
      fields: row.fields
    })
  );
}