import type {
  DecisionBundle
} from "./types.js";

export function deserializeBundle(
  payload: string
): DecisionBundle {

  return JSON.parse(
    payload
  );
}