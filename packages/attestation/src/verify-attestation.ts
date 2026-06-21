import crypto from "node:crypto";

import {
  enforceInvariant
} from "@parmana/contracts";

import type {
  DecisionAttestation
} from "./types.js";

import {
  provider
} from "./provider.js";

export function verifyAttestation(
  attestation: DecisionAttestation
): boolean {

  const hashEvidence =
    attestation.evidence.find(

      evidence =>
        evidence.id ===
        "attestation-hash"

    );

  enforceInvariant(
    "INV-140",
    Boolean(
      hashEvidence
    )
  );

  if (!hashEvidence) {

    throw new Error(
      "INV-140 violation"
    );

  }

  const expectedHash =
    crypto
      .createHash("sha256")
      .update(

        JSON.stringify({

          businessTransactionId:
            attestation.businessTransactionId,

          subjectId:
            attestation.subjectId,

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

  if (

    expectedHash !==
    hashEvidence.hash

  ) {

    return false;

  }

  const signatureRecord =
    attestation
      .signatures
      .signatures[0];

  if (!signatureRecord) {

    return false;

  }

  const valid =
    provider.verify(
      expectedHash,
      signatureRecord.value
    );

  enforceInvariant(
    "INV-120",
    valid
  );

  enforceInvariant(
    "INV-121",
    valid
  );

  return valid;

}