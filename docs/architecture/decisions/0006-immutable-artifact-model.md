\# ADR-0006: Immutable Artifact Model



\## Status



Accepted



\## Date



2026-06-21



\## Context



Parmana is a trust infrastructure system.



The purpose of Parmana is to provide verifiable evidence that:



```text

An action was authorized

An attestation was produced

A verification occurred

An execution was recorded

```



Trust depends on preserving historical evidence.



If historical artifacts can be modified after creation, then:



```text

Auditability is weakened

Replay becomes unreliable

Verification loses meaning

Trust-chain integrity is compromised

```



Parmana therefore requires a formal immutability model.



\---



\# Problem



Trust-chain artifacts represent historical facts.



Examples:



```text

Authority Decision

Decision Attestation

Verification Receipt

Execution Record

Replay Record

```



These artifacts describe what occurred at a specific point in time.



Allowing modification of historical artifacts creates ambiguity:



```text

Was this the original decision?



Was the receipt altered?



Was execution evidence modified?



Did replay occur before or after the change?

```



Trust systems require historical permanence.



\---



\# Decision



All Parmana trust-chain artifacts SHALL be immutable.



Once created, an artifact SHALL NOT be modified.



Once created, an artifact SHALL NOT be deleted.



Corrections SHALL be represented by new artifacts.



Historical artifacts SHALL remain preserved.



\---



\# Immutable Artifact Principle



Historical evidence is permanent.



Parmana records facts.



Parmana does not rewrite facts.



Parmana does not erase facts.



Parmana preserves historical truth.



\---



\# Artifact Classification



\## Immutable Artifacts



The following artifacts SHALL be immutable:



```text

Authority Decisions

Decision Attestations

Verification Receipts

Execution Records

Replay Records

```



\---



\## Mutable Artifacts



The following artifacts MAY change over time:



```text

Policies

Schemas

Tasks

Signal Definitions

Configuration

```



These are governance artifacts.



Governance artifacts are versioned.



Governance artifacts are not trust-chain evidence.



\---



\# Authority Decision Immutability



An authority decision records:



```text

Decision Outcome

Task

Policy Version

Trusted Signals

Timestamp

```



Once recorded:



```text

No Updates

No Deletes

```



If a decision is later found to be incorrect:



```text

Create New Decision

```



Do not modify the original decision.



\---



\# Attestation Immutability



Attestations are signed evidence.



Modification invalidates trust.



Therefore:



```text

No Updates

No Deletes

```



Attestations are permanently preserved.



\---



\# Verification Receipt Immutability



Verification receipts record:



```text

Verification Result

Verification Time

Verification Evidence

```



Verification receipts represent historical facts.



They SHALL be immutable.



\---



\# Execution Record Immutability



Execution records represent:



```text

Observed Execution

```



Execution records are historical evidence.



Execution records SHALL be immutable.



If execution status changes:



```text

Create New Execution Artifact

```



Do not modify existing execution records.



\---



\# Replay Record Immutability



Replay records represent:



```text

Historical Replay Outcomes

```



Replay records SHALL be immutable.



Multiple replay records may exist.



Example:



```text

Replay #1

Replay #2

Replay #3

```



Each replay is preserved independently.



\---



\# Append-Only Model



Parmana adopts an append-only model.



Historical artifacts accumulate.



Historical artifacts are never overwritten.



Example:



```text

Decision #1

&#x20;       ↓

Receipt #1

&#x20;       ↓

Execution #1

&#x20;       ↓

Replay #1

&#x20;       ↓

Replay #2

```



Each artifact remains preserved.



\---



\# Correction Model



Corrections SHALL NOT modify history.



Corrections SHALL create new artifacts.



Example:



Instead of:



```text

Update Decision

```



Parmana performs:



```text

Decision-A

Decision-B

```



with explicit lineage.



Historical evidence remains intact.



\---



\# Deletion Prohibition



The following operations are prohibited:



```text

UPDATE Decision

DELETE Decision



UPDATE Attestation

DELETE Attestation



UPDATE Receipt

DELETE Receipt



UPDATE Execution

DELETE Execution



UPDATE Replay Record

DELETE Replay Record

```



\---



\# Replay Dependency



Replay depends on immutability.



Replay assumes:



```text

Historical Artifacts

=

Historical Facts

```



If artifacts are mutable:



```text

Replay becomes unreliable

```



Therefore replay requires immutable evidence.



\---



\# Retrieval Dependency



Trust-chain retrieval assumes:



```text

Retrieved Artifact

=

Original Artifact

```



Immutability guarantees this property.



\---



\# Audit Dependency



Auditability depends on immutability.



Auditors must be able to assume:



```text

Historical Records

=

Preserved Records

```



without modification risk.



\---



\# Invariants



\## INV-400



Trust-chain artifacts SHALL be immutable.



\## INV-401



Trust-chain artifacts SHALL be append-only.



\## INV-402



Historical artifacts SHALL NOT be deleted.



\## INV-403



Corrections SHALL create new artifacts.



\## INV-404



Replay records SHALL NOT modify historical artifacts.



\## INV-405



Retrieved artifacts SHALL represent original recorded evidence.



\---



\# Storage Requirements



Storage systems SHOULD support:



```text

Append-Only Writes

Immutable Identifiers

Historical Retention

Evidence Preservation

```



Storage systems SHOULD reject:



```text

Artifact Updates

Artifact Deletions

```



for immutable artifact types.



\---



\# Consequences



\## Positive



```text

Strong Auditability

Reliable Replay

Evidence Preservation

Forensic Traceability

Historical Integrity

```



\## Negative



```text

Additional Storage Usage

Long-Term Retention Requirements

Correction Complexity

```



\---



\# Related Decisions



\* ADR-0001: Subject ID Reclassification

\* ADR-0002: Execution Trust Chain

\* ADR-0003: Authority Evaluation Model

\* ADR-0004: Business Transaction Binding

\* ADR-0005: Replay and Re-execution Model



\---



\# Canonical Principle



Parmana preserves evidence.



Parmana does not rewrite evidence.



Parmana does not erase evidence.



Trust-chain artifacts are immutable.



Trust-chain artifacts are append-only.



Historical truth is preserved through immutable evidence.



