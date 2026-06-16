import type {
  DecisionAttestation
} from "./types.js";

import type {
  SignatureRecord
} from "@parmana/contracts";

export function reattest(
  existing: DecisionAttestation,
  signature: SignatureRecord
): DecisionAttestation {

  return {

    ...existing,

    signatures: [
      ...existing.signatures,
      signature
    ]
  };
}
