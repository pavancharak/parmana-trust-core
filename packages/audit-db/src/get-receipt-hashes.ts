import {
  supabase
} from "./supabase.js";

export async function getReceiptHashes() {

  const {
    data,
    error
  } = await supabase

    .from(
      "verification_receipts"
    )

    .select(
      "receipt_hash"
    );

  if (error) {

    throw error;

  }

  return data.map(
    row => row.receipt_hash
  );
}