import crypto from "node:crypto";

import {
  enforceInvariant
} from "@parmana/contracts";

import type {
  DecisionAttestation
} from "./types.js";

import {
  provider
} from "./provider.js";

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
    evaluation.decision

};

  const attestationHash =
    crypto
      .createHash("sha256")
      .update(

        JSON.stringify({

   businessTransactionId:
    evaluation.businessTransactionId,

  subjectId:
    evaluation.subjectId,

  taskId:
    evaluation.taskId,

  policyId:
    evaluation.policyId,

  policyVersion:
    evaluation.policyVersion,

  outcome,

  createdAt

})

      )
      .digest("hex");

  const signature =
  provider.sign(
    attestationHash
  );

  const attestation: DecisionAttestation = {

  schemaVersion: "2",

  decisionId:
    evaluation.decisionId,

   businessTransactionId:
    evaluation.businessTransactionId,

  subjectId:
    evaluation.subjectId,

  taskId:
    evaluation.taskId,

    policyId:
      evaluation.policyId,

    policyVersion:
      evaluation.policyVersion,

    evidence: [

      {
        id: "attestation-hash",
        hash: attestationHash,
        hashAlgorithm: "sha256"
      }

    ],

    signatures: {

  signatures: [

    {

      algorithm:
  provider.algorithm(),

      keyId:
        "parmana-root-key",

      value:
        signature,

      createdAt

    }

  ]

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