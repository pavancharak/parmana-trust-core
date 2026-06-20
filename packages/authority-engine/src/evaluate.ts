import {
  randomUUID
} from "node:crypto";

import type {
  EvaluationRequest,
  EvaluationResult
} from "./types.js";

export function evaluate(

  request: EvaluationRequest

): EvaluationResult {

  const reasons: string[] = [];

  if (!request.taskId) {

    reasons.push(
      "taskId missing"
    );

  }

  if (!request.signals) {

    reasons.push(
      "signals missing"
    );

  }

 return {

  decisionId:
    randomUUID(),

  subjectId:
    request.subjectId,

  taskId:
    request.taskId ?? "unknown",

  policyId:
    "unknown",

  policyVersion:
    "unknown",

  decision:

    reasons.length === 0

      ? "approved"

      : "denied",

  reasons

};

}