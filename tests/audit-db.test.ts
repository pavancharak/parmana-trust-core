import {
  describe,
  expect,
  it
} from "vitest";

import {
  AuditStore
} from "../packages/audit-db/src/audit-store.js";

describe(
  "audit db",
  () => {

    it(
      "stores records",
      () => {

        const db =
          new AuditStore();

        db.add({

          id: "1",

          type: "receipt",

          timestamp:
            new Date()
              .toISOString(),

          payload: {}
        });

        expect(
          db.count()
        ).toBe(1);

      }
    );

    it(
      "returns records",
      () => {

        const db =
          new AuditStore();

        db.add({

          id: "1",

          type: "receipt",

          timestamp: "",

          payload: {}
        });

        expect(
          db.getAll()
        ).toHaveLength(1);

      }
    );

    it(
      "preserves insertion order",
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

        expect(

          db.getAll()[0].id

        ).toBe("1");

        expect(

          db.getAll()[1].id

        ).toBe("2");

      }
    );

    it(
      "clears records",
      () => {

        const db =
          new AuditStore();

        db.add({

          id: "1",

          type: "receipt",

          timestamp: "",

          payload: {}
        });

        db.clear();

        expect(
          db.count()
        ).toBe(0);

      }
    );

  }
);