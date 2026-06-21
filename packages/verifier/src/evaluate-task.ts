import crypto from "node:crypto";

import {
  resolveTask
} from "@parmana/bundle";

import {
  evaluatePolicy
} from "./evaluate-policy.js";

export function evaluateTask(

  taskName: string,

  signals: Record<
    string,
    unknown
  >

) {

  const {
    task,
    policy
  } = resolveTask(
    taskName
  );

  const decision =
    evaluatePolicy(
      policy,
      signals
    );

return {

  decisionId:
    crypto.randomUUID(),

  businessTransactionId:
    signals.businessTransactionId,

  subjectId:
    signals.subjectId,

  taskId:
    task.taskId,

  policyId:
    policy.policyId,

  policyVersion:
    policy.policyVersion,

  decision

};
}