import crypto from "node:crypto";

import type {
  OverrideAttestation,
  OverrideVerificationReceipt
} from "./types.js";

export function verifyOverrideAttestation(
  attestation: OverrideAttestation
): OverrideVerificationReceipt {

  const expectedHash =
    crypto
      .createHash("sha256")
      .update(

        JSON.stringify({

          overrideId:
            attestation.overrideId,

          decisionId:
            attestation.decisionId,

          businessTransactionId:
            attestation.businessTransactionId,

          taskId:
            attestation.taskId,

          policyId:
            attestation.policyId,

          policyVersion:
            attestation.policyVersion,

          overrideSubjectId:
            attestation.overrideSubjectId,

          overrideAction:
            attestation.overrideAction,

          overrideReason:
            attestation.overrideReason

        })

      )
      .digest("hex");

  const valid =
    expectedHash ===
    attestation.attestationHash;

  return {

    overrideReceiptId:
      crypto.randomUUID(),

    overrideId:
      attestation.overrideId,

    decisionId:
      attestation.decisionId,

    businessTransactionId:
      attestation.businessTransactionId,

    valid,

    verifiedAt:
      new Date()
        .toISOString()

  };

}