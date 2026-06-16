import type {
  SignatureRecord
} from "@parmana/contracts";

import type {
  TrustPolicy
} from "@parmana/trust-profiles";

import {
  verifySignatureSet
} from "./verify-signature-set.js";

export function verifyPolicy(

  signatures:
    SignatureRecord[],

  policy:
    TrustPolicy

) {

  return verifySignatureSet(

    signatures,

    policy.requiredAlgorithms
  );
}