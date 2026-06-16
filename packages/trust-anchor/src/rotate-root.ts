import type {
  TrustAnchor,
  TrustRoot
} from "./types.js";

export function rotateTrustRoot(

  current:
    TrustRoot,

  anchors:
    TrustAnchor[]

): TrustRoot {

  const currentVersion =
    Number(
      current.version
        .replace(
          "v",
          ""
        )
    );

  return {

    id:
      current.id,

    version:
      `v${currentVersion + 1}`,

    previousVersion:
      current.version,

    anchors,

    createdAt:
      new Date()
        .toISOString()
  };
}