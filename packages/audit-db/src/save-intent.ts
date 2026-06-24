import {
  supabase
} from "./supabase.js";

interface Intent {

  intentId: string;

  businessTransactionId: string;

  decisionId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  payload: Record<
    string,
    unknown
  >;

  intentHash: string;

  createdAt: string;

}

export async function saveIntent(
  intent: Intent
) {

  const {
    error
  } = await supabase

    .from(
      "intents"
    )

    .insert({

      intent_id:
        intent.intentId,

      business_transaction_id:
        intent.businessTransactionId,

      decision_id:
        intent.decisionId,

      task_id:
        intent.taskId,

      policy_id:
        intent.policyId,

      policy_version:
        intent.policyVersion,

      payload:
        intent.payload,

      intent_hash:
        intent.intentHash,

      created_at:
        intent.createdAt

    });

  if (error) {

    throw error;

  }

}