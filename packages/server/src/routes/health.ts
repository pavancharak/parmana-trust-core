import {
  Router
} from "express";

const router =
  Router();

router.get(
  "/health",
  (
    _req,
    res
  ) => {

    res.json({

      status: "ok",

      service:
        "parmana-server"

    });

  }
);

export default router;