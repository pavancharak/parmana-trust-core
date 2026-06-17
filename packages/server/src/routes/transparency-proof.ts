import express from "express";

import {
  supabase
} from "@parmana/audit-db";

const router =
  express.Router();

router.get(
  "/transparency/proof/:receiptId",
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

      res.json({

        receiptId,

        included: true,

        receiptHash:
          data.receipt_hash,

        transparencyEntryId:
          data.id,

        createdAt:
          data.created_at
      });

    } catch (error) {

      res.status(404)
        .json({

          included: false,

          error:
            error instanceof Error
              ? error.message
              : String(error)
        });

    }

  }
);

export default router;