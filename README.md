\# Parmana



\*\*Parmana prevents unauthorized autonomous actions.\*\*



Parmana verifies human-defined authority and organizational policy before autonomous systems act.



\---



\## Why Parmana?



AI systems can generate actions.



Organizations must decide whether those actions are authorized.



Parmana sits between intent and execution, ensuring that authority, policy, attestation, verification, and execution are cryptographically linked and auditable.



```text

AI / Application

&#x20;      ↓

Authority Evaluation

&#x20;      ↓

Decision Attestation

&#x20;      ↓

Verification Receipt

&#x20;      ↓

Execution

```



\---



\## Core Principle



```text

AI has intelligence.

Humans have authority.



Intelligence generates actions.

Authority decides what is allowed.

```



Parmana makes authority verifiable and enforceable before execution.



\---



\## Execution Trust Chain



Parmana implements a complete Execution Trust Chain.



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



Every artifact is persisted and retrievable.



\---



\## Trust Chain Lineage



Each transaction is linked through a business transaction identifier.



```text

businessTransactionId

```



Associated lineage identifiers:



```text

businessTransactionId

decisionId

receiptId

executionId

taskId

policyId

policyVersion

subjectId (optional)

```



\---



\## Example



```text

PAYMENT-E2E-001

```



Signals:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



Decision:



```json

{

&#x20; "decision": "approved",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1"

}

```



Receipt:



```json

{

&#x20; "valid": true,

&#x20; "receiptId": "..."

}

```



Execution:



```json

{

&#x20; "executionSystem": "stripe",

&#x20; "executionReference": "pi\_12345"

}

```



\---



\## Trust Chain Retrieval



Retrieve the complete lineage:



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



\## Architecture



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Policy

&#x20;  ↓

Authority Decision

&#x20;  ↓

Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Record

&#x20;  ↓

External System

```



\---



\## What Parmana Stores



\### Signal Evidence



Evidence used during policy evaluation.



```json

{

&#x20; "kycVerified": true,

&#x20; "managerApproved": true

}

```



\### Authority Decisions



Policy evaluation outcome.



```json

{

&#x20; "decision": "approved"

}

```



\### Decision Attestations



Cryptographically signed decision artifacts.



\### Verification Receipts



Proof that attestation validation succeeded.



\### Execution Records



Evidence that an external system executed the approved action.



\---



\## Design Goals



\* Human authority before execution

\* Policy-driven authorization

\* Cryptographic attestations

\* Verifiable execution lineage

\* Audit-ready evidence

\* Replayable trust chain

\* System-of-record neutrality



\---



\## Current Status



```text

Execution Trust Chain

✓ Completed



Signal Evidence

✓ Persisted



Authority Decision

✓ Persisted



Decision Attestation

✓ Persisted



Verification Receipt

✓ Persisted



Execution Record

✓ Persisted



Trust Chain Retrieval

✓ Implemented

```



\---



\## Vision



Organizations decide what to trust.



Parmana ensures those trusted signals satisfy policy before execution.



Parmana makes sure autonomous systems follow human rules before they act.



