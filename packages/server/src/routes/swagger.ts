import express from "express";

import path from "node:path";

import swaggerUi
  from "swagger-ui-express";

import YAML
  from "yamljs";

const router =
  express.Router();

const openApiPath =
  path.resolve(
    process.cwd(),
    "../../openapi/openapi.yaml"
  );

const spec =
  YAML.load(
    openApiPath
  );

router.use(

  "/docs",

  swaggerUi.serve,

  swaggerUi.setup(
    spec
  )

);

export default router;