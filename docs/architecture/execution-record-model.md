\# Execution Record Model



\## Status



Canonical



\## Purpose



The Execution Record Model defines how Parmana preserves evidence that an external system executed an authorized action.



Execution Records represent the final artifact in the Execution Trust Chain.



They establish the link between:



\* Verified authority

\* Verified attestation

\* Verified receipt

\* Actual external execution



Execution Records do not perform execution.



Execution Records preserve evidence that execution occurred.



\---



\# Core Principle



```text

Parmana does not execute actions.



Parmana preserves evidence that execution occurred.

```



Execution is performed by external systems.



Parmana records the execution lineage.



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



Execution Records represent the final trust-chain artifact.



\---



\# What Is An Execution Record?



An Execution Record is an immutable artifact that records:



\* What was executed

\* Which receipt authorized execution

\* Which decision authorized execution

\* Which system executed the action

\* The resulting execution status

\* When execution occurred



Execution Records provide execution accountability.



\---



\# Execution Record Structure



Example:



```json

{

&#x20; "executionId": "e851b9c6-c7fb-439c-aedb-c8486734dc85",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "receiptId": "dd62643a-40af-4f1e-a51e-1b40eb89579d",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "executionSystem": "stripe",

&#x20; "executionReference": "pi\_e2e\_001",

&#x20; "executionStatus": "completed",

&#x20; "executedAt": "2026-06-21T04:49:44.281Z"

}

```



\---



\# executionId



Purpose:



```text

Unique execution artifact

```



Characteristics:



```text

Required



Globally Unique



Immutable

```



Example:



```text

e851b9c6-c7fb-439c-aedb-c8486734dc85

```



Every execution record must have a unique execution identifier.



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



Every execution record must reference a business transaction.



This allows complete trust-chain reconstruction.



\---



\# decisionId



Purpose:



```text

Authorizing decision reference

```



Example:



```text

f6964bd8-abf0-401b-81ce-d344e93c0c2e

```



Execution records preserve the decision lineage that authorized execution.



\---



\# receiptId



Purpose:



```text

Execution authorization reference

```



Example:



```text

dd62643a-40af-4f1e-a51e-1b40eb89579d

```



Every execution record must reference the receipt that authorized execution.



\---



\# taskId



Purpose:



```text

Executed task reference

```



Example:



```text

payment.release

```



Execution records preserve the action that was authorized.



\---



\# policyId



Purpose:



```text

Governing policy reference

```



Example:



```text

payment-policy-v1

```



Execution records preserve policy lineage.



\---



\# policyVersion



Purpose:



```text

Exact evaluated policy version

```



Example:



```text

1.0.0

```



Execution records preserve the exact policy used during authorization.



\---



\# executionSystem



Purpose:



```text

External execution destination

```



Examples:



```text

stripe



salesforce



workday



sap



servicenow

```



Execution Records identify the system that performed execution.



\---



\# executionReference



Purpose:



```text

External execution identifier

```



Examples:



```text

pi\_e2e\_001



txn\_7844



case\_5521

```



This identifier originates from the external system.



It provides cross-system correlation.



\---



\# executionStatus



Purpose:



```text

Execution outcome

```



Supported values:



```text

pending



completed



failed

```



Example:



```json

{

&#x20; "executionStatus": "completed"

}

```



Execution status describes what happened in the external system.



\---



\# executedAt



Purpose:



```text

Execution timestamp

```



Example:



```text

2026-06-21T04:49:44.281Z

```



Characteristics:



```text

Immutable



UTC



Audit Evidence

```



\---



\# Execution Flow



```text

Verification Receipt

&#x20;         ↓

Execution Authorization

&#x20;         ↓

External System

&#x20;         ↓

Execution Record

```



Execution Records are created after execution occurs.



\---



\# Relationship To Receipts



Execution Records consume Verification Receipts.



```text

Verification Receipt

&#x20;         ↓

Execution Record

```



Execution without a receipt violates the trust chain.



\---



\# Relationship To Decisions



Execution Records preserve decision lineage.



```text

Authority Decision

&#x20;        ↓

Verification Receipt

&#x20;        ↓

Execution Record

```



Execution Records make it possible to determine:



```text

Why execution happened

```



\---



\# Relationship To External Systems



External systems remain systems of record.



Examples:



```text

Stripe



Salesforce



SAP



Workday



Banking Platforms

```



Parmana does not replace external systems.



Parmana records trust-chain evidence linking authorization to execution.



\---



\# Execution Persistence



Execution Records are persisted.



Stored attributes include:



```text

executionId



businessTransactionId



subjectId



decisionId



receiptId



taskId



policyId



policyVersion



executionSystem



executionReference



executionStatus



executedAt

```



Execution Records are immutable.



\---



\# Retrieval



Execution Records are retrievable through:



```http

GET /trust-chain/{businessTransactionId}

```



Example:



```json

{

&#x20; "executions": \[

&#x20;   {

&#x20;     "execution\_id": "...",

&#x20;     "execution\_system": "stripe",

&#x20;     "execution\_status": "completed"

&#x20;   }

&#x20; ]

}

```



\---



\# Historical Execution



Multiple execution records may exist for a transaction.



Example:



```text

PAYMENT-001



├─ Execution Attempt 1 (failed)

├─ Execution Attempt 2 (failed)

└─ Execution Attempt 3 (completed)

```



Execution history must be preserved.



Execution Records are append-only.



\---



\# Execution Invariants



\## EXE-001



Every execution record must have a unique executionId.



\---



\## EXE-002



Every execution record must reference a businessTransactionId.



\---



\## EXE-003



Every execution record must reference a decisionId.



\---



\## EXE-004



Every execution record must reference a receiptId.



\---



\## EXE-005



Every execution record must reference an executionSystem.



\---



\## EXE-006



Every execution record must record executionStatus.



\---



\## EXE-007



Execution Records are immutable after creation.



\---



\## EXE-008



Execution Records must be persisted after execution.



\---



\## EXE-009



Execution Records must be retrievable through lineage reconstruction.



\---



\## EXE-010



Execution Records do not perform execution.



They preserve evidence of execution.



\---



\# Architectural Principle



Authority decides whether execution is allowed.



Verification confirms that authority was properly established.



External systems perform execution.



Execution Records preserve the evidence connecting:



```text

Authority

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



Execution Records complete the Execution Trust Chain and provide the final proof that an authorized action was performed by an external system.



