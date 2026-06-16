import type {
  TrustAnchor
} from "./types.js";

export class AnchorStore {

  private readonly anchors =
    new Map<
      string,
      TrustAnchor
    >();

  add(
    anchor: TrustAnchor
  ): void {

    this.anchors.set(
      anchor.id,
      anchor
    );
  }

  get(
    id: string
  ): TrustAnchor | undefined {

    return this.anchors.get(
      id
    );
  }

  list():
    TrustAnchor[] {

    return Array.from(
      this.anchors.values()
    );
  }
}