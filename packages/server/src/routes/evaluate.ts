import {
  saveDecision
} from "@parmana/audit-db";

import type {
  Request,
  Response
} from "express";

import {
  Router
} from "express";

import {
  evaluateTask
} from "@parmana/verifier";

const router =
  Router();

router.post(
  "/evaluate",
  async (
    req: Request,
    res: Response
  ) => {
    try {

      const {
        task,
        signals
      } = req.body;

      if (!task) {

        return res
          .status(400)
          .json({
            error:
              "task is required"
          });
      }

      const result =
  evaluateTask(
    task,
    signals ?? {}
  );

await saveDecision(
  result
);

return res
  .status(200)
  .json(
    result
  );

    } catch (error) {

      return res
        .status(400)
        .json({

          error:

            error instanceof Error

              ? error.message

              : "Unknown error"
        });
    }
  }
);

export default router;