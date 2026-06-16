import {
  describe,
  expect,
  it
} from "vitest";

import {
  AuditStore
} from "../packages/audit-db/src/audit-store.js";

describe(
  "audit store advanced",
  () => {

    it(
      "gets record by id",
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

          db.getById(
            "1"
          )?.id

        ).toBe("1");

      }
    );

    it(
      "returns undefined for missing id",
      () => {

        const db =
          new AuditStore();

        expect(

          db.getById(
            "missing"
          )

        ).toBeUndefined();

      }
    );

    it(
      "removes record",
      () => {

        const db =
          new AuditStore();

        db.add({

          id: "1",

          type: "receipt",

          timestamp: "",

          payload: {}
        });

        db.remove(
          "1"
        );

        expect(
          db.count()
        ).toBe(0);

      }
    );

    it(
      "ignores unknown remove",
      () => {

        const db =
          new AuditStore();

        db.remove(
          "missing"
        );

        expect(
          db.count()
        ).toBe(0);

      }
    );

  }
);