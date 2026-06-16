import * as crypto from "node:crypto";

import type {
  DecisionBundle
} from "./types.js";

import {
  canonicalize
} from "./canonicalize.js";

export function hashBundle(
  bundle: DecisionBundle
): string {

  const canonical =
    JSON.stringify(
      canonicalize(bundle)
    );

  return crypto
    .createHash(
      "sha256"
    )
    .update(
      canonical
    )
    .digest(
      "hex"
    );
}