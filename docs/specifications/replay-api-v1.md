\# Replay API v1 Specification



\## Status



Draft



\## Version



v1.0.0



\## Purpose



The Replay API provides independent reconstruction and verification of historical Parmana trust-chain artifacts.



Replay allows organizations to determine whether a historical authorization remains reproducible from preserved evidence.



Replay is a verification capability.



Replay is not authorization.



Replay is not execution.



Replay does not modify historical artifacts.



\---



\# Scope



Replay evaluates:



```text

Authority Decisions

Attestations

Verification Receipts

Trust-Chain Integrity

```



Replay does not perform:



```text

Execution

External API Calls

Bank Payments

ERP Updates

CRM Updates

State Changes

```



\---



\# Replay Outcomes



A replay operation produces one of:



```text

MATCH

```



Historical and replayed outcomes are identical.



```text

MISMATCH

```



Historical and replayed outcomes differ.



```text

INSUFFICIENT\_EVIDENCE

```



Required replay artifacts are unavailable.



\---



\# Replay Request Model



\## ReplayRequest



```json

{

&#x20; "businessTransactionId": "PAYMENT-123"

}

```



\### Fields



| Field                 | Type   | Required | Description                          |

| --------------------- | ------ | -------- | ------------------------------------ |

| businessTransactionId | string | Yes      | Root business transaction identifier |



\---



\# Replay Response Model



\## ReplayResponse



```json

{

&#x20; "replayId": "replay-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "decisionId": "dec-123",

&#x20; "receiptId": "rec-123",

&#x20; "executionId": "exec-123",

&#x20; "outcome": "MATCH",

&#x20; "trustLevel": "FULL",

&#x20; "replayedAt": "2026-06-21T12:00:00Z"

}

```



\### Fields



| Field                 | Type      | Description                            |

| --------------------- | --------- | -------------------------------------- |

| replayId              | string    | Unique replay identifier               |

| businessTransactionId | string    | Root transaction identifier            |

| decisionId            | string    | Decision identifier                    |

| receiptId             | string    | Verification receipt identifier        |

| executionId           | string    | Execution identifier                   |

| outcome               | enum      | MATCH, MISMATCH, INSUFFICIENT\_EVIDENCE |

| trustLevel            | enum      | FULL, PARTIAL, LIMITED                 |

| replayedAt            | timestamp | Replay execution timestamp             |



\---



\# API Endpoint



\## POST /replay



Initiates replay of a historical business transaction.



\### Request



```http

POST /replay

Content-Type: application/json

```



```json

{

&#x20; "businessTransactionId": "PAYMENT-123"

}

```



\### Success Response



```http

200 OK

```



```json

{

&#x20; "replayId": "replay-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "outcome": "MATCH"

}

```



\---



\# Replay Workflow



```text

businessTransactionId

&#x20;       ↓

Retrieve Decision

&#x20;       ↓

Retrieve Attestation

&#x20;       ↓

Retrieve Receipt

&#x20;       ↓

Retrieve Execution Record

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



\---



\# Trust Chain Retrieval



Replay SHALL retrieve:



```text

Decision

Attestation

Verification Receipt

Execution Record

```



using:



```text

businessTransactionId

```



as the primary lookup key.



\---



\# Replay Evaluation



Replay SHALL reconstruct:



```text

taskId

policyId

policyVersion

trusted signals

```



and evaluate:



```text

Decision =

f(taskId, policy, trusted signals)

```



using historical artifacts.



\---



\# Replay Match Rules



Replay SHALL return:



```text

MATCH

```



when:



```text

Historical Decision

=

Replayed Decision

```



and



```text

Historical Verification Result

=

Replayed Verification Result

```



\---



\# Replay Mismatch Rules



Replay SHALL return:



```text

MISMATCH

```



when:



```text

Historical Decision

≠

Replayed Decision

```



or



```text

Historical Verification Result

≠

Replayed Verification Result

```



\---



\# Insufficient Evidence Rules



Replay SHALL return:



```text

INSUFFICIENT\_EVIDENCE

```



when required artifacts are unavailable.



Examples:



```text

Missing Policy Version

Missing Decision

Missing Attestation

Missing Receipt

Missing Verification Data

```



\---



\# Trust Levels



\## FULL



Artifacts available:



```text

Decision

Attestation

Receipt

Execution Record

```



\## PARTIAL



Artifacts available:



```text

Decision

Attestation

Receipt

```



Execution evidence unavailable.



\## LIMITED



Artifacts available:



```text

Decision

Policy

```



Only partial reconstruction possible.



\---



\# Replay Record



Replay operations SHOULD create a replay record.



\## ReplayRecord



```json

{

&#x20; "replayId": "replay-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "decisionId": "dec-123",

&#x20; "receiptId": "rec-123",

&#x20; "executionId": "exec-123",

&#x20; "outcome": "MATCH",

&#x20; "trustLevel": "FULL",

&#x20; "replayedAt": "2026-06-21T12:00:00Z"

}

```



\---



\# Replay Invariants



\## INV-300



Replay SHALL NOT invoke execution systems.



\## INV-301



Replay SHALL use historical trust-chain artifacts.



\## INV-302



Replay SHALL record replay outcomes.



\## INV-303



Replay SHALL NOT authorize actions.



\## INV-304



Replay SHALL NOT execute actions.



\---



\# Security Considerations



Replay is read-only.



Replay SHALL:



```text

Not modify decisions

Not modify attestations

Not modify receipts

Not modify execution records

```



Replay SHALL preserve historical evidence.



\---



\# Future Enhancements



Future versions MAY support:



```text

Replay by decisionId

Replay by receiptId

Replay by executionId

Replay evidence packages

Replay cryptographic proofs

Replay audit exports

```



\---



\# Canonical Principle



Replay answers:



```text

Can the historical authorization be independently reconstructed and verified?

```



Replay does not answer:



```text

Should the action execute again?

```



Execution and replay are separate concerns.



