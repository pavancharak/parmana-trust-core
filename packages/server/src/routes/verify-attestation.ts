import express from "express";

import {
  verifyAttestation
} from "@parmana/attestation";

const router =
  express.Router();

router.post(
  "/verify-attestation",
  (req, res) => {

    try {

      const attestation =
        req.body;

      const valid =
        verifyAttestation(
          attestation
        );

      res.json({

        valid

      });

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