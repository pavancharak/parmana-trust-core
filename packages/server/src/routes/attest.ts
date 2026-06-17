import express from "express";

import {
  evaluateTask
} from "@parmana/verifier";
import {
  saveAttestation
} from "@parmana/audit-db";
import {
  createAttestation
} from "@parmana/attestation";

const router =
  express.Router();

router.post(
  "/attest",
  async (req, res) => {

    try {

      const {
        task,
        signals
      } = req.body;

      const evaluation =
        evaluateTask(
          task,
          signals
        );

      const attestation =
        createAttestation(
          evaluation
        );
await saveAttestation(
  attestation
);
      res.json(
        attestation
      );

    } catch (error) {

      res.status(500)
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