import {
  supabase
} from "./supabase.js";

export async function getOverrideReceiptById(
  overrideReceiptId: string
) {

  const result =
    await supabase

      .from(
        "override_verification_receipts"
      )

      .select("*")

      .eq(
        "override_receipt_id",
        overrideReceiptId
      )

      .maybeSingle();

  return result.data;

}