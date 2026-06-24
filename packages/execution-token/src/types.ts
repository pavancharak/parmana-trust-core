export interface ExecutionToken {

  tokenId: string;

  businessTransactionId: string;

  decisionId: string;

  receiptId: string;

  intentId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  issuedAt: string;

  intentHash: string;

  expiresAt: string;

  signature: string;
}