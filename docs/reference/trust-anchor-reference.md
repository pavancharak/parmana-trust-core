\# Trust Anchor Reference



\## Purpose



A Trust Anchor is the root identity of a Parmana trust domain.



Every cryptographic verification performed within Parmana ultimately depends upon a Trust Anchor.



Without a Trust Anchor:



```text

Verification Is Impossible

```



Without verification:



```text

Trust Cannot Be Established

```



\---



\# Canonical Principle



Trust Anchors establish identity.



Trust Roots establish trust state.



Trust Chains establish trust lineage.



\---



\# Position In Trust Architecture



```text

Trust Anchor

&#x20;      ↓

Signs

&#x20;      ↓

Trust Root

&#x20;      ↓

References

&#x20;      ↓

Trust Chains

```



The Trust Anchor is the root of trust.



\---



\# Canonical Trust Question



A Trust Anchor answers:



```text

Who Produced This Trust Evidence?

```



\---



\# Definition



A Trust Anchor is the published public verification identity of a trust domain.



It enables external parties to verify:



```text

Attestations



Trust Roots



Execution Evidence



Federated Trust Evidence

```



without access to internal systems.



\---



\# Responsibilities



A Trust Anchor provides:



```text

Identity



Verification Authority



Key Discovery



Trust Bootstrap

```



\---



\# Why Trust Anchors Exist



An attestation may contain:



```text

Signature

```



but verification requires:



```text

Public Key

```



The Trust Anchor publishes that public key.



\---



\# Canonical Architecture



```text

Private Key

&#x20;     ↓

Signs

&#x20;     ↓

Trust Evidence



Public Key

&#x20;     ↓

Published As

&#x20;     ↓

Trust Anchor

```



\---



\# Canonical Trust Model



```text

Trust Anchor

&#x20;     ↓

Verification

&#x20;     ↓

Trust Evidence

```



\---



\# Trust Anchor Is Not A Trust Root



Trust Anchor answers:



```text

Who Signed?

```



Trust Root answers:



```text

What Was Signed?

```



\---



\# Trust Anchor Is Not A Trust Chain



Trust Anchor establishes:



```text

Identity

```



Trust Chain establishes:



```text

Lineage

```



\---



\# Canonical Structure



Example:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key",



&#x20; "algorithm":

&#x20;   "ed25519",



&#x20; "publicKey":

&#x20;   "-----BEGIN PUBLIC KEY-----..."

}

```



\---



\# Key Identifier



Example:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key"

}

```



Purpose:



```text

Stable Key Identity

```



\---



\# Canonical Rule



Every signing key must have a unique key identifier.



\---



\# Algorithm



Example:



```json

{

&#x20; "algorithm":

&#x20;   "ed25519"

}

```



Purpose:



```text

Verification Compatibility

```



Current Parmana implementation:



```text

ed25519

```



\---



\# Public Key



Example:



```json

{

&#x20; "publicKey":

&#x20;   "-----BEGIN PUBLIC KEY-----..."

}

```



Purpose:



```text

Independent Verification

```



\---



\# Publication Endpoint



Canonical endpoint:



```http

GET /trust-anchor/public-key

```



Purpose:



```text

Public Trust Anchor Discovery

```



\---



\# Current Parmana Example



Response:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key",



&#x20; "algorithm":

&#x20;   "ed25519",



&#x20; "publicKey":

&#x20;   "-----BEGIN PUBLIC KEY-----..."

}

```



\---



\# Canonical Verification Flow



```text

Retrieve Trust Anchor

&#x20;         ↓

Retrieve Trust Evidence

&#x20;         ↓

Verify Signature

&#x20;         ↓

VALID

```



\---



\# Independent Verification



Trust Anchors enable:



```text

Third-Party Verification

```



without:



```text

Database Access



Private APIs



Administrative Access

```



\---



\# Example Attestation Verification



Verifier receives:



```text

Attestation

```



Verifier retrieves:



```http

GET /trust-anchor/public-key

```



Verifier executes:



```text

Signature Verification

```



Result:



```text

VALID

```



\---



\# Example Trust Root Verification



Verifier retrieves:



```http

GET /trust-root/current

```



Verifier retrieves:



```http

GET /trust-anchor/public-key

```



Verifier validates:



```text

Trust Root Signature

```



Result:



```text

VALID

```



\---



\# Trust Anchor Lifecycle



```text

Generate Key Pair

&#x20;        ↓

Assign Key ID

&#x20;        ↓

Publish Public Key

&#x20;        ↓

Use For Verification

```



\---



\# Key Generation



A Trust Anchor begins with:



```text

Key Pair Generation

```



Example:



```text

Private Key



Public Key

```



\---



\# Security Principle



Private keys must never be published.



Only public keys become Trust Anchors.



\---



\# Trust Anchor Immutability



Published Trust Anchors should remain stable for the lifetime of the key.



Reason:



```text

Historical Verification

```



depends upon stable identity.



\---



\# Relationship To Attestations



Attestations contain:



```text

Signature

```



Trust Anchors provide:



```text

Verification Authority

```



\---



\# Relationship To Verification



Verification requires:



```text

Signature



Public Key

```



Trust Anchors provide:



```text

Public Key

```



\---



\# Relationship To Trust Roots



Trust Roots are signed by:



```text

Trust Anchor Keys

```



Verification requires:



```text

Trust Anchor

```



\---



\# Relationship To Key Rotation



Trust Anchors support:



```text

Key Evolution

```



through:



```text

Key IDs



Versioning



Trust Root Lineage

```



\---



\# Canonical Rule



Historical trust evidence must remain verifiable after key rotation.



\---



\# Multiple Trust Anchors



Future trust domains may publish:



```text

Trust Anchor v1



Trust Anchor v2



Trust Anchor v3

```



Verification selects the correct key using:



```text

keyId

```



\---



\# Trust Anchor Discovery



Current discovery endpoint:



```http

GET /trust-anchor/public-key

```



Future endpoints:



```http

GET /trust-anchor/current



GET /trust-anchor/history



GET /trust-anchor/{keyId}

```



\---



\# Federation Usage



Trust federation begins with:



```text

Trust Anchor Discovery

```



Example:



```text

Organization A

&#x20;      ↓

Trust Anchor A



Organization B

&#x20;      ↓

Retrieves

&#x20;      ↓

Trust Anchor A

```



Verification becomes possible.



\---



\# Trust Anchor Security Properties



Trust Anchors provide:



```text

Identity



Authenticity



Verification Authority



Federation Bootstrap

```



\---



\# Trust Anchors Do Not Provide



Trust Anchors do not answer:



```text

What Was Authorized?



What Was Executed?



What Is Current Trust State?

```



Those belong to:



```text

Trust Chains



Trust Roots

```



\---



\# Canonical Questions Trust Anchors Answer



```text

Who Signed This?



Which Key Was Used?



How Do We Verify It?



Can We Verify Independently?

```



\---



\# Canonical Questions Trust Anchors Do Not Answer



```text

What Happened?



What Was Authorized?



What Was Executed?



What Is The Current Trust State?

```



\---



\# Current Parmana Milestone



Implemented:



```http

GET /trust-anchor/public-key

```



Demonstrated:



```text

Independent Attestation Verification

```



using:



```text

examples/verify-attestation.ts

```



Result:



```text

VALID

```



without access to Parmana internals.



\---



\# Relationship To Parmana Positioning



Trust Anchors establish:



```text

Who Can Be Trusted

```



Trust Roots establish:



```text

What Trust State Exists

```



Trust Chains establish:



```text

Why Execution Was Authorized

```



Together they form the foundation of:



```text

Authorization-To-Execution Trust

```



\---



\# Canonical Outcome



A Trust Anchor is the published cryptographic identity of a Parmana trust domain.



It enables independent verification of trust evidence, supports federation, survives key rotation, and serves as the root identity upon which all trust validation depends.



