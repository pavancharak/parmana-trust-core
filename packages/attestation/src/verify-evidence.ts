import crypto from "node:crypto";

import {
  enforceInvariant
} from "@parmana/contracts";


export function verifyEvidence(

  content: unknown,

  expectedHash: string

): boolean {


  const actualHash =
    crypto
      .createHash(
        "sha256"
      )
      .update(

        JSON.stringify(
          content
        )

      )
      .digest(
        "hex"
      );


  const valid =
    actualHash ===
    expectedHash;


  enforceInvariant(

    "INV-150",

    valid

  );


  return valid;

}