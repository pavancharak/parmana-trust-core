import {
  supabase
} from "@parmana/database";

import type {
  Policy
} from "./types.js";

export async function getPolicy(
  policyId: string
): Promise<Policy | undefined> {

  const {
    data,
    error
  } = await supabase
    .from("policies")
    .select("*")
    .eq(
      "policy_id",
      policyId
    )
    .single();

  if (error) {
    return undefined;
  }

  return {
    policyId: data.policy_id,
    taskId: data.task_id,
    schemaId: data.schema_id,
    version: data.version,
    status: data.status,
    definition: data.definition
  };
}