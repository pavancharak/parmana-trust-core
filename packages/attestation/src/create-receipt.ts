import crypto from "node:crypto";

import type {
  VerificationReceipt
} from "@parmana/contracts";

export function createReceipt(
  decisionId: string,
  valid: boolean
): VerificationReceipt {

  return {

    receiptId:
      crypto.randomUUID(),

    decisionId,

    valid,

    verifiedAlgorithms: [
      "attestation-verification"
    ],

    failedAlgorithms: [],

    verifiedAt:
      new Date().toISOString(),

    receiptHash:
      crypto
        .createHash("sha256")
        .update(
          decisionId +
          String(valid)
        )
        .digest("hex")
  };
}