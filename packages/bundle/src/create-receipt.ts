import type {
  DecisionBundle
} from "./types.js";

import type {
  BundleReceipt
} from "./receipt.js";

import {
  hashBundle
} from "./hash-bundle.js";

export function createReceipt(
  bundle: DecisionBundle
): BundleReceipt {

  return {

    bundleId:
      bundle.bundleId,

    bundleHash:
      hashBundle(
        bundle
      ),

    trustRootId:
      bundle.trustRoot.id,

    trustRootVersion:
      bundle.trustRoot.version,

    createdAt:
      new Date()
        .toISOString()
  };
}