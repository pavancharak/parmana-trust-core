import {
  verifyDecision
} from "../../packages/verifier/src/verify-decision.js";

import {
  TRUST_PROFILES
} from "../../packages/trust-profiles/src/profiles.js";

const result =
  verifyDecision(

    {

      schemaVersion: "2",

      decisionId:
        "loan-001",

      evidence: [],

      signatures: {

        signatures: [

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
        ]
      },

      metadata: {

        profile:
          "post-quantum",

        createdAt:
          new Date()
            .toISOString()
      }
    },

    TRUST_PROFILES[
      "post-quantum"
    ]
  );

console.log(
  result
);