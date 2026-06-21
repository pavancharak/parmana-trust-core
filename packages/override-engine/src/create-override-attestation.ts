import crypto from "node:crypto";

import type {
  OverrideAttestation,
  OverrideDecision
} from "./types.js";

export function createOverrideAttestation(
  override: OverrideDecision
): OverrideAttestation {

  const attestedAt =
    new Date()
      .toISOString();

  const attestationHash =
    crypto
      .createHash("sha256")
      .update(

        JSON.stringify({

          overrideId:
            override.overrideId,

          decisionId:
            override.decisionId,

          businessTransactionId:
            override.businessTransactionId,

          taskId:
            override.taskId,

          policyId:
            override.policyId,

          policyVersion:
            override.policyVersion,

          overrideSubjectId:
            override.overrideSubjectId,

          overrideAction:
            override.overrideAction,

          overrideReason:
            override.overrideReason

        })

      )
      .digest("hex");

  return {

    overrideAttestationId:
      crypto.randomUUID(),

    overrideId:
      override.overrideId,

    decisionId:
      override.decisionId,

    businessTransactionId:
      override.businessTransactionId,

    taskId:
      override.taskId,

    policyId:
      override.policyId,

    policyVersion:
      override.policyVersion,

    overrideSubjectId:
      override.overrideSubjectId,

    overrideAction:
      override.overrideAction,

    overrideReason:
      override.overrideReason,

    attestedAt,

    attestationHash

  };

}