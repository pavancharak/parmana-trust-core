\# Policy Registry



\## The Organizational Authority Model



Version: v0.3 Vision



\---



\# Executive Summary



Trust Core answers:



```text

Can authority verification be proven?

```



Policy Registry answers:



```text

What authority should be verified?

```



Trust Core provides integrity.



Policy Registry provides authority definition.



Together they form the foundation of the Parmana Authority Verification Platform.



\---



\# The Limitation of Trust Core Alone



Trust Core can verify:



\* Decisions

\* Attestations

\* Receipts

\* Transparency history

\* Trust roots



However, Trust Core assumes that authority definitions already exist.



Questions remain:



\* Which policy applies?

\* Which signals are trusted?

\* Which approvals are required?

\* Which schemas define evidence?



Policy Registry solves this problem.



\---



\# The Authority Registry Model



Parmana models authority through four registries:



```text

Task Registry

&#x20;     ↓

Policy Registry

&#x20;     ↓

Schema Registry

&#x20;     ↓

Signal Registry

```



Together they define organizational authority.



\---



\# Task Registry



Purpose:



Define action categories.



Examples:



```text

payment.release

vendor.create

refund.approve

account.close

trade.execute

```



Question:



```text

What action is being requested?

```



\---



\# Policy Registry



Purpose:



Define authority requirements.



Examples:



```text

Payments above $10,000 require manager approval.

```



```text

Trades above limit require dual authorization.

```



Question:



```text

What must be true before execution?

```



\---



\# Schema Registry



Purpose:



Define required evidence structures.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true,

&#x20; "amount": 15000

}

```



Question:



```text

What evidence is required?

```



\---



\# Signal Registry



Purpose:



Define trusted signal sources.



Examples:



```text

Identity Provider

ERP System

Banking System

Human Approver

Rule Engine

AI System

```



Question:



```text

Which signals are trusted?

```



\---



\# Authority Resolution Flow



```text

Request

&#x20;  ↓

Task

&#x20;  ↓

Policy Lookup

&#x20;  ↓

Schema Lookup

&#x20;  ↓

Signal Validation

&#x20;  ↓

Authority Evaluation

&#x20;  ↓

Decision

```



\---



\# Organizational Trust Model



The core Parmana principle:



Organizations decide what to trust.



The Signal Registry operationalizes this principle.



Organizations explicitly declare:



\* Trusted humans

\* Trusted systems

\* Trusted providers

\* Trusted workflows

\* Trusted AI systems



Parmana evaluates only organization-designated trusted signals.



\---



\# Authority Lifecycle



```text

Create Task

&#x20;     ↓

Attach Policy

&#x20;     ↓

Attach Schema

&#x20;     ↓

Register Signals

&#x20;     ↓

Evaluate

&#x20;     ↓

Verify

&#x20;     ↓

Audit

```



\---



\# Relationship To Trust Core



Policy Registry defines authority.



Trust Core proves authority verification occurred.



```text

Policy Registry

&#x20;      ↓

Authority Decision

&#x20;      ↓

Trust Core

&#x20;      ↓

Verifiable Evidence

```



\---



\# Long-Term Vision



The Policy Registry becomes the organizational source of truth for authority.



Identity systems define people.



Security systems define access.



Policy Registry defines authority.



Trust Core proves authority verification.



\---



\# Canonical Statements



Organizations decide what to trust.



Trusted signals may originate from humans, software systems, banking systems, rule engines, or AI systems.



Parmana evaluates those trusted signals against policy before execution.



Humans define authority.



Parmana makes authority verifiable and enforceable before execution.



