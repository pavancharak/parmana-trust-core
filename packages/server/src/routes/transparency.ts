import express from "express";
import {
  enforceInvariant
} from "@parmana/contracts";
import {
  supabase
} from "@parmana/audit-db";

const router =
  express.Router();

router.post(
  "/transparency",
  async (req, res) => {

    try {

      const {
        receiptId,
        receiptHash
      } = req.body;
enforceInvariant(
  "INV-103",
  Boolean(receiptId) &&
  Boolean(receiptHash)
);
      const {
        data,
        error
      } = await supabase

        .from(
          "transparency_log"
        )

        .insert({

          receipt_id:
            receiptId,

          receipt_hash:
            receiptHash
        })

        .select()

        .single();

      if (error) {

        throw error;

      }

      res.json(
        data
      );

    } catch (error) {

      res.status(500)
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