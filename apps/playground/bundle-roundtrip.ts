import {
  createBundle,
  saveBundle,
  loadBundle,
  hashBundle,
  createReceipt,
  verifyBundle
} from "../../packages/bundle/src/index.js";

const bundle = createBundle({

  bundleId:
    "bundle-001",

  decisionId:
    "loan-001",

  evidence: [],

  attestation: {

    schemaVersion: "2",

    decisionId:
      "loan-001",

    evidence: [],

    signatures: {
      signatures: []
    },

    metadata: {

      profile:
        "default",

      createdAt:
        new Date()
          .toISOString()
    },

    outcome: {

      result:
        "approved"
    }
  },

  trustRoot: {

    id:
      "root-1",

    version:
      "v1",

    anchors: [],

    createdAt:
      new Date()
        .toISOString()
  },

  createdAt:
    new Date()
      .toISOString()
});

saveBundle(
  bundle,
  "./loan.bundle.json"
);

const loaded =
  loadBundle(
    "./loan.bundle.json"
  );

const hash =
  hashBundle(
    loaded
  );

const receipt =
  createReceipt(
    loaded
  );

const verification =
  verifyBundle(
    loaded
  );

console.log({
  hash,
  receipt,
  verification
});