import crypto from "node:crypto";

export function hashReceipt(
  receipt: unknown
): string {

  return crypto
    .createHash("sha256")
    .update(
      JSON.stringify(receipt)
    )
    .digest("hex");
}