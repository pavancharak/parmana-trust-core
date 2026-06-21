export interface EvaluationRequest {
  businessTransactionId: string;

  subjectId?: string;

  taskId: string;

  signals: Record<string, unknown>;
}

export interface EvaluationResult {
  decisionId: string;

  businessTransactionId: string;

  subjectId?: string;

  taskId: string;
  policyId: string;

  policyVersion: string;

  decision:
    | "approved"
    | "denied";

  reasons: string[];
}