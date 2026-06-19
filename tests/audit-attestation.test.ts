import {
  describe,
  expect,
  it
} from "vitest";
import {
  AuditStore
} from "../packages/audit-db/src/audit-store.js";

import {
  storeAttestation
} from "../packages/audit-db/src/store-attestation.js";

import {
  queryByType
} from "../packages/audit-db/src/query-by-type.js";

describe(
  "audit attestation",
  () => {

    it(
      "stores attestation audit record",
      () => {

        const db =
          new AuditStore();

        storeAttestation(

          db,

          {
            schemaVersion: "2",

            decisionId:
              "decision-1",

            evidence: [],

            signatures: {
              signatures: []
            },

            metadata: {

              profile:
                "test",

              createdAt:
                new Date()
                  .toISOString()
            },

            outcome: {
              result:
                "approved"
            }
          }

        );

        const results =
          queryByType(

            db.getAll(),

            "attestation"
          );

        expect(
          results
        ).toHaveLength(1);

        expect(
          results[0].id
        ).toBe(
          "decision-1"
        );

      }
    );

  }
);