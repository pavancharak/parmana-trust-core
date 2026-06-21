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
console.log(
  JSON.stringify(
    attestation,
    null,
    2
  )
);
await saveAttestation(
  attestation
);
      res.json(
        attestation
      );

    } catch (error) {

  console.error(
    "ATTEST ERROR:",
    error
  );

  res
    .status(500)
    .json({

      error:
        error instanceof Error
          ? error.stack
          : JSON.stringify(error)

    });

}

  }
);

export default router;