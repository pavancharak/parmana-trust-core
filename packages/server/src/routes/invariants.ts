import express from "express";

import {
  INVARIANT_REGISTRY
} from "@parmana/contracts";


const router =
  express.Router();


/**
 * List all Trust Core invariants
 */
router.get(
  "/invariants",
  (_req, res) => {

    res.json({

      count:
        Object.keys(
          INVARIANT_REGISTRY
        ).length,

      invariants:
        INVARIANT_REGISTRY

    });

  }
);


/**
 * Get a single invariant by ID
 */
router.get(
  "/invariants/:id",
  (req, res) => {

    const invariant =
      INVARIANT_REGISTRY[
        req.params.id as keyof typeof INVARIANT_REGISTRY
      ];


    if (!invariant) {

      return res
        .status(404)
        .json({

          error:
            "Invariant not found",

          invariantId:
            req.params.id

        });

    }


    return res.json(
      invariant
    );

  }
);


export default router;