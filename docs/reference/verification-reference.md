\# Verification Reference



\## Purpose



Verification transforms authorization evidence into independently validated trust evidence.



It proves that an attestation was genuinely produced by Parmana and has not been modified.



Verification is the foundation of external trust.



\---



\# Canonical Principle



Attestation creates trust evidence.



Verification validates trust evidence.



\---



\# Position In Trust Chain



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



Verification occurs after attestation and before execution authorization.



\---



\# Why Verification Exists



An attestation may claim:



```text

Authorization Exists

```



Verification answers:



```text

Can We Independently Prove It?

```



Without verification:



```text

Trust Requires Belief

```



With verification:



```text

Trust Requires Evidence

```



\---



\# Canonical Trust Question



Verification answers:



```text

Can This Attestation Be Trusted?

```



\---



\# Definition



Verification is the cryptographic validation of an attestation using:



```text

Attestation Hash



Digital Signature



Public Verification Key

```



to determine whether authorization evidence is authentic.



\---



\# Responsibilities



Verification proves:



```text

Attestation Is Authentic



Attestation Was Signed



Attestation Was Not Modified



Signing Key Is Valid

```



\---



\# Verification Is Not Authorization



Authorization determines:



```text

Should This Happen?

```



Verification determines:



```text

Can We Trust The Authorization Evidence?

```



\---



\# Verification Is Not Execution



Verification proves:



```text

Authorization Evidence Is Valid

```



Execution proves:



```text

Action Occurred

```



\---



\# Inputs To Verification



Verification requires:



```text

Attestation



Signature



Public Key

```



\---



\# Attestation Input



Example:



```json

{

&#x20; "evidence": \[

&#x20;   {

&#x20;     "hash": "e43b9b3d..."

&#x20;   }

&#x20; ]

}

```



Purpose:



```text

Provide Signed Evidence

```



\---



\# Signature Input



Example:



```json

{

&#x20; "algorithm": "ed25519",



&#x20; "keyId": "parmana-root-key",



&#x20; "value": "IOmZK8CGAsDM..."

}

```



Purpose:



```text

Provide Cryptographic Proof

```



\---



\# Public Key Input



Retrieved from:



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



Purpose:



```text

Provide Verification Authority

```



\---



\# Verification Flow



```text

Attestation

&#x20;     ↓

Extract Hash

&#x20;     ↓

Extract Signature

&#x20;     ↓

Retrieve Public Key

&#x20;     ↓

Verify Signature

&#x20;     ↓

VALID / INVALID

```



\---



\# Canonical Verification Algorithm



Input:



```text

Hash

\+

Signature

\+

Public Key

```



Process:



```text

Cryptographic Signature Verification

```



Output:



```text

VALID



or



INVALID

```



\---



\# Verification Result



Successful example:



```json

{

&#x20; "valid": true

}

```



Meaning:



```text

Attestation Integrity Preserved

```



\---



\# Failed Verification Example



```json

{

&#x20; "valid": false

}

```



Meaning:



```text

Trust Evidence Cannot Be Proven

```



\---



\# Canonical Verification States



\## VALID



Meaning:



```text

Signature Matches



Key Matches



Evidence Matches

```



Authorization evidence is trustworthy.



\---



\## INVALID



Meaning:



```text

Signature Failure



Key Failure



Evidence Modification



Corruption

```



Authorization evidence is not trustworthy.



\---



\# Independent Verification



Verification should not require:



```text

Database Access



Internal Systems



Private APIs



Administrative Privileges

```



Verification should require only:



```text

Public Trust Materials

```



\---



\# Canonical Independent Verification Flow



```text

Retrieve Trust Anchor

&#x20;        ↓

Receive Attestation

&#x20;        ↓

Verify Signature

&#x20;        ↓

VALID

```



No Parmana database access required.



\---



\# Current Implementation Example



Trust Anchor:



```http

GET /trust-anchor/public-key

```



Response:



```json

{

&#x20; "keyId": "parmana-root-key",



&#x20; "algorithm": "ed25519"

}

```



Verification:



```typescript

crypto.verify(

&#x20; null,

&#x20; Buffer.from(hash),

&#x20; publicKey,

&#x20; Buffer.from(signature, "base64")

)

```



Result:



```text

true

```



\---



\# Verification Receipt



Verification may generate a receipt.



Purpose:



```text

Persist Verification Outcome

```



Example:



```json

{

&#x20; "verificationId": "VR-001",



&#x20; "valid": true

}

```



\---



\# Verification Identity



Every verification should be uniquely identifiable.



Example:



```json

{

&#x20; "verificationId":

&#x20;   "VR-001"

}

```



Purpose:



```text

Trust Chain Correlation

```



\---



\# Verification Metadata



Typical metadata:



```json

{

&#x20; "verifiedAt":

&#x20;   "2026-06-23T01:30:00Z",



&#x20; "keyId":

&#x20;   "parmana-root-key"

}

```



Purpose:



```text

Verification Context

```



\---



\# Relationship To Trust Anchors



Verification depends on:



```text

Trust Anchor

```



Purpose:



```text

Identity Of Verification Authority

```



Retrieved from:



```http

GET /trust-anchor/public-key

```



\---



\# Relationship To Trust Roots



Trust roots allow verification of:



```text

Published Trust State

```



Verification and trust roots work together.



\---



\# Relationship To Attestations



Attestation provides:



```text

Evidence

```



Verification provides:



```text

Confidence

```



\---



\# Relationship To Execution Tokens



Execution tokens should only be generated after:



```text

VALID Verification

```



Flow:



```text

Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution Token

```



\---



\# Relationship To Execution



Recommended rule:



```text

INVALID Verification

=

No Execution

```



Execution should not proceed if authorization evidence cannot be verified.



\---



\# Verification Failures



Examples:



```text

Invalid Signature



Modified Attestation



Unknown Key



Corrupted Evidence



Unsupported Algorithm

```



Result:



```text

INVALID

```



\---



\# Verification Security Properties



Verification provides:



```text

Authenticity



Integrity



Non-Repudiation



Evidence Preservation

```



\---



\# Verification Does Not Provide



Verification does not determine:



```text

Business Correctness



Policy Correctness



Regulatory Compliance



Execution Success

```



Verification only determines trustworthiness of evidence.



\---



\# Questions Verification Answers



```text

Was This Attestation Signed?



Can The Signature Be Validated?



Has The Evidence Been Modified?



Can Authorization Evidence Be Trusted?



Can Verification Be Performed Independently?

```



\---



\# Questions Verification Does Not Answer



```text

Was The Decision Correct?



Was The Policy Correct?



Did Execution Occur?



Did Execution Match Intent?

```



Those belong to other trust artifacts.



\---



\# Verification Lifecycle



```text

Receive Attestation

&#x20;        ↓

Retrieve Trust Anchor

&#x20;        ↓

Verify Signature

&#x20;        ↓

Generate Result

&#x20;        ↓

Optional Receipt

```



\---



\# Operational Validation



Current milestone implementation:



```text

GET /trust-anchor/public-key

```



returns:



```text

parmana-root-key

```



Independent verifier:



```text

examples/verify-attestation.ts

```



Expected output:



```text

Verification Result:



VALID

```



This demonstrates external verification without access to Parmana internals.



\---



\# Canonical Outcome



Verification transforms signed authorization evidence into independently validated trust evidence.



It enables any party with access to the trust anchor to determine whether an attestation is authentic, unmodified, and trustworthy.



Verification is the foundation of external trust, federation, and execution authorization throughout the Parmana trust model.



