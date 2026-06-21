import {
  supabase
} from "./supabase.js";

import type {
  OverrideVerificationReceipt
} from "@parmana/override-engine";

export async function saveOverrideReceipt(
  receipt: OverrideVerificationReceipt
) {

  const result =
    await supabase

      .from(
        "override_verification_receipts"
      )

      .insert({

        override_receipt_id:
          receipt.overrideReceiptId,

        override_id:
          receipt.overrideId,

        decision_id:
          receipt.decisionId,

        business_transaction_id:
          receipt.businessTransactionId,

        valid:
          receipt.valid,

        verified_at:
          receipt.verifiedAt

      })

      .select()
      .single();

  if (result.error) {

    throw result.error;

  }

  return result.data;

}