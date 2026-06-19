import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const privateKey =
  crypto.createPrivateKey(

    fs.readFileSync(

      path.resolve(
  process.cwd(),
  "..",
  "..",
  "keys",
  "attestation-private.pem"
)

    )

  );

const publicKey =
  crypto.createPublicKey(

    fs.readFileSync(

      path.resolve(
  process.cwd(),
  "..",
  "..",
  "keys",
  "attestation-public.pem"
)

    )

  );

export function signHash(
  hash: string
): string {

  return crypto
    .sign(
      null,
      Buffer.from(hash),
      privateKey
    )
    .toString("base64");

}

export function verifyHash(
  hash: string,
  signature: string
): boolean {

  return crypto.verify(

    null,

    Buffer.from(hash),

    publicKey,

    Buffer.from(
      signature,
      "base64"
    )

  );

}

export function getPublicKey() {

  return publicKey
    .export({
      type: "spki",
      format: "pem"
    })
    .toString();

}