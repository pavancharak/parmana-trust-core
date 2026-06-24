import {
  randomUUID
} from "node:crypto";

import {
  getTask
} from "@parmana/task-registry";

import {
  getPolicy
} from "@parmana/policy-registry";

import {
  getSchema
} from "@parmana/schema-registry";

import {
  validateSchema
} from "./validate-schema.js";

import {
  validateSignals
} from "./validate-signals.js";
import {
  evaluatePolicy
} from "./evaluate-policy.js";

export async function evaluateAuthority(

  businessTransactionId: string,

  subjectId: string | undefined,

  taskId: string,

  signals: Record<
    string,
    unknown
  >

) {

  const task =
    await getTask(
      taskId
    );

  if (!task) {

    return {

      decisionId:
        randomUUID(),

      businessTransactionId,

      subjectId,

      taskId,

      policyId:
        "unknown",

      policyVersion:
        "unknown",

      decision:
        "denied",

      reasons: [
        "task not found"
      ]

    };

  }

  const policy =
    await getPolicy(
      task.policyId
    );

  if (!policy) {

    return {

      decisionId:
        randomUUID(),

      businessTransactionId,

      subjectId,

      taskId,

      policyId:
        task.policyId,

      policyVersion:
        "unknown",

      decision:
        "denied",

      reasons: [
        "policy not found"
      ]

    };

  }

  const schema =
    await getSchema(
      policy.schemaId
    );

  if (!schema) {

    return {

      decisionId:
        randomUUID(),

      businessTransactionId,

      subjectId,

      taskId,

      policyId:
        policy.policyId,

      policyVersion:
        policy.version,

      decision:
        "denied",

      reasons: [
        "schema not found"
      ]

    };

  }

  const schemaErrors =
    validateSchema(
      schema,
      signals
    );

  const signalErrors =
    await validateSignals(

      schema.fields.map(

        field =>
          field.name

      )

    );

  const validationErrors = [

  ...schemaErrors,

  ...signalErrors

];
console.log(
  "POLICY:",
  JSON.stringify(
    policy,
    null,
    2
  )
);

const policyResult =

  evaluatePolicy(

    policy.definition,

    signals

  );

const decisionId =
  randomUUID();

if (

  validationErrors.length > 0

) {

  return {

    decisionId,

    businessTransactionId,

    subjectId,

    taskId,

    policyId:
      policy.policyId,

    policyVersion:
      policy.version,

    decision:
      "rejected",

    requiresOverride:
      false,

    matchedRuleId:
      "validation-failed",

    reasons:
      validationErrors

  };

}

return {

  decisionId,

  businessTransactionId,

  subjectId,

  taskId,

  policyId:
    policy.policyId,

  policyVersion:
    policy.version,

  decision:

    policyResult.action ===
    "approve"

      ? "approved"

      : "rejected",

  requiresOverride:
    policyResult
      .requiresOverride,

  matchedRuleId:
    policyResult
      .matchedRuleId,

  reasons: [

    policyResult.reason

  ]

};

}