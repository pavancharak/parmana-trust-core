\# Phase 13 — Trust Anchor Publication



\## Objective



Publish Parmana's trust anchor so that anyone can independently verify Parmana-generated attestations.



This phase establishes the foundation of external trust.



\---



\# Why Trust Anchor Publication Exists



Prior phases established:



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

```



However, verification is only meaningful if external parties can obtain the public key used to verify signatures.



Without a published trust anchor:



```text

Verification Requires Parmana

```



With a published trust anchor:



```text

Verification Can Be Performed Independently

```



\---



\# Canonical Principle



Trust should be independently verifiable.



Verification should not require trusting Parmana's internal systems.



\---



\# What Is A Trust Anchor?



A trust anchor is the public cryptographic identity used to verify signatures.



In Parmana:



```text

Private Key

&#x20;     ↓

Signs Attestations

```



```text

Public Key

&#x20;     ↓

Verifies Attestations

```



The public key is the trust anchor.



\---



\# Canonical Flow



```text

Private Key

&#x20;     ↓

Sign Attestation

&#x20;     ↓

Publish Public Key

&#x20;     ↓

Independent Verification

```



\---



\# Milestone Achieved



This phase corresponds to the Trust Foundation Roadmap milestone:



```text

Public Key Endpoint

```



Status:



```text

COMPLETED

```



\---



\# Published Endpoint



Endpoint:



```http

GET /trust-anchor/public-key

```



Purpose:



```text

Retrieve Parmana Trust Anchor

```



\---



\# Route Implementation



File:



```text

packages/server/src/routes/trust-anchor-public-key.ts

```



Registered In:



```text

packages/server/src/index.ts

```



\---



\# Endpoint Response



Example:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----"

}

```



\---



\# Response Fields



\## keyId



Example:



```text

parmana-root-key

```



Purpose:



```text

Identify Signing Key

```



\---



\## algorithm



Current Value:



```text

ed25519

```



Purpose:



```text

Identify Signature Algorithm

```



\---



\## publicKey



Example:



```text

\-----BEGIN PUBLIC KEY-----

MCowBQYDK2VwAyEA...

\-----END PUBLIC KEY-----

```



Purpose:



```text

Verify Parmana Signatures

```



\---



\# Cryptographic Architecture



Implementation:



```text

packages/attestation/src/crypto.ts

```



Loads:



```text

attestation-private.pem

attestation-public.pem

```



\---



\# Signing Flow



Implementation:



```text

packages/attestation/src/ed25519-provider.ts

```



Attestation Flow:



```text

Attestation Hash

&#x20;      ↓

signHash()

&#x20;      ↓

Digital Signature

```



\---



\# Verification Flow



External Consumer:



```text

Public Key

&#x20;     ↓

Attestation Hash

&#x20;     ↓

Signature

&#x20;     ↓

crypto.verify()

```



Result:



```text

VALID

or

INVALID

```



\---



\# Current Trust Anchor



Current Key ID:



```text

parmana-root-key

```



Current Algorithm:



```text

ed25519

```



Current Publication Method:



```http

GET /trust-anchor/public-key

```



\---



\# Why Publication Matters



Without publication:



```text

Only Parmana Can Verify

```



With publication:



```text

Anyone Can Verify

```



This transforms:



```text

Trust Me

```



into:



```text

Verify It Yourself

```



\---



\# Independent Verification Example



File:



```text

examples/verify-attestation.ts

```



Purpose:



```text

Verify Attestation

Without Using Parmana Internals

```



Flow:



```text

Fetch Trust Anchor

&#x20;        ↓

Load Public Key

&#x20;        ↓

Verify Signature

&#x20;        ↓

VALID

```



Observed Result:



```text

VALID

```



\---



\# What Independent Verification Proves



Independent verification proves:



```text

Attestation Was Signed

By Parmana's Private Key

```



and



```text

Attestation Has Not Been Modified

```



\---



\# What Independent Verification Does Not Prove



It does not prove:



```text

Business Decision Was Correct

Policy Was Correct

Organization Was Correct

```



It proves only:



```text

Signature Authenticity

Evidence Integrity

```



\---



\# Relationship To Attestation



Attestation Generation:



```text

Attestation Hash

&#x20;      ↓

Sign

```



Trust Anchor Publication:



```text

Public Key

&#x20;      ↓

Verify

```



These two halves complete the cryptographic trust model.



\---



\# Relationship To Trust Chains



Trust chains rely on:



```text

Attestations

Verification Receipts

Execution Records

```



All of those ultimately depend on:



```text

Trust Anchor Verification

```



\---



\# OpenAPI Documentation



Schema:



```text

packages/server/src/schemas/public-key-response.ts

```



OpenAPI Generator:



```text

packages/server/src/openapi/generate.ts

```



Published Endpoint:



```http

GET /trust-anchor/public-key

```



Example response included in generated OpenAPI specification.



\---



\# Validation Example



Request:



```http

GET /trust-anchor/public-key

```



Expected Response:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



Expected Status:



```text

200 OK

```



\---



\# Operational Validation



Verify endpoint:



```powershell

curl http://localhost:3000/trust-anchor/public-key

```



Expected:



```text

Public Key Returned

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



\# Dependency Chain



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Signature

&#x20;   ↓

Trust Anchor Publication

&#x20;   ↓

Independent Verification

```



Without publication:



```text

Verification Exists



External Trust Does Not

```



\---



\# Phase Completion Criteria



```text

✓ Public key endpoint implemented

✓ Trust anchor published

✓ OpenAPI documented

✓ Public key retrievable

✓ Independent verification working

✓ No private key exposure

```



\---



\# Output Of Phase 13



```text

Trust Anchor Published For Independent Verification

```



\---



\# Canonical Outcome



Parmana signs attestations using a private key.



Parmana publishes the corresponding public key.



Anyone can independently verify Parmana-generated evidence without needing access to Parmana's internal systems.



Trust is not asserted.



Trust is verifiable.



