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

    decision:

      reasons.length === 0

        ? "approved"

        : "denied",

    reasons

  };

}