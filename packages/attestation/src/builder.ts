import type {
  SignatureRecord
} from "@parmana/contracts";

export function createSignatureRecord(
  algorithm: string,
  signature: Uint8Array
): SignatureRecord {

  return {
    algorithm,

    keyId: "default",

    value:
      Buffer.from(
        signature
      ).toString(
        "base64"
      ),

    createdAt:
      new Date()
        .toISOString()
  };
}