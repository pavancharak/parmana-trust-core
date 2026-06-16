export const TRUST_PROFILES = {

  default: {
    algorithms: [
      "ed25519"
    ]
  },

  enterprise: {
    algorithms: [
      "ed25519",
      "ecdsa-p256"
    ]
  },

  regulated: {
    algorithms: [
      "ed25519",
      "ecdsa-p256"
    ]
  },

  hybrid: {
    algorithms: [
      "ed25519",
      "ecdsa-p256"
    ]
  },

  "post-quantum": {
    algorithms: [
      "ed25519",
      "ml-dsa-65"
    ]
  }

} as const;