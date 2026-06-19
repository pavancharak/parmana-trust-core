export type TrustCoreBoundary =
  | "decision"
  | "attestation"
  | "verification"
  | "receipt"
  | "transparency"
  | "trust-root";


export interface TrustCoreInvariant {

  readonly id: string;

  readonly description: string;

  readonly boundary:
    TrustCoreBoundary |
    readonly TrustCoreBoundary[];

}


export const INVARIANT_REGISTRY = {


  "INV-100": {

    id: "INV-100",

    description:
      "Decision must exist before attestation issuance",

    boundary:
      "decision"

  },


  "INV-101": {

    id: "INV-101",

    description:
      "Every attestation references exactly one decision",

    boundary:
      "attestation"

  },


  "INV-102": {

    id: "INV-102",

    description:
      "Every receipt references exactly one attestation",

    boundary:
      "receipt"

  },


  "INV-103": {

    id: "INV-103",

    description:
      "Transparency entries reference valid receipt hashes",

    boundary:
      "transparency"

  },


  "INV-104": {

    id: "INV-104",

    description:
      "Trust roots are deterministically derived from receipt hashes",

    boundary:
      "trust-root"

  },


  "META-010": {

    id: "META-010",

    description:
      "Organizations decide what to trust. Parmana evaluates trusted signals against policy before execution.",

    boundary: [
      "decision",
      "attestation",
      "verification",
      "receipt",
      "transparency",
      "trust-root"
    ]

  }


} as const satisfies Record<
  string,
  TrustCoreInvariant
>;


export type InvariantId =
  keyof typeof INVARIANT_REGISTRY;