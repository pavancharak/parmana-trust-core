import { describe, expect, it } from "vitest";

import {
  createTrustRoot
} from "../packages/trust-anchor/src/trust-root.js";

import {
  createReceipt
} from "../packages/bundle/src/create-receipt.js";

import {
  verifyChain
} from "../packages/trust-anchor/src/verify-chain.js";

describe("end-to-end bundle verification", () => {

  it("creates and verifies a trust bundle flow", () => {

    //
    // Trust Root
    //

const trustRoot =
  createTrustRoot(
    "root-1",
    [],
    "v1"
  );

    //
    // Mock Bundle
    //

    const bundle = {

      bundleId: "bundle-001",

      trustRoot

    };

    //
    // Receipt
    //

    const receipt =
      createReceipt(
        bundle as any
      );

    //
    // Chain Verification
    //

    const chainResult =
      verifyChain([
        trustRoot
      ]);

    //
    // Assertions
    //

    expect(receipt.bundleId)
      .toBe("bundle-001");

    expect(receipt.trustRootId)
      .toBe("root-1");

    expect(receipt.trustRootVersion)
      .toBe("v1");

    expect(receipt.bundleHash)
      .toBeDefined();

    expect(chainResult.valid)
      .toBe(true);

    expect(chainResult.errors)
      .toHaveLength(0);

  });

});