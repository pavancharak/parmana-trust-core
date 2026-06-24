export interface Intent {

  intentId: string;

  businessTransactionId: string;

  decisionId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  payload: Record<
    string,
    unknown
  >;

  intentHash: string;

  createdAt: string;

}