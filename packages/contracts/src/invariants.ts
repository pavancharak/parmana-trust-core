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
"INV-105": {

  id: "INV-105",

  description:
    "Trust root generation is reproducible",

  boundary:
    "trust-root"

},


"INV-120": {

  id: "INV-120",

  description:
    "Attestation signatures are cryptographically valid",

  boundary:
    "attestation"

},


"INV-121": {

  id: "INV-121",

  description:
    "Attestation signatures are independently verifiable",

  boundary:
    "attestation"

},


"INV-130": {

  id: "INV-130",

  description:
    "Published trust roots are signed",

  boundary:
    "trust-root"

},


"INV-131": {

  id: "INV-131",

  description:
    "Trust root signatures are independently verifiable",

  boundary:
    "trust-root"

},
"INV-140": {

  id: "INV-140",

  description:
    "Evidence hashes are immutable and verifiable",

  boundary:
    "attestation"

},
"INV-150": {

  id: "INV-150",

  description:
    "Evidence content changes invalidate existing attestations",

  boundary:
    [
      "attestation",
      "verification"
    ]

},
"INV-160": {

  id: "INV-160",

  description:
    "Verification receipts are cryptographically bound to verified attestations",

  boundary:
    [
      "receipt",
      "verification"
    ]

},

"INV-170": {

  id: "INV-170",

  description:
    "Receipt history is append-only and cryptographically linked",

  boundary:
    [
      "receipt",
      "transparency"
    ]

},
"INV-180": {

  id: "INV-180",

  description:
    "Authority decisions are deterministic. Identical task, policy and trusted signals MUST produce identical decisions.",

  boundary:
    "decision"

},
"INV-181": {

  id: "INV-181",

  description:
    "Lineage identifiers are outside decision scope and MUST NOT influence authority evaluation.",

  boundary:
    "decision"

},
"INV-199": {

  id: "INV-199",

  description:
    "Execution is fail-closed. An action MUST NOT execute unless a valid verification receipt exists and required lineage identifiers are present.",

  boundary:
    [
      "verification",
      "receipt"
    ]

},
"INV-204": {

  id: "INV-204",

  description:
    "A verification receipt may authorize execution only once.",

  boundary:
    [
      "receipt",
      "verification"
    ]

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