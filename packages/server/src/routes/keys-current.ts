import express from "express";

import {
  getPublicKey
} from "@parmana/attestation";

const router =
  express.Router();

router.get(
  "/keys/current",
  (_req, res) => {

    res.json({

      keyId:
        "parmana-root-key",

      algorithm:
        "ed25519",

      publicKey:
        getPublicKey()

    });

  }
);

export default router;