\# Using Parmana Trust Core



\## Overview



Parmana Trust Core provides cryptographic evidence that an authorized decision resulted in an execution.



The canonical trust flow is:



Decision → Attestation → Verification → Execution → Trust Chain



\---



\# 1. Create an Attestation



Endpoint:



```http

POST /attest

```



Request:



```json

{

&#x20; "task": "payment-release",

&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



Response:



```json

{

&#x20; "decisionId": "...",

&#x20; "policyId": "payment-release",

&#x20; "policyVersion": "1.0.0",

&#x20; "evidence": \[

&#x20;   {

&#x20;     "id": "attestation-hash",

&#x20;     "hash": "..."

&#x20;   }

&#x20; ],

&#x20; "signatures": {

&#x20;   "signatures": \[

&#x20;     {

&#x20;       "algorithm": "ed25519",

&#x20;       "keyId": "parmana-root-key",

&#x20;       "value": "..."

&#x20;     }

&#x20;   ]

&#x20; }

}

```



Purpose:



Creates a cryptographically signed decision attestation.



\---



\# 2. Verify an Attestation



Endpoint:



```http

POST /verify

```



Request:



```json

{

&#x20; "attestation": {},

&#x20; "policy": {}

}

```



Purpose:



Evaluates whether the attestation satisfies policy requirements.



Response:



```json

{

&#x20; "verificationId": "ver-001",

&#x20; "valid": true

}

```



\---



\# 3. Create Execution Token



Endpoint:



```http

POST /token

```



Request:



```json

{

&#x20; "verificationId": "ver-001"

}

```



Response:



```json

{

&#x20; "tokenId": "tok-001",

&#x20; "executionToken": "ett-001"

}

```



Purpose:



Creates an execution authorization token.



\---



\# 4. Record Execution



Endpoint:



```http

POST /execute

```



Request:



```json

{

&#x20; "executionToken": "ett-001"

}

```



Response:



```json

{

&#x20; "executionId": "exec-001",

&#x20; "status": "EXECUTED"

}

```



Purpose:



Records the execution event.



\---



\# 5. Retrieve Trust Chain



Endpoint:



```http

GET /trust-chain/{businessTransactionId}

```



Response:



```json

{

&#x20; "businessTransactionId": "txn-001",

&#x20; "attestationId": "att-001",

&#x20; "verificationId": "ver-001",

&#x20; "executionId": "exec-001"

}

```



Purpose:



Retrieves complete execution lineage.



\---



\# Override Workflow



Overrides are used when normal policy requirements cannot be satisfied.



\## Create Override



```http

POST /override

```



\## Attest Override



```http

POST /override/attest

```



\## Verify Override



```http

POST /override/verify

```



Purpose:



Provides auditable exception handling.



\---



\# Independent Verification



Parmana supports external verification.



Retrieve public key:



```http

GET /trust-anchor/public-key

```



Example:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



Use the published public key to verify attestation signatures independently.



No Parmana SDK, database access, or verification API is required.



\---



\# Trust Model



Parmana does not ask verifiers to trust Parmana.



Parmana publishes cryptographic evidence that can be independently verified.



The trust model is:



Decision → Intent → Attestation → Verification → Execution



Every artifact in this chain should be independently verifiable.



