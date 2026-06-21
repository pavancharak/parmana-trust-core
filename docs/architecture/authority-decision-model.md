\# Authority Decision Model



\## Status



Canonical



\## Purpose



The Authority Decision Model defines how Parmana determines whether a requested task is authorized under organizational policy.



Authority decisions are the central control point of the Parmana architecture.



They represent the outcome of evaluating trusted signals against organizational policy.



Authority decisions determine whether execution may proceed.



\---



\# Core Principle



```text

AI has intelligence.



Humans have authority.



Intelligence generates actions.



Authority decides what is allowed.

```



Parmana exists to verify authority before execution.



\---



\# What Is An Authority Decision?



An authority decision is the outcome of policy evaluation.



The decision answers a single question:



```text

Is this task authorized?

```



Possible outcomes:



```text

approved



denied

```



Future implementations may support:



```text

approved



denied



requires-review



deferred

```



The initial canonical model uses:



```text

approved



denied

```



\---



\# Authority Evaluation



Authority evaluation combines:



```text

Task

&#x20;   +

Policy

&#x20;   +

Signals

```



Example:



Task:



```text

payment.release

```



Signals:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



Policy:



```text

managerApproved == true

AND

kycVerified == true

```



Decision:



```text

approved

```



\---



\# Authority Evaluation Flow



```text

Task

&#x20;  ↓

Policy Lookup

&#x20;  ↓

Signal Collection

&#x20;  ↓

Policy Evaluation

&#x20;  ↓

Authority Decision

```



Parmana does not execute actions.



Parmana determines whether execution is authorized.



\---



\# Authority Decision Record



Example:



```json

{

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "decision": "approved",

&#x20; "reasons": \[]

}

```



\---



\# Decision Components



\## decisionId



Unique identifier for the decision.



Example:



```text

f6964bd8-abf0-401b-81ce-d344e93c0c2e

```



Characteristics:



```text

Required



Immutable



Globally unique

```



\---



\## businessTransactionId



Root lineage identifier.



Example:



```text

PAYMENT-E2E-001

```



Characteristics:



```text

Required



Business-defined



Stable

```



Every authority decision must reference a business transaction.



\---



\## taskId



Represents the requested action.



Examples:



```text

payment.release



refund.issue



transfer.execute

```



Characteristics:



```text

Required



Business-defined

```



\---



\## policyId



Represents the governing policy.



Examples:



```text

payment-policy-v1



refund-policy-v2

```



Characteristics:



```text

Required



Versioned

```



\---



\## policyVersion



Represents the exact policy version evaluated.



Examples:



```text

1.0.0



2.1.3

```



Characteristics:



```text

Required



Immutable

```



\---



\## decision



Represents the authority outcome.



Examples:



```text

approved



denied

```



Characteristics:



```text

Required



Immutable

```



\---



\## reasons



Provides explanatory information.



Examples:



```json

\[

&#x20; "manager approval missing"

]

```



or



```json

\[]

```



for successful evaluations.



Characteristics:



```text

Optional



Human-readable



Non-authoritative

```



The decision outcome remains authoritative.



Reasons provide explanation.



\---



\# Relationship To Policy



Authority decisions are produced by policy evaluation.



```text

Policy

&#x20;   +

Signals

&#x20;     ↓

Authority Decision

```



Policies define requirements.



Decisions represent outcomes.



\---



\# Relationship To Signals



Signals provide facts.



Authority decisions evaluate facts.



```text

Signals

&#x20;    ↓

Policy Evaluation

&#x20;    ↓

Decision

```



Signals do not directly authorize execution.



Policies authorize execution.



\---



\# Relationship To Attestations



Authority decisions are the input to attestation generation.



```text

Authority Decision

&#x20;       ↓

Decision Attestation

```



Attestations cryptographically preserve the decision.



\---



\# Relationship To Trust Chain



Authority decisions occupy the central position in the Execution Trust Chain.



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



\---



\# Persistence



Authority decisions are persisted.



Stored information includes:



```text

decisionId



businessTransactionId



subjectId



taskId



policyId



policyVersion



decision



reasons

```



Authority decisions are immutable after creation.



\---



\# Retrieval



Authority decisions are retrievable through:



```http

GET /trust-chain/{businessTransactionId}

```



Example:



```json

{

&#x20; "decision": {

&#x20;   "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20;   "decision": "approved"

&#x20; }

}

```



\---



\# Decision History



A business transaction may contain multiple decisions.



Example:



```text

PAYMENT-E2E-001



├─ Decision A

├─ Decision B

└─ Decision C

```



Historical decisions must be preserved.



Authority decisions are append-only.



Previous decisions must never be overwritten.



\---



\# Authority Boundaries



Parmana does not:



```text

Execute actions



Move money



Modify external systems



Perform business operations

```



Parmana only determines whether execution is authorized.



Execution remains the responsibility of external systems.



\---



\# Decision Invariants



\## DEC-001



Every authority decision must reference a businessTransactionId.



\---



\## DEC-002



Every authority decision must reference a taskId.



\---



\## DEC-003



Every authority decision must reference a policyId.



\---



\## DEC-004



Every authority decision must reference a policyVersion.



\---



\## DEC-005



Every authority decision must have a unique decisionId.



\---



\## DEC-006



Authority decisions are immutable after creation.



\---



\## DEC-007



Authority decisions must be persisted before attestation generation.



\---



\## DEC-008



Authority decisions must be retrievable through lineage reconstruction.



\---



\# Architectural Principle



Authority is not execution.



Authority determines whether execution is permitted.



Parmana evaluates trusted signals against organizational policy and produces an authority decision.



That decision becomes the authoritative source for all subsequent trust-chain artifacts.



Authority decisions are the foundation upon which attestations, verification receipts, and execution records are built.



