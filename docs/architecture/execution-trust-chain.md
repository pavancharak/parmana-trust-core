# Execution Trust Chain

## Status

Canonical

## Purpose

The Execution Trust Chain is the foundational architecture of Parmana.

It defines how authority is established, verified, preserved, and connected to execution.

The Execution Trust Chain exists to answer a single question:

```text
Why was this action allowed?
```

And a second question:

```text
Can that authorization be independently verified?
```

---

# Core Thesis

```text
Parmana prevents unauthorized autonomous actions.
```

Supporting statement:

```text
Parmana verifies human-defined authority and organizational policy before autonomous systems act.
```

Expanded statement:

```text
Organizations decide what to trust.

Parmana ensures trusted signals satisfy policy before execution.
```

---

# The Problem

Modern systems increasingly generate actions.

Examples:

```text
AI Agents

Workflow Engines

Automation Platforms

Decision Systems

LLM Applications
```

These systems can determine:

```text
What could happen.
```

Organizations must determine:

```text
What should happen.
```

The gap between those two concepts creates execution risk.

---

# Authority vs Intelligence

```text
AI has intelligence.

Humans have authority.

Intelligence generates actions.

Authority decides what is allowed.
```

Intelligence alone is insufficient.

Execution requires authority.

---

# The Execution Trust Chain

The Execution Trust Chain connects:

```text
Trusted Evidence
        ↓
Authority
        ↓
Verification
        ↓
Execution
```

through a series of verifiable artifacts.

---

# Canonical Chain

```text
Signal Evidence
       ↓
Authority Decision
       ↓
Decision Attestation
       ↓
Verification Receipt
       ↓
Execution Record
```

Every artifact exists to preserve trust.

---

# Stage 1 — Signal Evidence

Signals are facts used during evaluation.

Example:

```json
{
  "managerApproved": true,
  "kycVerified": true
}
```

Signals may originate from:

```text
Humans

Systems

Rules Engines

AI Systems
```

Organizations determine which signals are trusted.

Parmana preserves those signals.

---

# Stage 2 — Authority Decision

Policy evaluates trusted signals.

Example:

```text
managerApproved == true

AND

kycVerified == true
```

Result:

```text
approved
```

Authority Decisions determine whether execution is authorized.

---

# Stage 3 — Decision Attestation

Attestations create cryptographic evidence.

Purpose:

```text
Integrity

Authenticity

Provenance
```

Attestations prove:

```text
What authority decided.
```

---

# Stage 4 — Verification Receipt

Receipts verify attestations.

Purpose:

```text
Independent Verification

Integrity Validation

Verification Evidence
```

Receipts prove:

```text
The attestation was validated.
```

---

# Stage 5 — Execution Record

Execution Records preserve evidence of execution.

Purpose:

```text
Execution Accountability

Lineage Preservation

Audit Evidence
```

Execution Records prove:

```text
Execution occurred.
```

---

# Complete Lifecycle

```text
Task Requested
        ↓
Policy Resolved
        ↓
Signals Collected
        ↓
Authority Evaluated
        ↓
Decision Created
        ↓
Attestation Generated
        ↓
Receipt Verified
        ↓
Execution Performed
        ↓
Execution Recorded
```

---

# Lineage Model

Every artifact references:

```text
businessTransactionId
```

Canonical lineage:

```text
businessTransactionId
        ↓
decisionId
        ↓
receiptId
        ↓
executionId
```

This enables complete reconstruction.

---

# Trust Chain Retrieval

Canonical retrieval:

```http
GET /trust-chain/{businessTransactionId}
```

Returns:

```json
{
  "decision": {},
  "signals": [],
  "attestations": [],
  "receipts": [],
  "executions": []
}
```

A trust chain must be reconstructable from a single lineage identifier.

---

# What Parmana Verifies

Parmana verifies:

```text
Was the action authorized?

Which policy authorized it?

Which evidence satisfied policy?

Was authorization verified?

Was execution traceable to authorization?
```

---

# What Parmana Does Not Do

Parmana does not:

```text
Manage identity

Authenticate users

Execute workflows

Move money

Act as a system of record

Perform business operations
```

Parmana verifies authority.

---

# Execution Trust Infrastructure

Parmana creates a new category:

```text
Execution Trust Infrastructure
```

Definition:

```text
Software that verifies authority before execution and preserves evidence proving why execution was allowed.
```

---

# Architectural Properties

## Verifiable

Authorization can be independently validated.

---

## Auditable

Lineage can be reconstructed.

---

## Explainable

Execution can be traced to authority.

---

## Immutable

Trust-chain artifacts are append-only.

---

## Portable

Trust-chain evidence can be transported between systems.

---

# Canonical Invariants

```text
Signal Evidence
      before
Authority Decision

Authority Decision
      before
Decision Attestation

Decision Attestation
      before
Verification Receipt

Verification Receipt
      before
Execution Record
```

Trust-chain ordering is mandatory.

---

# Architectural Principle

The future of software is increasingly autonomous.

The critical problem is no longer whether systems can act.

The critical problem is whether actions are authorized.

Organizations define authority.

Organizations decide what to trust.

Parmana verifies that trusted signals satisfy policy before execution and preserves the resulting Execution Trust Chain.

The Execution Trust Chain is the architectural foundation of Execution Trust Infrastructure.
