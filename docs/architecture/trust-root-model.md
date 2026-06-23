\# Trust Root Model



\## Purpose



The Trust Root Model defines how a Trust Domain publishes its trust state in a cryptographically verifiable form.



Trust Roots transform internal trust evidence into a publicly verifiable trust representation.



They are the publishable unit of trust within the Parmana architecture.



\---



\# Canonical Principle



Trust Chains establish trust.



Trust Roots publish trust.



\---



\# Core Architectural Question



A Trust Root answers:



```text

What Is The Current Trust State

Of This Trust Domain?

```



\---



\# Why Trust Roots Exist



Trust Chains contain transaction-level trust evidence.



Examples:



```text

Decision



Intent



Attestation



Verification



Execution

```



While useful internally, Trust Chains are too granular to represent domain-level trust.



Organizations need a way to publish:



```text

Current Trust State

```



without exposing every internal transaction.



Trust Roots solve this problem.



\---



\# Canonical Principle



Trust Chains answer:



```text

What Happened?

```



Trust Roots answer:



```text

What Trust State Exists?

```



\---



\# Definition



A Trust Root is the cryptographically signed representation of a Trust Domain's trust state.



It acts as the root verification artifact for federation and external trust validation.



\---



\# Position In Architecture



```text

Trust Chains

&#x20;      ↓

Trust State

&#x20;      ↓

Trust Root

&#x20;      ↓

Publication

&#x20;      ↓

Federation

```



Trust Roots sit above individual trust chains.



\---



\# Trust Hierarchy



```text

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution

&#x20;     ↓

Trust Chain

&#x20;     ↓

Trust Root

```



Trust Roots summarize trust chains.



\---



\# Canonical Trust Principle



Trust Roots are domain-level trust artifacts.



Trust Chains are transaction-level trust artifacts.



\---



\# Trust Root Responsibilities



Trust Roots provide:



```text

Trust State Publication



Trust State Verification



Federation Exchange



Trust Lineage

```



\---



\# Trust Root Is Not A Trust Chain



Trust Chain:



```text

Transaction Trust

```



Trust Root:



```text

Domain Trust

```



\---



\# Trust Root Is Not A Trust Anchor



Trust Anchor answers:



```text

Who Signed?

```



Trust Root answers:



```text

What Was Signed?

```



\---



\# Trust Root Is Not Policy



Policy defines:



```text

Trust Rules

```



Trust Root publishes:



```text

Trust State

```



\---



\# Canonical Structure



Example:



```json

{

&#x20; "rootVersion": 1,

&#x20; "rootHash": "abc123...",

&#x20; "keyId": "parmana-root-key",

&#x20; "createdAt": "2026-06-23T00:00:00Z"

}

```



\---



\# Trust Root Components



A Trust Root contains:



```text

Root Version



Root Hash



Signing Key



Signature



Metadata

```



\---



\# Root Version



Purpose:



```text

Trust State Evolution

```



Example:



```json

{

&#x20; "rootVersion": 3

}

```



\---



\# Canonical Rule



Every Trust Root must have a monotonically increasing version.



\---



\# Root Hash



Purpose:



```text

Trust State Integrity

```



Example:



```json

{

&#x20; "rootHash": "f3ab4c..."

}

```



The root hash represents the trust state being published.



\---



\# Signing Key



Purpose:



```text

Verification Identity

```



Example:



```json

{

&#x20; "keyId": "parmana-root-key"

}

```



This links the Trust Root to a Trust Anchor.



\---



\# Signature



Purpose:



```text

Trust Root Authenticity

```



Example:



```json

{

&#x20; "signature": "base64..."

}

```



External parties verify this signature using the Trust Anchor.



\---



\# Metadata



Purpose:



```text

Publication Context

```



Example:



```json

{

&#x20; "createdAt":

&#x20;   "2026-06-23T00:00:00Z"

}

```



\---



\# Trust Root Generation



Flow:



```text

Trust Chains

&#x20;     ↓

Aggregation

&#x20;     ↓

Root Hash

&#x20;     ↓

Signing

&#x20;     ↓

Trust Root

```



\---



\# Canonical Generation Principle



Trust Roots are derived from trust state.



They are not manually created.



\---



\# Trust State Aggregation



A Trust Domain may aggregate:



```text

Attestations



Verification Receipts



Execution Records



Trust Chains

```



into a root representation.



\---



\# Example



Trust Domain:



```text

Finance Domain

```



Contains:



```text

1,000 Trust Chains

```



Trust Root publishes:



```text

Current Trust State

```



instead of exposing all chains.



\---



\# Publication



Trust Roots are intended to be published.



Current planned endpoint:



```http

GET /trust-root/current

```



Purpose:



```text

Trust State Discovery

```



\---



\# Federation Role



Trust Roots are the primary federation artifact.



Federated participants exchange:



```text

Trust Roots

```



not:



```text

Internal Databases



Trust Chains



Operational Systems

```



\---



\# Federation Verification Flow



```text

Retrieve Trust Root

&#x20;       ↓

Retrieve Trust Anchor

&#x20;       ↓

Verify Signature

&#x20;       ↓

VALID

```



Trust becomes portable.



\---



\# Historical Trust Roots



Trust Domains evolve over time.



Trust Roots preserve:



```text

Historical Trust States

```



\---



\# Example



```text

Root Version 1



Root Version 2



Root Version 3

```



Each represents a point-in-time trust state.



\---



\# Canonical Principle



Historical trust states must remain verifiable.



\---



\# Trust Root Lineage



Trust Roots form lineage.



Example:



```text

Root v1

&#x20;   ↓

Root v2

&#x20;   ↓

Root v3

```



Purpose:



```text

Trust Evolution

```



\---



\# Root Lineage Structure



Example:



```json

{

&#x20; "rootVersion": 3,

&#x20; "previousRootVersion": 2

}

```



Purpose:



```text

Trust Continuity

```



\---



\# Trust Root Verification



Verification requires:



```text

Trust Root



Trust Anchor



Signature

```



Result:



```text

VALID



or



INVALID

```



\---



\# Independent Verification



Trust Root verification should require only:



```text

Published Trust Root



Published Trust Anchor

```



and not:



```text

Database Access



Internal APIs



Administrative Privileges

```



\---



\# Trust Root Lifecycle



```text

Generate Trust State

&#x20;        ↓

Compute Root Hash

&#x20;        ↓

Sign Root

&#x20;        ↓

Publish Root

&#x20;        ↓

Verify Root

```



\---



\# Relationship To Trust Anchors



Trust Anchors provide:



```text

Identity

```



Trust Roots provide:



```text

Trust State

```



Together they provide:



```text

Verifiable Trust

```



\---



\# Relationship To Key Rotation



Trust Roots record:



```text

keyId

```



allowing verifiers to retrieve the correct Trust Anchor.



This preserves:



```text

Historical Verification

```



during key rotation.



\---



\# Relationship To Trust Chains



Trust Chains provide:



```text

Transaction Trust

```



Trust Roots provide:



```text

Domain Trust

```



Trust Roots are derived from trust chains.



\---



\# Relationship To Trust Federation



Federation exchanges:



```text

Trust Roots

```



because they are compact, verifiable representations of trust state.



\---



\# Banking Example



Trust Chain:



```text

Payment Authorization

&#x20;     ↓

Payment Execution

```



Trust Root:



```text

Treasury Domain Trust State

```



\---



\# Healthcare Example



Trust Chain:



```text

Patient Authorization

&#x20;     ↓

Clinical Execution

```



Trust Root:



```text

Clinical Trust State

```



\---



\# AI Systems Example



Trust Chain:



```text

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Execution

```



Trust Root:



```text

AI Operations Trust State

```



\---



\# Security Properties



Trust Roots provide:



```text

Integrity



Authenticity



Traceability



Federation Readiness

```



\---



\# Trust Roots Do Not Provide



Trust Roots do not answer:



```text

What Specific Decision Occurred?



What Specific Intent Existed?



What Specific Execution Happened?

```



Those remain Trust Chain concerns.



\---



\# Parmana Trust Architecture



```text

Trust Anchor

&#x20;      ↓

Signs

&#x20;      ↓

Trust Root

&#x20;      ↓

Represents

&#x20;      ↓

Trust State

&#x20;      ↓

Derived From

&#x20;      ↓

Trust Chains

```



\---



\# Relationship To Parmana Positioning



Trust Chains answer:



```text

What Exactly Was Supposed To Happen?

```



Trust Roots answer:



```text

What Trust State Exists?

```



Trust Federation answers:



```text

Can Another Organization Verify It?

```



Together they establish portable execution trust.



\---



\# Questions Trust Roots Answer



```text

What Is The Current Trust State?



Can This Trust State Be Verified?



What Version Of Trust State Exists?



Who Signed This Trust State?



Can Another Organization Trust It?

```



\---



\# Questions Trust Roots Do Not Answer



```text

Was A Specific Action Authorized?



Did A Specific Execution Occur?



Did Execution Match Intent?

```



Those remain transaction-level questions.



\---



\# Canonical Outcome



A Trust Root is the cryptographically signed representation of a Trust Domain's trust state.



It transforms transaction-level trust evidence into a publishable, independently verifiable trust artifact that can be exchanged across organizations.



Trust Chains establish trust.



Trust Roots publish trust.



Trust Federation transports trust.



