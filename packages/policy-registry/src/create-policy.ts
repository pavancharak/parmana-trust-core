import {
  policies
} from "./store.js";

import type {
  Policy
} from "./types.js";

export function createPolicy(
  policy: Policy
): Policy {

  policies.set(
    policy.policyId,
    policy
  );

  return policy;

}