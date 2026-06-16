import type {
  TrustRoot
} from "@parmana/trust-anchor";

import type {
  TrustFederation
} from "./types.js";

export function createFederation(

  id: string,

  roots: TrustRoot[]

): TrustFederation {

  return {

    id,

    roots
  };
}