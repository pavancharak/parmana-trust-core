export interface AttestRequest {
  task: string;
  signals: Record<string, unknown>;
}

export interface VerifyRequest {
  attestation: unknown;
  policy: unknown;
}

export interface TokenRequest {
  receiptId: string;
}

export interface ExecuteRequest {
  executionToken: unknown;
  executionSystem: string;
  executionReference: string;
}
export interface DecisionAttestation {
  decisionId: string;
  businessTransactionId: string;
  taskId: string;
  policyId: string;
  policyVersion: string;
}

export interface VerificationReceipt {
  receiptId: string;
  businessTransactionId: string;
  decisionId: string;
  taskId: string;
  policyId: string;
  policyVersion: string;
  valid: boolean;
}

export interface ExecutionToken {
  tokenId: string;
  receiptId: string;
  decisionId: string;
  taskId: string;
  policyId: string;
  policyVersion: string;
}

export interface ExecutionRecord {
  executionId: string;
  receiptId: string;
  decisionId: string;
  executionStatus: string;
}

export interface TrustChain {
  businessTransactionId: string;
}
