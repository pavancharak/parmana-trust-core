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
  getDecision,
  saveExecution
} from "@parmana/audit-db";

import {
  authorizeExecution
} from "@parmana/execution-gateway";

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

        executionPayload,

        executionSystem,

        executionReference

      } = req.body;
console.log(
  "EXECUTION TOKEN:",
  JSON.stringify(
    executionToken,
    null,
    2
  )
);

      if (

        !executionToken ||

        !executionPayload ||

        !executionSystem ||

        !executionReference

      ) {

        return res
          .status(400)
          .json({

            error:
              "executionToken, executionPayload, executionSystem and executionReference are required"

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

const decision =
  await getDecision(
    executionToken.decisionId
  );

if (!decision) {

  return res
    .status(404)
    .json({

      error:
        "decision not found"

    });

}

if (

  decision.action !==
  "approved"

) {

  return res
    .status(403)
    .json({

      error:
        "INV-201 violation: decision is not approved"

    });

}

const authorization =
  authorizeExecution(

    executionToken,

    executionPayload

  );

      if (

        !authorization.authorized

      ) {

        return res
          .status(403)
          .json({

            error:
              "INV-200 violation: execution payload does not match authorized intent",

            expectedHash:
              authorization.expectedHash,

            actualHash:
              authorization.actualHash

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

       intentId:
  executionToken.intentId,

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
console.log(
  "EXECUTION OBJECT:",
  JSON.stringify(
    execution,
    null,
    2
  )
);
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