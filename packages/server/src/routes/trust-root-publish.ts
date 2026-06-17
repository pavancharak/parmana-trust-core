import express from "express";

import crypto from "node:crypto";

import {
  getReceiptHashes,
  saveTrustRoot
} from "@parmana/audit-db";

import {
  buildRoot
} from "@parmana/transparency-log";

const router =
  express.Router();

router.post(
  "/trust-root/publish",
  async (_req, res) => {

    try {

      const hashes =
        await getReceiptHashes();

      const rootHash =
        buildRoot(
          hashes
        );

      const trustRoot = {

        rootId:
          crypto.randomUUID(),

        rootHash,

        receiptCount:
          hashes.length,

        publishedAt:
          new Date()
            .toISOString()
      };

      await saveTrustRoot(
        trustRoot
      );

      res.json(
        trustRoot
      );

    } catch (error) {

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