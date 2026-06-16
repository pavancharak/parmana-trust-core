import {
  describe,
  expect,
  it
} from "vitest";

import {
  createTrustRoot
} from "../packages/trust-anchor/src/trust-root.js";

import {
  createFederation
} from "../packages/trust-federation/src/create-federation.js";

import {
  verifyFederation
} from "../packages/trust-federation/src/verify-federation.js";

describe(
  "trust federation",
  () => {

    const rootA =
      createTrustRoot(
        "root-a",
        []
      );

    const rootB =
      createTrustRoot(
        "root-b",
        []
      );

    const federation =
      createFederation(

        "fed-1",

        [
          rootA,
          rootB
        ]
      );

    it(
      "accepts first trusted root",
      () => {

        expect(

          verifyFederation(
            "root-a",
            federation
          )

        ).toBe(true);

      }
    );

    it(
      "accepts second trusted root",
      () => {

        expect(

          verifyFederation(
            "root-b",
            federation
          )

        ).toBe(true);

      }
    );

    it(
      "rejects unknown root",
      () => {

        expect(

          verifyFederation(
            "unknown",
            federation
          )

        ).toBe(false);

      }
    );

    it(
      "rejects empty federation",
      () => {

        const empty =
          createFederation(
            "empty",
            []
          );

        expect(

          verifyFederation(
            "root-a",
            empty
          )

        ).toBe(false);

      }
    );

  }
);