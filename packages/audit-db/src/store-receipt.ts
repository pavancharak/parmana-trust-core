import type {
  BundleReceipt
} from "@parmana/bundle";

import {
  AuditStore
} from "./audit-store.js";

export function storeReceipt(

  db: AuditStore,

  receipt: BundleReceipt

): void {

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
}