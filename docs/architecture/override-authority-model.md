\# Override Authority Model



\## Purpose



The Override Authority Model defines how authorized individuals approve exceptions when policy evaluation cannot automatically authorize execution.



Overrides are:



```text

Authority Decisions

```



Overrides are not:



```text

Policy Bypasses

```



Every override becomes a permanent part of the Parmana Execution Trust Chain.



\---



\# Problem



Some business actions require human review.



Examples:



```text

Insurance Claim Exceptions

Fraud Investigation Outcomes

Payment Escalations

Compliance Exceptions

```



A policy evaluation may produce:



```text

Reject

```



or



```text

Requires Override

```



In these situations an authorized authority must explicitly decide whether execution may proceed.



\---



\# Architectural Position



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Authority Decision

&#x20;  ↓

Override Decision (optional)

&#x20;  ↓

Decision Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution Record

```



Override decisions become part of execution lineage.



\---



\# Core Principle



```text

Overrides are governed authority actions.



Overrides must be attributable.



Overrides must be auditable.



Overrides must be retrievable.

```



\---



\# Override Decision



An Override Decision records:



```text

Who approved the exception

Why the exception was approved

When the exception was approved

What decision was overridden

```



\---



\# Override Authority



Not every subject may override.



Organizations define:



```text

Override Authority

```



through policy.



Examples:



```text

Claims Manager

Finance Director

Compliance Officer

Risk Officer

```



\---



\# Override Outcomes



\## Approve Override



```text

Rejected Decision

&#x20;       ↓

Authorized Override

&#x20;       ↓

Execution May Proceed

```



\---



\## Reject Override



```text

Rejected Decision

&#x20;       ↓

Override Review

&#x20;       ↓

Execution Remains Blocked

```



\---



\# Override Lineage



Every override must reference:



```text

decisionId

businessTransactionId

taskId

policyId

policyVersion

```



This preserves trust-chain continuity.



\---



\# Audit Requirements



Every override must be retrievable.



Minimum audit attributes:



```text

overrideId

decisionId

overrideSubjectId

overrideReason

overrideAction

createdAt

```



\---



\# Invariants



\## INV-120



```text

Only authorized override authorities may approve exceptions.

```



\## INV-121



```text

Every override must reference a prior authority decision.

```



\## INV-122



```text

Overrides must be permanently auditable.

```



\## INV-123



```text

Overrides must be included in trust-chain retrieval.

```



\---



\# Canonical Statement



Overrides are authority decisions that permit execution under controlled exception conditions and become permanent members of the Parmana Execution Trust Chain.



