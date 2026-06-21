import {
  supabase
} from "./supabase.js";

export async function saveDecision(
  decision: {
  decisionId: string;
  businessTransactionId: string;
  subjectId: string | undefined;
  taskId: string;
  policyId: string;
  policyVersion: string;
  decision: string;
  reasons: string[];
}
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

  business_transaction_id:
  decision.businessTransactionId,

  subject_id:
    decision.subjectId,

  task_id:
    decision.taskId,

  policy_id:
    decision.policyId,

  policy_version:
    decision.policyVersion,

  action:
    decision.decision,

  reason:
    decision.reasons.join(
      "; "
    ),

  decision

});

  if (error) {

    throw error;

  }

}