import {
  Router
} from "express";

import {
  getExecution
} from "@parmana/audit-db";

const router =
  Router();

router.get(
  "/execution/:id",
  async (
    req,
    res
  ) => {

    try {

      const execution =
        await getExecution(
          req.params.id
        );

      res.json(
        execution
      );

    } catch (error) {

      res
        .status(404)
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