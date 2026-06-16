export interface VerificationResult {

  valid: boolean;

  verifiedAlgorithm?: string;

  verifiedProfile?: string;

  errors: string[];
}