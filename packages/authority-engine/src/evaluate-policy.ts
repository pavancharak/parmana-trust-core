import type {
  PolicyDefinition,
  PolicyRule
} from "@parmana/policy-registry";

export interface PolicyEvaluationResult {

  action:
    "approve"
    | "reject";

  requiresOverride:
    boolean;

  reason:
    string;

  matchedRuleId:
    string;

}

function matchesRule(

  rule: PolicyRule,

  signals: Record<
    string,
    unknown
  >

): boolean {

  return rule.condition.all.every(

    predicate => {

      const value =
        signals[
          predicate.signal
        ];

      if (

        predicate.equals !==
        undefined

      ) {

        return (
          value ===
          predicate.equals
        );

      }

      if (

        predicate.greater_than !==
        undefined

      ) {

        return (
          Number(value) >
          predicate.greater_than
        );

      }

      if (

        predicate.less_than !==
        undefined

      ) {

        return (
          Number(value) <
          predicate.less_than
        );

      }

      return false;

    }

  );

}

export function evaluatePolicy(

  definition:
    PolicyDefinition,

  signals:
    Record<
      string,
      unknown
    >

): PolicyEvaluationResult {

  console.log(
    "POLICY DEFINITION:",
    JSON.stringify(
      definition,
      null,
      2
    )
  );

  if (

    !definition ||

    !Array.isArray(
      definition.rules
    )

  ) {

    throw new Error(
      `Invalid policy definition: ${JSON.stringify(definition)}`
    );

  }

  const matchedRule =
    definition.rules.find(

      rule =>
        matchesRule(
          rule,
          signals
        )

    );
  if (!matchedRule) {

    return {

      action:
        "reject",

      requiresOverride:
        false,

      reason:
        "no_policy_rule_matched",

      matchedRuleId:
        "none"

    };

  }

  return {

    action:
      matchedRule
        .outcome
        .action,

    requiresOverride:
      matchedRule
        .outcome
        .requires_override,

    reason:
      matchedRule
        .outcome
        .reason,

    matchedRuleId:
      matchedRule.id

  };

}