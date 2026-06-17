import {
  supabase
} from "./supabase.js";

export async function saveAttestation(
  attestation: any
) {

  const {
    error
  } = await supabase

    .from(
      "decision_attestations"
    )

    .insert({

      decision_id:
        attestation.decisionId,

      task_id:
        attestation.taskId,

      policy_id:
        attestation.policyId,

      policy_version:
        attestation.policyVersion,

      attestation

    });

  if (error) {

    throw error;

  }
}