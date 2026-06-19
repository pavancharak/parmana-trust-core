import {
  supabase
} from "./supabase.js";

export async function getAttestation(
  decisionId: string
) {

  const {
    data,
    error
  } = await supabase

    .from(
      "decision_attestations"
    )

    .select("*")

    .eq(
      "decision_id",
      decisionId
    )

    .single();

  if (error) {

    throw error;

  }

  return data?.attestation;

}