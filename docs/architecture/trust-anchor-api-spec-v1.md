\# Trust Anchor API Specification v1



\## Status



Planned



\## Objective



Define the public trust distribution interfaces used by Parmana verifiers, execution gateways, auditors, and external systems.



The Trust Anchor API enables independent verification without requiring access to Parmana internal infrastructure.



\---



\# Design Principles



\## Public Verification



Verification must be possible using public trust information.



\## Deterministic Discovery



Verifiers must be able to discover the correct trust root.



\## Historical Verification



Historical signatures must remain verifiable.



\## Trust Transparency



Trust root lifecycle transitions must be observable.



\---



\# Trust Anchor Resources



\## Active Trust Root



Represents the currently active signing authority.



\## Historical Trust Root



Represents a previous signing authority.



\## Trust Root Registry



Represents all known trust roots.



\---



\# Endpoint



\## Get Active Trust Root



```http

GET /trust-anchor/public-key

```



\### Response



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "rootVersion": "2",

&#x20; "algorithm": "ed25519",

&#x20; "status": "active",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



\---



\# Endpoint



\## Get Trust Root By Key



```http

GET /trust-anchor/public-key/{keyId}

```



\### Example



```http

GET /trust-anchor/public-key/parmana-root-key

```



\### Response



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "rootVersion": "1",

&#x20; "algorithm": "ed25519",

&#x20; "status": "retired",

&#x20; "publicKey": "..."

}

```



\---



\# Endpoint



\## Get Trust Root Registry



```http

GET /trust-anchor/roots

```



\### Response



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



\# Trust Root Schema



\## Required Fields



```json

{

&#x20; "keyId": "string",

&#x20; "rootVersion": "string",

&#x20; "algorithm": "string",

&#x20; "status": "string",

&#x20; "publicKey": "string"

}

```



\---



\# Supported Status Values



\## Pending



Trust root created but not active.



\## Active



Trust root used for signing.



\## Retiring



Trust root transitioning out of service.



\## Retired



Trust root preserved for historical verification.



\## Revoked



Trust root no longer trusted.



\---



\# Artifact Requirements



Every signed Parmana artifact must contain:



```json

{

&#x20; "keyId": "...",

&#x20; "rootVersion": "..."

}

```



Applies to:



\* Decision Attestations

\* Verification Receipts

\* Execution Tokens

\* Override Attestations

\* Future Trust Artifacts



\---



\# Verification Procedure



Verifier receives:



```json

{

&#x20; "keyId": "...",

&#x20; "rootVersion": "...",

&#x20; "signature": "..."

}

```



Verifier:



1\. Retrieve matching trust root.

2\. Load public key.

3\. Verify signature.

4\. Evaluate root status.

5\. Return verification result.



\---



\# External Verification Model



Verification must not require:



```text

POST /verify

```



Verification should be executable using:



```text

Artifact

\+

Public Key

```



alone.



\---



\# Security Guarantees



\## Independent Verification



No Parmana runtime dependency.



\## Trust Root Traceability



Every signature identifies its signing root.



\## Historical Integrity



Historical artifacts remain verifiable.



\## Rotation Compatibility



Verification survives root rotation.



\---



\# Future Extensions



\## Trust Federation



Multiple trusted authorities.



\## Cross-Organization Verification



Federated trust root chains.



\## Transparency Anchoring



Trust root publication in transparency logs.



\## Root Revocation Distribution



Public revocation feeds.



\---



\# Canonical Principle



Trust anchors are public verification infrastructure.



Authorization trust must be verifiable independently of the system that issued the authorization.



\---



\# Relationship to Parmana Trust Foundation



Trust Anchor API

→ Public Key Distribution

→ External Verification

→ Key Rotation

→ Trust Federation



This specification defines the public trust interface for the Parmana ecosystem.



