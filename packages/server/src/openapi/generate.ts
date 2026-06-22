import fs from "node:fs";
import path from "node:path";

import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

import YAML from "yaml";

import {
  OpenAPIRegistry,
  OpenApiGeneratorV31,
} from "@asteasolutions/zod-to-openapi";

import {
  AttestRequestSchema,
} from "../schemas/attest.js";

const registry = new OpenAPIRegistry();

//registry.register("AttestRequest", AttestRequestSchema);

registry.registerPath({
  method: "post",
  path: "/attest",

  tags: ["Attestation"],

  summary: "Create decision attestation",

  request: {
    body: {
      content: {
        "application/json": {
          schema: AttestRequestSchema,
        },
      },
    },
  },

  responses: {
    200: {
      description: "Decision attestation",
    },
  },
});

const generator =
  new OpenApiGeneratorV31(
    registry.definitions
  );

const document =
  generator.generateDocument({
    openapi: "3.1.0",

    info: {
      title: "Parmana Trust Core API",
      version: "0.5.0",
    },
  });

const outputPath =
  path.resolve(
    process.cwd(),
    "../../openapi/generated.yaml"
  );

fs.writeFileSync(
  outputPath,
  YAML.stringify(document),
  "utf8"
);

console.log(
  `OpenAPI generated: ${outputPath}`
);