import {
  createTrustRoot,
  rotateTrustRoot
} from "../../packages/trust-anchor/src/index.js";

const rootV1 =
  createTrustRoot(

    "root-1",

    [
      {
        id: "ed25519-key-1",

        algorithm:
          "ed25519",

        publicKey:
          "pk1",

        createdAt:
          new Date()
            .toISOString()
      }
    ]
  );

const rootV2 =
  rotateTrustRoot(

    rootV1,

    [
      {
        id: "ed25519-key-2",

        algorithm:
          "ed25519",

        publicKey:
          "pk2",

        createdAt:
          new Date()
            .toISOString()
      }
    ]
  );

console.log(
  JSON.stringify(
    rootV2,
    null,
    2
  )
);