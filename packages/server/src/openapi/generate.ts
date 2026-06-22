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
import {
  AttestResponseSchema,
} from "../schemas/attest-response.js";
import {
  VerifyResponseSchema,
} from "../schemas/verify-response.js";
import {
  TokenResponseSchema,
} from "../schemas/token-response.js";
import {
  ExecuteResponseSchema,
} from "../schemas/execute-response.js";
import {
  TrustChainResponseSchema,
} from "../schemas/trust-chain-response.js";
import {
  OverrideRequestSchema,
} from "../schemas/override.js";

import {
  OverrideAttestRequestSchema,
} from "../schemas/override-attest.js";

import {
  OverrideVerifyRequestSchema,
} from "../schemas/override-verify.js";

import {
  OverrideResponseSchema,
} from "../schemas/override-response.js";

import {
  OverrideAttestResponseSchema,
} from "../schemas/override-attest-response.js";

import {
  OverrideVerifyResponseSchema,
} from "../schemas/override-verify-response.js";


const registry = new OpenAPIRegistry();




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

    content: {
      "application/json": {
        schema: AttestResponseSchema,
      },
    },
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

    content: {
      "application/json": {
        schema: VerifyResponseSchema,
      },
    },
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

    content: {
      "application/json": {
        schema: TokenResponseSchema,
      },
    },
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

    content: {
      "application/json": {
        schema: ExecuteResponseSchema,
      },
    },
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

    content: {
      "application/json": {
        schema: TrustChainResponseSchema,
      },
    },
  },

  404: {
    description: "Trust chain not found",
  },
},
});
registry.registerPath({
  method: "post",
  path: "/override",

  tags: ["Override"],

  summary: "Create override decision",

  request: {
    body: {
      content: {
        "application/json": {
          schema: OverrideRequestSchema,
        },
      },
    },
  },

  responses: {
    200: {
      description: "Override decision",

      content: {
        "application/json": {
          schema: OverrideResponseSchema,
        },
      },
    },
  },
});
registry.registerPath({
  method: "post",
  path: "/override/attest",

  tags: ["Override"],

  summary: "Create override attestation",

  request: {
    body: {
      content: {
        "application/json": {
          schema: OverrideAttestRequestSchema,
        },
      },
    },
  },

  responses: {
    200: {
      description: "Override attestation",

      content: {
        "application/json": {
          schema: OverrideAttestResponseSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/override/verify",

  tags: ["Override"],

  summary: "Verify override attestation",

  request: {
    body: {
      content: {
        "application/json": {
          schema: OverrideVerifyRequestSchema,
        },
      },
    },
  },

  responses: {
    200: {
      description: "Override verification receipt",

      content: {
        "application/json": {
          schema: OverrideVerifyResponseSchema,
        },
      },
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