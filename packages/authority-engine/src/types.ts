export interface EvaluationRequest {

  taskId: string;

  signals:
    Record<
      string,
      unknown
    >;

}

export interface EvaluationResult {

  decision:
    | "approved"
    | "denied";

  reasons: string[];

}