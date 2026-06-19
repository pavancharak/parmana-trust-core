\# Authority Verification Model



\## Core Thesis



AI has intelligence.



Humans have authority.



Intelligence can generate actions.



Authority determines whether those actions are allowed.



Parmana exists to verify authority before execution.



\---



\# The Authority Problem



Traditional software assumes:



```text

Request

&#x20;  ↓

Execution

```



AI systems introduce a new layer:



```text

Request

&#x20;  ↓

AI Decision

&#x20;  ↓

Execution

```



The challenge is that intelligence and authority are not the same thing.



An AI system may be capable of generating an action, but capability does not imply permission.



\---



\# Parmana Model



Parmana separates:



```text

Intelligence

```



from:



```text

Authority

```



Architecture:



```text

User

&#x20;  ↓

AI System

&#x20;  ↓

Proposed Action

&#x20;  ↓

Parmana

&#x20;  ↓

Authority Verification

&#x20;  ↓

Execution System

```



Parmana does not execute.



Parmana does not decide organizational policy.



Parmana verifies whether organizational authority requirements have been satisfied.



\---



\# Authority Chain



Authority is represented through:



```text

Task

&#x20;  ↓

Policy

&#x20;  ↓

Schema

&#x20;  ↓

Signals

&#x20;  ↓

Decision

```



\## Task



A task represents an action category.



Examples:



\* Payment Release

\* Vendor Creation

\* Account Closure

\* Loan Approval



\---



\## Policy



A policy defines authority requirements.



Examples:



\* Manager approval required

\* Amount below threshold

\* KYC completed

\* Dual authorization present



\---



\## Schema



A schema defines required evidence.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true,

&#x20; "amount": 1000

}

```



\---



\## Signals



Signals are facts.



Signals may originate from:



\* Humans

\* Software systems

\* Banking systems

\* Rule engines

\* AI systems



Organizations decide which signals are trusted.



\---



\## Decision



Parmana evaluates trusted signals against policy.



Outputs:



```text

Approve

Deny

Escalate

```



\---



\# Trust Core Integration



Authority verification produces:



```text

Decision

&#x20;  ↓

Attestation

&#x20;  ↓

Receipt

&#x20;  ↓

Transparency Log

&#x20;  ↓

Trust Root

```



Trust Core provides cryptographic proof that authority verification occurred.



\---



\# Responsibility Model



AI System



\* Captures intent

\* Generates recommendations

\* Proposes actions



Parmana



\* Verifies authority

\* Verifies policy compliance

\* Produces attestations

\* Produces receipts



Execution System



\* Executes approved actions



\---



\# Canonical Parmana Statements



Humans define authority.



Organizations decide what to trust.



Parmana evaluates trusted signals against policy before execution.



Parmana makes authority verifiable and enforceable before execution.



AI has intelligence.



Humans have authority.



