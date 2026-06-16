import type {
  TrustAnchor,
  TrustRoot
} from "./types.js";

export function createTrustRoot(

  id: string,

  anchors:
    TrustAnchor[],

  version = "v1",

  previousVersion?: string

): TrustRoot {

  return {

    id,

    version,

    previousVersion,

    anchors,

    createdAt:
      new Date()
        .toISOString()
  };
}