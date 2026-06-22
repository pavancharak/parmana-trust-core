import {
  randomUUID
} from "node:crypto";

import type {
  VerificationReceipt
} from "./verification-receipt.js";

export function createReceipt(

  businessTransactionId: string,

  subjectId: string | undefined,

  decisionId: string,

  taskId: string,

  policyId: string,

  policyVersion: string,

  intentHash: string,

  valid: boolean

): VerificationReceipt {
  return {

    receiptId:
      randomUUID(),

    businessTransactionId,

    subjectId,

    decisionId,

    taskId,

    policyId,

    policyVersion,

    intentHash,

    valid,

    verifiedAlgorithms:

      valid
        ? ["sha256"]
        : [],

    failedAlgorithms:

      valid
        ? []
        : ["sha256"],

    receiptHash:
      "",

    verifiedAt:
      new Date()
        .toISOString()

  };

}