import type {
  DecisionBundle
} from "./types.js";

export function serializeBundle(
  bundle: DecisionBundle
): string {

  return JSON.stringify(
    bundle,
    null,
    2
  );
}