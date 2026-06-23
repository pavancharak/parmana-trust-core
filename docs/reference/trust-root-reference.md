\# Trust Root Reference



\## Purpose



A Trust Root is the published cryptographic representation of a system's trust state.



While a Trust Chain represents:



```text

Transaction-Level Trust

```



a Trust Root represents:



```text

System-Level Trust

```



Trust Roots allow external parties to independently verify the published trust state of an organization without requiring access to internal systems.



\---



\# Canonical Principle



Trust Chains prove individual authorization-to-execution lineages.



Trust Roots prove the integrity of a trust domain.



\---



\# Position In Trust Architecture



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

&#x20;   ↓

Trust Chain

&#x20;   ↓

Trust Root

```



Trust Roots are derived from accumulated trust evidence.



\---



\# Canonical Trust Question



Trust Roots answer:



```text

Can We Verify

The Published Trust State

Of This Organization?

```



\---



\# Definition



A Trust Root is a cryptographically signed representation of a trust domain's current trust state.



It provides a stable verification point for external consumers.



\---



\# Responsibilities



A Trust Root proves:



```text

Trust State Exists



Trust State Was Published



Trust State Has Integrity



Trust State Can Be Verified Independently

```



\---



\# Trust Root Is Not A Trust Chain



Trust Chains answer:



```text

What Happened In A Specific Transaction?

```



Trust Roots answer:



```text

What Is The Current Trust State?

```



\---



\# Trust Root Is Not A Trust Anchor



Trust Anchors provide:



```text

Verification Identity

```



Trust Roots provide:



```text

Published Trust State

```



\---



\# Canonical Architecture



```text

Trust Anchor

&#x20;      ↓

Signs

&#x20;      ↓

Trust Root

```



\---



\# Canonical Publication Model



```text

Organization

&#x20;     ↓

Trust Evidence

&#x20;     ↓

Trust Root

&#x20;     ↓

Publish

&#x20;     ↓

External Verification

```



\---



\# Why Trust Roots Exist



Without Trust Roots:



```text

Verification Requires



Internal Access



Database Access



Custom Audits

```



With Trust Roots:



```text

Verification Requires



Trust Root



Trust Anchor

```



Only public trust artifacts are required.



\---



\# Canonical Structure



Example:



```json

{

&#x20; "rootVersion": 1,



&#x20; "rootHash":

&#x20;   "abc123...",



&#x20; "createdAt":

&#x20;   "2026-06-23T03:00:00Z",



&#x20; "keyId":

&#x20;   "parmana-root-key",



&#x20; "signature":

&#x20;   {

&#x20;     "algorithm":

&#x20;       "ed25519",



&#x20;     "value":

&#x20;       "..."

&#x20;   }

}

```



\---



\# Root Version



Example:



```json

{

&#x20; "rootVersion": 1

}

```



Purpose:



```text

Trust State Versioning

```



Each publication creates a new root version.



\---



\# Root Hash



Example:



```json

{

&#x20; "rootHash":

&#x20;   "abc123..."

}

```



Purpose:



```text

Trust State Integrity

```



The root hash represents the trust state being published.



\---



\# Canonical Principle



The root hash is the authoritative fingerprint of trust state.



\---



\# Created Timestamp



Example:



```json

{

&#x20; "createdAt":

&#x20;   "2026-06-23T03:00:00Z"

}

```



Purpose:



```text

Publication Timestamp

```



Questions answered:



```text

When Was This Trust State Published?

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

Identify Signing Authority

```



\---



\# Signature



Example:



```json

{

&#x20; "signature": {

&#x20;   "algorithm":

&#x20;     "ed25519",



&#x20;   "value":

&#x20;     "..."

&#x20; }

}

```



Purpose:



```text

Cryptographic Authenticity

```



\---



\# Trust Root Lifecycle



```text

Trust Evidence

&#x20;       ↓

Root Construction

&#x20;       ↓

Hash Generation

&#x20;       ↓

Signature

&#x20;       ↓

Publication

```



\---



\# Publication Endpoint



Canonical endpoint:



```http

GET /trust-root/current

```



Purpose:



```text

Current Trust State Retrieval

```



\---



\# Example Response



```json

{

&#x20; "rootVersion": 3,



&#x20; "rootHash":

&#x20;   "abc123...",



&#x20; "keyId":

&#x20;   "parmana-root-key",



&#x20; "signature": {

&#x20;   "algorithm":

&#x20;     "ed25519",



&#x20;   "value":

&#x20;     "..."

&#x20; }

}

```



\---



\# Independent Verification



Verification requires:



```text

Trust Root



Trust Anchor

```



\---



\# Verification Flow



```text

Retrieve Trust Root

&#x20;         ↓

Retrieve Trust Anchor

&#x20;         ↓

Verify Signature

&#x20;         ↓

VALID

```



No internal access required.



\---



\# Canonical Verification Question



```text

Did This Organization

Actually Publish This Trust State?

```



Verification answers:



```text

YES

```



or



```text

NO

```



\---



\# Trust Root History



Trust Roots should be immutable.



Example:



```text

Root Version 1



Root Version 2



Root Version 3

```



Historical roots remain available.



\---



\# Historical Verification



Trust Roots support:



```text

Point-In-Time Trust Verification

```



Questions answered:



```text

What Was The Trust State

On A Specific Date?

```



\---



\# Relationship To Key Rotation



When signing keys rotate:



```text

Trust Root Version

&#x20;       +

Key Identifier

```



preserve historical verification capability.



\---



\# Canonical Rule



Old trust roots must remain verifiable after key rotation.



\---



\# Relationship To Trust Chains



Trust Chains represent:



```text

Individual Evidence

```



Trust Roots represent:



```text

Aggregated Trust State

```



\---



\# Conceptual Model



```text

Trust Chain A

Trust Chain B

Trust Chain C

Trust Chain D

&#x20;       ↓

Trust Root

```



Many trust chains contribute to one published trust state.



\---



\# Relationship To Trust Anchors



Trust Anchors answer:



```text

Who Signed?

```



Trust Roots answer:



```text

What Was Signed?

```



\---



\# Relationship To Federation



Trust Roots are the primary artifact exchanged in trust federation.



Example:



```text

Organization A

&#x20;       ↓

Trust Root A



Organization B

&#x20;       ↓

Verifies

&#x20;       ↓

Trust Root A

```



\---



\# Trust Root Discovery



Current endpoint:



```http

GET /trust-root/current

```



Future endpoints:



```http

GET /trust-root/history



GET /trust-root/{version}

```



\---



\# Relationship To External Verification



Trust Roots allow:



```text

Independent Verification



Cross-Organization Verification



Federated Verification

```



without exposing internal systems.



\---



\# Security Properties



Trust Roots provide:



```text

Integrity



Authenticity



Versioning



Independent Verification

```



\---



\# Trust Roots Do Not Provide



Trust Roots do not answer:



```text

What Specific Transaction Occurred?



What Specific Intent Existed?



What Specific Execution Happened?

```



Those belong to trust chains.



\---



\# Canonical Questions Trust Roots Answer



```text

What Is The Current Trust State?



Can The Trust State Be Verified?



Who Published It?



When Was It Published?



Has It Been Modified?

```



\---



\# Canonical Questions Trust Roots Do Not Answer



```text

Was A Specific Payment Authorized?



Did A Specific Deployment Occur?



Did A Specific Agent Execute?

```



Those require trust chain retrieval.



\---



\# Trust Root Lifecycle



```text

Trust Evidence

&#x20;       ↓

Trust Chain Collection

&#x20;       ↓

Root Construction

&#x20;       ↓

Hash

&#x20;       ↓

Signature

&#x20;       ↓

Publication

&#x20;       ↓

Verification

```



\---



\# Current Parmana Milestone



Implemented endpoints:



```http

GET /trust-root/current



POST /trust-root/publish



POST /verify-trust-root

```



Purpose:



```text

Publish Trust State



Verify Trust State



Enable Independent Verification

```



\---



\# Relationship To Parmana Positioning



Trust Chains answer:



```text

What Exactly Was Supposed To Happen?

```



Trust Roots answer:



```text

Can We Trust This Organization's Published Trust State?

```



Together they provide:



```text

Authorization-To-Execution Trust

```



at both transaction and organizational levels.



\---



\# Canonical Outcome



A Trust Root is the cryptographically signed representation of a trust domain's published trust state.



It enables independent verification, historical validation, key rotation support, and trust federation without requiring access to internal systems.



Trust Roots are the foundation of organization-level trust in the Parmana architecture.



