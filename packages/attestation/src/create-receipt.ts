import crypto from "node:crypto";

import {
  enforceInvariant
} from "@parmana/contracts";

import type {
  VerificationReceipt
} from "@parmana/contracts";

export function createReceipt(

  businessTransactionId: string,

  subjectId: string | undefined,

  decisionId: string,

intentId: string,

taskId: string,

  policyId: string,

  policyVersion: string,

  intentHash: string,

  valid: boolean

): VerificationReceipt
{

  enforceInvariant(
    "INV-102",
    Boolean(decisionId)
  );

  return {

  receiptId:
    crypto.randomUUID(),

  businessTransactionId,

  subjectId,

  decisionId,

intentId,

taskId,

  policyId,

  policyVersion,

  intentHash,

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

  businessTransactionId,

  subjectId,

  decisionId,

taskId,

  policyId,

  policyVersion,

  intentHash,

  valid

})
        )
        .digest("hex")
  };
}