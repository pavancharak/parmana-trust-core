import {
  supabase
} from "./supabase.js";

export async function getReceipt(
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