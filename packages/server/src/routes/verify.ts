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

import {
  TRUST_PROFILES
} from "@parmana/trust-profiles";

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
  !req.body?.attestation
) {

  return res
    .status(400)
    .json({
      error:
        "attestation is required"
    });

}

      const profileName =

  req.body.attestation
    ?.metadata
    ?.profile ??

  "default";

const trustProfile =

  TRUST_PROFILES[
    profileName
  ];

const result =
  verifyDecision(

    req.body.attestation,

    trustProfile

  );

      const receipt:
        VerificationReceipt = {

        receiptId:
          crypto.randomUUID(),

        businessTransactionId:
          req.body.attestation.businessTransactionId,

        subjectId:
          req.body.attestation.subjectId,

        decisionId:
  req.body.attestation.decisionId,

intentId:
  req.body.attestation.intent?.intentId,

taskId:
  req.body.attestation.taskId,

        policyId:
          req.body.attestation.policyId,

        policyVersion:
          req.body.attestation.policyVersion,
        
        intentHash:
  req.body.attestation.intent?.intentHash,

        valid:
          result.valid,

        verifiedAlgorithms:
          result.verifiedAlgorithms,

        failedAlgorithms:
          result.failedAlgorithms,

        receiptHash:
          "",

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

  console.error(
    "VERIFY ERROR:",
    error
  );

  res
    .status(400)
    .json({

      error:
        error instanceof Error
          ? error.message
          : JSON.stringify(error)

    });

}

  }
);

export default router;