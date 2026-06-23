\# Parmana Trust Core API Reference



\## Overview



Parmana Trust Core provides cryptographic evidence linking authorization decisions to execution outcomes.



Base URL:



```text

http://localhost:3000

```



Swagger UI:



```text

http://localhost:3000/docs

```



OpenAPI Specification:



```text

openapi/generated.yaml

```



\---



\# Attestation APIs



\## Create Attestation



\### Endpoint



```http

POST /attest

```



\### Purpose



Creates a cryptographically signed attestation representing an authorization decision.



\### Request



```json

{

&#x20; "task": "payment-release",

&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



\### Response



```json

{

&#x20; "schemaVersion": "2",

&#x20; "decisionId": "46181063-5252-4203-8204-4c0de03212df",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-release",

&#x20; "policyVersion": "1.0.0",

&#x20; "evidence": \[

&#x20;   {

&#x20;     "id": "attestation-hash",

&#x20;     "hash": "e43b9b3daccea16eada75de37a7342ad35271b0ba09ffa98e88a19b150c1ec82",

&#x20;     "hashAlgorithm": "sha256"

&#x20;   }

&#x20; ],

&#x20; "signatures": {

&#x20;   "signatures": \[

&#x20;     {

&#x20;       "algorithm": "ed25519",

&#x20;       "keyId": "parmana-root-key",

&#x20;       "value": "...",

&#x20;       "createdAt": "2026-06-23T01:21:19.859Z"

&#x20;     }

&#x20;   ]

&#x20; }

}

```



\### Output



```text

Decision → Attestation

```



\---



\# Verification APIs



\## Verify Attestation



\### Endpoint



```http

POST /verify

```



\### Purpose



Evaluates whether an attestation satisfies policy requirements.



\### Request



```json

{

&#x20; "attestation": {

&#x20;   "attestationId": "att-001"

&#x20; },

&#x20; "policy": {

&#x20;   "policyId": "payment-policy",

&#x20;   "version": "1.0"

&#x20; }

}

```



\### Response



```json

{

&#x20; "verificationId": "ver-001",

&#x20; "valid": true

}

```



\### Output



```text

Attestation → Verification

```



\---



\# Execution APIs



\## Create Execution Token



\### Endpoint



```http

POST /token

```



\### Purpose



Creates authorization for execution.



\### Request



```json

{

&#x20; "verificationId": "ver-001"

}

```



\### Response



```json

{

&#x20; "tokenId": "tok-001",

&#x20; "executionToken": "ett-001"

}

```



\### Output



```text

Verification → Execution Token

```



\---



\## Record Execution



\### Endpoint



```http

POST /execute

```



\### Purpose



Records execution evidence.



\### Request



```json

{

&#x20; "executionToken": "ett-001"

}

```



\### Response



```json

{

&#x20; "executionId": "exec-001",

&#x20; "status": "EXECUTED"

}

```



\### Output



```text

Execution Token → Execution Record

```



\---



\# Trust Chain APIs



\## Retrieve Trust Chain



\### Endpoint



```http

GET /trust-chain/{businessTransactionId}

```



\### Purpose



Retrieves end-to-end execution lineage.



\### Path Parameters



| Name                  | Type   | Description            |

| --------------------- | ------ | ---------------------- |

| businessTransactionId | string | Transaction identifier |



\### Response



```json

{

&#x20; "businessTransactionId": "txn-001",

&#x20; "attestationId": "att-001",

&#x20; "verificationId": "ver-001",

&#x20; "executionId": "exec-001"

}

```



\### Output



```text

Transaction

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



\---



\# Override APIs



\## Create Override



\### Endpoint



```http

POST /override

```



\### Purpose



Creates an override decision when normal policy requirements cannot be satisfied.



\### Request



```json

{

&#x20; "businessTransactionId": "txn-001",

&#x20; "reason": "Emergency payment release",

&#x20; "approver": "cfo@company.com"

}

```



\### Response



```json

{

&#x20; "overrideId": "ovr-001",

&#x20; "status": "APPROVED"

}

```



\---



\## Create Override Attestation



\### Endpoint



```http

POST /override/attest

```



\### Purpose



Creates cryptographic evidence for an approved override.



\### Request



```json

{

&#x20; "overrideId": "ovr-001"

}

```



\### Response



```json

{

&#x20; "overrideAttestationId": "ovr-att-001"

}

```



\---



\## Verify Override Attestation



\### Endpoint



```http

POST /override/verify

```



\### Purpose



Verifies override authorization.



\### Request



```json

{

&#x20; "overrideAttestationId": "ovr-att-001"

}

```



\### Response



```json

{

&#x20; "verificationId": "ovr-ver-001",

&#x20; "valid": true

}

```



\---



\# Trust Anchor APIs



\## Retrieve Public Verification Key



\### Endpoint



```http

GET /trust-anchor/public-key

```



\### Purpose



Publishes Parmana's verification key for independent verification.



\### Response



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----"

}

```



\### Output



```text

Published Trust Anchor

```



\---



\# Independent Verification



Parmana supports independent cryptographic verification.



Required:



```text

Attestation Hash

Signature

Published Trust Anchor

```



Verification process:



```text

Attestation Hash

&#x20;     ↓

Signature

&#x20;     ↓

Public Key

&#x20;     ↓

VALID / INVALID

```



Example:



```powershell

npx tsx examples\\verify-attestation.ts

```



Expected result:



```text

Verification Result:

VALID

```



\---



\# Error Handling



\## 404 Not Found



Example:



```json

{

&#x20; "error": "Trust chain not found"

}

```



\---



\## 500 Internal Server Error



Example:



```json

{

&#x20; "error": "Internal server error"

}

```



\---



\# Canonical Trust Flow



```text

Decision

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution Token

&#x20;   ↓

Execution

&#x20;   ↓

Trust Chain

```



\---



\# Canonical Trust Claim



Parmana trust artifacts can be independently verified using Parmana's published trust anchor.





