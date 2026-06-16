import {
  describe,
  expect,
  it
} from "vitest";

import {
  hashBundle
} from "../packages/bundle/src/hash-bundle.js";

describe("deterministic hashing", () => {

  it("produces identical hash for identical bundle", () => {

    const bundle = {
      bundleId: "bundle-001",
      trustRoot: {
        id: "root-1",
        version: "v1"
      }
    };

    const h1 =
      hashBundle(bundle as any);

    const h2 =
      hashBundle(bundle as any);

    expect(h1)
      .toBe(h2);

  });

});