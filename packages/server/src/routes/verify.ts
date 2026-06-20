import crypto
  from "node:crypto";

import {
  AuditDbClient
} from "@parmana/audit-db";

import {
  hashReceipt
} from "@parmana/crypto";

import {
  appendEntry
} from "@parmana/transparency-log";

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

const auditDb =
  new AuditDbClient();

const router =
  Router();

router.post(
  "/verify",
  async (
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

        subjectId:
          req.body.attestation.subjectId,

        decisionId:
          req.body.attestation.decisionId,

taskId:
  req.body.attestation.taskId,

        policyId:
          req.body.attestation.policyId,

        policyVersion:
          req.body.attestation.policyVersion,

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
console.log(
  "RECEIPT ID:",
  receipt.receiptId
);

console.log(
  receipt
);
      await auditDb
        .recordVerificationReceipt(
          receipt
        );

      const receiptHash =
        hashReceipt(
          receipt
        );

      await appendEntry(
        receipt.receiptId,
        receiptHash
      );

      res.json({

        ...receipt,

        receiptHash

      });

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