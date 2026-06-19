import {
  randomUUID
} from "node:crypto";

import type {
  VerificationReceipt
} from "./verification-receipt.js";

export function createReceipt(

  decisionId: string,

  valid: boolean

): VerificationReceipt {

  return {

    receiptId:
      randomUUID(),

    decisionId,

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