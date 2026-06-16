import * as crypto from "node:crypto";

import type {
  InclusionProof
} from "./proof.js";

function sha256(
  value: string
): string {

  return crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
}

export function verifyProof(

  proof:
    InclusionProof,

  root:
    string

): boolean {

  let hash =
    sha256(
      proof.leaf
    );

  for (
    const sibling
    of proof.path
  ) {

    hash =
      sha256(
        hash +
        sibling
      );
  }

  return hash === root;
}