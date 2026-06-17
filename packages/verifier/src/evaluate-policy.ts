import type {
  Condition,
  PolicyDefinition
} from "@parmana/contracts";

function matchesCondition(

  condition: Condition,

  signals: Record<
    string,
    unknown
  >

): boolean {

  if (condition.all) {

    return condition.all.every(

      item =>

        matchesCondition(
          item,
          signals
        )
    );
  }

  if (!condition.signal) {

    return false;
  }

  const value =

    signals[
      condition.signal
    ];

  if (

    condition.equals !==
    undefined

  ) {

    return (
      value ===
      condition.equals
    );
  }

  if (

    condition.greater_than !==
    undefined

  ) {

    return (

      typeof value ===
      "number" &&

      value >
      condition.greater_than
    );
  }

  if (

    condition.less_than !==
    undefined

  ) {

    return (

      typeof value ===
      "number" &&

      value <
      condition.less_than
    );
  }

  return false;
}

export function evaluatePolicy(

  policy: PolicyDefinition,

  signals: Record<
    string,
    unknown
  >

) {

  for (

    const rule of policy.rules

  ) {

    if (

      matchesCondition(

        rule.condition,

        signals
      )

    ) {

      return rule.outcome;
    }
  }

  return null;
}