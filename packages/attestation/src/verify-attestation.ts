import crypto from "node:crypto";

import type {
  DecisionAttestation
} from "./types.js";

export function verifyAttestation(
  attestation: DecisionAttestation
): boolean {

  const hashEvidence =
    attestation.evidence.find(

      evidence =>
        evidence.id ===
        "attestation-hash"

    );

  if (!hashEvidence) {

    return false;

  }

  const expectedHash =
    crypto
      .createHash("sha256")
      .update(

        JSON.stringify({

          taskId:
            attestation.taskId,

          policyId:
            attestation.policyId,

          policyVersion:
            attestation.policyVersion,

          outcome:
            attestation.outcome,

          createdAt:
            attestation.metadata.createdAt

        })

      )
      .digest("hex");

  return (
    expectedHash ===
    hashEvidence.hash
  );
}