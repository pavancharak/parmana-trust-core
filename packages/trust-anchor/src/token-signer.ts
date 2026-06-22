import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const keyDir =

  process.env.PARMANA_KEY_DIR ??

  path.resolve(
    process.cwd(),
    "keys"
  );

const privateKey =
  fs.readFileSync(

    path.join(
      keyDir,
      "root-private.pem"
    )

  );

const publicKey =
  fs.readFileSync(

    path.join(
      keyDir,
      "root-public.pem"
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