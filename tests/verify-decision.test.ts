import { describe, expect, it } from "vitest";

import {
  verifyDecision
} from "../packages/verifier/src/verify-decision.js";

describe("verifyDecision", () => {

  it("accepts valid decision", () => {

    const attestation = {

      signatures: {

        signatures: [
          {
            algorithm: "ed25519"
          }
        ]
      }

    };

    const policy = {

      requiredAlgorithms: [
        "ed25519"
      ]
    };

    const result =
      verifyDecision(
        attestation as any,
        policy as any
      );

    expect(result.valid)
      .toBe(true);
  });

  it("rejects missing algorithm", () => {

    const attestation = {

      signatures: {

        signatures: [
          {
            algorithm: "ed25519"
          }
        ]
      }

    };

    const policy = {

      requiredAlgorithms: [
        "ml-dsa-65"
      ]
    };

    const result =
      verifyDecision(
        attestation as any,
        policy as any
      );

    expect(result.valid)
      .toBe(false);
  });

});