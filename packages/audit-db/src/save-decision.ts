import {
  supabase
} from "./supabase.js";

export async function saveDecision(
  decision: any
) {

  const {
    error
  } = await supabase

    .from(
      "authority_decisions"
    )

    .insert({

      decision_id:
        decision.decisionId,

      task_id:
        decision.task.taskId,

      policy_id:
        decision.policy.policyId,

      policy_version:
        decision.policy.policyVersion,

      action:
        decision.decision.action,

      reason:
        decision.decision.reason,

      decision

    });

  if (error) {

    throw error;

  }
}