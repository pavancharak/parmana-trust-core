import crypto from "node:crypto";

export function buildRoot(
  hashes: string[]
): string {

  const sorted =
    [...hashes].sort();

  const combined =
    sorted.join("");

  return crypto
    .createHash("sha256")
    .update(combined)
    .digest("hex");
}