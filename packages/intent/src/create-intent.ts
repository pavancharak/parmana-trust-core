import crypto
  from "node:crypto";

import {
  hashIntent
} from "./hash-intent.js";

import type {
  Intent
} from "./types.js";

export function createIntent(

  input: {

    businessTransactionId:
      string;

    decisionId:
      string;

    taskId:
      string;

    policyId:
      string;

    policyVersion:
      string;

    payload:
      Record<
        string,
        unknown
      >;

  }

): Intent {

  return {

    intentId:
      crypto.randomUUID(),

    businessTransactionId:
      input.businessTransactionId,

    decisionId:
      input.decisionId,

    taskId:
      input.taskId,

    policyId:
      input.policyId,

    policyVersion:
      input.policyVersion,

    payload:
      input.payload,

    intentHash:
      hashIntent(
        input.payload
      ),

    createdAt:
      new Date()
        .toISOString()

  };

}