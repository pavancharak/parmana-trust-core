import express from "express";

import {
  provider
} from "@parmana/attestation";
import {
  enforceInvariant
} from "@parmana/contracts";
const router =
  express.Router();

router.post(
  "/trust-root/verify",
  (req, res) => {

    try {

      const {
        rootHash,
        signature
      } = req.body;

      if (
        !rootHash ||
        !signature
      ) {

        return res
          .status(400)
          .json({

            error:
              "rootHash and signature are required"

          });

      }

      const valid =
        provider.verify(

          rootHash,

          signature

        );
enforceInvariant(
  "INV-131",
  valid
);
enforceInvariant(
  "INV-131",
  valid
);

      return res.json({

        valid

      });

    } catch (error) {

      return res
        .status(500)
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