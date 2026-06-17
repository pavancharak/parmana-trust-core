import express from "express";

import {
  supabase
} from "@parmana/audit-db";

const router =
  express.Router();

router.get(
  "/transparency/:receiptId",
  async (req, res) => {

    try {

      const {
        receiptId
      } = req.params;

      const {
        data,
        error
      } = await supabase

        .from(
          "transparency_log"
        )

        .select("*")

        .eq(
          "receipt_id",
          receiptId
        )

        .single();

      if (error) {

        throw error;

      }

      res.json(
        data
      );

    } catch (error) {

      res.status(404)
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