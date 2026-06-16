import {
  createTrustRoot
} from "../../packages/trust-anchor/src/index.js";

const root =
  createTrustRoot(

    "root-1",

    [
      {
        id: "anchor-1",

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

console.log(
  JSON.stringify(
    root,
    null,
    2
  )
);