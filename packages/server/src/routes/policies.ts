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
  async (req, res) => {

    const policy =
      await createPolicy(
        req.body
      );

    res
      .status(201)
      .json(policy);

  }
);

router.get(
  "/policies",
  async (_req, res) => {

    const policies =
      await listPolicies();

    res.json(
      policies
    );

  }
);

router.get(
  "/policies/:policyId",
  async (req, res) => {

    const policy =
      await getPolicy(
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