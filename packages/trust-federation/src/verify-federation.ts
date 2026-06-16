import type {
  TrustFederation
} from "./types.js";

export function verifyFederation(

  rootId: string,

  federation: TrustFederation

): boolean {

  return federation.roots.some(

    root =>
      root.id === rootId
  );
}