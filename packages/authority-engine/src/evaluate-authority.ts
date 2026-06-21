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

export async function evaluateAuthority(

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

  const reasons = [

    ...schemaErrors,

    ...signalErrors

  ];

  const decisionId =
    randomUUID();

  return {

    decisionId,

    subjectId,

    taskId,

    policyId:
      policy.policyId,

    policyVersion:
      policy.version,

    decision:

      reasons.length === 0

        ? "approved"

        : "denied",

    reasons

  };

}