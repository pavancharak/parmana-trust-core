import crypto from "node:crypto";
import {
  enforceInvariant
} from "@parmana/contracts";
import type {
  DecisionAttestation
} from "./types.js";

export function createAttestation(
  evaluation: any
): DecisionAttestation {


  enforceInvariant(
    "INV-100",
    Boolean(
      evaluation.decision
    )
  );


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

  const attestation: DecisionAttestation = {

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


  enforceInvariant(
    "INV-101",
    Boolean(
      attestation.decisionId
    )
  );


  return attestation;
}