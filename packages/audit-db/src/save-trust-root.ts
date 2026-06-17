import {
  supabase
} from "./supabase.js";

export async function saveTrustRoot(
  trustRoot: {
    rootId: string;
    rootHash: string;
    receiptCount: number;
    publishedAt: string;
  }
) {

  const {
    error
  } = await supabase

    .from(
      "trust_roots"
    )

    .insert({

      root_id:
        trustRoot.rootId,

      root_hash:
        trustRoot.rootHash,

      receipt_count:
        trustRoot.receiptCount,

      published_at:
        trustRoot.publishedAt
    });

  if (error) {

    throw error;

  }
}