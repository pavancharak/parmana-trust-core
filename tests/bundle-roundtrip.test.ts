import { describe, expect, it } from "vitest";

import {
  serializeBundle,
  deserializeBundle
} from "../packages/bundle/src/index.js";

describe("bundle roundtrip", () => {

  it("serializes and deserializes bundle", () => {

    const bundle = {
      id: "bundle-1",
      version: "1"
    };

    const json =
      serializeBundle(bundle as any);

    const restored =
      deserializeBundle(json);

    expect(restored)
      .toEqual(bundle);
  });

});