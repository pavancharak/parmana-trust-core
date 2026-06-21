import crypto
  from "node:crypto";

import {
  Router
} from "express";

import {
  verifyExecutionToken
} from "@parmana/execution-token";

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

        executionToken,

        executionSystem,

        executionReference

      } = req.body;

      if (

        !executionToken ||

        !executionSystem ||

        !executionReference

      ) {

        return res
          .status(400)
          .json({

            error:
              "executionToken, executionSystem and executionReference are required"

          });

      }

      const tokenValid =
        verifyExecutionToken(
          executionToken
        );

      if (!tokenValid) {

        return res
          .status(403)
          .json({

            error:
              "INV-170 violation: invalid execution trust token"

          });

      }

      const receipt =
        await getReceipt(
          executionToken.receiptId
        );

      if (!receipt) {

        return res
          .status(404)
          .json({

            error:
              "receipt not found"

          });

      }

      if (!receipt.valid) {

        return res
          .status(403)
          .json({

            error:
              "INV-199 violation: receipt is not valid"

          });

      }

      const execution = {

        executionId:
          crypto.randomUUID(),

        businessTransactionId:
          executionToken.businessTransactionId,

        subjectId:
          receipt.subject_id,

        decisionId:
          executionToken.decisionId,

        receiptId:
          executionToken.receiptId,

        taskId:
          executionToken.taskId,

        policyId:
          executionToken.policyId,

        policyVersion:
          executionToken.policyVersion,

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