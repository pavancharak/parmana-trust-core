import {
  verifyExecutionIntent
} from "@parmana/execution-verifier";
import {
  describe,
  test,
  expect
} from "vitest";

describe(
  "INV-200: Execution Must Match Authorized Intent",
  () => {

    test(
      "accepts execution matching authorized intent",
      () => {

        const payload = {
          action: "refund",
          amount: 1000,
          currency: "INR"
        };

        const crypto =
          require("node:crypto");

        const intentHash =
          crypto
            .createHash("sha256")
            .update(
              JSON.stringify(payload)
            )
            .digest("hex");

        const attestation = {
          intent: {
            intentHash
          }
        };

        const result =
          verifyExecutionIntent(
            attestation,
            payload
          );

        expect(
          result.valid
        ).toBe(true);

      }
    );

    test(
      "rejects execution differing from authorized intent",
      () => {

        const authorizedIntent = {
          action: "refund",
          amount: 1000,
          currency: "INR"
        };

        const actualExecution = {
          action: "refund",
          amount: 5000,
          currency: "INR"
        };

        const crypto =
          require("node:crypto");

        const intentHash =
          crypto
            .createHash("sha256")
            .update(
              JSON.stringify(
                authorizedIntent
              )
            )
            .digest("hex");

        const attestation = {
          intent: {
            intentHash
          }
        };

        const result =
          verifyExecutionIntent(
            attestation,
            actualExecution
          );

        expect(
          result.valid
        ).toBe(false);

      }
    );

  }
);