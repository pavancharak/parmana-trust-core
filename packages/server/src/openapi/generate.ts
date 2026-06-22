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

import {
  VerifyRequestSchema,
} from "../schemas/verify.js";
import {
  TokenRequestSchema,
} from "../schemas/token.js";
import {
  ExecuteRequestSchema,
} from "../schemas/execute.js";
import {
  TrustChainParamsSchema,
} from "../schemas/trust-chain.js";

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
registry.registerPath({
  method: "post",
  path: "/verify",

  tags: ["Verification"],

  summary: "Verify decision attestation",

  request: {
    body: {
      content: {
        "application/json": {
          schema: VerifyRequestSchema,
        },
      },
    },
  },

  responses: {
    200: {
      description: "Verification receipt",
    },
  },
});
registry.registerPath({
  method: "post",
  path: "/token",

  tags: ["Execution"],

  summary: "Create execution token",

  request: {
    body: {
      content: {
        "application/json": {
          schema: TokenRequestSchema,
        },
      },
    },
  },

  responses: {
    200: {
      description: "Execution token",
    },
  },
});
registry.registerPath({
  method: "post",
  path: "/execute",

  tags: ["Execution"],

  summary: "Record execution",

  request: {
    body: {
      content: {
        "application/json": {
          schema: ExecuteRequestSchema,
        },
      },
    },
  },

  responses: {
    200: {
      description: "Execution record",
    },
  },
});
registry.registerPath({
  method: "get",
  path: "/trust-chain/{businessTransactionId}",

  tags: ["Trust Chain"],

  summary: "Retrieve execution trust chain",

  request: {
    params: TrustChainParamsSchema,
  },

  responses: {
    200: {
      description: "Trust chain",
    },

    404: {
      description: "Trust chain not found",
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