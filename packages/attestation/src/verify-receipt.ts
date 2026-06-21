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

        JSON.stringify({

          businessTransactionId:
            receipt.businessTransactionId,

          subjectId:
            receipt.subjectId,

          decisionId:
            receipt.decisionId,

          taskId:
            receipt.taskId,

          policyId:
            receipt.policyId,

          policyVersion:
            receipt.policyVersion,

          valid:
            receipt.valid

        })

      )
      .digest(
        "hex"
      );

  console.log(
  "EXPECTED HASH:",
  expectedHash
);

console.log(
  "RECEIPT HASH:",
  receipt.receiptHash
);

console.log(
  "RECEIPT:",
  JSON.stringify(
    receipt,
    null,
    2
  )
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