import crypto from "node:crypto";

import {
  enforceInvariant
} from "@parmana/contracts";

import type {
  VerificationReceipt
} from "@parmana/contracts";


export function verifyReceipt(
  receipt: VerificationReceipt
): boolean {


  const expectedHash =
    crypto
      .createHash(
        "sha256"
      )
      .update(

        receipt.decisionId +
        String(
          receipt.valid
        )

      )
      .digest(
        "hex"
      );


  const valid =
    expectedHash ===
    receipt.receiptHash;


  enforceInvariant(
    "INV-160",
    valid
  );


  return valid;

}