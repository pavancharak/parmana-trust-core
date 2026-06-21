\# Trust Chain Retrieval API v1 Specification



\## Status



Draft



\## Version



v1.0.0



\## Purpose



The Trust Chain Retrieval API provides a deterministic mechanism for retrieving complete Parmana trust-chain artifacts.



The API enables:



\* Audit investigations

\* Compliance reviews

\* Incident analysis

\* Forensic reconstruction

\* Replay preparation

\* Trust-chain verification



The API is read-only.



The API does not authorize actions.



The API does not execute actions.



The API does not modify trust-chain artifacts.



\---



\# Scope



The API retrieves:



```text

Authority Decision

Attestation

Verification Receipt

Execution Record

```



The API may additionally retrieve:



```text

Replay Records

```



in future versions.



\---



\# Canonical Retrieval Principle



A business transaction is the primary audit object.



Given:



```text

businessTransactionId

```



Parmana SHALL return the complete trust chain.



```text

Business Transaction

&#x20;       ↓

Authority Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



\---



\# Retrieval Keys



The API SHALL support retrieval by:



```text

businessTransactionId

decisionId

receiptId

executionId

```



\---



\# Retrieval Hierarchy



\## Primary Key



```text

businessTransactionId

```



Preferred audit lookup.



\## Secondary Keys



```text

decisionId

receiptId

executionId

```



Artifact-specific lookup.



\---



\# Endpoint



\## GET /trust-chain/{businessTransactionId}



Returns the complete trust chain associated with a business transaction.



\### Example



```http

GET /trust-chain/PAYMENT-123

```



\### Response



```json

{

&#x20; "businessTransactionId": "PAYMENT-123",



&#x20; "decision": {

&#x20;   "decisionId": "dec-001",

&#x20;   "taskId": "payment.release",

&#x20;   "policyId": "payment-policy-v1",

&#x20;   "policyVersion": "1.0.0",

&#x20;   "decision": "approved"

&#x20; },



&#x20; "attestation": {

&#x20;   "decisionId": "dec-001"

&#x20; },



&#x20; "receipt": {

&#x20;   "receiptId": "rec-001",

&#x20;   "valid": true

&#x20; },



&#x20; "execution": {

&#x20;   "executionId": "exec-001",

&#x20;   "executionStatus": "completed"

&#x20; }

}

```



\---



\# Endpoint



\## GET /decision/{decisionId}



Returns a decision and all related artifacts.



\### Response



```json

{

&#x20; "decision": {},

&#x20; "attestation": {},

&#x20; "receipt": {},

&#x20; "execution": {}

}

```



\---



\# Endpoint



\## GET /receipt/{receiptId}



Returns a receipt and all related artifacts.



\### Response



```json

{

&#x20; "decision": {},

&#x20; "attestation": {},

&#x20; "receipt": {},

&#x20; "execution": {}

}

```



\---



\# Endpoint



\## GET /execution/{executionId}



Returns an execution record and all related artifacts.



\### Response



```json

{

&#x20; "decision": {},

&#x20; "attestation": {},

&#x20; "receipt": {},

&#x20; "execution": {}

}

```



\---



\# Response Model



\## TrustChainResponse



```json

{

&#x20; "businessTransactionId": "PAYMENT-123",



&#x20; "decision": {},



&#x20; "attestation": {},



&#x20; "receipt": {},



&#x20; "execution": {}

}

```



\---



\# Decision Model



```json

{

&#x20; "decisionId": "dec-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "decision": "approved"

}

```



\---



\# Attestation Model



```json

{

&#x20; "decisionId": "dec-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "schemaVersion": "2"

}

```



\---



\# Receipt Model



```json

{

&#x20; "receiptId": "rec-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "decisionId": "dec-001",

&#x20; "valid": true

}

```



\---



\# Execution Model



```json

{

&#x20; "executionId": "exec-001",

&#x20; "businessTransactionId": "PAYMENT-123",

&#x20; "receiptId": "rec-001",

&#x20; "executionStatus": "completed"

}

```



\---



\# Retrieval Outcomes



\## FOUND



All requested artifacts located.



```json

{

&#x20; "status": "FOUND"

}

```



\## PARTIAL



Some artifacts located.



```json

{

&#x20; "status": "PARTIAL"

}

```



\## NOT\_FOUND



No artifacts located.



```json

{

&#x20; "status": "NOT\_FOUND"

}

```



\---



\# Partial Retrieval Rules



Example:



```text

Decision Found

Attestation Found

Receipt Missing

Execution Missing

```



Response:



```json

{

&#x20; "status": "PARTIAL"

}

```



The API SHALL NOT fabricate missing artifacts.



\---



\# Trust Chain Integrity



Retrieved artifacts SHALL preserve lineage consistency.



The following values SHALL match across the trust chain:



```text

businessTransactionId

decisionId

receiptId

```



where applicable.



Lineage inconsistencies SHALL be reported.



\---



\# Integrity Validation



Future versions MAY include:



```json

{

&#x20; "integrity": {

&#x20;   "status": "VALID"

&#x20; }

}

```



Possible values:



```text

VALID

INVALID

UNKNOWN

```



\---



\# Replay Integration



The Retrieval API is the primary input mechanism for replay.



Replay systems SHALL retrieve trust-chain artifacts using:



```text

businessTransactionId

```



before reconstructing historical evaluation conditions.



\---



\# Security Model



Retrieval operations are read-only.



The API SHALL NOT:



```text

Create Decisions

Modify Decisions

Delete Decisions

Create Receipts

Execute Actions

Replay Actions

```



The API provides evidence retrieval only.



\---



\# Future Extensions



Future versions MAY support:



```text

GET /replay/{replayId}

GET /attestation/{decisionId}

GET /policy/{policyId}

GET /lineage/{businessTransactionId}

```



Additional retrieval capabilities SHALL preserve immutable trust-chain semantics.



\---



\# Canonical Principle



Given:



```text

businessTransactionId

```



Parmana SHALL provide sufficient information to reconstruct:



```text

Decision

Attestation

Verification Receipt

Execution Record

```



without requiring access to external execution systems.



The Trust Chain Retrieval API is the canonical audit interface for Parmana.



