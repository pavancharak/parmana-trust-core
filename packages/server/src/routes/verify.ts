import crypto
  from "node:crypto";

import {
  Router
} from "express";

import {
  verifyDecision
} from "@parmana/verifier";

import {
  receipts
} from "../store/receipt-store.js";

import type {
  VerificationReceipt
} from "../types/verification-receipt.js";

const router =
  Router();

router.post(
  "/verify",
  (
    req,
    res
  ) => {

    try {

      if (
        !req.body?.attestation ||
        !req.body?.policy
      ) {

        return res
          .status(400)
          .json({
            error:
              "attestation and policy are required"
          });
      }

      const result =
        verifyDecision(
          req.body.attestation,
          req.body.policy
        );

      const receipt:
        VerificationReceipt = {

        receiptId:
          crypto.randomUUID(),

        decisionId:
          req.body.attestation.decisionId,

        valid:
          result.valid,

        verifiedAlgorithms:
          result.verifiedAlgorithms,

        failedAlgorithms:
          result.failedAlgorithms,

        verifiedAt:
          new Date()
            .toISOString()
      };

      receipts.set(
        receipt.receiptId,
        receipt
      );

      res.json(
        receipt
      );

    } catch (error) {

      res
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