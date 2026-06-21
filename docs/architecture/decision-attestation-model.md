\# Decision Attestation Model



\## Status



Canonical



\## Purpose



The Decision Attestation Model defines how Parmana creates cryptographic evidence that an authority decision occurred and has not been modified.



Attestations provide integrity, provenance, and verifiability.



They form the cryptographic boundary between authority evaluation and verification.



\---



\# Core Principle



```text

Authority decisions are evaluated.



Attestations prove what was evaluated.

```



An attestation is a cryptographically signed representation of an authority decision.



\---



\# What Is A Decision Attestation?



A decision attestation is an immutable artifact that:



\* References a decision

\* References a business transaction

\* References a policy

\* References a task

\* Contains integrity evidence

\* Contains cryptographic signatures



An attestation allows independent verification of a decision.



\---



\# Trust Chain Position



```text

Signal Evidence

&#x20;     ↓

Authority Decision

&#x20;     ↓

Decision Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Record

```



Attestations connect decisions to verification.



\---



\# Purpose



Decision attestations provide:



```text

Integrity



Provenance



Tamper Detection



Independent Verification



Cryptographic Evidence

```



\---



\# Attestation Structure



Example:



```json

{

&#x20; "schemaVersion": "2",

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "evidence": \[

&#x20;   {

&#x20;     "id": "attestation-hash",

&#x20;     "hash": "...",

&#x20;     "hashAlgorithm": "sha256"

&#x20;   }

&#x20; ],

&#x20; "signatures": {

&#x20;   "signatures": \[

&#x20;     {

&#x20;       "keyId": "parmana-root-key",

&#x20;       "algorithm": "ed25519",

&#x20;       "value": "...",

&#x20;       "createdAt": "2026-06-21T04:34:34.213Z"

&#x20;     }

&#x20;   ]

&#x20; },

&#x20; "metadata": {

&#x20;   "profile": "default",

&#x20;   "createdAt": "2026-06-21T04:34:34.213Z"

&#x20; },

&#x20; "outcome": {

&#x20;   "result": "approved"

&#x20; }

}

```



\---



\# Attestation Identity



The canonical attestation identity is derived from:



```text

businessTransactionId

taskId

policyId

policyVersion

outcome

createdAt

```



Optional fields must not be required for attestation validity.



\---



\# businessTransactionId



Purpose:



```text

Root lineage identifier

```



Example:



```text

PAYMENT-E2E-001

```



Every attestation must be linked to a business transaction.



\---



\# decisionId



Purpose:



```text

Decision reference

```



Example:



```text

f6964bd8-abf0-401b-81ce-d344e93c0c2e

```



Every attestation references a single authority decision.



\---



\# Outcome



Represents the authority result.



Example:



```json

{

&#x20; "result": "approved"

}

```



Examples:



```text

approved



denied

```



The outcome is part of the attestation identity.



\---



\# Evidence



Evidence provides cryptographic integrity.



Example:



```json

{

&#x20; "id": "attestation-hash",

&#x20; "hash": "...",

&#x20; "hashAlgorithm": "sha256"

}

```



Purpose:



```text

Detect modification



Verify integrity



Support replay

```



\---



\# Signature



Attestations are signed.



Example:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "value": "..."

}

```



Purpose:



```text

Integrity



Authenticity



Non-repudiation

```



\---



\# Metadata



Metadata describes attestation creation.



Example:



```json

{

&#x20; "profile": "default",

&#x20; "createdAt": "2026-06-21T04:34:34.213Z"

}

```



Purpose:



```text

Auditability



Lifecycle tracking

```



\---



\# Attestation Generation



Attestations are generated immediately after a decision is created.



Flow:



```text

Authority Decision

&#x20;      ↓

Hash Generation

&#x20;      ↓

Signature Creation

&#x20;      ↓

Attestation Creation

&#x20;      ↓

Persistence

```



\---



\# Attestation Verification



Verification validates:



```text

Hash Integrity



Signature Integrity



Invariant Compliance

```



Verification produces a Verification Receipt.



\---



\# Persistence



Attestations are persisted.



Stored attributes include:



```text

businessTransactionId



decisionId



taskId



policyId



policyVersion



attestation

```



Attestations are immutable.



\---



\# Retrieval



Attestations are retrievable through:



```http

GET /trust-chain/{businessTransactionId}

```



Example:



```json

{

&#x20; "attestations": \[

&#x20;   {

&#x20;     "decision\_id": "...",

&#x20;     "business\_transaction\_id": "PAYMENT-E2E-001"

&#x20;   }

&#x20; ]

}

```



\---



\# Relationship To Receipts



Verification receipts are derived from attestations.



```text

Decision Attestation

&#x20;         ↓

Verification Receipt

```



Receipts prove successful attestation verification.



\---



\# Relationship To Execution



Execution records must reference verified lineage.



```text

Decision Attestation

&#x20;         ↓

Verification Receipt

&#x20;         ↓

Execution Record

```



Execution must not occur without an attestation-derived trust chain.



\---



\# Attestation Invariants



\## ATT-001



Every attestation must reference a decisionId.



\---



\## ATT-002



Every attestation must reference a businessTransactionId.



\---



\## ATT-003



Every attestation must contain integrity evidence.



\---



\## ATT-004



Every attestation must contain at least one signature.



\---



\## ATT-005



Attestations are immutable after creation.



\---



\## ATT-006



Attestations must be persisted before verification.



\---



\## ATT-007



Attestations must be independently verifiable.



\---



\## ATT-008



Attestations must be retrievable through lineage reconstruction.



\---



\# Architectural Principle



Authority determines what is allowed.



Attestations prove what authority decided.



Attestations provide the cryptographic evidence layer of the Execution Trust Chain and establish the foundation for independent verification.



