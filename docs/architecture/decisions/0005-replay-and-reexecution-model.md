\# ADR-0005: Replay and Re-execution Model



\## Status



Proposed



\## Date



2026-06-21



\## Context



Parmana preserves trust-chain artifacts across:



```text

Business Transaction

&#x20;       ↓

Authority Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



These artifacts provide evidence that an action was:



```text

Authorized

Attested

Verified

Executed

```



Organizations require the ability to later answer:



```text

Why was this decision made?



Would Parmana make the same decision again?



Can the decision be independently verified?



Can the authorization history be reconstructed?

```



These requirements introduce the concept of replay.



\## Problem



The term "replay" is frequently overloaded.



Replay may refer to:



```text

Recomputing a decision

Re-validating evidence

Re-verifying receipts

Re-executing actions

Reconstructing history

```



Without a formal definition, replay behavior becomes ambiguous.



Parmana requires a precise replay model.



\## Decision



Parmana replay SHALL mean:



```text

Reconstruction and re-evaluation of historical

authority and verification conditions.

```



Replay SHALL NOT execute actions.



Replay SHALL NOT mutate state.



Replay SHALL NOT authorize new actions.



Replay is a verification capability.



\## Replay Scope



Replay includes:



```text

Authority Evaluation

Verification Evaluation

Trust-Chain Reconstruction

```



Replay excludes:



```text

Execution

External System Actions

State Mutation

Financial Transfers

```



\## Replay Inputs



Replay requires:



```text

businessTransactionId

taskId

policyId

policyVersion

decisionId

receiptId

executionId

```



Replay may additionally require:



```text

schemaVersion

signalEvidence

signalHashes

attestationHash

receiptHash

```



when available.



\## Replay Process



Replay reconstructs:



```text

Task

Policy

Schema

Trusted Signals

Decision

Attestation

Receipt

Execution Evidence

```



from historical trust-chain artifacts.



Replay then performs:



```text

Authority Evaluation

Verification Evaluation

```



using reconstructed inputs.



\## Replay Outputs



Replay produces one of:



```text

MATCH

```



The reconstructed result matches the historical result.



```text

MISMATCH

```



The reconstructed result differs from the historical result.



```text

INSUFFICIENT\_EVIDENCE

```



Required replay artifacts are unavailable.



\## Replay Match



A replay is considered a MATCH when:



```text

Recorded Decision

=

Replayed Decision

```



and



```text

Recorded Verification Result

=

Replayed Verification Result

```



\## Replay Mismatch



A replay is considered a MISMATCH when:



```text

Recorded Decision

≠

Replayed Decision

```



or



```text

Recorded Verification Result

≠

Replayed Verification Result

```



Replay mismatches SHALL be recorded as audit events.



\## Historical Version Rule



Replay SHALL use:



```text

Historical Policy Version

Historical Schema Version

Historical Trust Artifacts

```



Replay SHALL NOT substitute:



```text

Current Policy Versions

Current Schema Versions

Current Trust Artifacts

```



when historical artifacts exist.



\## Determinism Requirement



Replay depends on deterministic authority evaluation.



The following invariant applies:



```text

INV-180

```



```text

Identical task, policy and trusted signals

MUST produce identical authority decisions.

```



\## Re-execution



Re-execution is distinct from replay.



Replay:



```text

Reconstructs

Re-evaluates

Verifies

```



Re-execution:



```text

Invokes external systems again

```



Parmana SHALL NOT perform re-execution as part of replay.



\## Replay Boundary



Parmana governs:



```text

Authority

Attestation

Verification

Lineage

```



Parmana does not govern:



```text

Execution Systems

Banking Systems

ERP Systems

Payment Networks

External APIs

```



Therefore replay terminates at the execution record.



\## Replay Result Record



Future versions MAY persist:



```text

replayId

replayTimestamp

replayOutcome

replayEvidence

```



to create an auditable replay history.



\## Canonical Replay Flow



```text

businessTransactionId

&#x20;       ↓

Retrieve Trust Chain

&#x20;       ↓

Reconstruct Inputs

&#x20;       ↓

Replay Authority Evaluation

&#x20;       ↓

Replay Verification

&#x20;       ↓

Compare Historical Results

&#x20;       ↓

MATCH | MISMATCH | INSUFFICIENT\_EVIDENCE

```



\## Consequences



\### Positive



\- Independent verification capability.

\- Strong audit support.

\- Deterministic governance validation.

\- Forensic investigation support.

\- Compliance evidence generation.



\### Negative



\- Historical artifact retention requirements.

\- Additional storage requirements.

\- Additional replay infrastructure.



\## Related Decisions



\- ADR-0001: Subject ID Reclassification

\- ADR-0002: Execution Trust Chain

\- ADR-0003: Authority Evaluation Model

\- ADR-0004: Business Transaction Binding



\## Decision Statement



Parmana replay SHALL reconstruct and re-evaluate historical authority and verification conditions.



Replay SHALL NOT execute actions.



Replay SHALL use historical trust-chain artifacts.



Replay SHALL produce:



```text

MATCH

MISMATCH

INSUFFICIENT\_EVIDENCE

```



as auditable replay outcomes.



\## Replay Architecture



Replay operates on preserved trust-chain artifacts.



Replay does not operate on live execution systems.



The replay architecture is:



```text

businessTransactionId

&#x20;       ↓

Retrieve Trust Chain

&#x20;       ↓

Decision

Attestation

Receipt

Execution Record

&#x20;       ↓

Reconstruct Evaluation Inputs

&#x20;       ↓

Replay Authority Evaluation

&#x20;       ↓

Replay Verification

&#x20;       ↓

Compare Outcomes

&#x20;       ↓

MATCH | MISMATCH | INSUFFICIENT\_EVIDENCE

```



Replay is therefore a governance function rather than an operational function.



\## Authority Replay



Authority replay reconstructs:



```text

taskId

policyVersion

trusted signals

```



and evaluates:



```text

Decision =

f(taskId, policy, trusted signals)

```



The replayed decision is compared against the recorded decision.



Example:



```text

Recorded Decision:

APPROVED



Replayed Decision:

APPROVED



Outcome:

MATCH

```



\## Verification Replay



Verification replay reconstructs:



```text

Attestation

Receipt

Verification Evidence

```



and validates:



```text

Attestation Integrity

Receipt Integrity

Verification Logic

```



The replayed verification result is compared against the recorded verification result.



\## Execution Replay



Execution replay is intentionally excluded.



Parmana does not replay:



```text

Bank Payments

ERP Updates

CRM Actions

Database Mutations

External API Calls

```



Execution replay would introduce:



```text

Duplicate Payments

Duplicate Orders

Duplicate Actions

Operational Risk

```



Therefore execution replay is prohibited.



\## Execution Evidence Review



Although execution is not replayed, execution evidence may be reviewed.



Replay may inspect:



```text

executionId

executionReference

executionSystem

executionStatus

executedAt

```



to determine what occurred historically.



Execution evidence review does not invoke execution systems.



\## Replay Evidence Package



Replay SHOULD produce an evidence package.



The package may contain:



```text

businessTransactionId

decisionId

receiptId

executionId

policyVersion

replayOutcome

replayTimestamp

```



This package serves as audit evidence.



\## Replay Invariants



\### INV-300



Replay SHALL NOT invoke execution systems.



\### INV-301



Replay SHALL use historical trust-chain artifacts when available.



\### INV-302



Replay SHALL record replay outcomes.



\### INV-303



Replay SHALL distinguish replay from authorization.



A successful replay does not authorize a new action.



\### INV-304



Replay SHALL distinguish replay from execution.



A successful replay does not execute an action.



\## Replay Failure Modes



Replay may fail due to:



```text

Missing Policy Version

Missing Schema Version

Missing Signals

Missing Attestation

Missing Receipt

Corrupted Evidence

```



Replay failures SHALL produce:



```text

INSUFFICIENT\_EVIDENCE

```



rather than authorization outcomes.



Replay is verification, not authorization.



\## Future API



Future versions may expose:



```text

POST /replay

```



Request:



```json

{

&#x20; "businessTransactionId": "PAYMENT-123"

}

```



Response:



```json

{

&#x20; "replayId": "replay-001",

&#x20; "outcome": "MATCH",

&#x20; "decisionId": "...",

&#x20; "receiptId": "...",

&#x20; "executionId": "..."

}

```



This API is outside the scope of the current implementation.



\## Replay Storage Requirements



Replay depends on preservation of historical trust-chain artifacts.



A replay-capable Parmana deployment SHALL retain sufficient evidence to reconstruct historical authorization conditions.



Replay storage requirements are independent of execution systems.



\### Required Artifacts



The following artifacts SHALL be retained:



```text

Authority Decision

Attestation

Verification Receipt

Execution Record

```



\### Required Identifiers



The following identifiers SHALL remain retrievable:



```text

businessTransactionId

decisionId

receiptId

executionId

```



\### Required Historical Metadata



Replay SHOULD preserve:



```text

taskId

policyId

policyVersion

schemaVersion

evaluationTimestamp

verificationTimestamp

executionTimestamp

```



to support historical reconstruction.



\## Replay Evidence Hierarchy



Replay evidence is evaluated in the following order:



```text

Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



Trust-chain artifacts closer to the original decision are considered higher-fidelity replay evidence.



\### Decision Evidence



Provides:



```text

Authorization Outcome

Policy Context

Evaluation Context

```



\### Attestation Evidence



Provides:



```text

Cryptographic Integrity

Decision Binding

Evidence Preservation

```



\### Verification Receipt Evidence



Provides:



```text

Verification Outcome

Receipt Integrity

Verification Timestamp

```



\### Execution Evidence



Provides:



```text

Execution Status

Execution Reference

Execution Timestamp

```



Execution evidence describes what occurred but does not determine authorization.



\## Replay Retention Principle



Replay capability degrades when artifacts are lost.



Example:



```text

Decision retained

Policy retained

Signals retained

```



Replay:



```text

MATCH possible

```



Example:



```text

Decision retained

Policy missing

```



Replay:



```text

INSUFFICIENT\_EVIDENCE

```



Replay SHALL NOT invent missing artifacts.



Replay SHALL NOT substitute guessed values.



\## Replay Trust Levels



Replay outcomes may be assigned trust levels.



\### Level 1 — Full Replay



All required artifacts available.



```text

Decision

Attestation

Receipt

Execution Record

```



Result:



```text

Highest Confidence

```



\### Level 2 — Partial Replay



Execution evidence unavailable.



```text

Decision

Attestation

Receipt

```



Result:



```text

Moderate Confidence

```



\### Level 3 — Limited Replay



Only decision artifacts available.



```text

Decision

Policy

```



Result:



```text

Limited Confidence

```



\### Level 4 — Insufficient Evidence



Required artifacts unavailable.



Result:



```text

INSUFFICIENT\_EVIDENCE

```



\## Replay Audit Record



Future replay operations SHOULD generate a replay audit record.



Suggested fields:



```text

replayId

businessTransactionId

decisionId

receiptId

executionId

replayTimestamp

replayOutcome

replayTrustLevel

```



Replay audit records SHALL be append-only.



Replay audit records SHALL NOT modify historical trust-chain artifacts.



\## Replay Philosophy



Replay exists to answer:



```text

Can the historical authorization be independently reconstructed and verified?

```



Replay does not exist to:



```text

Approve new actions

Execute actions

Modify history

Correct history

```



Replay is evidence reconstruction.



Replay is independent verification.



Replay is a governance capability.

