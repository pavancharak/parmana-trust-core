\# Override API Model



\## Purpose



The Override API Model defines the APIs used to create, attest, verify, retrieve, and audit override authority decisions.



These APIs extend the Parmana Execution Trust Chain with governed exception handling.



\---



\# Architectural Position



```text

Authority Decision

&#x20;       ↓

POST /override

&#x20;       ↓

Override Decision

&#x20;       ↓

POST /override/attest

&#x20;       ↓

Override Attestation

&#x20;       ↓

POST /override/verify

&#x20;       ↓

Override Verification Receipt

&#x20;       ↓

Execution Authorization

```



\---



\# API Principles



\## Immutable



Override artifacts are created once.



Supported:



```text

POST

GET

```



Not Supported:



```text

PUT

PATCH

DELETE

```



\---



\## Lineage Preserving



Every API request must include lineage identifiers.



Minimum:



```text

businessTransactionId

decisionId

```



\---



\## Auditable



Every API response must contain persistent identifiers.



\---



\# POST /override



\## Purpose



Create an Override Decision.



\---



\## Request



```json

{

&#x20; "decisionId": "DEC-001",

&#x20; "businessTransactionId": "CLAIM-2026-001",

&#x20; "taskId": "insurance.claim.approve",

&#x20; "policyId": "insurance-claim-approval",

&#x20; "policyVersion": "1.0.0",

&#x20; "overrideSubjectId": "claims-manager-123",

&#x20; "overrideAction": "approve",

&#x20; "overrideReason": "manual\_review\_completed"

}

```



\---



\## Response



```json

{

&#x20; "overrideId": "OVR-001",

&#x20; "createdAt": "2026-06-21T14:00:00Z"

}

```



\---



\# POST /override/attest



\## Purpose



Generate Override Attestation.



\---



\## Request



```json

{

&#x20; "overrideId": "OVR-001"

}

```



\---



\## Response



```json

{

&#x20; "overrideAttestationId": "OAT-001",

&#x20; "overrideId": "OVR-001",

&#x20; "attestationHash": "a7d91e9f..."

}

```



\---



\# POST /override/verify



\## Purpose



Verify Override Attestation.



\---



\## Request



```json

{

&#x20; "overrideAttestationId": "OAT-001"

}

```



\---



\## Response



```json

{

&#x20; "overrideReceiptId": "OVR-RCP-001",

&#x20; "valid": true,

&#x20; "verifiedAt": "2026-06-21T14:05:00Z"

}

```



\---



\# GET /override/:overrideId



\## Purpose



Retrieve Override Decision.



\---



\## Example



```http

GET /override/OVR-001

```



\---



\## Response



```json

{

&#x20; "overrideId": "OVR-001",

&#x20; "decisionId": "DEC-001",

&#x20; "businessTransactionId": "CLAIM-2026-001",

&#x20; "overrideSubjectId": "claims-manager-123",

&#x20; "overrideAction": "approve",

&#x20; "overrideReason": "manual\_review\_completed"

}

```



\---



\# GET /override/attestation/:overrideAttestationId



\## Purpose



Retrieve Override Attestation.



\---



\## Example



```http

GET /override/attestation/OAT-001

```



\---



\## Response



```json

{

&#x20; "overrideAttestationId": "OAT-001",

&#x20; "overrideId": "OVR-001",

&#x20; "attestationHash": "a7d91e9f..."

}

```



\---



\# GET /override/receipt/:overrideReceiptId



\## Purpose



Retrieve Override Verification Receipt.



\---



\## Example



```http

GET /override/receipt/OVR-RCP-001

```



\---



\## Response



```json

{

&#x20; "overrideReceiptId": "OVR-RCP-001",

&#x20; "overrideId": "OVR-001",

&#x20; "valid": true,

&#x20; "verifiedAt": "2026-06-21T14:05:00Z"

}

```



\---



\# GET /trust-chain/:businessTransactionId



\## Purpose



Retrieve complete execution lineage.



\---



\## Standard Response



```json

{

&#x20; "decision": {},

&#x20; "attestation": {},

&#x20; "receipt": {},

&#x20; "execution": {}

}

```



\---



\## Override Response



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



\# Error Model



\## Invalid Override Authority



```json

{

&#x20; "error": "INV-120 violation: unauthorized override authority"

}

```



\---



\## Missing Decision



```json

{

&#x20; "error": "INV-130 violation: decision not found"

}

```



\---



\## Invalid Override Attestation



```json

{

&#x20; "error": "INV-154 violation: invalid override attestation"

}

```



\---



\## Missing Override



```json

{

&#x20; "error": "override not found"

}

```



\---



\# API Invariants



\## INV-180



```text

Override Decisions must be immutable.

```



\## INV-181



```text

Override Attestations must reference Override Decisions.

```



\## INV-182



```text

Override Verification Receipts must reference Override Attestations.

```



\## INV-183



```text

Trust-chain retrieval must expose override lineage.

```



\## INV-184



```text

Execution authorization must require verified override evidence.

```



\---



\# Canonical Statement



The Override API Model provides the creation, verification, retrieval, and audit interfaces required to incorporate governed exception handling into the Parmana Execution Trust Chain while preserving immutable lineage and independent verification.



