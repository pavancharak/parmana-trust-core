export interface SignalSchema {

  type:
    | "string"
    | "integer"
    | "boolean";
}

export interface Condition {

  signal?: string;

  equals?: string | number | boolean;

  greater_than?: number;

  less_than?: number;

  all?: Condition[];
}

export interface RuleOutcome {

  action:
    | "approve"
    | "reject";

  requires_override: boolean;

  reason: string;
}

export interface PolicyRule {

  id: string;

  condition: Condition;

  outcome: RuleOutcome;
}

export interface PolicyDefinition {

  policyId: string;

  policyVersion: string;

  schemaVersion: string;

  signalsSchema:
    Record<
      string,
      SignalSchema
    >;

  rules:
    PolicyRule[];
}