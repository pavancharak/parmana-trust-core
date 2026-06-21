import {
  Router
} from "express";

import {
  getTrustChain
} from "@parmana/audit-db";

const router =
  Router();

router.get(
  "/trust-chain/:businessTransactionId",
  async (
    req,
    res
  ) => {

    const result =
      await getTrustChain(
        req.params.businessTransactionId
      );

    return res.json(
      result
    );

  }
);

export default router;