\# Replay Record v1 Specification



\## Status



Draft



\## Version



v1.0.0



\## Purpose



A Replay Record captures the outcome of a replay operation.



Replay records provide durable evidence that a historical Parmana trust chain was independently reconstructed and evaluated.



Replay records are audit artifacts.



Replay records do not modify historical trust-chain artifacts.



Replay records do not authorize actions.



Replay records do not execute actions.



\---



\# Scope



Replay records capture:



```text

Replay Request

Replay Inputs

Replay Outcome

Replay Timestamp

Replay Evidence

```



Replay records do not alter:



```text

Authority Decisions

Attestations

Verification Receipts

Execution Records

```



\---



\# Replay Record Lifecycle



```text

Replay Request

&#x20;       ↓

Trust Chain Retrieval

&#x20;       ↓

Historical Reconstruction

&#x20;       ↓

Replay Evaluation

&#x20;       ↓

Replay Outcome

&#x20;       ↓

Replay Record

```



Replay records are generated after replay completion.



\---



\# Replay Record Model



\## ReplayRecord



```json

{

&#x20; "replayId": "replay-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "decisionId": "dec-001",

&#x20; "receiptId": "rec-001",

&#x20; "executionId": "exec-001",

&#x20; "outcome": "MATCH",

&#x20; "trustLevel": "FULL",

&#x20; "replayedAt": "2026-06-21T12:00:00Z"

}

```



\---



\# Required Fields



| Field                 | Type      | Required |

| --------------------- | --------- | -------- |

| replayId              | string    | Yes      |

| businessTransactionId | string    | Yes      |

| outcome               | enum      | Yes      |

| replayedAt            | timestamp | Yes      |



\---



\# Optional Fields



| Field            | Type   |

| ---------------- | ------ |

| decisionId       | string |

| receiptId        | string |

| executionId      | string |

| replayEvidence   | object |

| trustLevel       | enum   |

| replayDurationMs | number |



\---



\# Replay Outcome Values



\## MATCH



Replay reproduced the historical result.



```text

Recorded Decision

=

Replayed Decision

```



and



```text

Recorded Verification

=

Replayed Verification

```



\---



\## MISMATCH



Replay produced a different result.



```text

Recorded Decision

≠

Replayed Decision

```



or



```text

Recorded Verification

≠

Replayed Verification

```



\---



\## INSUFFICIENT\_EVIDENCE



Replay could not reconstruct required inputs.



Examples:



```text

Missing Policy Version

Missing Signals

Missing Attestation

Missing Receipt

```



\---



\# Trust Levels



Replay confidence is expressed through trust levels.



\## FULL



Available:



```text

Decision

Attestation

Receipt

Execution Record

```



Highest replay confidence.



\---



\## PARTIAL



Available:



```text

Decision

Attestation

Receipt

```



Execution evidence unavailable.



\---



\## LIMITED



Available:



```text

Decision

Policy

```



Partial reconstruction only.



\---



\## UNKNOWN



Trust level cannot be determined.



\---



\# Replay Evidence Model



\## ReplayEvidence



```json

{

&#x20; "historicalDecision": "approved",

&#x20; "replayedDecision": "approved",

&#x20; "historicalVerification": true,

&#x20; "replayedVerification": true

}

```



Replay evidence explains how the replay outcome was determined.



\---



\# Replay Mismatch Model



\## ReplayMismatch



```json

{

&#x20; "field": "decision",

&#x20; "historicalValue": "approved",

&#x20; "replayedValue": "denied"

}

```



A replay record may contain multiple mismatches.



\---



\# Replay Record Persistence



Replay records SHALL be immutable.



Replay records SHALL be append-only.



Replay records SHALL NOT overwrite prior replay records.



Multiple replay records may exist for the same:



```text

businessTransactionId

```



Example:



```text

Replay #1

Replay #2

Replay #3

```



Each replay produces a distinct replay record.



\---



\# Replay Identifiers



\## replayId



Unique identifier for the replay operation.



Example:



```text

replay-001

```



\## businessTransactionId



Primary replay lookup identifier.



Example:



```text

PAYMENT-123

```



\## decisionId



Associated authority decision.



\## receiptId



Associated verification receipt.



\## executionId



Associated execution record.



\---



\# Replay Retrieval



Future APIs may support:



```http

GET /replay/{replayId}

```



```http

GET /replay/business-transaction/{businessTransactionId}

```



```http

GET /replay/decision/{decisionId}

```



\---



\# Replay Audit Trail



Replay records provide an independent audit trail.



The audit trail answers:



```text

When was replay performed?



What evidence was available?



What outcome was produced?



Did replay match historical results?

```



\---



\# Replay Integrity



Replay records SHALL preserve:



```text

businessTransactionId

decisionId

receiptId

executionId

```



when available.



Replay records SHALL NOT modify historical identifiers.



Replay records SHALL reference historical trust-chain artifacts.



\---



\# Replay Storage Requirements



Replay records SHOULD preserve:



```text

Replay Inputs

Replay Outputs

Replay Evidence

Replay Timestamp

Trust Level

```



to support future investigations.



\---



\# Security Considerations



Replay records are read-only audit artifacts.



Replay records SHALL NOT:



```text

Authorize Actions

Execute Actions

Modify History

Delete Trust Artifacts

```



Replay records exist solely for evidence preservation.



\---



\# Future Extensions



Future versions MAY support:



```text

Cryptographic Replay Proofs

Replay Signatures

Replay Attestations

Replay Evidence Packages

Replay Exports

```



\---



\# Canonical Principle



Replay records answer:



```text

What happened when Parmana independently reconstructed and evaluated a historical trust chain?

```



Replay records do not change historical outcomes.



Replay records preserve independent verification evidence.



Replay records are immutable audit artifacts.



