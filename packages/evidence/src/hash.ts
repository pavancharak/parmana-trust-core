import * as crypto from "node:crypto";

export function hashEvidence(
  payload: unknown
): string {

  const canonical =
    JSON.stringify(
      payload
    );

  return crypto
    .createHash(
      "sha256"
    )
    .update(
      canonical
    )
    .digest(
      "hex"
    );
}