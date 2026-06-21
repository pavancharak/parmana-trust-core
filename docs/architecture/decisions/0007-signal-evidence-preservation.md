\# ADR-0007: Signal Evidence Preservation



\## Status



Accepted



\## Date



2026-06-21



\## Context



Parmana evaluates authority using trusted signals.



Authority evaluation is defined as:



```text

Decision =

f(taskId, policy, trusted signals)

```



Authority decisions are deterministic.



Replay capabilities depend on the ability to reconstruct historical authority evaluation conditions.



If trusted signals are not preserved, Parmana cannot reliably determine:



```text

Which signals were evaluated?



What values were observed?



Which source supplied the signal?



Whether the signal was trusted?



Whether the signal changed later?

```



Signal preservation is therefore a foundational requirement for replay, auditability, and independent verification.



\---



\# Problem



Many authority systems preserve only the final decision.



Example:



```text

APPROVED

```



without preserving:



```text

managerApproved = true

kycVerified = true

paymentAmount = 50000

```



This creates a verification gap.



Future auditors cannot determine why the decision occurred.



Replay becomes impossible.



Trust-chain evidence becomes incomplete.



\---



\# Decision



Parmana SHALL preserve signal evidence used during authority evaluation.



Signal evidence SHALL be preserved alongside authority decisions.



Signal evidence SHALL be treated as immutable historical evidence.



\---



\# Signal Preservation Principle



Authority decisions explain:



```text

What happened

```



Signal evidence explains:



```text

Why it happened

```



Both are required for trustworthy replay.



\---



\# Signal Evidence Model



Each preserved signal SHALL contain:



```text

Signal Identifier

Signal Value

Signal Source

Evaluation Timestamp

```



Optional fields MAY include:



```text

Signal Hash

Signal Signature

Signal Provenance

Signal Verification Evidence

```



\---



\# Minimum Preservation Requirements



For every evaluated signal Parmana SHALL preserve:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "value": true,

&#x20; "source": "approval-system",

&#x20; "evaluatedAt": "2026-06-21T12:00:00Z"

}

```



\---



\# Signal Value Preservation



Signal values SHALL be preserved exactly as evaluated.



Example:



```json

{

&#x20; "signalId": "paymentAmount",

&#x20; "value": 50000

}

```



Replay SHALL evaluate the preserved value.



Replay SHALL NOT retrieve a newer value.



\---



\# Signal Source Preservation



The origin of a signal SHALL be preserved.



Example:



```json

{

&#x20; "signalId": "kycVerified",

&#x20; "source": "kyc-service"

}

```



Signal source preservation supports:



```text

Auditability

Forensics

Trust Verification

```



\---



\# Signal Timestamp Preservation



The evaluation timestamp SHALL be preserved.



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "evaluatedAt": "2026-06-21T12:00:00Z"

}

```



This establishes historical context.



\---



\# Signal Hash Preservation



Parmana SHOULD preserve signal hashes.



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "signalHash": "sha256:..."

}

```



Signal hashes support:



```text

Integrity Verification

Tamper Detection

Evidence Preservation

```



\---



\# Signal Provenance



Future versions MAY preserve provenance information.



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "sourceSystem": "approval-service",

&#x20; "sourceRecord": "APR-123",

&#x20; "verifiedBy": "approval-verifier"

}

```



This provides stronger audit evidence.



\---



\# Replay Dependency



Replay requires preserved signal evidence.



Replay SHALL use:



```text

Historical Signal Values

```



Replay SHALL NOT use:



```text

Current Signal Values

```



Example:



Historical:



```text

managerApproved = true

```



Current:



```text

managerApproved = false

```



Replay SHALL use:



```text

true

```



because that was the evaluated value.



\---



\# Signal Retention Rule



Signal evidence SHALL be retained with:



```text

Authority Decision

```



and linked through:



```text

decisionId

businessTransactionId

```



Signal evidence SHALL remain retrievable.



\---



\# Privacy Considerations



Signals MAY contain sensitive information.



Implementations MAY:



```text

Store Hashes

Store References

Store Encrypted Values

```



provided replay remains possible.



Signal minimization SHOULD be applied where appropriate.



\---



\# Immutability



Signal evidence is historical evidence.



Signal evidence SHALL be immutable.



Signal evidence SHALL be append-only.



Signal evidence SHALL NOT be modified after evaluation.



\---



\# Invariants



\## INV-500



Authority decisions SHALL preserve evaluated signal evidence.



\## INV-501



Replay SHALL use historical signal evidence.



\## INV-502



Signal evidence SHALL be immutable.



\## INV-503



Signal evidence SHALL remain linked to authority decisions.



\## INV-504



Signal evidence SHALL remain retrievable for replay.



\---



\# Consequences



\## Positive



```text

Replay Capability

Decision Explainability

Auditability

Forensic Investigation

Independent Verification

```



\## Negative



```text

Additional Storage Requirements

Additional Retention Requirements

Additional Privacy Considerations

```



\---



\# Related Decisions



\* ADR-0003: Authority Evaluation Model

\* ADR-0004: Business Transaction Binding

\* ADR-0005: Replay and Re-execution Model

\* ADR-0006: Immutable Artifact Model



\---



\# Canonical Principle



Authority decisions answer:



```text

What was allowed?

```



Signal evidence answers:



```text

Why was it allowed?

```



Parmana SHALL preserve both.



Replay depends on preserved signal evidence.



\## Evaluated Signals vs Available Signals



Parmana distinguishes between:



```text

Available Signals

```



and



```text

Evaluated Signals

```



\### Available Signals



Available signals are signals that existed at evaluation time.



Example:



```text

managerApproved

kycVerified

riskScore

accountAge

vendorTier

```



Not all available signals influence a decision.



\### Evaluated Signals



Evaluated signals are signals actually consumed during authority evaluation.



Example:



```text

managerApproved

kycVerified

```



Only evaluated signals contributed to the decision.



\### Preservation Rule



Parmana SHALL preserve:



```text

Evaluated Signals

```



Parmana SHALL NOT require preservation of all available signals.



\### Rationale



Replay requires reconstruction of:



```text

Decision =

f(taskId, policy, trusted signals)

```



Only signals that participated in evaluation are required.



Preserving unused signals increases:



```text

Storage

Complexity

Privacy Exposure

```



without improving replay quality.



\### Replay Requirement



Replay SHALL reconstruct:



```text

Evaluated Signals

```



Replay SHALL NOT require access to every signal that existed within source systems.



\### Invariant



INV-505



Only signals that participate in authority evaluation are required replay evidence.





\## Signal Snapshot Principle



Authority evaluation operates against a signal snapshot.



A signal snapshot represents the exact signal values observed during evaluation.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true,

&#x20; "paymentAmount": 50000

}

```



The signal snapshot becomes part of the historical authority evidence.



\### Historical Preservation



Signal snapshots SHALL be preserved exactly as evaluated.



Future changes to source systems SHALL NOT modify historical signal snapshots.



Example:



Evaluation Time:



```text

managerApproved = true

```



Current State:



```text

managerApproved = false

```



Replay SHALL use:



```text

managerApproved = true

```



because it represents the evaluated snapshot.



\### Replay Dependency



Replay depends on preserved signal snapshots.



Without signal snapshots:



```text

Decision Explainability

Replay

Independent Verification

```



become unreliable.



\### Invariant



INV-506



Authority evaluation SHALL operate against a preserved signal snapshot.



INV-507



Replay SHALL use preserved signal snapshots rather than live signal values.



\## Signal References vs Signal Values



Parmana distinguishes between:



```text

Signal Value Preservation

```



and



```text

Signal Reference Preservation

```



\### Signal Value Preservation



The actual evaluated value is stored.



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "value": true

}

```



This provides the strongest replay capability.



\### Signal Reference Preservation



A reference to externally preserved evidence is stored.



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "evidenceReference": "APR-12345"

}

```



The referenced evidence remains in the originating system.



\### Preservation Rule



Implementations SHOULD preserve evaluated values when practical.



Implementations MAY preserve references when:



\* Data volume is excessive.

\* Data is regulated.

\* Data contains sensitive information.

\* Data is managed by an external system of record.



\### Replay Requirement



Replay SHALL be able to reconstruct evaluated signal evidence from either:



```text

Preserved Value

```



or



```text

Preserved Reference

```



\### Invariant



INV-508



Signal evidence SHALL be replayable through preserved values or preserved references.



\## Signal Evidence Integrity



Signal evidence is part of the trust chain.



Signal evidence SHALL support integrity verification.



\### Signal Hashing



Implementations SHOULD compute a hash for preserved signal evidence.



Example:



```json

{

&#x20; "signalId": "managerApproved",

&#x20; "signalHash": "sha256:..."

}

```



Hashes provide:



```text

Tamper Detection

Evidence Integrity

Replay Verification

```



\### Signal Integrity Verification



Replay MAY verify:



```text

Stored Signal Evidence

=

Original Signal Evidence

```



through preserved hashes.



\### Future Signal Attestations



Future versions MAY support:



```text

Signal Attestations

Signal Signatures

Signal Verification Receipts

```



for independently verifiable signal evidence.



Example:



```text

KYC Service

&#x20;       ↓

Signal Attestation

&#x20;       ↓

Authority Evaluation

```



This allows Parmana to verify not only the decision, but also the authenticity of the signals used to make the decision.



\### Long-Term Direction



The evolution of signal evidence is:



```text

Signal Values

&#x20;       ↓

Signal Hashes

&#x20;       ↓

Signal Provenance

&#x20;       ↓

Signal Attestations

&#x20;       ↓

Signal Trust Chains

```



Each stage increases replay fidelity and auditability.



\### Canonical Principle



Authority decisions are derived from signals.



Replay depends on signal evidence.



Therefore:



```text

No Signal Evidence

=

No Reliable Replay

```



Signal evidence preservation is a foundational trust-chain requirement.





\## Replay Sufficiency Model



Replay quality depends on preserved signal evidence.



Not all replay attempts have access to the same evidence.



Parmana therefore defines replay sufficiency levels.



\### Level 0 — No Replay Capability



Available:



```text

Decision Only

```



Unavailable:



```text

Signals

Policy Version

Schema Version

```



Outcome:



```text

INSUFFICIENT\_EVIDENCE

```



Replay is not possible.



\---



\### Level 1 — Decision Replay



Available:



```text

Decision

Policy Version

Schema Version

```



Unavailable:



```text

Signal Evidence

```



Outcome:



```text

Limited Replay

```



The decision context can be inspected.



The decision cannot be independently reproduced.



\---



\### Level 2 — Signal Replay



Available:



```text

Decision

Policy Version

Schema Version

Signal Snapshot

```



Outcome:



```text

Authority Replay Possible

```



Authority evaluation can be reproduced.



Verification replay may remain incomplete.



\---



\### Level 3 — Verification Replay



Available:



```text

Decision

Signal Snapshot

Attestation

Receipt

```



Outcome:



```text

Authority Replay

Verification Replay

```



Both decision and verification outcomes can be reproduced.



\---



\### Level 4 — Full Trust-Chain Replay



Available:



```text

Decision

Signal Snapshot

Attestation

Receipt

Execution Record

```



Outcome:



```text

Complete Historical Reconstruction

```



The full trust chain can be independently evaluated.



\---



\## Replay Sufficiency Rule



A decision SHALL be considered replayable when:



```text

Policy Version

Schema Version

Evaluated Signal Evidence

```



are available.



A decision SHALL NOT be considered replayable when evaluated signal evidence is unavailable.



\---



\## Replay Confidence



Replay confidence is derived from preserved evidence.



```text

More Evidence

=

Higher Replay Confidence

```



```text

Less Evidence

=

Lower Replay Confidence

```



Replay confidence SHALL NOT exceed the quality of preserved signal evidence.



\---



\## Signal Evidence Loss



Loss of signal evidence reduces replay capability.



Example:



```text

Decision Retained

Signals Lost

```



Result:



```text

Decision Explainable

Replay Not Reproducible

```



Example:



```text

Decision Retained

Signals Retained

Policy Lost

```



Result:



```text

Replay Incomplete

```



Replay systems SHALL report missing evidence rather than infer missing values.



\---



\## Canonical Replay Requirement



The minimum replayable authority artifact consists of:



```text

Decision

Policy Version

Schema Version

Signal Snapshot

```



Without these artifacts, deterministic authority replay cannot be guaranteed.



\### Invariant



INV-509



Replay confidence SHALL be derived from preserved evidence.



INV-510



Replay systems SHALL report missing evidence rather than infer missing evidence.



INV-511



A decision is replayable only when evaluated signal evidence is preserved.



