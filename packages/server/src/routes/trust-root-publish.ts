import express from "express";

import crypto from "node:crypto";
import {
  enforceInvariant
} from "@parmana/contracts";
import {
  provider
} from "@parmana/attestation";

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

      const signature =
        provider.sign(
          rootHash
        );
enforceInvariant(
  "INV-130",
  Boolean(
    signature
  )
);
enforceInvariant(
  "INV-130",
  Boolean(
    signature
  )
);
      const trustRoot = {

        rootId:
          crypto.randomUUID(),

        rootHash,

        signature,

        signatureAlgorithm:
          provider.algorithm(),

        keyId:
          "parmana-root-key",

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