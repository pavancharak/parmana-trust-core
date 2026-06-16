import {
  describe,
  expect,
  it
} from "vitest";

import {
  countByType
} from "../packages/audit-db/src/stats.js";

describe(
  "audit statistics",
  () => {

    it(
      "counts records by type",
      () => {

        const stats =
          countByType([

            {
              id: "1",
              type: "receipt",
              timestamp: "",
              payload: {}
            },

            {
              id: "2",
              type: "receipt",
              timestamp: "",
              payload: {}
            },

            {
              id: "3",
              type: "attestation",
              timestamp: "",
              payload: {}
            }

          ]);

        expect(
          stats.receipt
        ).toBe(2);

        expect(
          stats.attestation
        ).toBe(1);

      }
    );

    it(
      "returns empty stats",
      () => {

        const stats =
          countByType([]);

        expect(
          Object.keys(
            stats
          )
        ).toHaveLength(0);

      }
    );

  }
);