import type {
  DecisionBundle
} from "./types.js";

import {
  hashBundle
} from "./hash-bundle.js";

import type {
  Signer
} from "../../crypto/src/signer.js";

export async function verifyBundleSignature(

  bundle:
    DecisionBundle,

  signature:
    string,

  signer:
    Signer

): Promise<boolean> {

  const hash =
    hashBundle(
      bundle
    );

  return signer.verify(

    Buffer.from(
      hash,
      "utf8"
    ),

    Buffer.from(
      signature,
      "base64"
    )
  );
}