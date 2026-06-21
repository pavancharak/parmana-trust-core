import crypto from "node:crypto";
import fs from "node:fs";

const privateKey =
  fs.readFileSync(
    new URL(
      "../keys/root-private.pem",
      import.meta.url
    )
  );

const publicKey =
  fs.readFileSync(
    new URL(
      "../keys/root-public.pem",
      import.meta.url
    )
  );

export function signPayload(
  payload: string
): string {

  return crypto.sign(

    null,

    Buffer.from(
      payload
    ),

    privateKey

  ).toString(
    "base64"
  );
}

export function verifyPayload(

  payload: string,

  signature: string

): boolean {

  return crypto.verify(

    null,

    Buffer.from(
      payload
    ),

    publicKey,

    Buffer.from(
      signature,
      "base64"
    )

  );
}

export function getPublicKey(): string {

  return publicKey.toString();

}