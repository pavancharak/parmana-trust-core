import { describe, expect, it } from "vitest";

import {
  verifyChain
} from "../packages/trust-anchor/src/verify-chain.js";

describe("verifyChain", () => {

  it("accepts valid chain", () => {

    const chain = [

      {
        version: "v1"
      },

      {
        version: "v2",
        previousVersion: "v1"
      },

      {
        version: "v3",
        previousVersion: "v2"
      }

    ];

    const result =
      verifyChain(
        chain as any
      );

    expect(result.valid)
      .toBe(true);

    expect(result.errors)
      .toHaveLength(0);
  });

  it("rejects broken chain", () => {

    const chain = [

      {
        version: "v1"
      },

      {
        version: "v2",
        previousVersion: "WRONG"
      }

    ];

    const result =
      verifyChain(
        chain as any
      );

    expect(result.valid)
      .toBe(false);

    expect(result.errors.length)
      .toBeGreaterThan(0);
  });

});