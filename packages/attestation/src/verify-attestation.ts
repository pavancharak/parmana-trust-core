import type {
  DecisionAttestation
} from "./types.js";

export function verifyAttestation(
  attestation: DecisionAttestation
): boolean {

  return Boolean(
    attestation.decisionId
  );
}