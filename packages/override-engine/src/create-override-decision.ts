import crypto from "node:crypto";

import type {
  OverrideDecision
} from "./types.js";

export function createOverrideDecision(

  input: Omit<
    OverrideDecision,
    "overrideId" |
    "createdAt"
  >

): OverrideDecision {

  return {

    overrideId:
      crypto.randomUUID(),

    createdAt:
      new Date()
        .toISOString(),

    ...input

  };

}