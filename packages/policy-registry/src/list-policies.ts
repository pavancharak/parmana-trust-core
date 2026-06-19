import {
  policies
} from "./store.js";

export function listPolicies() {

  return [
    ...policies.values()
  ];

}