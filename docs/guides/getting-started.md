\# Getting Started with Parmana Trust Core



\## Introduction



Parmana Trust Core provides cryptographic evidence that authorized intent resulted in authorized execution.



The system is built around a simple principle:



```text

Decisions authorize Intent.



Intent authorizes Execution.

```



Parmana creates verifiable evidence connecting those stages.



\---



\# What You Will Learn



This guide demonstrates:



1\. Starting the Parmana API

2\. Creating an attestation

3\. Retrieving the Parmana trust anchor

4\. Independently verifying an attestation

5\. Exploring the API documentation



Expected outcome:



```text

Verification Result:

VALID

```



\---



\# Prerequisites



Requirements:



\* Node.js

\* npm

\* Git

\* PowerShell (Windows)



Repository:



```text

D:\\last\\parmana-trust-core

```



\---



\# Step 1 — Install Dependencies



Open PowerShell:



```powershell

cd D:\\last\\parmana-trust-core

```



Install packages:



```powershell

npm install

```



\---



\# Step 2 — Start Parmana



Run:



```powershell

npm run dev

```



Expected:



```text

Parmana API listening on 3000

```



Keep this terminal open.



\---



\# Step 3 — Open API Documentation



Open a browser:



```text

http://localhost:3000/docs

```



Swagger UI provides access to every API endpoint.



\---



\# Step 4 — Create an Attestation



Open a second PowerShell window.



Create request body:



```powershell

$body = @{

&#x20; task = "payment-release"

&#x20; signals = @{

&#x20;   role = "finance-manager"

&#x20; }

} | ConvertTo-Json -Depth 5

```



Submit request:



```powershell

$attestation = Invoke-RestMethod `

&#x20; -Method POST `

&#x20; -Uri http://localhost:3000/attest `

&#x20; -ContentType "application/json" `

&#x20; -Body $body

```



Inspect result:



```powershell

$attestation | ConvertTo-Json -Depth 20

```



Expected output contains:



```text

decisionId

evidence.hash

signatures.signatures\[0].value

```



\---



\# Step 5 — Retrieve Trust Anchor



Request:



```powershell

curl http://localhost:3000/trust-anchor/public-key

```



Expected:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



This endpoint publishes Parmana's verification key.



\---



\# Step 6 — Extract Verification Data



Attestation hash:



```powershell

$attestation.evidence\[0].hash

```



Signature:



```powershell

$attestation.signatures.signatures\[0].value

```



Important:



```text

Hash and signature must originate from the same attestation.

```



\---



\# Step 7 — Verify Independently



Run:



```powershell

npx tsx examples\\verify-attestation.ts

```



Expected:



```text

Trust Anchor:

{

&#x20; keyId: 'parmana-root-key',

&#x20; algorithm: 'ed25519'

}



Verification Result:

VALID

```



\---



\# What Was Proven



The verifier:



1\. Retrieved Parmana's trust anchor

2\. Loaded an attestation hash

3\. Loaded a digital signature

4\. Verified the signature using Ed25519

5\. Produced a VALID result



Verification occurred independently of Parmana verification services.



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



\# Documentation Map



Read next:



```text

docs/guides/quick-start.md

```



Developer workflow:



```text

docs/guides/using-parmana-trust-core.md

```



Architecture:



```text

docs/guides/architecture-overview.md

```



API reference:



```text

docs/guides/api-reference.md

```



Trust foundation:



```text

docs/trust-foundation/README.md

```



Roadmap:



```text

docs/roadmap/trust-foundation-roadmap.md

```



\---



\# Current Trust Foundation Status



Completed:



```text

✓ Public Key Endpoint

✓ External Verification Example

```



Planned:



```text

→ Key Rotation

→ Trust Root Rotation

```



\---



\# Canonical Trust Claim



Parmana trust artifacts can be independently verified using Parmana's published trust anchor.



