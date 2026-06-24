export interface VerificationReceipt {

  receiptId: string;

  businessTransactionId: string;

  subjectId?: string;

  decisionId: string;

intentId: string;

taskId: string;

  policyId: string;

  policyVersion: string;

  intentHash: string;

  valid: boolean;

  verifiedAlgorithms:
    string[];

  failedAlgorithms:
    string[];

  verifiedAt: string;

  receiptHash: string;
}