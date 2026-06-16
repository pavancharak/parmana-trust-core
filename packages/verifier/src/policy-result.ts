export interface PolicyVerificationResult {

  valid: boolean;

  algorithmsPresent:
    string[];

  missingAlgorithms:
    string[];
}