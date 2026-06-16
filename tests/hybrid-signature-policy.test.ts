import {
  describe,
  expect,
  it
} from "vitest";

import {
  verifyPolicy
} from "../packages/verifier/src/verify-policy.js";

describe(
  "hybrid signature policy",
  () => {

    const policy = {

      requiredAlgorithms: [
        "ed25519",
        "ml-dsa-65"
      ]
    };

    it(
      "accepts both algorithms",
      () => {

        const signatures = [

          {
            algorithm:
              "ed25519"
          },

          {
            algorithm:
              "ml-dsa-65"
          }

        ];

        const result =
          verifyPolicy(
            signatures as any,
            policy as any
          );

        expect(
          result.valid
        ).toBe(true);

        expect(
          result.verifiedAlgorithms
        ).toEqual([
          "ed25519",
          "ml-dsa-65"
        ]);

        expect(
          result.failedAlgorithms
        ).toHaveLength(0);

      }
    );

    it(
      "rejects missing ml-dsa",
      () => {

        const signatures = [

          {
            algorithm:
              "ed25519"
          }

        ];

        const result =
          verifyPolicy(
            signatures as any,
            policy as any
          );

        expect(
          result.valid
        ).toBe(false);

        expect(
          result.failedAlgorithms
        ).toContain(
          "ml-dsa-65"
        );

      }
    );

    it(
      "rejects missing ed25519",
      () => {

        const signatures = [

          {
            algorithm:
              "ml-dsa-65"
          }

        ];

        const result =
          verifyPolicy(
            signatures as any,
            policy as any
          );

        expect(
          result.valid
        ).toBe(false);

        expect(
          result.failedAlgorithms
        ).toContain(
          "ed25519"
        );

      }
    );

    it(
      "rejects empty signature set",
      () => {

        const result =
          verifyPolicy(
            [],
            policy as any
          );

        expect(
          result.valid
        ).toBe(false);

        expect(
          result.failedAlgorithms
        ).toEqual([
          "ed25519",
          "ml-dsa-65"
        ]);

      }
    );

  }
);