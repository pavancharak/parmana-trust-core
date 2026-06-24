import {
  saveDecision,
  saveAttestation,
  saveSignalEvidence
} from "@parmana/audit-db";

import {
  createAttestation
} from "@parmana/attestation";

import type {
  Request,
  Response
} from "express";

import {
  Router
} from "express";

import {
  evaluateAuthority
} from "@parmana/authority-engine";
import {
  createIntent
} from "@parmana/intent";

import {
  saveIntent
} from "@parmana/audit-db";


const router =
  Router();

router.post(
  "/evaluate",
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const {
  businessTransactionId,
  subjectId,
  taskId,
  signals,
  executionIntent
} = req.body;

if (!businessTransactionId) {

  return res
    .status(400)
    .json({
      error:
        "businessTransactionId is required"
    });

}

      
      if (!taskId) {

        return res
          .status(400)
          .json({
            error:
              "task is required"
          });

      }

      const result =
  await evaluateAuthority(
    businessTransactionId,
    subjectId,
    taskId,
    signals ?? {}
  );
await saveSignalEvidence({

  decisionId:
    result.decisionId,

  businessTransactionId,

  signalSnapshot:
    signals ?? {}

});
      await saveDecision({

  decisionId:
    result.decisionId,

  businessTransactionId,

  subjectId:
    result.subjectId,

        taskId:
          result.taskId,

        policyId:
          result.policyId,

        policyVersion:
          result.policyVersion,

        decision:
          result.decision,

        reasons:
          result.reasons

      });

const intent =
  createIntent({

    businessTransactionId,

    decisionId:
      result.decisionId,

    taskId:
      result.taskId,

    policyId:
      result.policyId,

    policyVersion:
      result.policyVersion,

    payload:
      executionIntent ?? {}

  });

await saveIntent(
  intent
);

      const attestation =
  createAttestation({

    ...result,

    intentId:
      intent.intentId,

    executionIntent

  });

      await saveAttestation(
        attestation
      );

      return res
  .status(200)
  .json({

    result,

    intent,

    attestation

  });

    } catch (error) {

      console.error(
        error
      );

      return res
        .status(400)
        .json({

          error:

            error instanceof Error

              ? error.message

              : "Unknown error"

        });

    }

  }
);

export default router;