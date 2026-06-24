import {
  supabase
} from "./supabase.js";

export async function saveReceipt(
  receipt: any
) {

  const payload = {

    receipt_id:
      receipt.receiptId,

    business_transaction_id:
      receipt.businessTransactionId,

    subject_id:
      receipt.subjectId,

    decision_id:
      receipt.decisionId,

    intent_id:
      receipt.intentId,

    task_id:
      receipt.taskId,

    policy_id:
      receipt.policyId,

    policy_version:
      receipt.policyVersion,

    intent_hash:
      receipt.intentHash,

    valid:
      receipt.valid,

    verified_algorithms:
      receipt.verifiedAlgorithms,

    failed_algorithms:
      receipt.failedAlgorithms,

    verified_at:
      receipt.verifiedAt,

    receipt_hash:
      receipt.receiptHash

  };

  console.log(
    "SAVE RECEIPT PAYLOAD:",
    JSON.stringify(
      payload,
      null,
      2
    )
  );

  const result =
    await supabase
      .from(
        "verification_receipts"
      )
      .insert(payload)
      .select();

  console.log(
    "INSERT RESULT:",
    JSON.stringify(
      result,
      null,
      2
    )
  );

  if (result.error) {
    throw result.error;
  }
}