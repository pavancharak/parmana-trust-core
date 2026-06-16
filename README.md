# Parmana Trust Core

**Cryptographically verifiable decision infrastructure.**

`@parmanasystems/trust-core` is the foundational package of the Parmana SDK. It turns an automated decision — from a rules engine, workflow platform, or AI agent — into a tamper-evident, independently verifiable attestation bundle. Every step of that transformation is deterministic, typed, and auditable without access to the originating system.

---

## How it works

A decision enters the pipeline as structured input. Trust Core transforms it through a defined sequence, producing a signed bundle that any authorized party can verify offline.

```
Decision
  └─ Evidence        canonical hash of inputs + policy context
       └─ Attestation     Ed25519-signed record of the decision moment
            └─ Trust Root       single anchor hash for the bundle
                 └─ Trust Chain      sequential linkage across decisions
                      └─ Decision Bundle  self-contained, portable artifact
                           └─ Receipt          human-readable verification summary
                                └─ Verification    pass / fail with full diff
```

Each layer adds a discrete guarantee. Evidence proves *what* was captured. The Attestation proves *when* and *by what authority*. The Trust Chain proves the record hasn't been silently modified. The Bundle makes all of it portable and independently verifiable.

---

## Installation

```bash
npm install @parmanasystems/trust-core
```

Requires Node.js 18+. The package ships ESM and CJS builds with full TypeScript declarations.

---

## Quickstart

```ts
import { attest, bundle, verify } from '@parmanasystems/trust-core'

// 1. Attest a decision
const attestation = await attest({
  decisionId: 'loan-application-7829',
  policyVersion: '2024-11-01',
  inputs: {
    applicantId: 'usr_4482',
    requestedAmount: 50000,
    creditScore: 714,
  },
  outcome: 'approved',
  authorizedBy: 'policy:auto-approve-tier-2',
})

// 2. Bundle for distribution or storage
const decisionBundle = await bundle(attestation)

// 3. Verify — no SDK connection required
const result = await verify(decisionBundle)

console.log(result.verified)    // true
console.log(result.receipt)     // full human-readable summary
```

---

## CLI

The CLI operates entirely independently of Parmana infrastructure. Pass it a `.bundle.json` file and a public key — it verifies without any network call.

**Verify a bundle:**

```bash
npx tsx apps/cli/src/verify.ts loan.bundle.json
```

```
✓  Signature      valid (Ed25519)
✓  Evidence hash  matches bundle inputs
✓  Trust chain    intact — no gaps or modifications detected
✓  Policy version 2024-11-01 at time of decision

Decision ID   loan-application-7829
Outcome       approved
Attested at   2024-11-14T09:31:02.441Z
```

**Generate a human-readable receipt:**

```bash
npx tsx apps/cli/src/receipt.ts loan.bundle.json
```

Writes `loan.receipt.json` with a structured summary suitable for audit submission, regulatory export, or counsel review.

---

## API reference

### `attest(decision)`

Captures the decision moment and produces a signed `Attestation`.

| Field | Type | Description |
|---|---|---|
| `decisionId` | `string` | Unique identifier for this decision |
| `policyVersion` | `string` | The policy version in effect at execution time |
| `inputs` | `Record<string, unknown>` | Complete input state — hashed into evidence |
| `outcome` | `string` | The decision result |
| `authorizedBy` | `string` | Policy rule or authority that authorized the outcome |

Returns `Promise<Attestation>`.

---

### `bundle(attestation)`

Wraps an `Attestation` (or array of attestations) into a portable `DecisionBundle` with a computed Trust Root and sequential chain linkage.

```ts
const decisionBundle = await bundle(attestation)
// or batch:
const batchBundle = await bundle([attestation1, attestation2, attestation3])
```

Returns `Promise<DecisionBundle>`.

---

### `verify(bundle, options?)`

Verifies a `DecisionBundle` entirely offline. Checks signature validity, evidence hash integrity, and Trust Chain continuity.

```ts
const result = await verify(decisionBundle, {
  publicKey: '...',   // optional — defaults to key embedded in bundle
  strict: true,       // fail on any chain gap (default: true)
})
```

Returns `Promise<VerificationResult>`:

```ts
{
  verified: boolean
  receipt: VerificationReceipt
  failures: VerificationFailure[]   // empty if verified === true
}
```

---

### `buildMerkleTree(leaves)`

Constructs a Merkle tree from an array of evidence hashes. Useful for batch decision bundles where you need a single Trust Root across many attestations.

```ts
import { buildMerkleTree } from '@parmanasystems/trust-core'

const tree = buildMerkleTree(attestations.map(a => a.evidenceHash))
console.log(tree.root)   // deterministic root hash
```

---

## Core concepts

**Evidence hashing** — inputs are canonicalized and SHA-256 hashed before signing. The hash covers the complete input state: fields, values, and ordering. Changing any input field produces a different hash, which invalidates the attestation signature.

**Attestation** — an Ed25519-signed record binding the evidence hash to the decision outcome, policy version, and timestamp. The signing key is never required for verification — only the corresponding public key.

**Trust Root** — a single Merkle root derived from one or more attestation hashes. Provides a compact, auditable anchor for a set of decisions.

**Trust Chain** — sequential linkage of attestations through chained hashes. Gaps, deletions, or insertions are structurally detectable. There is no silent modification path.

**Decision Bundle** — a self-contained JSON artifact containing the attestation(s), Trust Root, chain metadata, and embedded public key. Verifiable by any party with the `verify` function or the CLI — no Parmana infrastructure required.

**Verification Receipt** — a structured summary of a verification result, formatted for human review, audit submission, or regulatory export.

---

## Build

```bash
npm install
npm run build
```

Outputs to `dist/`. The build runs `tsc` with strict mode and generates both ESM and CJS entry points.

**Run tests:**

```bash
npm test
```

**Type check only:**

```bash
npm run typecheck
```

---

## Bundle format

Decision bundles are plain JSON. An example `loan.bundle.json`:

```json
{
  "version": "1.0",
  "decisionId": "loan-application-7829",
  "evidenceHash": "sha256:e3b0c44298fc1c149afb...",
  "attestation": {
    "signature": "Ed25519:...",
    "publicKey": "Ed25519:...",
    "policyVersion": "2024-11-01",
    "outcome": "approved",
    "attestedAt": "2024-11-14T09:31:02.441Z"
  },
  "trustRoot": "sha256:a1b2c3d4...",
  "chainIndex": 0,
  "previousHash": null
}
```

The format is stable across minor versions. Breaking changes to the bundle schema increment the major version and are documented in [CHANGELOG.md](./CHANGELOG.md).

---

## Package scope

`trust-core` provides the cryptographic primitives and pipeline. It has no opinion about storage, transport, or policy evaluation. Those concerns are handled by other packages in the `@parmanasystems/*` ecosystem:

| Package | Responsibility |
|---|---|
| `@parmanasystems/policy` | Policy definition and evaluation |
| `@parmanasystems/audit-db` | Persistent storage for bundles and receipts |
| `@parmanasystems/provenance` | `GovernedSignal<T>` and signal trust levels |
| `@parmanasystems/verifier-cli` | Standalone CLI for bundle verification |
| `@parmanasystems/dashboard` | Audit dashboard and receipt browser |

---

## License

Apache 2.0. See [LICENSE](./LICENSE).

---

*Part of the [Parmana Systems](https://manthan.systems) open-source SDK.*
