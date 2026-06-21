export interface ExecutionToken {

  tokenId: string;

  businessTransactionId: string;

  decisionId: string;

  receiptId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  issuedAt: string;

  expiresAt: string;

  signature: string;
}