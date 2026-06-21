\# Task → Policy → Schema Model



\## Status



Canonical



\## Purpose



The Task → Policy → Schema Model defines how Parmana determines which evidence must exist before an action can be authorized.



The model establishes a deterministic relationship between:



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



This model is the foundation of authority evaluation.



\---



\# Core Principle



```text

Organizations decide what to trust.



Parmana ensures trusted signals satisfy policy before execution.

```



Organizations define:



\* Tasks

\* Policies

\* Schemas

\* Trusted signals



Parmana evaluates them.



\---



\# High-Level Flow



```text

Task

&#x20;  ↓

Policy Lookup

&#x20;  ↓

Schema Resolution

&#x20;  ↓

Signal Collection

&#x20;  ↓

Policy Evaluation

&#x20;  ↓

Authority Decision

```



\---



\# Step 1: Task



A task represents a requested action.



Examples:



```text

payment.release



refund.issue



wire.transfer



vendor.create



invoice.approve

```



A task answers:



```text

What action is being requested?

```



\---



\# Step 2: Policy



A policy governs a task.



Example:



```text

payment.release

```



may resolve to:



```text

payment-policy-v1

```



The policy answers:



```text

What conditions must be satisfied?

```



\---



\# Example Policy



```text

managerApproved == true



AND



kycVerified == true

```



If conditions are satisfied:



```text

approved

```



Otherwise:



```text

denied

```



\---



\# Step 3: Schema



A schema defines required evidence.



The schema answers:



```text

What signals are required to evaluate policy?

```



Example:



```json

{

&#x20; "required": \[

&#x20;   "managerApproved",

&#x20;   "kycVerified"

&#x20; ]

}

```



\---



\# Why Schemas Exist



Without schemas:



```text

Policy

&#x20;   ↓

Unknown Inputs

```



With schemas:



```text

Policy

&#x20;   ↓

Known Inputs

```



Schemas make evaluation deterministic.



\---



\# Step 4: Signals



Signals satisfy schema requirements.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



Signals are facts.



Signals are not policies.



Signals are not decisions.



\---



\# Signal Sources



Signals may originate from:



```text

Humans



Systems



Rules Engines



AI Systems

```



Organizations determine which signals are trusted.



\---



\# Step 5: Authority Decision



Policy evaluates signals.



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



\# Example: Payment Release



\## Task



```text

payment.release

```



\---



\## Policy



```text

payment-policy-v1

```



\---



\## Schema



```json

{

&#x20; "required": \[

&#x20;   "managerApproved",

&#x20;   "kycVerified"

&#x20; ]

}

```



\---



\## Signals



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



\---



\## Decision



```json

{

&#x20; "decision": "approved"

}

```



\---



\# Separation of Responsibilities



\## Task Registry



Responsible for:



```text

Task Definitions

```



\---



\## Policy Registry



Responsible for:



```text

Task → Policy Mapping

```



\---



\## Schema Registry



Responsible for:



```text

Policy → Schema Mapping

```



\---



\## Signal Providers



Responsible for:



```text

Producing Facts

```



\---



\## Authority Engine



Responsible for:



```text

Evaluating Policy

```



\---



\# Architectural Benefits



\## Deterministic



Required evidence is known before evaluation.



\---



\## Auditable



Evidence requirements are explicit.



\---



\## Explainable



Authorization decisions can be reconstructed.



\---



\## Extensible



New policies can reuse schemas.



\---



\## Governable



Organizations explicitly define trust requirements.



\---



\# Relationship To Trust Chain



The Task → Policy → Schema Model produces:



```text

Authority Decision

```



which becomes:



```text

Authority Decision

&#x20;      ↓

Decision Attestation

&#x20;      ↓

Verification Receipt

&#x20;      ↓

Execution Record

```



The Execution Trust Chain depends on this model.



\---



\# Invariants



\## TPS-001



Every decision must originate from a task.



\---



\## TPS-002



Every task must resolve to a policy.



\---



\## TPS-003



Every policy must resolve to a schema.



\---



\## TPS-004



Every schema defines required signals.



\---



\## TPS-005



Signals must satisfy schema requirements before evaluation.



\---



\## TPS-006



Authority decisions are produced by policy evaluation.



\---



\# Architectural Principle



Organizations do not directly authorize signals.



Organizations authorize tasks.



Tasks resolve to policies.



Policies define schemas.



Schemas define required evidence.



Parmana evaluates that evidence and determines whether execution is authorized.



This model establishes the deterministic foundation upon which the entire Execution Trust Chain is built.



