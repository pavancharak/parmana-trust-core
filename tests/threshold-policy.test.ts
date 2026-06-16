import {
  describe,
  expect,
  it
} from "vitest";

import {
  verifyThreshold
} from "../packages/verifier/src/verify-threshold.js";

describe(
  "threshold policy",
  () => {

    const policy = {

      threshold: 2,

      signers: [
        "alice",
        "bob",
        "charlie"
      ]
    };

    it(
      "accepts 2 of 3 approvals",
      () => {

        expect(

          verifyThreshold(

            [
              "alice",
              "bob"
            ],

            policy

          )

        ).toBe(true);

      }
    );

    it(
      "accepts 3 of 3 approvals",
      () => {

        expect(

          verifyThreshold(

            [
              "alice",
              "bob",
              "charlie"
            ],

            policy

          )

        ).toBe(true);

      }
    );

    it(
      "rejects 1 of 3 approvals",
      () => {

        expect(

          verifyThreshold(

            [
              "alice"
            ],

            policy

          )

        ).toBe(false);

      }
    );

    it(
      "rejects 0 of 3 approvals",
      () => {

        expect(

          verifyThreshold(

            [],

            policy

          )

        ).toBe(false);

      }
    );

    it(
      "ignores unknown signers",
      () => {

        expect(

          verifyThreshold(

            [
              "alice",
              "mallory"
            ],

            policy

          )

        ).toBe(false);

      }
    );

    it(
      "accepts when threshold is exactly met",
      () => {

        expect(

          verifyThreshold(

            [
              "bob",
              "charlie"
            ],

            policy

          )

        ).toBe(true);

      }
    );

  }
);