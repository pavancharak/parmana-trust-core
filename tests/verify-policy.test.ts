import { describe, expect, it } from "vitest";

import {
  verifyPolicy
} from "../packages/verifier/src/verify-policy.js";

describe("verifyPolicy", () => {

  it("accepts required algorithm", () => {

    const signatures = [
      {
        algorithm: "ed25519"
      }
    ] as any;

    const policy = {
      requiredAlgorithms: [
        "ed25519"
      ]
    };

    const result =
      verifyPolicy(
        signatures,
        policy as any
      );

    expect(result.valid)
      .toBe(true);
  });

  it("rejects missing algorithm", () => {

    const signatures = [
      {
        algorithm: "ed25519"
      }
    ] as any;

    const policy = {
      requiredAlgorithms: [
        "ml-dsa-65"
      ]
    };

    const result =
      verifyPolicy(
        signatures,
        policy as any
      );

    expect(result.valid)
      .toBe(false);
  });

});