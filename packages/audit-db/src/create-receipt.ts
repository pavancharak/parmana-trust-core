import {
  randomUUID
} from "node:crypto";

import type {
  VerificationReceipt
} from "./verification-receipt.js";

export function createReceipt(

  subjectId: string,

  decisionId: string,

  taskId: string,

  policyId: string,

  policyVersion: string,

  valid: boolean

): VerificationReceipt {

  return {

    receiptId:
      randomUUID(),

    subjectId,

    decisionId,

    taskId,

    policyId,

    policyVersion,

    valid,

    verifiedAlgorithms:

      valid
        ? ["sha256"]
        : [],

    failedAlgorithms:

      valid
        ? []
        : ["sha256"],

    verifiedAt:
      new Date()
        .toISOString()

  };

}