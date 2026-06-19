import express from "express";

import crypto from "node:crypto";
import {
  provider
} from "@parmana/attestation";;
import {
  enforceInvariant
} from "@parmana/contracts";
import {
  getReceiptHashes
} from "@parmana/audit-db";

import {
  buildRoot
} from "@parmana/transparency-log";

const router =
  express.Router();

router.get(
  "/trust-root/current",
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

      const receiptCount =
        hashes.length;

      res.json({

        rootId:
          crypto.randomUUID(),

        algorithm:
          "sha256",

        receiptCount,

        rootHash,

        signature,

        signatureAlgorithm:
          "ed25519",

        keyId:
          "parmana-root-key",

        publishedAt:
          new Date()
            .toISOString()

      });

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