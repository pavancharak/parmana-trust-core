import {
  Router
} from "express";

import {
  verifyDecision
} from "@parmana/verifier";

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

      res.json(
        result
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