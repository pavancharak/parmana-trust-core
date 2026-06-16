import {
  Router
} from "express";

import {
  createReceipt
} from "@parmana/bundle";

const router =
  Router();

router.post(
  "/receipt",
  (
    req,
    res
  ) => {

    const receipt =
      createReceipt(
        req.body
      );

    res.json(
      receipt
    );
  }
);

export default router;