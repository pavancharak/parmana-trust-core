import {
  afterEach,
  describe,
  expect,
  it
} from "vitest";

import * as fs from "node:fs";

import {
  FileAuditStore
} from "../packages/audit-db/src/file-audit-store.js";

const FILE =
  "./audit-test.json";

afterEach(() => {

  if (
    fs.existsSync(
      FILE
    )
  ) {

    fs.unlinkSync(
      FILE
    );
  }

});

describe(
  "file audit store",
  () => {

    it(
      "saves records",
      () => {

        const db =
          new FileAuditStore(
            FILE
          );

        db.add({

          id: "1",

          type:
            "receipt",

          timestamp:
            "",

          payload:
            {}
        });

        db.save();

        expect(

          fs.existsSync(
            FILE
          )

        ).toBe(true);

      }
    );

    it(
      "loads records",
      () => {

        const db =
          new FileAuditStore(
            FILE
          );

        db.add({

          id: "1",

          type:
            "receipt",

          timestamp:
            "",

          payload:
            {}
        });

        db.save();

        const loaded =
          new FileAuditStore(
            FILE
          );

        loaded.load();

        expect(

          loaded.count()

        ).toBe(1);

      }
    );

    it(
      "preserves order",
      () => {

        const db =
          new FileAuditStore(
            FILE
          );

        db.add({

          id: "1",

          type:
            "receipt",

          timestamp:
            "",

          payload:
            {}
        });

        db.add({

          id: "2",

          type:
            "receipt",

          timestamp:
            "",

          payload:
            {}
        });

        db.save();

        const loaded =
          new FileAuditStore(
            FILE
          );

        loaded.load();

        expect(

          loaded
            .getAll()[0]
            .id

        ).toBe("1");

        expect(

          loaded
            .getAll()[1]
            .id

        ).toBe("2");

      }
    );

    it(
      "handles missing file",
      () => {

        const db =
          new FileAuditStore(
            FILE
          );

        db.load();

        expect(

          db.count()

        ).toBe(0);

      }
    );

  }
);