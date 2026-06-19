import {
  INVARIANT_REGISTRY,
  type InvariantId
} from "./invariants.js";


export function enforceInvariant(
  id: InvariantId,
  condition: boolean
) {

  if (!condition) {

    throw new Error(
      `Invariant violation: ${id} - ${
        INVARIANT_REGISTRY[id].description
      }`
    );

  }

}