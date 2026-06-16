import type {
  DecisionAttestation
} from "@parmana/attestation";

import type {
  TrustPolicy
} from "@parmana/trust-profiles";

import {
  verifySignatureSet
} from "./verify-signature-set.js";

export function verifyDecision(

  attestation:
    DecisionAttestation,

  policy:
    TrustPolicy

) {

  return verifySignatureSet(

    attestation
      .signatures
      .signatures,

    policy
      .requiredAlgorithms
  );
}