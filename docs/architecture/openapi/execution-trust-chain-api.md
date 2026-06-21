\# Execution Trust Chain API



\## Status



Canonical



\## Version



```text

v0.3

```



\## Purpose



The Execution Trust Chain API provides the public interface for constructing, verifying, executing, and retrieving Parmana trust chains.



The API implements the canonical lifecycle:



```text

Signal Evidence

&#x20;     ↓

Authority Decision

&#x20;     ↓

Decision Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Record

```



\---



\# Core Principle



```text

Parmana prevents unauthorized autonomous actions.



Parmana verifies human-defined authority and organizational policy before autonomous systems act.

```



The API exists to create and retrieve verifiable execution lineage.



\---



\# API Overview



\## Evaluate



Creates an Authority Decision.



```http

POST /evaluate

```



\---



\## Receipt



Verifies a Decision Attestation and creates a Verification Receipt.



```http

POST /receipt

```



\---



\## Execute



Records execution performed by an external system.



```http

POST /execute

```



\---



\## Trust Chain Retrieval



Reconstructs trust-chain lineage.



```http

GET /trust-chain/{businessTransactionId}

```



\---



\# Endpoint: Evaluate



\## Purpose



Evaluates trusted signals against policy.



Produces:



```text

Authority Decision

```



\---



\## Request



```http

POST /evaluate

Content-Type: application/json

```



Example:



```json

{

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "taskId": "payment.release",

&#x20; "signals": {

&#x20;   "managerApproved": true,

&#x20;   "kycVerified": true

&#x20; }

}

```



\---



\## Request Fields



\### businessTransactionId



Required



Root lineage identifier.



Example:



```text

PAYMENT-E2E-001

```



\---



\### taskId



Required



Represents the requested action.



Example:



```text

payment.release

```



\---



\### signals



Required



Evidence used during policy evaluation.



Example:



```json

{

&#x20; "managerApproved": true,

&#x20; "kycVerified": true

}

```



\---



\## Response



```json

{

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "decision": "approved",

&#x20; "reasons": \[]

}

```



\---



\## Side Effects



Persists:



```text

Authority Decision



Signal Evidence



Decision Attestation

```



\---



\# Endpoint: Receipt



\## Purpose



Verifies a Decision Attestation.



Produces:



```text

Verification Receipt

```



\---



\## Request



```http

POST /receipt

Content-Type: application/json

```



Body:



```json

{

&#x20; "decisionId": "...",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "evidence": \[],

&#x20; "signatures": {}

}

```



\---



\## Response



```json

{

&#x20; "receiptId": "dd62643a-40af-4f1e-a51e-1b40eb89579d",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "valid": true,

&#x20; "verifiedAlgorithms": \[

&#x20;   "attestation-verification"

&#x20; ],

&#x20; "failedAlgorithms": \[],

&#x20; "receiptHash": "773ed15cd85e7cee4e6ce17d7b7fab57b9c12db0b4dafca36f09cdbc592c2cf0"

}

```



\---



\## Side Effects



Persists:



```text

Verification Receipt

```



\---



\# Endpoint: Execute



\## Purpose



Records execution performed by an external system.



Produces:



```text

Execution Record

```



\---



\## Request



```http

POST /execute

Content-Type: application/json

```



Example:



```json

{

&#x20; "receiptId": "dd62643a-40af-4f1e-a51e-1b40eb89579d",

&#x20; "executionSystem": "stripe",

&#x20; "executionReference": "pi\_e2e\_001"

}

```



\---



\## Request Fields



\### receiptId



Required



Verification Receipt authorizing execution.



\---



\### executionSystem



Required



External execution destination.



Example:



```text

stripe

```



\---



\### executionReference



Required



External system identifier.



Example:



```text

pi\_e2e\_001

```



\---



\## Response



```json

{

&#x20; "executionId": "e851b9c6-c7fb-439c-aedb-c8486734dc85",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "receiptId": "dd62643a-40af-4f1e-a51e-1b40eb89579d",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "executionSystem": "stripe",

&#x20; "executionReference": "pi\_e2e\_001",

&#x20; "executionStatus": "completed"

}

```



\---



\## Side Effects



Persists:



```text

Execution Record

```



\---



\# Endpoint: Trust Chain Retrieval



\## Purpose



Reconstructs the complete Execution Trust Chain.



\---



\## Request



```http

GET /trust-chain/{businessTransactionId}

```



Example:



```http

GET /trust-chain/PAYMENT-E2E-001

```



\---



\## Response



```json

{

&#x20; "decision": {},

&#x20; "signals": \[],

&#x20; "attestations": \[],

&#x20; "receipts": \[],

&#x20; "executions": \[]

}

```



\---



\## Response Sections



\### decision



Latest authority decision.



\---



\### signals



Preserved signal evidence.



\---



\### attestations



Cryptographically signed decision artifacts.



\---



\### receipts



Verification evidence.



\---



\### executions



Execution evidence.



\---



\# End-to-End Example



\## Step 1



Evaluate



```http

POST /evaluate

```



Produces:



```text

Authority Decision

Decision Attestation

Signal Evidence

```



\---



\## Step 2



Verify



```http

POST /receipt

```



Produces:



```text

Verification Receipt

```



\---



\## Step 3



Execute



```http

POST /execute

```



Produces:



```text

Execution Record

```



\---



\## Step 4



Retrieve



```http

GET /trust-chain/PAYMENT-E2E-001

```



Produces:



```text

Complete Execution Trust Chain

```



\---



\# Error Responses



\## 400 Bad Request



Example:



```json

{

&#x20; "error": "businessTransactionId is required"

}

```



\---



\## Verification Failure



Example:



```json

{

&#x20; "error": "Invariant violation: INV-160"

}

```



\---



\## Integrity Failure



Example:



```json

{

&#x20; "error": "INV-120 violation"

}

```



\---



\# API Invariants



\## API-001



Trust chains are reconstructed using businessTransactionId.



\---



\## API-002



Every endpoint preserves lineage continuity.



\---



\## API-003



Trust-chain artifacts are append-only.



\---



\## API-004



Execution requires a Verification Receipt.



\---



\## API-005



Verification requires a Decision Attestation.



\---



\## API-006



Attestation generation requires an Authority Decision.



\---



\# Architectural Principle



The Execution Trust Chain API is the canonical interface for creating and reconstructing trust-chain evidence.



It enables organizations to answer:



```text

Why was this action authorized?



Why was it verified?



Why was it executed?

```



using cryptographically linked, persisted, and independently retrievable trust-chain artifacts.



