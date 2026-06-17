import express from "express";

import {
  verifyAttestation
} from "@parmana/attestation";

import {
  createReceipt
} from "@parmana/attestation";

import {
  saveReceipt
} from "@parmana/audit-db";

const router =
  express.Router();

router.post(
  "/receipt",
  async (req, res) => {

    try {

      const attestation =
        req.body;

      const verified =
        verifyAttestation(
          attestation
        );

      const receipt =
        createReceipt(
          attestation.decisionId,
          verified
        );

      await saveReceipt(
        receipt
      );

      res.json(
        receipt
      );

    } catch (error) {

  console.error(
    "RECEIPT ERROR:",
    error
  );

  res.status(500)
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