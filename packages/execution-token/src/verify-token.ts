
import {
  verifyPayload
} from "@parmana/trust-anchor";
import type {
  ExecutionToken
} from "./types.js";

export function verifyExecutionToken(
  token: ExecutionToken
): boolean {

  if (

    new Date(
      token.expiresAt
    ).getTime()

    <

    Date.now()

  ) {

    return false;

  }

  const payload =
  JSON.stringify({

    businessTransactionId:
      token.businessTransactionId,

    decisionId:
      token.decisionId,

    receiptId:
      token.receiptId,

    intentId:
      token.intentId,

    taskId:
      token.taskId,

    policyId:
      token.policyId,

    policyVersion:
      token.policyVersion,

    intentHash:
      token.intentHash,

    issuedAt:
      token.issuedAt,

    expiresAt:
      token.expiresAt

  });

return verifyPayload(

  payload,

  token.signature

);
}