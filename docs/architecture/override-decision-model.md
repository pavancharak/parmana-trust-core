\# Override Decision Model



\## Purpose



The Override Decision Model defines the structure of a governed exception authorization within the Parmana Execution Trust Chain.



An Override Decision records a deliberate authority action that changes the outcome of a previously evaluated decision.



Overrides are:



```text

Authority Decisions

```



Overrides are not:



```text

Policy Modifications

```



The underlying policy remains unchanged.



\---



\# Architectural Position



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Authority Decision

&#x20;  ↓

Override Decision

&#x20;  ↓

Decision Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution Record

```



Override Decisions extend lineage.



They do not replace lineage.



\---



\# Purpose Of An Override



Overrides exist for exceptional situations.



Examples:



```text

Fraud Investigation Completed

Manual Compliance Review

Executive Approval

Insurance Exception Review

```



An override converts:



```text

Rejected

```



or



```text

Requires Override

```



into a final authority outcome.



\---



\# Override Decision Structure



```typescript

export interface OverrideDecision {



&#x20; overrideId: string;



&#x20; decisionId: string;



&#x20; businessTransactionId: string;



&#x20; taskId: string;



&#x20; policyId: string;



&#x20; policyVersion: string;



&#x20; overrideSubjectId: string;



&#x20; overrideAction:

&#x20;   "approve" |

&#x20;   "reject";



&#x20; overrideReason: string;



&#x20; createdAt: string;



}

```



\---



\# Field Definitions



\## overrideId



Unique override identifier.



Example:



```text

OVR-001

```



Immutable.



\---



\## decisionId



Authority decision being overridden.



Example:



```text

DEC-001

```



Required.



\---



\## businessTransactionId



Business transaction lineage identifier.



Example:



```text

CLAIM-2026-001

```



Required.



\---



\## taskId



Associated task.



Example:



```text

insurance.claim.approve

```



Required.



\---



\## policyId



Policy used during original evaluation.



Example:



```text

insurance-claim-approval

```



Required.



\---



\## policyVersion



Policy version used during evaluation.



Example:



```text

1.0.0

```



Required.



\---



\## overrideSubjectId



Authority that approved or rejected the exception.



Example:



```text

claims-manager-123

```



Required.



\---



\## overrideAction



Possible values:



```text

approve

reject

```



\---



\## overrideReason



Human-readable justification.



Example:



```text

manual\_review\_completed

```



Required.



\---



\## createdAt



Timestamp of override decision.



Example:



```text

2026-06-21T10:15:00Z

```



Immutable.



\---



\# Example Override



```json

{

&#x20; "overrideId": "OVR-001",

&#x20; "decisionId": "DEC-001",

&#x20; "businessTransactionId": "CLAIM-2026-001",

&#x20; "taskId": "insurance.claim.approve",

&#x20; "policyId": "insurance-claim-approval",

&#x20; "policyVersion": "1.0.0",

&#x20; "overrideSubjectId": "claims-manager-123",

&#x20; "overrideAction": "approve",

&#x20; "overrideReason": "manual\_review\_completed",

&#x20; "createdAt": "2026-06-21T10:15:00Z"

}

```



\---



\# Override Outcomes



\## Approve



```text

Decision Rejected

&#x20;       ↓

Override Approved

&#x20;       ↓

Execution May Proceed

```



\---



\## Reject



```text

Decision Rejected

&#x20;       ↓

Override Rejected

&#x20;       ↓

Execution Remains Blocked

```



\---



\# Lineage Requirements



Every Override Decision must reference:



```text

businessTransactionId

decisionId

taskId

policyId

policyVersion

```



This preserves execution lineage continuity.



\---



\# Audit Requirements



Override Decisions must be:



```text

Immutable

Retrievable

Attributable

Auditable

```



Historical overrides must never be modified.



\---



\# Future Extensions



Future versions may include:



```typescript

overrideRole: string;



overrideEvidence: string\[];



approvalLevel: string;



expiresAt?: string;

```



for advanced governance workflows.



\---



\# Invariants



\## INV-130



```text

Every Override Decision must reference an Authority Decision.

```



\## INV-131



```text

Override Decisions must be immutable.

```



\## INV-132



```text

Override Decisions must preserve trust-chain lineage.

```



\## INV-133



```text

Override Decisions must identify the responsible authority.

```



\## INV-134



```text

Override Decisions must be retrievable during audits.

```



\---



\# Canonical Statement



An Override Decision is a governed authority action that records an approved or rejected exception and becomes a permanent component of the Parmana Execution Trust Chain.



