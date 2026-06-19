import {
  Router
} from "express";

import {
  createSignal,
  getSignal,
  listSignals
} from "@parmana/signal-registry";

const router =
  Router();

router.post(
  "/signals",
  async (req, res) => {

    const signal =
      await createSignal(
        req.body
      );

    res
      .status(201)
      .json(signal);

  }
);

router.get(
  "/signals",
  async (_req, res) => {

    const signals =
      await listSignals();

    res.json(
      signals
    );

  }
);

router.get(
  "/signals/:signalId",
  async (req, res) => {

    const signal =
      await getSignal(
        req.params.signalId
      );

    if (!signal) {

      return res
        .status(404)
        .json({
          error:
            "Signal not found"
        });

    }

    res.json(signal);

  }
);

export default router;