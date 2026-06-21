import {
  supabase
} from "./supabase.js";

export async function saveSignalEvidence(
  evidence: {
    decisionId: string;
    businessTransactionId: string;
    signalSnapshot: Record<
      string,
      unknown
    >;
  }
) {

  const {
    error
  } = await supabase

    .from(
      "signal_evidence"
    )

    .insert({

      decision_id:
        evidence.decisionId,

      business_transaction_id:
        evidence.businessTransactionId,

      signal_snapshot:
        evidence.signalSnapshot

    });

  if (error) {

    throw error;

  }

}