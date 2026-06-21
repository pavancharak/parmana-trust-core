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
