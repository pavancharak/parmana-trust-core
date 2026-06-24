import crypto
  from "node:crypto";

export function hashIntent(

  payload: Record<
    string,
    unknown
  >

): string {

  return crypto

    .createHash(
      "sha256"
    )

    .update(
      JSON.stringify(
        payload
      )
    )

    .digest(
      "hex"
    );

}