import type {
  DecisionBundle
} from "./types.js";

import {
  hashBundle
} from "./hash-bundle.js";

import type {
  Signer
} from "../../crypto/src/signer.js";

export async function signBundle(

  bundle:
    DecisionBundle,

  signer:
    Signer

): Promise<string> {

  const hash =
    hashBundle(
      bundle
    );

  const signature =
    await signer.sign(
      Buffer.from(
        hash,
        "utf8"
      )
    );

  return Buffer
    .from(
      signature
    )
    .toString(
      "base64"
    );
}