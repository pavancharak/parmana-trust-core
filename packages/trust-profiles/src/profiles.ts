import type {
  TrustPolicy
} from "./policy.js";

export const TRUST_PROFILES:
  Record<
    string,
    TrustPolicy
  > = {

  default: {

    name:
      "default",

    requiredAlgorithms: [
      "ed25519"
    ],

    minimumSignatures: 1
  },

  enterprise: {

    name:
      "enterprise",

    requiredAlgorithms: [
      "ed25519",
      "ecdsa-p256"
    ],

    minimumSignatures: 2
  },

  regulated: {

    name:
      "regulated",

    requiredAlgorithms: [
      "ed25519",
      "ecdsa-p256"
    ],

    minimumSignatures: 2
  },

  hybrid: {

    name:
      "hybrid",

    requiredAlgorithms: [
      "ed25519",
      "ecdsa-p256"
    ],

    minimumSignatures: 2
  },

  "post-quantum": {

    name:
      "post-quantum",

    requiredAlgorithms: [
      "ed25519",
      "ml-dsa-65"
    ],

    minimumSignatures: 2
  }
};