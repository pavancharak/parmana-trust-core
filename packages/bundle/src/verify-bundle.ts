import type {
  DecisionBundle
} from "./types.js";

export interface BundleVerificationResult {

  valid: boolean;

  errors: string[];
}

export function verifyBundle(
  bundle: DecisionBundle
): BundleVerificationResult {

  const errors: string[] = [];

  if (
    bundle.decisionId !==
    bundle.attestation.decisionId
  ) {

    errors.push(
      "Decision ID mismatch"
    );
  }

  return {

    valid:
      errors.length === 0,

    errors
  };
}