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

    const result =
      verifyDecision(

        req.body.attestation,

        req.body.policy

      );

    res.json(
      result
    );

  }
);

export default router;