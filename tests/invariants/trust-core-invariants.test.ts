import {
  INVARIANT_REGISTRY
} from "@parmana/contracts";

describe(
  "trust core invariants",
  () => {

    it(
      "contains META-010",
      () => {

        expect(
          INVARIANT_REGISTRY[
            "META-010"
          ]
        ).toBeDefined();

      }
    );

  }
);