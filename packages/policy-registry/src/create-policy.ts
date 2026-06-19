import {
  supabase
} from "@parmana/database";

import type {
  Policy
} from "./types.js";

export async function createPolicy(
  policy: Policy
): Promise<Policy> {

  const {
    error
  } = await supabase
    .from("policies")
    .upsert({
      policy_id: policy.policyId,
      task_id: policy.taskId,
      schema_id: policy.schemaId,
      version: policy.version,
      status: policy.status,
      definition: policy.definition
    });

  if (error) {
    throw error;
  }

  return policy;
}