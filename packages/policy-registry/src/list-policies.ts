import {
  supabase
} from "@parmana/database";

import type {
  Policy
} from "./types.js";

export async function listPolicies(): Promise<Policy[]> {

  const {
    data,
    error
  } = await supabase
    .from("policies")
    .select("*");

  if (error || !data) {
    return [];
  }

  return data.map(
    row => ({
      policyId: row.policy_id,
      taskId: row.task_id,
      schemaId: row.schema_id,
      version: row.version,
      status: row.status,
      definition: row.definition
    })
  );
}