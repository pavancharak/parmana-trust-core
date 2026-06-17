import crypto from "node:crypto";

import type {
  DecisionAttestation
} from "./types.js";

export function createAttestation(
  evaluation: any
): DecisionAttestation {

  const createdAt =
    new Date().toISOString();

  const outcome = {
    result:
      evaluation.decision.action
  };

  const attestationHash =
    crypto
      .createHash("sha256")
      .update(

        JSON.stringify({

          taskId:
            evaluation.task.taskId,

          policyId:
            evaluation.policy.policyId,

          policyVersion:
            evaluation.policy.policyVersion,

          outcome,

          createdAt

        })

      )
      .digest("hex");

  return {

    schemaVersion: "2",

    decisionId:
  evaluation.decisionId,

    taskId:
      evaluation.task.taskId,

    policyId:
      evaluation.policy.policyId,

    policyVersion:
      evaluation.policy.policyVersion,

    evidence: [

      {
        id: "attestation-hash",
        hash: attestationHash,
        hashAlgorithm: "sha256"
      }

    ],

    signatures: {
      signatures: []
    },

    metadata: {

      profile: "default",

      createdAt
    },

    outcome
  };
}