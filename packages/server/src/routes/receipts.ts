import {
  Router
} from "express";

import {
  receipts
} from "../store/receipt-store.js";

const router =
  Router();

router.get(
  "/receipts/:id",
  (
    req,
    res
  ) => {

    const receipt =
      receipts.get(
        req.params.id
      );

    if (!receipt) {

      return res
        .status(404)
        .json({
          error:
            "Receipt not found"
        });
    }

    res.json(
      receipt
    );
  }
);

export default router;