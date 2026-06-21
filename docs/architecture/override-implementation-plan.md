\# Override Implementation Plan



\## Purpose



This document defines the implementation sequence for introducing Override Authority into Parmana.



The objective is to integrate override handling without breaking the existing Execution Trust Chain.



\---



\# Current Trust Chain



Current state:



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Authority Decision

&#x20;  ↓

Decision Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution Record

```



Implemented:



```text

✓ Authority Decisions



✓ Attestations



✓ Verification Receipts



✓ Execution Tokens



✓ Execution Records



✓ Trust Chain Retrieval

```



\---



\# Target Trust Chain



Target state:



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Authority Decision

&#x20;  ↓

Override Decision

&#x20;  ↓

Override Attestation

&#x20;  ↓

Override Verification Receipt

&#x20;  ↓

Decision Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution Record

```



\---



\# Phase 1



\## Override Data Model



Create package:



```text

packages/override-engine

```



Create:



```text

src/types.ts

```



Define:



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



\# Phase 2



\## Override Storage



Create table:



```sql

override\_decisions

```



Required columns:



```text

override\_id



decision\_id



business\_transaction\_id



task\_id



policy\_id



policy\_version



override\_subject\_id



override\_action



override\_reason



created\_at

```



\---



\# Phase 3



\## Override Attestation



Create:



```text

createOverrideAttestation()

```



Input:



```text

OverrideDecision

```



Output:



```text

OverrideAttestation

```



\---



\# Phase 4



\## Override Verification



Create:



```text

verifyOverrideAttestation()

```



Output:



```text

OverrideVerificationReceipt

```



\---



\# Phase 5



\## Override APIs



Implement:



```http

POST /override



POST /override/attest



POST /override/verify



GET /override/:overrideId

```



\---



\# Phase 6



\## Trust Chain Integration



Extend:



```http

GET /trust-chain/:businessTransactionId

```



Current:



```json

{

&#x20; "decision": {},

&#x20; "attestation": {},

&#x20; "receipt": {},

&#x20; "execution": {}

}

```



Future:



```json

{

&#x20; "decision": {},

&#x20; "overrideDecision": {},

&#x20; "overrideAttestation": {},

&#x20; "overrideVerificationReceipt": {},

&#x20; "attestation": {},

&#x20; "receipt": {},

&#x20; "execution": {}

}

```



\---



\# Phase 7



\## Execution Enforcement



Execution authorization must verify:



\### Standard Path



```text

Verification Receipt

&#x20;      ↓

Execution Allowed

```



\### Override Path



```text

Override Verification Receipt

&#x20;             +

Verification Receipt

&#x20;             ↓

Execution Allowed

```



\---



\# Phase 8



\## E2E Validation



Create:



```text

examples/end-to-end/insurance-override-flow.ts

```



Scenario:



```text

Insurance Claim

&#x20;      ↓

Fraud Check Fails

&#x20;      ↓

Requires Override

&#x20;      ↓

Claims Manager Approves

&#x20;      ↓

Override Attested

&#x20;      ↓

Override Verified

&#x20;      ↓

Execution Authorized

```



\---



\# Success Criteria



Override Authority is considered operational when:



```text

✓ Override Decision Stored



✓ Override Attestation Generated



✓ Override Verification Completed



✓ Override APIs Operational



✓ Trust Chain Retrieval Extended



✓ Execution Enforcement Updated



✓ Tampering Detected



✓ E2E Override Flow Passing

```



\---



\# Canonical Statement



Override Authority extends the Parmana Execution Trust Chain with governed exception handling while preserving attribution, verification, auditability, and lineage integrity.



