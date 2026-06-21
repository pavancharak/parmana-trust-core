import {
  supabase
} from "./supabase.js";

export async function getTrustChain(
  businessTransactionId: string
) {

  const decision =
    await supabase

      .from(
        "authority_decisions"
      )

      .select("*")

      .eq(
        "business_transaction_id",
        businessTransactionId
      )

      .order(
        "created_at",
        { ascending: false }
      )

      .limit(1)

      .maybeSingle();

  const signals =
    await supabase

      .from(
        "signal_evidence"
      )

      .select("*")

      .eq(
        "business_transaction_id",
        businessTransactionId
      );

  const attestations =
    await supabase

      .from(
        "decision_attestations"
      )

      .select("*")

      .eq(
        "business_transaction_id",
        businessTransactionId
      );

  const receipts =
    await supabase

      .from(
        "verification_receipts"
      )

      .select("*")

      .eq(
        "business_transaction_id",
        businessTransactionId
      );

  const executions =
    await supabase

      .from(
        "execution_records"
      )

      .select("*")

      .eq(
        "business_transaction_id",
        businessTransactionId
      );

  return {

    decision:
      decision.data,

    signals:
      signals.data,

    attestations:
      attestations.data,

    receipts:
      receipts.data,

    executions:
      executions.data

  };

}