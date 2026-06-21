import express from "express";

import {
  createOverrideDecision
} from "@parmana/override-engine";

import {
  saveOverrideDecision
} from "@parmana/audit-db";

const router =
  express.Router();

router.post(

  "/override",

  async (
    req,
    res
  ) => {

    try {

      const {

        decisionId,

        businessTransactionId,

        taskId,

        policyId,

        policyVersion,

        overrideSubjectId,

        overrideAction,

        overrideReason

      } = req.body;

      if (

        !decisionId ||

        !businessTransactionId ||

        !taskId ||

        !policyId ||

        !policyVersion ||

        !overrideSubjectId ||

        !overrideAction ||

        !overrideReason

      ) {

        return res
          .status(400)
          .json({

            error:
              "missing required fields"

          });

      }

      const override =
        createOverrideDecision({

          decisionId,

          businessTransactionId,

          taskId,

          policyId,

          policyVersion,

          overrideSubjectId,

          overrideAction,

          overrideReason

        });

      await saveOverrideDecision(
        override
      );

      return res.json(
        override
      );

    } catch (error) {

      console.error(
        error
      );

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