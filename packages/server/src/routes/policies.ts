import {
  Router
} from "express";

import {
  createPolicy,
  getPolicy,
  listPolicies
} from "@parmana/policy-registry";

const router =
  Router();

router.post(
  "/policies",
  (req, res) => {

    const policy =
      createPolicy(
        req.body
      );

    res.status(201)
      .json(policy);

  }
);

router.get(
  "/policies",
  (_req, res) => {

    res.json(
      listPolicies()
    );

  }
);

router.get(
  "/policies/:policyId",
  (req, res) => {

    const policy =
      getPolicy(
        req.params.policyId
      );

    if (!policy) {

      return res
        .status(404)
        .json({
          error:
            "Policy not found"
        });

    }

    res.json(policy);

  }
);

export default router;