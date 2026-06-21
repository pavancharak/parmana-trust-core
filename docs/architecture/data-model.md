\# Data Model



\## Status



Canonical



\## Purpose



The Parmana Data Model defines the persistent storage structures used to preserve the Execution Trust Chain.



The data model exists to support:



\* Lineage reconstruction

\* Auditability

\* Evidence preservation

\* Verification

\* Execution accountability



The data model is append-only.



Trust-chain artifacts are immutable after creation.



\---



\# Core Principle



```text

Trust chains are persisted.



Trust chains are reconstructed.



Trust chains are never rewritten.

```



\---



\# Trust Chain Storage Model



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



Each artifact is stored independently.



Lineage identifiers connect the chain.



\---



\# Canonical Root Identifier



```text

businessTransactionId

```



All trust-chain artifacts reference:



```text

business\_transaction\_id

```



\---



\# Authority Decisions



\## Table



```text

authority\_decisions

```



\## Purpose



Stores authority evaluation outcomes.



\---



\## Columns



| Column                  | Type        | Required |

| ----------------------- | ----------- | -------- |

| id                      | bigint      | yes      |

| decision\_id             | text        | yes      |

| business\_transaction\_id | text        | yes      |

| subject\_id              | text        | no       |

| task\_id                 | text        | yes      |

| policy\_id               | text        | yes      |

| policy\_version          | text        | yes      |

| action                  | text        | yes      |

| reason                  | text        | yes      |

| decision                | jsonb       | yes      |

| created\_at              | timestamptz | yes      |



\---



\## Example



```json

{

&#x20; "decision\_id": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "business\_transaction\_id": "PAYMENT-E2E-001",

&#x20; "task\_id": "payment.release",

&#x20; "policy\_id": "payment-policy-v1",

&#x20; "policy\_version": "1.0.0",

&#x20; "action": "approved"

}

```



\---



\# Signal Evidence



\## Table



```text

signal\_evidence

```



\## Purpose



Stores evaluated signal snapshots.



\---



\## Columns



| Column                  | Type        | Required |

| ----------------------- | ----------- | -------- |

| id                      | bigint      | yes      |

| decision\_id             | text        | yes      |

| business\_transaction\_id | text        | yes      |

| signal\_snapshot         | jsonb       | yes      |

| created\_at              | timestamptz | yes      |



\---



\## Example



```json

{

&#x20; "business\_transaction\_id": "PAYMENT-E2E-001",

&#x20; "signal\_snapshot": {

&#x20;   "managerApproved": true,

&#x20;   "kycVerified": true

&#x20; }

}

```



\---



\# Decision Attestations



\## Table



```text

decision\_attestations

```



\## Purpose



Stores cryptographically signed decision evidence.



\---



\## Columns



| Column                  | Type        | Required |

| ----------------------- | ----------- | -------- |

| id                      | bigint      | yes      |

| decision\_id             | text        | yes      |

| business\_transaction\_id | text        | yes      |

| task\_id                 | text        | yes      |

| policy\_id               | text        | yes      |

| policy\_version          | text        | yes      |

| attestation             | jsonb       | yes      |

| created\_at              | timestamptz | yes      |



\---



\# Verification Receipts



\## Table



```text

verification\_receipts

```



\## Purpose



Stores attestation verification outcomes.



\---



\## Columns



| Column                  | Type        | Required |

| ----------------------- | ----------- | -------- |

| receipt\_id              | text        | yes      |

| business\_transaction\_id | text        | yes      |

| subject\_id              | text        | no       |

| decision\_id             | text        | yes      |

| task\_id                 | text        | yes      |

| policy\_id               | text        | yes      |

| policy\_version          | text        | yes      |

| valid                   | boolean     | yes      |

| verified\_algorithms     | text\[]      | yes      |

| failed\_algorithms       | text\[]      | yes      |

| verified\_at             | timestamptz | yes      |

| receipt\_hash            | text        | yes      |



\---



\# Execution Records



\## Table



```text

execution\_records

```



\## Purpose



Stores execution evidence.



\---



\## Columns



| Column                  | Type        | Required |

| ----------------------- | ----------- | -------- |

| execution\_id            | text        | yes      |

| business\_transaction\_id | text        | yes      |

| subject\_id              | text        | no       |

| decision\_id             | text        | yes      |

| receipt\_id              | text        | yes      |

| task\_id                 | text        | yes      |

| policy\_id               | text        | yes      |

| policy\_version          | text        | yes      |

| execution\_system        | text        | yes      |

| execution\_reference     | text        | yes      |

| execution\_status        | text        | yes      |

| executed\_at             | timestamptz | yes      |



\---



\# Lineage Relationships



```text

businessTransactionId

&#x20;       │

&#x20;       ▼

Signal Evidence

&#x20;       │

&#x20;       ▼

Decision

&#x20;       │

&#x20;       ▼

Attestation

&#x20;       │

&#x20;       ▼

Receipt

&#x20;       │

&#x20;       ▼

Execution

```



\---



\# Cardinality



\## Transaction → Decisions



```text

1:N

```



Example:



```text

PAYMENT-E2E-001



├─ Decision A

├─ Decision B

└─ Decision C

```



\---



\## Decision → Attestations



```text

1:N

```



\---



\## Decision → Receipts



```text

1:N

```



\---



\## Receipt → Executions



```text

1:N

```



\---



\# Persistence Rules



\## DM-001



Records are append-only.



\---



\## DM-002



Existing records must never be updated to change lineage history.



\---



\## DM-003



Lineage identifiers are immutable.



\---



\## DM-004



Trust-chain reconstruction must be possible using businessTransactionId.



\---



\## DM-005



Historical artifacts must remain queryable.



\---



\# Retrieval Model



Canonical retrieval:



```http

GET /trust-chain/{businessTransactionId}

```



Response:



```json

{

&#x20; "decision": {},

&#x20; "signals": \[],

&#x20; "attestations": \[],

&#x20; "receipts": \[],

&#x20; "executions": \[]

}

```



\---



\# Architectural Principle



The Parmana Data Model is not a workflow database.



It is an evidence database.



Its purpose is to preserve the lineage connecting:



```text

Signals

&#x20;   ↓

Decision

&#x20;   ↓

Attestation

&#x20;   ↓

Receipt

&#x20;   ↓

Execution

```



The data model exists to make every execution independently explainable, auditable, and verifiable.



