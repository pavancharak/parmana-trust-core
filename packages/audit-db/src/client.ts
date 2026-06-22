import {
  hashReceipt
} from "@parmana/crypto";

import {
  supabase
} from "./supabase.js";

import type {
  VerificationReceipt
} from "./verification-receipt.js";

export class AuditDbClient {

  async recordVerificationReceipt(
    receipt: VerificationReceipt
  ): Promise<void> {

    const receiptHash =
      hashReceipt(
        receipt
      );

    const {
      error
    } = await supabase

      .from(
        "verification_receipts"
      )

      .insert({

  receipt_id:
    receipt.receiptId,

  business_transaction_id:
    receipt.businessTransactionId,

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
    receiptHash

});

    if (error) {

      throw error;

    }

  }

  async getVerificationReceipt(
    receiptId: string
  ) {

    const {
      data,
      error
    } = await supabase

      .from(
        "verification_receipts"
      )

      .select("*")

      .eq(
        "receipt_id",
        receiptId
      )

      .single();

    if (error) {

      throw error;

    }

    return data;

  }

}