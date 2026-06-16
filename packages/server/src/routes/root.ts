import {
  Router
} from "express";

const router =
  Router();

router.get(
  "/",
  (
    _req,
    res
  ) => {

    res.json({
      service: "Parmana",
      version: "0.1.0",
      status: "running"
    });

  }
);

export default router;