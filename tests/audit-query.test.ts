import {
  describe,
  expect,
  it
} from "vitest";

import {
  AuditStore
} from "../packages/audit-db/src/audit-store.js";

import {
  queryByType
} from "../packages/audit-db/src/query-by-type.js";

describe(
  "audit queries",
  () => {

    it(
      "queries receipts",
      () => {

        const db =
          new AuditStore();

        db.add({

          id: "1",

          type: "receipt",

          timestamp: "",

          payload: {}
        });

        db.add({

          id: "2",

          type: "attestation",

          timestamp: "",

          payload: {}
        });

        const results =
          queryByType(
            db.getAll(),
            "receipt"
          );

        expect(
          results
        ).toHaveLength(1);

      }
    );

    it(
      "queries attestations",
      () => {

        const db =
          new AuditStore();

        db.add({

          id: "1",

          type: "attestation",

          timestamp: "",

          payload: {}
        });

        const results =
          queryByType(
            db.getAll(),
            "attestation"
          );

        expect(
          results
        ).toHaveLength(1);

      }
    );

    it(
      "returns empty result",
      () => {

        const db =
          new AuditStore();

        const results =
          queryByType(
            db.getAll(),
            "receipt"
          );

        expect(
          results
        ).toHaveLength(0);

      }
    );

  }
);