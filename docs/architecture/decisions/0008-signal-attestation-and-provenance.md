\# ADR-0008: Signal Attestation and Provenance



\## Status



Proposed



\## Date



2026-06-21



\## Context



Parmana evaluates authority using trusted signals.



Authority evaluation is defined as:



```text

Decision =

f(taskId, policy, trusted signals)

```



ADR-0007 established that evaluated signal evidence must be preserved for replay and auditability.



However, signal preservation alone does not establish signal trustworthiness.



A preserved signal answers:



```text

What value was used?

```



It does not answer:



```text

Who asserted the value?

Why was it trusted?

Was the value authentic?

Can the value be independently verified?

```



Trustworthy authority systems require evidence not only about decisions, but also about the facts that justified those decisions.



This introduces signal attestation and provenance.



\---



\## Problem



Consider:



```json

{

&#x20; "managerApproved": true

}

```



The authority engine can evaluate this signal.



However, the following questions remain unanswered:



```text

Who approved it?



Which system produced it?



Was it altered?



Can the approval be verified?



Should the signal be trusted?

```



Replay can reproduce the decision.



Replay cannot determine whether the signal itself was authentic.



Parmana requires a mechanism for independently verifiable signals.



\---



\## Decision



Parmana SHALL support signal attestation.



A signal attestation is a cryptographically verifiable assertion about a signal value.



Signal attestations MAY be evaluated before authority evaluation.



Authority decisions MAY consume signal attestations rather than raw signal values.



\---



\## Signal Attestation Model



A signal attestation represents:



```text

Signal Value

Signal Source

Signal Issuer

Signal Integrity

Signal Timestamp

```



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "value": true,

&#x20; "issuer": "approval-service",

&#x20; "issuedAt": "2026-06-21T12:00:00Z",

&#x20; "signature": "..."

}

```



\---



\## Provenance Model



Provenance describes the origin and history of a signal.



Provenance answers:



```text

Where did the signal originate?



Who asserted it?



Which system produced it?



When was it produced?

```



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "sourceSystem": "approval-service",

&#x20; "sourceRecord": "APR-123",

&#x20; "issuedBy": "manager-workflow",

&#x20; "issuedAt": "2026-06-21T12:00:00Z"

}

```



\---



\## Signal Trust Chain



Signal attestations introduce a new trust layer.



The trust chain becomes:



```text

Signal

&#x20;       ↓

Signal Attestation

&#x20;       ↓

Authority Decision

&#x20;       ↓

Decision Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



Authority decisions are now based on verified facts rather than unverified assertions.



\---



\## Trust Establishment



Parmana does not determine truth.



Parmana determines trust.



Signal trust is established through:



```text

Trusted Issuer

Cryptographic Integrity

Provenance Evidence

Verification Rules

```



Organizations decide which signal issuers are trusted.



Parmana verifies those trust requirements.



\---



\## Signal Issuers



Signal attestations SHALL be issued by identifiable issuers.



Examples:



```text

Approval Service

KYC Provider

Identity Provider

Fraud Detection Service

ERP System

Banking System

Human Reviewer

```



Signal issuers become trust participants.



\---



\## Signal Verification



Before authority evaluation Parmana MAY verify:



```text

Signal Signature

Issuer Trust

Attestation Integrity

Attestation Freshness

```



Invalid signal attestations SHALL be rejected.



\---



\## Authority Consumption Model



Authority policies MAY require:



```text

Signal Value

```



or



```text

Signal Attestation

```



Example:



Instead of:



```json

{

&#x20; "managerApproved": true

}

```



Policy may require:



```json

{

&#x20; "managerApprovalAttestation": {

&#x20;   "...": "..."

&#x20; }

}

```



This allows authority evaluation to depend on verified evidence.



\---



\## Replay Implications



Replay SHALL preserve:



```text

Signal Evidence

Signal Attestations

Signal Provenance

```



when available.



Replay MAY verify historical signal attestations.



Replay MAY detect:



```text

Invalid Signatures

Untrusted Issuers

Broken Provenance Chains

```



that were not previously detected.



\---



\## Provenance Preservation



Signal provenance SHALL be immutable.



Signal provenance SHALL be linked to:



```text

businessTransactionId

decisionId

```



when relevant.



Signal provenance SHALL remain retrievable.



\---



\## Signal Attestation Lifecycle



```text

Signal Produced

&#x20;       ↓

Signal Attested

&#x20;       ↓

Signal Verified

&#x20;       ↓

Authority Evaluation

&#x20;       ↓

Decision Attestation

&#x20;       ↓

Receipt

&#x20;       ↓

Execution

```



\---



\## Future Signal Verification Receipts



Future versions MAY support:



```text

Signal Verification Receipt

```



Example:



```text

Signal

&#x20;       ↓

Signal Attestation

&#x20;       ↓

Signal Verification Receipt

&#x20;       ↓

Authority Evaluation

```



This provides independent evidence that a signal was verified.



\---



\## Invariants



\### INV-600



Signal attestations SHALL identify an issuer.



\### INV-601



Signal attestations SHALL preserve provenance.



\### INV-602



Signal attestations SHALL be immutable.



\### INV-603



Authority policies MAY require verified signal attestations.



\### INV-604



Replay SHALL preserve signal attestation evidence when available.



\### INV-605



Organizations decide which signal issuers are trusted.



Parmana verifies compliance with those trust requirements.



\---



\## Consequences



\### Positive



```text

Stronger Trust Model

Independent Signal Verification

Improved Replay Fidelity

Improved Auditability

Improved Explainability

```



\### Negative



```text

Additional Complexity

Additional Storage

Additional Verification Infrastructure

```



\---



\## Related Decisions



\* ADR-0003: Authority Evaluation Model

\* ADR-0004: Business Transaction Binding

\* ADR-0005: Replay and Re-execution Model

\* ADR-0006: Immutable Artifact Model

\* ADR-0007: Signal Evidence Preservation



\---



\## Canonical Principle



Authority decisions depend on signals.



Trust depends on signal provenance.



Therefore:



```text

Trusted Signal

&#x20;       ↓

Trusted Decision

```



Signal attestations provide verifiable evidence that a signal was issued by a trusted source and has not been altered.



Parmana verifies trust in signals before relying on them for authority evaluation.



