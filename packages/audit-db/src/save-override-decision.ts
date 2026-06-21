import {
  supabase
} from "./supabase.js";

import type {
  OverrideDecision
} from "@parmana/override-engine";

export async function saveOverrideDecision(
  override: OverrideDecision
) {

  const result =
    await supabase

      .from(
        "override_decisions"
      )

      .insert({

        override_id:
          override.overrideId,

        decision_id:
          override.decisionId,

        business_transaction_id:
          override.businessTransactionId,

        task_id:
          override.taskId,

        policy_id:
          override.policyId,

        policy_version:
          override.policyVersion,

        override_subject_id:
          override.overrideSubjectId,

        override_action:
          override.overrideAction,

        override_reason:
          override.overrideReason,

        created_at:
          override.createdAt

      })

      .select()
      .single();

  if (result.error) {

    throw result.error;

  }

  return result.data;

}