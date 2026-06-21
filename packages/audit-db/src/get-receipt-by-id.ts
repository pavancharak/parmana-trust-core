import {
  supabase
} from "./supabase.js";

export async function getReceiptById(
  receiptId: string
) {

  const result =
    await supabase

      .from(
        "verification_receipts"
      )

      .select("*")

      .eq(
        "receipt_id",
        receiptId
      )

      .maybeSingle();

  if (!result.data) {

    return null;

  }

  const row =
    result.data;

  return {

    receiptId:
      row.receipt_id,

    businessTransactionId:
      row.business_transaction_id,

    subjectId:
      row.subject_id,

    decisionId:
      row.decision_id,

    taskId:
      row.task_id,

    policyId:
      row.policy_id,

    policyVersion:
      row.policy_version,

    valid:
      row.valid,

    verifiedAlgorithms:
      row.verified_algorithms,

    failedAlgorithms:
      row.failed_algorithms,

    verifiedAt:
      row.verified_at,

    receiptHash:
      row.receipt_hash

  };

}