import crypto from "node:crypto";
import {
  signPayload
} from "@parmana/trust-anchor";
import type {
  VerificationReceipt
} from "@parmana/contracts";

import type {
  ExecutionToken
} from "./types.js";

export function createExecutionToken(
  receipt: VerificationReceipt
): ExecutionToken {

  const issuedAt =
    new Date().toISOString();

  const expiresAt =
    new Date(
      Date.now() +
      15 * 60 * 1000
    ).toISOString();

  const payload =
  JSON.stringify({

    businessTransactionId:
      receipt.businessTransactionId,

    decisionId:
      receipt.decisionId,

    receiptId:
      receipt.receiptId,

    taskId:
      receipt.taskId,

    policyId:
      receipt.policyId,

    policyVersion:
      receipt.policyVersion,

   intentHash:
  receipt.intentHash,

    issuedAt,

    expiresAt

  });

const signature =
  signPayload(
    payload
  );
  return {

    tokenId:
      crypto.randomUUID(),

    businessTransactionId:
      receipt.businessTransactionId,

    decisionId:
      receipt.decisionId,

    receiptId:
      receipt.receiptId,

    taskId:
      receipt.taskId,

    policyId:
      receipt.policyId,

    policyVersion:
      receipt.policyVersion,

  intentHash:
  receipt.intentHash,

    issuedAt,

    expiresAt,

    signature

  };
}