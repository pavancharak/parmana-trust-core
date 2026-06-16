import type {
  SignatureRecord
} from "@parmana/contracts";

export interface SignatureVerificationResult {

  valid: boolean;

  verifiedAlgorithms:
    string[];

  failedAlgorithms:
    string[];
}

export function verifySignatureSet(
  signatures: SignatureRecord[],
  requiredAlgorithms: string[]
): SignatureVerificationResult {

  const presentAlgorithms =
    signatures.map(
      s => s.algorithm
    );

  const verifiedAlgorithms =
    requiredAlgorithms.filter(
      algorithm =>
        presentAlgorithms.includes(
          algorithm
        )
    );

  const failedAlgorithms =
    requiredAlgorithms.filter(
      algorithm =>
        !presentAlgorithms.includes(
          algorithm
        )
    );

  return {

    valid:
      failedAlgorithms.length === 0,

    verifiedAlgorithms,

    failedAlgorithms
  };
}