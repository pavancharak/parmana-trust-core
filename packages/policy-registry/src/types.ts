export type PolicyAction =
  | "approve"
  | "reject";

export interface RulePredicate {

  signal: string;

  equals?: unknown;

  greater_than?: number;

  less_than?: number;

}

export interface PolicyCondition {

  all:
    RulePredicate[];

}

export interface PolicyOutcome {

  action:
    PolicyAction;

  requires_override:
    boolean;

  reason:
    string;

}

export interface PolicyRule {

  id: string;

  condition:
    PolicyCondition;

  outcome:
    PolicyOutcome;

}

export interface PolicyDefinition {

  rules:
    PolicyRule[];

}

export interface Policy {

  policyId: string;

  taskId: string;

  schemaId: string;

  version: string;

  status:
    | "draft"
    | "active"
    | "retired";

  definition:
    PolicyDefinition;

}