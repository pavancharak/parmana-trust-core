export interface ExecutionRecord {
  executionId: string;
  businessTransactionId: string;
  subjectId?: string;

  decisionId: string;
  receiptId: string;

  intentId: string;

  taskId: string;
  policyId: string;
  policyVersion: string;

  executionSystem: string;
  executionReference: string;

  executionStatus:
    | "pending"
    | "completed"
    | "failed";

  executedAt: string;
}