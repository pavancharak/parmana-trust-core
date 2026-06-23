\# Parmana Trust Core Quick Start



\## Overview



Parmana Trust Core creates cryptographic evidence that an authorized decision resulted in an execution.



This quick start demonstrates:



1\. Creating an attestation

2\. Retrieving Parmana's trust anchor

3\. Independently verifying the attestation signature



Expected outcome:



```text

Verification Result:

VALID

```



\---



\# Prerequisites



\* Node.js installed

\* Repository cloned

\* Dependencies installed



Install dependencies:



```powershell

npm install

```



\---



\# Start Parmana



From the repository root:



```powershell

npm run dev

```



Expected output:



```text

Parmana API listening on 3000

```



Leave this terminal running.



\---



\# Open API Documentation



Swagger UI:



```text

http://localhost:3000/docs

```



OpenAPI Specification:



```text

openapi/generated.yaml

```



\---



\# Create an Attestation



Open a second terminal.



Create request body:



```powershell

$body = @{

&#x20; task = "payment-release"

&#x20; signals = @{

&#x20;   role = "finance-manager"

&#x20; }

} | ConvertTo-Json -Depth 5

```



Create attestation:



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



Example response:



```json

{

&#x20; "schemaVersion": "2",

&#x20; "decisionId": "...",

&#x20; "taskId": "payment.release",

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



\---



\# Retrieve Parmana Trust Anchor



Request:



```powershell

curl http://localhost:3000/trust-anchor/public-key

```



Example response:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



This endpoint publishes the public key required for independent verification.



\---



\# Extract Verification Inputs



Retrieve the attestation hash:



```powershell

$attestation.evidence\[0].hash

```



Retrieve the signature:



```powershell

$attestation.signatures.signatures\[0].value

```



Example:



```text

Hash:

e43b9b3daccea16eada75de37a7342ad35271b0ba09ffa98e88a19b150c1ec82



Signature:

IOmZK8CGAsDM9MO8K2eWkPoeeF+FnmuxTgJHfutHfRihwcyO2CDts6v4DmSJp09EjCBKvWRvad9fhIvOCYX4Cg==

```



Important:



The hash and signature must come from the same attestation.



\---



\# Verify Independently



Run:



```powershell

npx tsx examples\\verify-attestation.ts

```



Expected output:



```text

Trust Anchor:

{

&#x20; keyId: 'parmana-root-key',

&#x20; algorithm: 'ed25519',

&#x20; publicKey: '-----BEGIN PUBLIC KEY-----...'

}



Verification Result:

VALID

```



\---



\# What Was Proven



The verification script:



1\. Retrieves Parmana's published trust anchor

2\. Loads the attestation hash

3\. Loads the attestation signature

4\. Verifies the signature using Ed25519

5\. Produces VALID or INVALID



No Parmana SDK is required.



No Parmana database access is required.



No Parmana verification API is required.



\---



\# Canonical Trust Flow



```text

Decision

&#x20;   ↓

Attestation

&#x20;   ↓

Attestation Hash

&#x20;   ↓

Signature

&#x20;   ↓

Published Trust Anchor

&#x20;   ↓

Independent Verification

&#x20;   ↓

VALID / INVALID

```



\---



\# Common Errors



\## ECONNREFUSED



Cause:



```text

Parmana server is not running.

```



Fix:



```powershell

npm run dev

```



\---



\## INVALID Verification Result



Cause:



```text

Hash and signature originate from different attestations.

```



Fix:



Use the hash and signature from the same attestation artifact.



\---



\# Next Steps



After completing this guide:



\* Retrieve trust chains using `/trust-chain/{businessTransactionId}`

\* Explore override workflows

\* Review the Trust Foundation documentation

\* Continue to Key Rotation (Milestone #3)



\---



\# Canonical Trust Claim



Parmana trust artifacts can be independently verified using Parmana's published trust anchor.



