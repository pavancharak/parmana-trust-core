import {
  supabase
} from "./supabase.js";

export async function getIntent(
  intentId: string
) {

  const {
    data,
    error
  } = await supabase

    .from(
      "intents"
    )

    .select("*")

    .eq(
      "intent_id",
      intentId
    )

    .single();

  if (

    error ||

    !data

  ) {

    return undefined;

  }

  return {

    intentId:
      data.intent_id,

    businessTransactionId:
      data.business_transaction_id,

    decisionId:
      data.decision_id,

    taskId:
      data.task_id,

    policyId:
      data.policy_id,

    policyVersion:
      data.policy_version,

    payload:
      data.payload,

    intentHash:
      data.intent_hash,

    createdAt:
      data.created_at

  };

}