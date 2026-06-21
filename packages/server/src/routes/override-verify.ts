import express from "express";

import {
  verifyOverrideAttestation
} from "@parmana/override-engine";

import {
  getOverrideAttestationById,
  saveOverrideReceipt
} from "@parmana/audit-db";

const router =
  express.Router();

router.post(

  "/override/verify",

  async (
    req,
    res
  ) => {

    try {

      const {
        overrideAttestationId
      } = req.body;

      const attestation =
        await getOverrideAttestationById(
          overrideAttestationId
        );

      if (!attestation) {

        return res
          .status(404)
          .json({

            error:
              "override attestation not found"

          });

      }

      const receipt =
        verifyOverrideAttestation({

          overrideAttestationId:
            attestation.override_attestation_id,

          overrideId:
            attestation.override_id,

          decisionId:
            attestation.decision_id,

          businessTransactionId:
            attestation.business_transaction_id,

          taskId:
            attestation.task_id,

          policyId:
            attestation.policy_id,

          policyVersion:
            attestation.policy_version,

          overrideSubjectId:
            attestation.override_subject_id,

          overrideAction:
            attestation.override_action,

          overrideReason:
            attestation.override_reason,

          attestedAt:
            attestation.attested_at,

          attestationHash:
            attestation.attestation_hash

        });

      await saveOverrideReceipt(
        receipt
      );

      return res.json(
        receipt
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