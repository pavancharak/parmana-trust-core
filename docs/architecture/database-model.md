\# Database Model



\## Purpose



Parmana preserves verifiable execution lineage.



Every record in the trust chain is persisted and retrievable through a shared lineage identifier:



```text

businessTransactionId

```



Canonical lineage:



```text

Subject

&#x20; ↓

Task

&#x20; ↓

Authority Decision

&#x20; ↓

Decision Attestation

&#x20; ↓

Verification Receipt

&#x20; ↓

Execution Trust Token

&#x20; ↓

Execution Record

&#x20; ↓

External System

```



\---



\# Design Principles



\## Immutable Evidence



Trust-chain records are append-only.



The following records MUST NOT be modified after creation:



```text

Authority Decisions

Decision Attestations

Verification Receipts

Execution Records

```



\---



\## Lineage Preservation



Every trust-chain artifact carries the lineage identifiers required to reconstruct execution history.



Core identifiers:



```text

businessTransactionId

decisionId

taskId

policyId

policyVersion

```



\---



\## Retrieval First



The database is optimized for:



```text

Trust Chain Retrieval

Audit Evidence

Regulatory Investigation

Execution Verification

```



rather than transactional throughput.



\---



\# authority\_decisions



Stores authority evaluation outcomes.



\## Columns



| Column                  | Type          |

| ----------------------- | ------------- |

| id                      | bigint        |

| decision\_id             | uuid          |

| business\_transaction\_id | text          |

| subject\_id              | text nullable |

| task\_id                 | text          |

| policy\_id               | text          |

| policy\_version          | text          |

| action                  | text          |

| reason                  | text          |

| decision                | jsonb         |

| created\_at              | timestamptz   |



\## Purpose



Represents the Authority Decision stage of the trust chain.



\## Example



```json

{

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "decision": "approved"

}

```



\---



\# signal\_evidence



Stores evaluated signal snapshots used during authority evaluation.



\## Columns



| Column                  | Type        |

| ----------------------- | ----------- |

| id                      | bigint      |

| decision\_id             | uuid        |

| business\_transaction\_id | text        |

| signal\_snapshot         | jsonb       |

| created\_at              | timestamptz |



\## Purpose



Preserves the exact signals evaluated during policy execution.



\## Example



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



\---



\# decision\_attestations



Stores cryptographic attestations generated from authority decisions.



\## Columns



| Column                  | Type  |

| ----------------------- | ----- |

| decision\_id             | uuid  |

| business\_transaction\_id | text  |

| task\_id                 | text  |

| policy\_id               | text  |

| policy\_version          | text  |

| attestation             | jsonb |



\## Purpose



Represents the Decision Attestation stage of the trust chain.



\## Attestation Contents



```text

Decision Identity

Policy Identity

Outcome

Evidence Hash

Cryptographic Signature

```



\---



\# verification\_receipts



Stores attestation verification outcomes.



\## Columns



| Column                  | Type          |

| ----------------------- | ------------- |

| receipt\_id              | uuid          |

| business\_transaction\_id | text          |

| subject\_id              | text nullable |

| decision\_id             | uuid          |

| task\_id                 | text          |

| policy\_id               | text          |

| policy\_version          | text          |

| valid                   | boolean       |

| verified\_algorithms     | jsonb         |

| failed\_algorithms       | jsonb         |

| verified\_at             | timestamptz   |

| receipt\_hash            | text          |



\## Purpose



Represents the Verification Receipt stage of the trust chain.



\## Example



```json

{

&#x20; "receiptId": "dd62643a-40af-4f1e-a51e-1b40eb89579d",

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "valid": true

}

```



\---



\# execution\_records



Stores execution outcomes authorized by valid verification receipts.



\## Columns



| Column                  | Type          |

| ----------------------- | ------------- |

| execution\_id            | uuid          |

| business\_transaction\_id | text          |

| subject\_id              | text nullable |

| decision\_id             | uuid          |

| receipt\_id              | uuid          |

| task\_id                 | text          |

| policy\_id               | text          |

| policy\_version          | text          |

| execution\_system        | text          |

| execution\_reference     | text          |

| execution\_status        | text          |

| executed\_at             | timestamptz   |



\## Purpose



Represents the Execution Record stage of the trust chain.



\## Example



```text

execution\_system = stripe

execution\_reference = pi\_e2e\_001

execution\_status = completed

```



\---



\# execution\_tokens (Trust Anchor v2)



Recommended future table for persistent token auditing and key management.



\## Columns



| Column                  | Type        |

| ----------------------- | ----------- |

| token\_id                | uuid        |

| business\_transaction\_id | text        |

| decision\_id             | uuid        |

| receipt\_id              | uuid        |

| task\_id                 | text        |

| policy\_id               | text        |

| policy\_version          | text        |

| key\_id                  | text        |

| root\_version            | text        |

| algorithm               | text        |

| issued\_at               | timestamptz |

| expires\_at              | timestamptz |

| signature               | text        |



\## Purpose



Supports:



```text

Execution Token Audit

Token Revocation

Trust Root Rotation

External Verification

KMS Migration

```



\---



\# Canonical Retrieval Model



The canonical retrieval identifier is:



```text

businessTransactionId

```



Example:



```http

GET /trust-chain/PAYMENT-E2E-001

```



Returns:



```text

Authority Decision

Signal Evidence

Decision Attestation

Verification Receipts

Execution Records

```



for the complete execution lineage.



\---



\# Database Invariants



\## INV-300



```text

businessTransactionId must remain stable across the trust chain.

```



\## INV-301



```text

decisionId uniquely identifies an authority decision.

```



\## INV-302



```text

Decision Attestations must reference a valid decisionId.

```



\## INV-303



```text

Verification Receipts must reference a valid decisionId.

```



\## INV-304



```text

Execution Records must reference a valid receiptId.

```



\## INV-305



```text

Execution Records may only originate from valid verification receipts.

```



\## INV-306



```text

Trust-chain records are append-only.

```



\## INV-307



```text

Execution Trust Tokens must be signed by a trusted trust anchor.

```



\---



\# Database Lineage Graph



```text

businessTransactionId

&#x20;         │

&#x20;         ▼

authority\_decisions

&#x20;         │

&#x20;         ▼

decision\_attestations

&#x20;         │

&#x20;         ▼

verification\_receipts

&#x20;         │

&#x20;         ▼

execution\_tokens

&#x20;         │

&#x20;         ▼

execution\_records

&#x20;         │

&#x20;         ▼

external\_system

```



\---



\# Trust Chain Retrieval Contract



A complete trust chain reconstruction must allow retrieval of:



```text

businessTransactionId

decisionId

receiptId

executionId

taskId

policyId

policyVersion

```



and reconstruct:



```text

Who requested the action

What task was requested

Which policy was evaluated

What decision was produced

What was attested

What was verified

What was authorized

What was executed

Which external system executed it

```



This database model serves as the canonical persistence architecture for Parmana Trust Core and the Execution Trust Chain v1.



