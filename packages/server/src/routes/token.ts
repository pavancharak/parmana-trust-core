import express from "express";

import {
  createExecutionToken
} from "@parmana/execution-token";

import {
  getReceiptById
} from "@parmana/audit-db";

const router =
  express.Router();

router.post(
  "/token",
  async (
    req,
    res
  ) => {

    try {

      const {
        receiptId
      } = req.body;

      const receipt =
        await getReceiptById(
          receiptId
        );

      if (!receipt) {

        return res
          .status(404)
          .json({
            error:
              "receipt not found"
          });

      }

      const token =
        createExecutionToken(
          receipt
        );

      return res.json(
        token
      );

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