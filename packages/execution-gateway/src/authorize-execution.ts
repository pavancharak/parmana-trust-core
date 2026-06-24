import crypto from "node:crypto";

import type {
  ExecutionToken
} from "@parmana/execution-token";

import {
  verifyExecutionToken
} from "@parmana/execution-token";

import type {
  ExecutionAuthorizationResult
} from "./types.js";
import {
  enforceInvariant
} from "@parmana/contracts";

export function authorizeExecution(

  token: ExecutionToken,

  executionPayload: unknown

): ExecutionAuthorizationResult {

  if (

    !verifyExecutionToken(
      token
    )

  ) {

    return {

      authorized: false,

      expectedHash:
        token.intentHash,

      actualHash:
        ""

    };

  }

  const actualHash =
    crypto
      .createHash("sha256")
      .update(
        JSON.stringify(
          executionPayload
        )
      )
      .digest("hex");

  return {

    authorized:
      actualHash ===
      token.intentHash,

    expectedHash:
      token.intentHash,

    actualHash

  };

}