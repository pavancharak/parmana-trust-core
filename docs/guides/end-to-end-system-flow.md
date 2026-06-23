\# Parmana Trust Core End-to-End System Flow



\## Purpose



This document describes every step required to move from a developer cloning the repository to independently verifying a Parmana trust artifact.



\---



\# Phase 0 — Repository Setup



\## Repository Root



```text

D:\\last\\parmana-trust-core

```



\## Install Dependencies



```powershell

cd D:\\last\\parmana-trust-core



npm install

```



\---



\# Phase 1 — Trust Foundation Assets



\## Attestation Keys



Private key:



```text

D:\\last\\parmana-trust-core\\keys\\attestation-private.pem

```



Public key:



```text

D:\\last\\parmana-trust-core\\keys\\attestation-public.pem

```



Loaded by:



```text

packages\\attestation\\src\\crypto.ts

```



Functions:



```ts

signHash()

verifyHash()

getPublicKey()

```



\---



\# Phase 2 — Task Definition



\## Task File



Example:



```text

D:\\last\\parmana-trust-core\\tasks\\payment-release\\task.json

```



Contents:



```json

{

&#x20; "taskId": "payment.release",

&#x20; "name": "Release Payment",

&#x20; "policy": {

&#x20;   "policyId": "payment-release",

&#x20;   "policyVersion": "1.0.0"

&#x20; }

}

```



Purpose:



Defines which policy governs the task.



\---



\# Phase 3 — Start Parmana



\## Entry Point



```text

packages\\server\\src\\index.ts

```



Start:



```powershell

npm run dev

```



Expected:



```text

Parmana API listening on 3000

```



\---



\# Phase 4 — OpenAPI Documentation



\## Generator



```text

packages\\server\\src\\openapi\\generate.ts

```



Generate:



```powershell

cd packages\\server



npm run openapi:generate

```



Output:



```text

openapi\\generated.yaml

```



Swagger:



```text

http://localhost:3000/docs

```



Route:



```text

packages\\server\\src\\routes\\swagger.ts

```



\---



\# Phase 5 — Evaluation



\## Route



```text

packages\\server\\src\\routes\\evaluate.ts

```



Request:



```http

POST /evaluate

```



Input:



```json

{

&#x20; "task": "payment-release",

&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



Flow:



```text

Task

&#x20; ↓

Policy

&#x20; ↓

Trusted Signals

&#x20; ↓

Decision

```



Implementation:



```text

packages\\verifier\\src\\evaluate-task.ts

```



\---



\# Phase 6 — Attestation



\## Route



```text

packages\\server\\src\\routes\\attest.ts

```



Request:



```http

POST /attest

```



Flow:



```text

Evaluation

&#x20;   ↓

createAttestation()

&#x20;   ↓

Digital Signature

```



Implementation:



```text

packages\\attestation\\src\\create-attestation.ts

```



Signature Provider:



```text

packages\\attestation\\src\\provider.ts

```



Implementation:



```text

packages\\attestation\\src\\ed25519-provider.ts

```



Result:



```text

Attestation

Attestation Hash

Ed25519 Signature

```



\---



\# Phase 7 — Verification



\## Route



```text

packages\\server\\src\\routes\\verify-attestation.ts

```



Request:



```http

POST /verify

```



Implementation:



```text

packages\\attestation\\src\\verify-attestation.ts

```



Purpose:



Verify attestation authenticity.



\---



\# Phase 8 — Execution Token



\## Route



```text

packages\\server\\src\\routes\\token.ts

```



Request:



```http

POST /token

```



Purpose:



Create execution authorization.



Result:



```text

Execution Token

```



\---



\# Phase 9 — Execution



\## Route



```text

packages\\server\\src\\routes\\execute.ts

```



Request:



```http

POST /execute

```



Purpose:



Record execution evidence.



Result:



```text

Execution Record

```



\---



\# Phase 10 — Trust Chain Retrieval



\## Route



```text

packages\\server\\src\\routes\\trust-chain.ts

```



Request:



```http

GET /trust-chain/{businessTransactionId}

```



Purpose:



Retrieve lineage.



Output:



```text

Transaction

&#x20;  ↓

Attestation

&#x20;  ↓

Verification

&#x20;  ↓

Execution

```



\---



\# Phase 11 — Override Workflow



\## Create Override



Route:



```text

packages\\server\\src\\routes\\override.ts

```



Endpoint:



```http

POST /override

```



\---



\## Override Attestation



Route:



```text

packages\\server\\src\\routes\\override-attest.ts

```



Endpoint:



```http

POST /override/attest

```



\---



\## Override Verification



Route:



```text

packages\\server\\src\\routes\\override-verify.ts

```



Endpoint:



```http

POST /override/verify

```



\---



\# Phase 12 — Trust Anchor Publication



\## Route



```text

packages\\server\\src\\routes\\trust-anchor-public-key.ts

```



Endpoint:



```http

GET /trust-anchor/public-key

```



Purpose:



Publish Parmana verification key.



Response:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



Schema:



```text

packages\\server\\src\\schemas\\public-key-response.ts

```



\---



\# Phase 13 — Independent Verification



\## Example



```text

examples\\verify-attestation.ts

```



Flow:



```text

Retrieve Trust Anchor

&#x20;      ↓

Load Public Key

&#x20;      ↓

Load Attestation Hash

&#x20;      ↓

Load Signature

&#x20;      ↓

Verify Signature

&#x20;      ↓

VALID / INVALID

```



Run:



```powershell

npx tsx examples\\verify-attestation.ts

```



Expected:



```text

Verification Result:

VALID

```



\---



\# Phase 14 — Trust Root



\## Create Trust Root



Route:



```text

packages\\server\\src\\routes\\trust-root.ts

```



Endpoint:



```http

POST /trust-root

```



\---



\## Current Trust Root



Route:



```text

packages\\server\\src\\routes\\trust-root-current.ts

```



Endpoint:



```http

GET /trust-root/current

```



Purpose:



Publish root hash over evidence receipts.



\---



\# Canonical End-to-End Flow



```text

Task Definition

&#x20;       ↓

Policy

&#x20;       ↓

Trusted Signals

&#x20;       ↓

Evaluate

&#x20;       ↓

Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification

&#x20;       ↓

Execution Token

&#x20;       ↓

Execution

&#x20;       ↓

Trust Chain

&#x20;       ↓

Trust Root

&#x20;       ↓

Published Trust Anchor

&#x20;       ↓

Independent Verification

```



\---



\# Current Trust Foundation Status



```text

✓ Public Key Endpoint

✓ External Verification Example



Next:

→ Key Rotation

→ Trust Root Rotation

```



\# Canonical Trust Claim



Parmana trust artifacts can be independently verified using Parmana's published trust anchor.



