import crypto from "node:crypto";

import {
  enforceInvariant
} from "@parmana/contracts";

import type {
  VerificationReceipt
} from "@parmana/contracts";

export function createReceipt(

  subjectId: string,

  decisionId: string,

  taskId: string,

  policyId: string,

  policyVersion: string,

  valid: boolean

): VerificationReceipt {

  enforceInvariant(
    "INV-102",
    Boolean(decisionId)
  );

  return {

    receiptId:
      crypto.randomUUID(),

    subjectId,

    decisionId,

    taskId,

    policyId,

    policyVersion,

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
          JSON.stringify({
            subjectId,
            decisionId,
            taskId,
            policyId,
            policyVersion,
            valid
          })
        )
        .digest("hex")
  };
}