import {
  saveDecision,
  saveAttestation
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
        subjectId,
        taskId,
        signals
      } = req.body;

      if (!subjectId) {

        return res
          .status(400)
          .json({
            error:
              "subjectId is required"
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
          subjectId,
          taskId,
          signals ?? {}
        );

      await saveDecision({

        decisionId:
          result.decisionId,

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

      const attestation =
        createAttestation(
          result
        );

      await saveAttestation(
        attestation
      );

      return res
        .status(200)
        .json(
          result
        );

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