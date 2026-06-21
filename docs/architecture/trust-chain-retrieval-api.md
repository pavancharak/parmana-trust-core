\# Trust Chain Retrieval API



\## Status



Canonical



\## Purpose



The Trust Chain Retrieval API reconstructs the complete execution trust chain for a business transaction.



The API provides a single retrieval point for all persisted trust-chain artifacts.



This allows:



\* Auditing

\* Investigation

\* Compliance review

\* Evidence export

\* Independent verification

\* Lineage reconstruction



\---



\# Core Principle



```text

A trust chain must be reconstructable from a single lineage identifier.

```



The canonical lineage identifier is:



```text

businessTransactionId

```



\---



\# Endpoint



```http

GET /trust-chain/{businessTransactionId}

```



Example:



```http

GET /trust-chain/PAYMENT-E2E-001

```



\---



\# Retrieval Scope



The endpoint reconstructs all trust-chain artifacts associated with the supplied transaction.



Artifacts returned:



```text

Authority Decision



Signal Evidence



Decision Attestations



Verification Receipts



Execution Records

```



\---



\# Trust Chain Reconstruction



```text

businessTransactionId

&#x20;       ↓

Signal Evidence

&#x20;       ↓

Authority Decision

&#x20;       ↓

Decision Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



\---



\# Request Parameters



\## businessTransactionId



Represents the root lineage identifier.



Example:



```text

PAYMENT-E2E-001

```



Characteristics:



```text

Required



Case-sensitive



Business-defined

```



\---



\# Response Structure



Example:



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



\# Decision Section



Represents the latest authority decision associated with the transaction.



Example:



```json

{

&#x20; "decision\_id": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "task\_id": "payment.release",

&#x20; "policy\_id": "payment-policy-v1",

&#x20; "policy\_version": "1.0.0",

&#x20; "action": "approved"

}

```



\---



\# Signals Section



Represents preserved evaluation evidence.



Example:



```json

\[

&#x20; {

&#x20;   "signal\_snapshot": {

&#x20;     "managerApproved": true,

&#x20;     "kycVerified": true

&#x20;   }

&#x20; }

]

```



Purpose:



```text

Reconstruct evaluation facts

```



\---



\# Attestations Section



Represents cryptographically signed decision evidence.



Example:



```json

\[

&#x20; {

&#x20;   "decision\_id": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20;   "business\_transaction\_id": "PAYMENT-E2E-001"

&#x20; }

]

```



Purpose:



```text

Reconstruct cryptographic provenance

```



\---



\# Receipts Section



Represents attestation verification history.



Example:



```json

\[

&#x20; {

&#x20;   "receipt\_id": "dd62643a-40af-4f1e-a51e-1b40eb89579d",

&#x20;   "valid": true

&#x20; }

]

```



Purpose:



```text

Reconstruct verification evidence

```



\---



\# Executions Section



Represents execution evidence.



Example:



```json

\[

&#x20; {

&#x20;   "execution\_id": "e851b9c6-c7fb-439c-aedb-c8486734dc85",

&#x20;   "execution\_system": "stripe",

&#x20;   "execution\_status": "completed"

&#x20; }

]

```



Purpose:



```text

Reconstruct execution history

```



\---



\# Retrieval Strategy



Current implementation:



```text

Latest Decision

\+

All Signals

\+

All Attestations

\+

All Receipts

\+

All Executions

```



This preserves complete historical evidence.



\---



\# Audit Example



Auditor question:



```text

Why was PAYMENT-E2E-001 executed?

```



Trust Chain Retrieval provides:



```text

Signals Used

&#x20;       ↓

Decision Produced

&#x20;       ↓

Attestation Generated

&#x20;       ↓

Receipt Verified

&#x20;       ↓

Execution Completed

```



The complete authorization path becomes visible.



\---



\# Compliance Use Cases



\## Internal Audit



Verify authorization lineage.



\---



\## Regulatory Review



Verify policy compliance.



\---



\## Incident Investigation



Determine why execution occurred.



\---



\## Forensics



Reconstruct historical authorization state.



\---



\## Independent Verification



Validate trust-chain integrity.



\---



\# API Invariants



\## API-001



Trust chains must be reconstructable using businessTransactionId.



\---



\## API-002



Retrieved artifacts must preserve lineage relationships.



\---



\## API-003



Historical artifacts must not be overwritten.



\---



\## API-004



Retrieval must not modify trust-chain state.



\---



\## API-005



Trust-chain retrieval is read-only.



\---



\## API-006



All persisted trust-chain artifacts must be retrievable.



\---



\# Architectural Principle



Parmana's value is not merely evaluating authority.



Parmana preserves evidence explaining:



```text

Why execution was authorized



Why verification succeeded



Why execution occurred

```



The Trust Chain Retrieval API makes that evidence accessible through a single lineage identifier and serves as the primary interface for trust-chain reconstruction.



