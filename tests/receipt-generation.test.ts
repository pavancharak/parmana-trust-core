import { describe, expect, it } from "vitest";

import {
  createReceipt
} from "../packages/bundle/src/create-receipt.js";

describe("receipt generation", () => {

  it("creates receipt", () => {

    const bundle = {

      bundleId: "bundle-1",

      trustRoot: {
        id: "root-1",
        version: "v1"
      }

    };

    const receipt =
      createReceipt(
        bundle as any
      );

    expect(receipt.bundleId)
      .toBe("bundle-1");

    expect(receipt.trustRootId)
      .toBe("root-1");

    expect(receipt.trustRootVersion)
      .toBe("v1");

    expect(receipt.bundleHash)
      .toBeDefined();
  });

});