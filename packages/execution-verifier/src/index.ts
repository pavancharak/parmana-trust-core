import crypto from "node:crypto";

export interface ExecutionVerificationResult {
  valid: boolean;
  expectedHash: string;
  actualHash: string;
}

export function verifyExecutionIntent(
  attestation: any,
  executionPayload: unknown
): ExecutionVerificationResult {

  const actualHash =
    crypto
      .createHash("sha256")
      .update(
        JSON.stringify(
          executionPayload
        )
      )
      .digest("hex");

  const expectedHash =
    attestation.intent?.intentHash ?? "";

  return {
    valid:
      actualHash === expectedHash,
    expectedHash,
    actualHash
  };
}