import {
  supabase
} from "./supabase.js";

export async function saveReceipt(
  receipt: any
) {

  const {
    error
  } = await supabase

    .from(
      "verification_receipts"
    )

    .insert({

      receipt_id:
        receipt.receiptId,

      subject_id:
        receipt.subjectId,

      decision_id:
        receipt.decisionId,

      task_id:
        receipt.taskId,

      policy_id:
        receipt.policyId,

      policy_version:
        receipt.policyVersion,

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

    });

  if (error) {

    throw error;

  }

}