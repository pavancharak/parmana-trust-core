import {
  policies
} from "./store.js";

export function getPolicy(
  policyId: string
) {

  return policies.get(
    policyId
  );

}