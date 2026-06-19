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

      decision: "denied",

      reasons: [
        "task not found"
      ]

    };

  }

  const taskRecord =
    task;

  const policy =
  await getPolicy(
    taskRecord.policyId
  );

  if (!policy) {

    return {

      decision: "denied",

      reasons: [
        "policy not found"
      ]

    };

  }

  const policyRecord =
    policy;

  const schema =
  await getSchema(
    policyRecord.schemaId
  );

  if (!schema) {

    return {

      decision: "denied",

      reasons: [
        "schema not found"
      ]

    };

  }

  const schemaRecord =
    schema;

  const schemaErrors =
    validateSchema(
      schemaRecord,
      signals
    );

  const signalErrors =
  await validateSignals(

      schemaRecord.fields.map(

        field =>
          field.name

      )

    );

  const reasons = [

    ...schemaErrors,

    ...signalErrors

  ];

  return {

    decision:

      reasons.length === 0

        ? "approved"

        : "denied",

    reasons

  };

}