\# Signal Evidence Model



\## Status



Canonical



\## Purpose



The Signal Evidence Model defines how Parmana represents, preserves, and retrieves the facts used during authority evaluation.



Signals are the evidence upon which authority decisions are made.



Parmana does not determine whether a signal is trustworthy.



Organizations determine which signals they trust.



Parmana evaluates those trusted signals against policy before execution.



\---



\# Core Principle



```text

Organizations decide what to trust.



Parmana ensures trusted signals satisfy policy before execution.

```



Signals are facts.



Policies evaluate facts.



Decisions are derived from policy evaluation.



\---



\# What Is A Signal?



A signal is a verifiable fact supplied during authority evaluation.



Examples:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



```json

{

&#x20; "accountBalance": 50000,

&#x20; "requestedAmount": 10000

}

```



```json

{

&#x20; "invoiceApproved": true,

&#x20; "vendorVerified": true

}

```



Signals are inputs to authority evaluation.



\---



\# Signal Characteristics



Signals must be:



```text

Observable



Verifiable



Structured



Policy-relevant

```



Signals are not opinions.



Signals are not policy.



Signals are not decisions.



Signals are facts used by policy.



\---



\# Signal Sources



Signals may originate from:



\## Humans



Examples:



```text

Manager Approval



Supervisor Approval



Finance Approval

```



\---



\## Systems



Examples:



```text

KYC Platform



ERP System



CRM System



Banking Platform

```



\---



\## Rules Engines



Examples:



```text

Fraud Engine



Risk Engine



Compliance Engine

```



\---



\## AI Systems



Examples:



```text

Document Classification



Fraud Scoring



Intent Classification

```



AI-generated outputs may be treated as signals if an organization chooses to trust them.



\---



\# Signal Preservation



Signals used during evaluation must be preserved.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



Parmana stores the exact signal snapshot used during evaluation.



Signals are not reconstructed later.



Signals are preserved as evaluated.



\---



\# Signal Snapshot



A signal snapshot represents the complete evidence set evaluated by policy.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true,

&#x20; "riskScore": 12

}

```



The snapshot must remain immutable.



\---



\# Signal Evidence Record



Example:



```json

{

&#x20; "decision\_id": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "business\_transaction\_id": "PAYMENT-E2E-001",

&#x20; "signal\_snapshot": {

&#x20;   "managerApproved": true,

&#x20;   "kycVerified": true

&#x20; }

}

```



\---



\# Relationship To Policy



Signals do not make decisions.



Policies make decisions.



Example:



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



\# Relationship To Authority



Authority decisions are derived from:



```text

Task

&#x20;   +

Policy

&#x20;   +

Signals

```



Signals alone are insufficient.



Authority is determined through policy evaluation.



\---



\# Relationship To Trust Chain



Signals are the first evidentiary artifact in the trust chain.



```text

Signal Evidence

&#x20;      ↓

Authority Decision

&#x20;      ↓

Decision Attestation

&#x20;      ↓

Verification Receipt

&#x20;      ↓

Execution Record

```



\---



\# Retrieval



Signals are retrievable through:



```http

GET /trust-chain/{businessTransactionId}

```



Example:



```json

{

&#x20; "signals": \[

&#x20;   {

&#x20;     "signal\_snapshot": {

&#x20;       "managerApproved": true,

&#x20;       "kycVerified": true

&#x20;     }

&#x20;   }

&#x20; ]

}

```



\---



\# Signal Integrity



Signals must represent the exact values evaluated by policy.



Signal preservation protects against:



```text

Post-decision modification



Evidence loss



Audit disputes



Decision ambiguity

```



\---



\# Signal Invariants



\## SIG-001



Signals are facts.



\---



\## SIG-002



Signals are not policies.



\---



\## SIG-003



Signals are not decisions.



\---



\## SIG-004



Signal snapshots must be preserved exactly as evaluated.



\---



\## SIG-005



Signal evidence must be linked to a businessTransactionId.



\---



\## SIG-006



Signal evidence must be retrievable after evaluation.



\---



\## SIG-007



Organizations decide which signals are trusted.



Parmana evaluates trusted signals against policy.



\---



\# Architectural Principle



Parmana does not decide what is true.



Organizations determine which signals they trust.



Parmana preserves those signals and verifies that they satisfy policy before execution.



Signals provide the factual foundation of the Execution Trust Chain.



