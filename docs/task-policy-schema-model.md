\# Task → Policy → Schema Model



\## Executive Summary



Organizations do not authorize actions directly.



Organizations authorize actions through policies.



Policies define required evidence.



Evidence is represented as trusted signals.



Parmana evaluates trusted signals against policy before execution.



This architecture creates a deterministic authority verification model for autonomous systems.



\---



\# Core Principle



Organizations decide what to trust.



Parmana ensures those trusted signals satisfy policy before execution.



\---



\# Why Existing AI Architectures Fail



Most AI architectures follow:



```text

Request

&#x20;  ↓

LLM

&#x20;  ↓

Action

```



This architecture assumes that intelligence is sufficient for execution.



It is not.



The ability to generate an action is not equivalent to authority to perform that action.



\---



\# Parmana Architecture



Parmana introduces an authority verification layer.



```text

Request

&#x20;  ↓

Task

&#x20;  ↓

Policy

&#x20;  ↓

Schema

&#x20;  ↓

Signals

&#x20;  ↓

Decision

&#x20;  ↓

Execution

```



Execution occurs only after authority requirements are verified.



\---



\# Task



A Task represents a category of action.



Examples:



\* Payment Release

\* Vendor Creation

\* Refund Approval

\* Account Closure

\* Funds Transfer



Tasks answer:



```text

What action is being requested?

```



Example:



```json

{

&#x20; "task": "payment.release"

}

```



\---



\# Policy



A Policy defines organizational authority requirements.



Example:



```text

Payments over $10,000 require

manager approval and KYC verification.

```



Policies answer:



```text

What must be true before execution?

```



Example:



```json

{

&#x20; "policyId": "payment-release",

&#x20; "policyVersion": "1.0.0"

}

```



\---



\# Schema



A Schema defines required signals.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true,

&#x20; "amount": 10000

}

```



Schemas answer:



```text

What evidence is required?

```



\---



\# Signals



Signals are verified facts.



Signals may originate from:



\* Humans

\* Banking systems

\* ERP systems

\* Identity systems

\* Rule engines

\* AI systems



Examples:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true,

&#x20; "amount": 10000

}

```



Signals answer:



```text

What facts are available?

```



\---



\# Decision



Parmana evaluates signals against policy.



Possible outcomes:



```text

Approve

Deny

Escalate

```



Example:



```json

{

&#x20; "result": "approve"

}

```



Decisions answer:



```text

Do the trusted signals satisfy policy?

```



\---



\# Trust Core Integration



Once a decision is produced:



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



\* Understands requests

\* Generates recommendations

\* Proposes actions



Parmana



\* Evaluates policy

\* Verifies trusted signals

\* Produces decisions

\* Produces attestations

\* Produces receipts



Execution System



\* Executes approved actions



Parmana does not execute actions.



Parmana verifies authority before execution.



\---



\# Canonical Parmana Statements



Humans define authority.



Organizations decide what to trust.



Parmana evaluates trusted signals against policy before execution.



Parmana makes authority verifiable and enforceable before execution.



AI has intelligence.



Humans have authority.



