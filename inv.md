# Parmana Trust Core Invariants

## INV-100 — Decision Required for Attestation

A decision MUST exist before an attestation can be issued.

Trust Boundary:

Decision
↓
Attestation

---

## INV-101 — Single Decision Reference

Every attestation MUST reference exactly one decision.

Trust Boundary:

Attestation

---

## INV-102 — Receipt References Decision Lineage

Every verification receipt MUST reference a valid decision lineage.

Trust Boundary:

Receipt

---

## INV-103 — Transparency Integrity

Transparency entries MUST reference valid receipt hashes.

Trust Boundary:

Transparency

---

## INV-104 — Deterministic Trust Root Derivation

Trust roots MUST be deterministically derived from receipt hashes.

Trust Boundary:

Trust Root

---

## INV-105 — Trust Root Reproducibility

Trust root generation MUST be reproducible.

Trust Boundary:

Trust Root

---

## INV-120 — Signature Validity

Attestation signatures MUST be cryptographically valid.

Trust Boundary:

Attestation

---

## INV-121 — Independent Signature Verification

Attestation signatures MUST be independently verifiable.

Trust Boundary:

Attestation

---

## INV-130 — Signed Trust Roots

Published trust roots MUST be signed.

Trust Boundary:

Trust Root

---

## INV-131 — Trust Root Verification

Trust root signatures MUST be independently verifiable.

Trust Boundary:

Trust Root

---

## INV-140 — Evidence Integrity

Evidence hashes MUST be immutable and verifiable.

Trust Boundary:

Attestation

---

## INV-150 — Evidence Mutation Detection

Any change to evidence content MUST invalidate existing attestations.

Trust Boundary:

Attestation → Verification

---

## INV-160 — Receipt Binding

Verification receipts MUST be cryptographically bound to verified attestations.

Trust Boundary:

Verification → Receipt

---

## INV-170 — Append-Only History

Receipt history MUST be append-only and cryptographically linked.

Trust Boundary:

Receipt → Transparency

---

## INV-180 — Deterministic Authority

Identical:

* Policy
* Task
* Trusted Signals

MUST produce identical decisions.

Trust Boundary:

Decision

---

## INV-181 — Lineage Isolation

Lineage identifiers MUST NOT influence authority evaluation.

Examples:

* decisionId
* receiptId
* executionId
* transactionId

Trust Boundary:

Decision

---

## INV-199 — Parmana Execution Boundary

### Description

The Parmana Execution Boundary is the trust boundary between authorized intent and execution.

An action MUST NOT execute unless all execution boundary requirements are satisfied.

### Boundary Requirements

A protected execution MUST satisfy all of the following:

* A valid verification receipt exists.
* Required lineage identifiers are present.
* A valid Execution Trust Token exists.
* The decision is approved.
* The authorized intent is preserved.

### Enforcement

Protected execution follows the chain:

```text
Authority
↓
Policy
↓
Decision
↓
Intent
↓
Verification
↓
Receipt(valid=true)
↓
Execution Trust Token
↓
Execution Authorization
↓
Execution
```

### Failure Conditions

Execution MUST be denied when:

* The Execution Trust Token is invalid.
* The verification receipt is invalid.
* The decision is not approved.
* The execution payload does not match authorized intent.

### Guarantee

Within the Parmana Execution Boundary:

* Nothing executes without an approved decision.
* Nothing executes without a valid verification receipt.
* Nothing executes without a valid Execution Trust Token.
* Nothing executes differently from authorized intent.

### Trust Gap Addressed

Traditional systems prove who approved an action.

Parmana verifies that execution matches what was approved before execution is authorized.

Trust Boundary:

Verification → Receipt → Execution

---

## INV-200 — Execution Must Match Authorized Intent

### Description

An execution MUST NOT be authorized unless the execution payload matches the authorized intent.

### Rationale

Authority defines what is allowed.

Intent defines what is supposed to happen.

Execution must match the authorized intent.

### Enforcement

```text
Intent
↓
Execution
```

```text
SHA256(Intent)
==
SHA256(Execution Payload)
```

### Violation

```text
SHA256(Intent)
!=
SHA256(Execution Payload)
```

Result:

```text
Execution Denied
```

### Guarantee

Parmana provides cryptographic evidence that the executed action matches the authorized intent.

### Relationship to INV-199

INV-199 establishes the Parmana Execution Boundary.

INV-200 enforces execution fidelity within that boundary.

### Trust Gap Addressed

Traditional systems record approvals.

Parmana verifies that execution matched what was authorized.

---

## INV-204 — Single-Use Receipt

Verification receipts are single-use governance artifacts.

A receipt MAY authorize execution only once.

Trust Boundary:

Receipt → Verification

---

# Meta Invariant

## META-010 — Human Authority

Organizations decide what to trust.

Parmana evaluates trusted signals against policy before execution.

Trust Boundary:

```text
Authority
↓
Policy
↓
Decision
↓
Intent
↓
Execution
↓
Verification
```

### Core Principle

Humans define what should happen.

Parmana ensures only authorized intent can execute within the Parmana Execution Boundary.

### Trust Model

Authority defines what is allowed.

Intent defines what is supposed to happen.

Parmana establishes a verifiable trust chain between authority, intent, and execution.


Actual file : packages/contracts/src/invariants.ts