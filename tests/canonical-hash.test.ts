import {
  describe,
  expect,
  it
} from "vitest";

import {
  hashBundle
} from "../packages/bundle/src/hash-bundle.js";

describe("canonical hashing", () => {

  it(
    "produces identical hashes regardless of property order",
    () => {

      const a = {

        bundleId:
          "bundle-001",

        trustRoot: {

          id:
            "root-1",

          version:
            "v1"
        }
      };

      const b = {

        trustRoot: {

          version:
            "v1",

          id:
            "root-1"
        },

        bundleId:
          "bundle-001"
      };

      expect(

        hashBundle(
          a as any
        )

      ).toBe(

        hashBundle(
          b as any
        )

      );

    }
  );

});