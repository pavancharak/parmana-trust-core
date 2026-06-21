\# Public Key Distribution Model



\## Purpose



The Public Key Distribution Model defines how external systems obtain and trust Parmana public keys for independent verification of execution authorization artifacts.



The objective is:



```text

Verify Parmana Authorization

Without Calling Parmana

```



This enables portable trust across organizational and system boundaries.



\---



\# Problem Statement



Execution systems must answer:



```text

Did Parmana authorize this execution?

```



without relying on:



```text

Live Parmana Availability

Database Access

Internal Network Connectivity

```



Verification must be possible using only:



```text

Execution Token

Public Key

```



\---



\# Architectural Position



```text

Parmana

&#x20;   │

&#x20;   ▼

Execution Trust Token

&#x20;   │

&#x20;   ▼

External System

&#x20;   │

&#x20;   ▼

Public Key

&#x20;   │

&#x20;   ▼

Verification

```



The Public Key Distribution Model is the bridge between:



```text

Internal Trust

```



and



```text

Portable Trust

```



\---



\# Design Goals



\## Independent Verification



Verification must not require:



```text

Parmana APIs

Parmana Databases

Parmana Runtime

```



\---



\## Public Distribution



Public keys may be distributed freely.



Public keys are not secrets.



Only private keys require protection.



\---



\## Trust Continuity



Public key updates must support:



```text

Key Rotation

Root Evolution

Trust Continuity

```



without invalidating historical authorization artifacts.



\---



\## Deterministic Verification



Every verifier should produce the same result.



```text

Valid

```



or



```text

Invalid

```



must not depend on environment-specific state.



\---



\# Current Trust Model



\## Trust Anchor



Current trust root:



```text

parmana-root-key

```



Algorithm:



```text

ed25519

```



Artifacts signed:



```text

Execution Trust Tokens

```



\---



\# Public Key Endpoint



\## Endpoint



```http

GET /trust-anchor/public-key

```



Purpose:



```text

Retrieve active Parmana verification key.

```



\---



\## Response



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



\---



\# Public Key Fields



\## keyId



Unique trust-anchor identifier.



Example:



```text

parmana-root-key

```



Used to determine which public key verifies a signature.



\---



\## algorithm



Cryptographic verification algorithm.



Example:



```text

ed25519

```



\---



\## publicKey



Public verification key.



Example:



```text

\-----BEGIN PUBLIC KEY-----

MCowBQYDK2VwAyEA...

\-----END PUBLIC KEY-----

```



Used for:



```text

Signature Verification

External Verification

Audit Validation

```



\---



\# External Verification Flow



\## Step 1



Receive Execution Token.



```text

Execution Token

```



\---



\## Step 2



Obtain Parmana Public Key.



```text

GET /trust-anchor/public-key

```



\---



\## Step 3



Reconstruct Signed Payload.



```text

businessTransactionId

decisionId

receiptId

taskId

policyId

policyVersion

issuedAt

expiresAt

```



\---



\## Step 4



Verify Signature.



```typescript

verifyPayload(

&#x20; payload,

&#x20; signature

);

```



\---



\## Step 5



Determine Authorization.



```text

Valid Signature

&#x20;     ↓

Authorized



Invalid Signature

&#x20;     ↓

Rejected

```



\---



\# Example Verification



\## Execution Token



```json

{

&#x20; "tokenId": "123",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "decisionId": "abc",

&#x20; "receiptId": "xyz",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "issuedAt": "2026-06-21T06:27:44Z",

&#x20; "expiresAt": "2026-06-21T06:42:44Z",

&#x20; "signature": "..."

}

```



\---



\## Verification Decision



```text

Signature Valid

Token Not Expired

```



Result:



```text

Execution Authorized

```



\---



\# Trust Boundary



Parmana trusts:



```text

Private Key

```



External systems trust:



```text

Public Key

```



Trust transfer occurs through:



```text

Digital Signature Verification

```



not through API calls.



\---



\# Public Key Caching



External systems may cache public keys.



Recommended:



```text

24 Hours

```



Refresh mechanisms:



```text

Periodic Refresh

Key Rotation Events

Startup Refresh

```



\---



\# Future Key Metadata



Future versions should expose:



```json

{

&#x20; "keyId": "parmana-root-key-v2",

&#x20; "rootVersion": "v2",

&#x20; "algorithm": "ed25519",

&#x20; "createdAt": "...",

&#x20; "expiresAt": "...",

&#x20; "publicKey": "..."

}

```



Supports:



```text

Root Rotation

Historical Verification

Multi-Key Verification

```



\---



\# Multi-Key Distribution Model



Future architecture:



```text

Root v1

&#x20;  │

&#x20;  ▼

Public Key v1



Root v2

&#x20;  │

&#x20;  ▼

Public Key v2



Root v3

&#x20;  │

&#x20;  ▼

Public Key v3

```



Execution tokens identify:



```text

keyId

rootVersion

```



allowing verifiers to select the correct public key.



\---



\# Security Considerations



\## Public Keys Are Not Secret



The following may be shared:



```text

Public Keys

Key Metadata

Verification Endpoints

```



\---



\## Private Keys Are Secret



The following must never be exposed:



```text

Private Keys

Signing Material

KMS Credentials

```



\---



\## Verification Must Be Local



Verification should occur locally.



Avoid:



```text

Call Parmana

Ask Parmana If Token Is Valid

```



Prefer:



```text

Verify Signature

Verify Expiration

Authorize

```



\---



\# Future Evolution



\## Public Key Distribution v1



```text

Single Public Key Endpoint

Single Trust Anchor

Single Root Key

```



\---



\## Public Key Distribution v2



```text

Multiple Active Keys

Root Rotation

Key Metadata

```



\---



\## Public Key Distribution v3



```text

Trust Federation

Cross-Organization Trust

Delegated Verification

```



\---



\# Invariants



\## INV-500



```text

Public verification must be possible without Parmana runtime access.

```



\## INV-501



```text

Execution authorization must be independently verifiable.

```



\## INV-502



```text

Public key distribution must not expose private key material.

```



\## INV-503



```text

Verification must produce deterministic results.

```



\## INV-504



```text

Trust Anchor rotation must preserve historical verification.

```



\---



\# Canonical Statement



The Public Key Distribution Model enables independent verification of Parmana-issued execution authorization artifacts by distributing trusted public verification keys without exposing private signing keys.



