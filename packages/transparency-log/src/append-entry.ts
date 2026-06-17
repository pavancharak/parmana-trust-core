import { supabase }
  from "@parmana/audit-db";

export async function appendEntry(

  receiptId: string,

  receiptHash: string

): Promise<void> {

  const { error } =
    await supabase

      .from(
        "transparency_log"
      )

      .insert({

        receipt_id:
          receiptId,

        receipt_hash:
          receiptHash
      });

  if (error) {

    throw error;
  }
}