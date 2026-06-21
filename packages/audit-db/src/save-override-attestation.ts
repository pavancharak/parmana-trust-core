import {
  supabase
} from "./supabase.js";

import type {
  OverrideAttestation
} from "@parmana/override-engine";

export async function saveOverrideAttestation(
  attestation: OverrideAttestation
) {

  const result =
    await supabase

      .from(
        "override_attestations"
      )

      .insert({

        override_attestation_id:
          attestation.overrideAttestationId,

        override_id:
          attestation.overrideId,

        decision_id:
          attestation.decisionId,

        business_transaction_id:
          attestation.businessTransactionId,

        task_id:
          attestation.taskId,

        policy_id:
          attestation.policyId,

        policy_version:
          attestation.policyVersion,

        override_subject_id:
          attestation.overrideSubjectId,

        override_action:
          attestation.overrideAction,

        override_reason:
          attestation.overrideReason,

        attestation_hash:
          attestation.attestationHash,

        attested_at:
          attestation.attestedAt

      })

      .select()
      .single();

  if (result.error) {

    throw result.error;

  }

  return result.data;

}