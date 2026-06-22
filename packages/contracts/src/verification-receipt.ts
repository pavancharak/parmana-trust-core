export interface VerificationReceipt {

  receiptId: string;

  businessTransactionId: string;

  subjectId?: string;

  decisionId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  valid: boolean;

  verifiedAlgorithms:
    string[];

  failedAlgorithms:
    string[];

  verifiedAt: string;

  intentHash: string;

  receiptHash: string;
}