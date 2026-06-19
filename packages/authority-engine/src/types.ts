export interface EvaluationRequest {

  taskId: string;

  signals:
    Record<
      string,
      unknown
    >;

}

export interface EvaluationResult {

  decisionId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  decision:
    | "approved"
    | "denied";

  reasons: string[];

}