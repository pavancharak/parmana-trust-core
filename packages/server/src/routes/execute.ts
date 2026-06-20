import crypto
  from "node:crypto";

import {
  Router
} from "express";

import {
  getReceipt,
  saveExecution
} from "@parmana/audit-db";

const router =
  Router();

router.post(
  "/execute",
  async (
    req,
    res
  ) => {

    try {

      const {

        receiptId,

        executionSystem,

        executionReference

      } = req.body;

      if (

        !receiptId ||

        !executionSystem ||

        !executionReference

      ) {

        return res
          .status(400)
          .json({

            error:
              "receiptId, executionSystem and executionReference are required"

          });

      }

      const receipt =
        await getReceipt(
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

      const execution = {

        executionId:
          crypto.randomUUID(),

        subjectId:
          receipt.subject_id,

        decisionId:
          receipt.decision_id,

        receiptId:
          receipt.receipt_id,

        taskId:
          receipt.task_id,

        policyId:
          receipt.policy_id,

        policyVersion:
          receipt.policy_version,

        executionSystem,

        executionReference,

        executionStatus:
          "completed" as const,

        executedAt:
          new Date()
            .toISOString()

      };

      await saveExecution(
        execution
      );

      return res.json(
        execution
      );

    } catch (error) {

  console.error(
    "EXECUTE ERROR:",
    error
  );

  return res
    .status(400)
    .json({

      error:
        error instanceof Error
          ? error.message
          : JSON.stringify(error)

    });

}

  }
);

export default router;