import {
  Router
} from "express";

import {
  createTrustRoot
} from "@parmana/trust-anchor";

const router =
  Router();

router.post(
  "/trust-root",
  (
    req,
    res
  ) => {

    const root =
      createTrustRoot(

        req.body.id,

        req.body.anchors,

        req.body.version,

        req.body.previousVersion

      );

    res.json(
      root
    );

  }
);

export default router;