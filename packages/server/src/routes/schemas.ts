import { Router } from "express";

import {
  createSchema,
  getSchema,
  listSchemas
} from "@parmana/schema-registry";

const router = Router();

router.post(
  "/schemas",
  (req, res) => {

    const schema =
      createSchema(req.body);

    res.status(201)
      .json(schema);

  }
);

router.get(
  "/schemas",
  (_req, res) => {

    res.json(
      listSchemas()
    );

  }
);

router.get(
  "/schemas/:schemaId",
  (req, res) => {

    const schema =
      getSchema(
        req.params.schemaId
      );

    if (!schema) {

      return res
        .status(404)
        .json({
          error:
            "Schema not found"
        });

    }

    res.json(schema);

  }
);

export default router;