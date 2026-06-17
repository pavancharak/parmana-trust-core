export interface VerificationReceipt {

  receiptId: string;

  decisionId: string;

  valid: boolean;

  verifiedAlgorithms: string[];

  failedAlgorithms: string[];

  verifiedAt: string;

  receiptHash: string;
}