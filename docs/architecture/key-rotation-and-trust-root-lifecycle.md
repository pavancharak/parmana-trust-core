\# Key Rotation and Trust Root Lifecycle



\## Status



Planned



\## Objective



Enable Parmana Trust Anchors to be rotated, replaced, revoked, and retired without breaking verification of previously issued authorization artifacts.



This document defines the lifecycle of trust roots and the mechanisms required to support long-term cryptographic trust.



\---



\# Problem



A trust system cannot assume a signing key will remain valid forever.



Keys may require rotation because of:



\* Security policy

\* Cryptographic aging

\* Compliance requirements

\* Key compromise

\* Organizational changes



Parmana must support trust root evolution while preserving historical verification.



\---



\# Design Goals



\## Trust Continuity



Previously issued artifacts remain verifiable after key rotation.



\## Cryptographic Agility



New algorithms can be introduced without invalidating historical records.



\## Independent Verification



External systems can determine which public key should be used for verification.



\## Backward Compatibility



Verification of historical artifacts must remain possible.



\---



\# Trust Root



A Trust Root represents a cryptographic authority capable of issuing signatures.



Example:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "rootVersion": "1",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "..."

}

```



\---



\# Trust Root Identity



Each Trust Root must have:



```text

keyId

rootVersion

algorithm

createdAt

status

```



Example:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "rootVersion": "2",

&#x20; "algorithm": "ed25519",

&#x20; "status": "active"

}

```



\---



\# Root Version



Root Version identifies a specific generation of trust root.



Example:



```text

Version 1

&#x20;   ↓

Version 2

&#x20;   ↓

Version 3

```



Verification artifacts remain bound to the version that signed them.



\---



\# Key Identifier



Every signing operation must include:



```text

keyId

```



Example:



```json

{

&#x20; "keyId": "parmana-root-key"

}

```



This allows verifiers to select the correct public key.



\---



\# Artifact Requirements



The following artifacts must include:



\## Decision Attestation



```json

{

&#x20; "keyId": "...",

&#x20; "rootVersion": "..."

}

```



\## Verification Receipt



```json

{

&#x20; "keyId": "...",

&#x20; "rootVersion": "..."

}

```



\## Execution Token



```json

{

&#x20; "keyId": "...",

&#x20; "rootVersion": "..."

}

```



\---



\# Rotation Process



\## Current State



```text

Root V1

Status: Active

```



\---



\## Generate New Root



```text

Root V2

Status: Pending

```



Public key published.



Verification support added.



\---



\## Activate New Root



```text

Root V1 → Retiring



Root V2 → Active

```



New signatures use V2.



Historical signatures remain associated with V1.



\---



\## Retire Previous Root



```text

Root V1

Status: Retired

```



Verification remains allowed.



New signing is prohibited.



\---



\# Trust Root States



\## Pending



Created but not yet active.



\## Active



Used for signing and verification.



\## Retiring



No longer preferred for signing.



Verification remains allowed.



\## Retired



Historical verification only.



\## Revoked



Trust root should not be trusted for new verification decisions.



\---



\# Trust Root Registry



Parmana maintains a registry of trust roots.



Example:



```json

\[

&#x20; {

&#x20;   "keyId": "parmana-root-key",

&#x20;   "rootVersion": "1",

&#x20;   "status": "retired"

&#x20; },

&#x20; {

&#x20;   "keyId": "parmana-root-key",

&#x20;   "rootVersion": "2",

&#x20;   "status": "active"

&#x20; }

]

```



\---



\# Public Key Discovery



\## Active Root



```http

GET /trust-anchor/public-key

```



Returns the active trust root.



\---



\## Historical Root



```http

GET /trust-anchor/public-key/{keyId}

```



Returns a specific trust root.



\---



\## Registry



```http

GET /trust-anchor/roots

```



Returns all known trust roots.



\---



\# Verification Algorithm



Verifier receives:



```json

{

&#x20; "keyId": "...",

&#x20; "rootVersion": "...",

&#x20; "signature": "..."

}

```



Verifier:



1\. Retrieves matching trust root.

2\. Loads corresponding public key.

3\. Verifies signature.

4\. Evaluates trust root status.



\---



\# Revocation



Revocation occurs when a trust root is compromised or no longer trusted.



Example:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "rootVersion": "2",

&#x20; "status": "revoked"

}

```



Revoked roots must not be used for future trust decisions.



\---



\# Historical Verification



Historical verification must remain possible.



Example:



```text

Execution Token

Issued:

2026



Verified:

2032

```



Verifier loads the public key associated with the signing root version.



Verification succeeds even if newer roots exist.



\---



\# Security Properties



\## Forward Security



Compromise of a future key does not invalidate historical signatures.



\## Cryptographic Agility



Algorithms may evolve over time.



\## Audit Preservation



Historical artifacts remain independently verifiable.



\## Trust Transparency



Trust root transitions are observable and auditable.



\---



\# Canonical Principle



Trust roots evolve.



Trust must not.



Parmana preserves trust continuity across trust root changes through explicit key identification, root versioning, and verifiable trust root lifecycle management.



\---



\# Relationship to Trust Foundation



Execution Intent

→ Attestation

→ Verification Receipt

→ Execution Token

→ Public Key Verification

→ Trust Root Lifecycle



Trust Root Lifecycle provides the long-term cryptographic foundation required for independent verification.



\---



\# Implementation Milestones



\## Milestone 1



Public Key Endpoint



```http

GET /trust-anchor/public-key

```



\## Milestone 2



External Verification Example



Independent verification without Parmana infrastructure.



\## Milestone 3



Add:



```text

keyId

rootVersion

```



to all signed artifacts.



\## Milestone 4



Trust Root Registry



```http

GET /trust-anchor/roots

```



\## Milestone 5



Trust Root Rotation



Support active, retiring, retired, and revoked roots.



\## Milestone 6



Federated Trust Roots



Support multiple trusted authorities and verification chains.



