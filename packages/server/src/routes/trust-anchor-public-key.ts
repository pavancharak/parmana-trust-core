import express from "express";

import {
  provider
} from "@parmana/attestation";

const router =
  express.Router();

router.get(
  "/trust-anchor/public-key",
  (_req, res) => {

    res.json({

      keyId:
        "parmana-root-key",

      algorithm:
        provider.algorithm(),

      publicKey:
        provider.publicKey(),

    });

  }
);

export default router;