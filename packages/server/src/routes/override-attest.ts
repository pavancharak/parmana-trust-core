import express from "express";

import {
  createOverrideAttestation
} from "@parmana/override-engine";

import {
  getOverrideById,
  saveOverrideAttestation
} from "@parmana/audit-db";

const router =
  express.Router();

router.post(

  "/override/attest",

  async (
    req,
    res
  ) => {

    try {

      const {
        overrideId
      } = req.body;

      const override =
        await getOverrideById(
          overrideId
        );

      if (!override) {

        return res
          .status(404)
          .json({

            error:
              "override not found"

          });

      }

      const attestation =
        createOverrideAttestation({

          overrideId:
            override.override_id,

          decisionId:
            override.decision_id,

          businessTransactionId:
            override.business_transaction_id,

          taskId:
            override.task_id,

          policyId:
            override.policy_id,

          policyVersion:
            override.policy_version,

          overrideSubjectId:
            override.override_subject_id,

          overrideAction:
            override.override_action,

          overrideReason:
            override.override_reason,

          createdAt:
            override.created_at

        });

      await saveOverrideAttestation(
        attestation
      );

      return res.json(
        attestation
      );

    } catch (error) {

      return res
        .status(500)
        .json({

          error:
            error instanceof Error
              ? error.message
              : String(error)

        });

    }

  }

);

export default router;