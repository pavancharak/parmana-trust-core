import {
  Router
} from "express";

import {
  createSchema,
  getSchema,
  listSchemas
} from "@parmana/schema-registry";

const router =
  Router();

router.post(
  "/schemas",
  async (req, res) => {

    const schema =
      await createSchema(
        req.body
      );

    res
      .status(201)
      .json(schema);

  }
);

router.get(
  "/schemas",
  async (_req, res) => {

    const schemas =
      await listSchemas();

    res.json(
      schemas
    );

  }
);

router.get(
  "/schemas/:schemaId",
  async (req, res) => {

    const schema =
      await getSchema(
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