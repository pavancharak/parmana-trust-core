import {
  verifyPolicy
} from "../../packages/verifier/src/verify-policy.js";

import {
  TRUST_PROFILES
} from "../../packages/trust-profiles/src/profiles.js";

const result =
  verifyPolicy(

    [
      {
        algorithm:
          "ed25519",

        keyId:
          "test",

        value:
          "abc",

        createdAt:
          new Date()
            .toISOString()
      }
    ],

    TRUST_PROFILES[
      "post-quantum"
    ]
  );

console.log(
  result
);