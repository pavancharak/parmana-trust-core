import {
  createTrustRoot,
  rotateTrustRoot,
  verifyChain
} from "../../packages/trust-anchor/src/index.js";

const v1 =
  createTrustRoot(
    "root-1",
    []
  );

const v2 =
  rotateTrustRoot(
    v1,
    []
  );

const v3 =
  rotateTrustRoot(
    v2,
    []
  );

const result =
  verifyChain([
    v1,
    v2,
    v3
  ]);

console.log(
  JSON.stringify(
    result,
    null,
    2
  )
);