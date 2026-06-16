import {
  describe,
  expect,
  it
} from "vitest";

import {
  createTrustRoot
} from "../packages/trust-anchor/src/trust-root.js";

import {
  createReceipt
} from "../packages/bundle/src/create-receipt.js";

import {
  AuditStore
} from "../packages/audit-db/src/audit-store.js";

import {
  queryByType
} from "../packages/audit-db/src/query-by-type.js";

describe(
  "audit end-to-end",
  () => {

    it(
      "stores and retrieves a receipt",
      () => {

        //
        // Trust Root
        //

        const trustRoot =
          createTrustRoot(
            "root-1",
            []
          );

        //
        // Bundle
        //

        const bundle = {

          bundleId:
            "bundle-001",

          trustRoot

        };

        //
        // Receipt
        //

        const receipt =
          createReceipt(
            bundle as any
          );

        //
        // Audit Store
        //

        const db =
          new AuditStore();

        db.add({

          id:
            receipt.bundleId,

          type:
            "receipt",

          timestamp:
            receipt.createdAt,

          payload:
            receipt
        });

        //
        // Query
        //

        const results =
          queryByType(

            db.getAll(),

            "receipt"
          );

        //
        // Assertions
        //

        expect(
          results
        ).toHaveLength(1);

        expect(
          results[0].id
        ).toBe(
          "bundle-001"
        );

        expect(
          (
            results[0]
              .payload as any
          ).trustRootId
        ).toBe(
          "root-1"
        );

      }
    );

  }
);