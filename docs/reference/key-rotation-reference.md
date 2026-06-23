\# Key Rotation Reference



\## Purpose



Key Rotation enables a Parmana trust domain to evolve its cryptographic identity while preserving the ability to verify historical trust evidence.



It ensures that trust can continue even when signing keys change.



\---



\# Canonical Principle



Keys change.



Trust must survive.



\---



\# Why Key Rotation Exists



Cryptographic keys cannot be used forever.



Organizations eventually need to rotate keys because of:



```text

Security Policy



Operational Risk



Cryptographic Upgrades



Compromise Recovery



Trust Domain Evolution

```



Without key rotation:



```text

Trust Eventually Expires

```



With key rotation:



```text

Trust Continues

```



\---



\# Canonical Trust Question



Key Rotation answers:



```text

How Can Historical Evidence Remain Verifiable

After Signing Keys Change?

```



\---



\# Position In Trust Architecture



```text

Trust Anchor

&#x20;      ↓

Key Rotation

&#x20;      ↓

Trust Root

&#x20;      ↓

Trust Chain Verification

```



Key Rotation operates at the identity layer of the trust model.



\---



\# Canonical Principle



Historical trust evidence must remain verifiable forever.



\---



\# Trust Problem



Assume:



```text

Key A

```



signs:



```text

Attestation 1



Attestation 2



Attestation 3

```



Years later:



```text

Key A

```



is retired.



New evidence is signed by:



```text

Key B

```



Question:



```text

Can We Still Verify

Attestation 1?

```



The answer must be:



```text

YES

```



\---



\# Canonical Rotation Model



```text

Key A

&#x20;   ↓

Root Version 1



Key B

&#x20;   ↓

Root Version 2



Key C

&#x20;   ↓

Root Version 3

```



Trust evolves.



Verification remains possible.



\---



\# Core Requirements



Key Rotation must preserve:



```text

Identity



Integrity



Historical Verification



Trust Lineage

```



\---



\# Current Parmana Identity



Current Trust Anchor:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key",



&#x20; "algorithm":

&#x20;   "ed25519"

}

```



Future rotations create:



```text

parmana-root-key-v2



parmana-root-key-v3

```



or equivalent identifiers.



\---



\# Key Identifier Requirement



Every signing key must have:



```text

Unique keyId

```



Example:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key-v2"

}

```



Purpose:



```text

Historical Key Discovery

```



\---



\# Canonical Verification Rule



Verification must use:



```text

Signature keyId

```



to locate the correct verification key.



\---



\# Example Attestation



```json

{

&#x20; "signatures": \[

&#x20;   {

&#x20;     "keyId":

&#x20;       "parmana-root-key-v1"

&#x20;   }

&#x20; ]

}

```



Verifier must retrieve:



```text

parmana-root-key-v1

```



not:



```text

Current Key

```



\---



\# Why keyId Exists



Without keyId:



```text

Historical Verification Breaks

```



because the verifier does not know which key produced the signature.



\---



\# Trust Anchor Evolution



Version 1:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key-v1"

}

```



Version 2:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key-v2"

}

```



Version 3:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key-v3"

}

```



Each key becomes part of trust history.



\---



\# Canonical Rule



Retired keys must remain discoverable.



\---



\# Trust Anchor History



Future endpoint:



```http

GET /trust-anchor/history

```



Example response:



```json

\[

&#x20; {

&#x20;   "keyId":

&#x20;     "parmana-root-key-v1"

&#x20; },

&#x20; {

&#x20;   "keyId":

&#x20;     "parmana-root-key-v2"

&#x20; }

]

```



Purpose:



```text

Historical Verification

```



\---



\# Individual Key Discovery



Future endpoint:



```http

GET /trust-anchor/{keyId}

```



Example:



```http

GET /trust-anchor/parmana-root-key-v1

```



Purpose:



```text

Historical Key Retrieval

```



\---



\# Trust Root Versioning



Key rotation and trust root versioning are related but distinct.



Trust Root:



```text

Published Trust State

```



Trust Anchor:



```text

Signing Identity

```



\---



\# Example



```text

Root Version 1

&#x20;      ↓

Signed By

&#x20;      ↓

Key A

```



Later:



```text

Root Version 2

&#x20;      ↓

Signed By

&#x20;      ↓

Key B

```



Historical verification remains possible.



\---



\# Canonical Root Structure



Example:



```json

{

&#x20; "rootVersion": 2,



&#x20; "keyId":

&#x20;   "parmana-root-key-v2"

}

```



Purpose:



```text

Bind Trust State

To Signing Identity

```



\---



\# Rotation Event



Rotation consists of:



```text

Generate New Key



Publish New Trust Anchor



Publish New Trust Root



Retain Old Keys

```



\---



\# Canonical Rotation Flow



```text

Generate Key B

&#x20;      ↓

Publish Key B

&#x20;      ↓

Publish Root Version 2

&#x20;      ↓

Retain Key A

```



\---



\# Historical Verification Example



Attestation:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key-v1"

}

```



Verification:



```text

Retrieve Key v1

&#x20;       ↓

Verify Signature

&#x20;       ↓

VALID

```



Even if:



```text

Current Key = v3

```



\---



\# Compromise Recovery



If a key is compromised:



```text

Key A

```



becomes:



```text

Retired

```



New trust state:



```text

Key B

```



becomes active.



\---



\# Canonical Rule



Compromise must not invalidate historical evidence.



\---



\# Trust Lineage



Key rotation creates identity lineage.



Example:



```text

Key v1

&#x20;   ↓

Key v2

&#x20;   ↓

Key v3

```



Purpose:



```text

Trust Continuity

```



\---



\# Trust Root Lineage



Trust roots should preserve:



```text

Previous Root



Previous Key



Current Root



Current Key

```



This creates:



```text

Trust Evolution Evidence

```



\---



\# Federation Impact



Federated participants must understand:



```text

Current Key



Historical Keys

```



to verify trust correctly.



\---



\# Federation Verification Flow



```text

Receive Evidence

&#x20;      ↓

Read keyId

&#x20;      ↓

Retrieve Correct Trust Anchor

&#x20;      ↓

Verify Signature

```



\---



\# Security Benefits



Key Rotation provides:



```text

Cryptographic Agility



Compromise Recovery



Long-Term Trust



Identity Evolution

```



\---



\# Operational Benefits



Organizations gain:



```text

Safer Key Management



Continuous Trust



Historical Auditability



Independent Verification

```



\---



\# Current Parmana Roadmap Milestone



Locked milestone:



```text

Key Rotation

```



Requirements:



```text

keyId Support



Historical Key Retrieval



Trust Root Versioning



Verification Continuity

```



\---



\# Relationship To Trust Anchors



Trust Anchors provide:



```text

Identity

```



Key Rotation provides:



```text

Identity Evolution

```



\---



\# Relationship To Trust Roots



Trust Roots provide:



```text

Trust State

```



Key Rotation preserves:



```text

Trust State Verification

```



across identity changes.



\---



\# Relationship To Federation



Federation requires:



```text

Stable Verification

```



Key Rotation ensures:



```text

Verification Stability

```



over time.



\---



\# Questions Key Rotation Answers



```text

How Do Keys Evolve?



How Does Trust Survive Rotation?



How Do We Verify Historical Evidence?



How Do We Recover From Key Compromise?



How Do We Maintain Trust Continuity?

```



\---



\# Questions Key Rotation Does Not Answer



```text

What Was Authorized?



What Was Executed?



What Is The Current Trust State?

```



Those belong to:



```text

Trust Chains



Trust Roots

```



\---



\# Future API Endpoints



Current:



```http

GET /trust-anchor/public-key

```



Future:



```http

GET /trust-anchor/history



GET /trust-anchor/{keyId}



POST /trust-anchor/rotate

```



\---



\# Canonical Outcome



Key Rotation enables a Parmana trust domain to evolve its cryptographic identity without breaking trust.



By preserving historical keys, key identifiers, trust root lineage, and verification continuity, organizations can maintain independently verifiable trust evidence across years of cryptographic evolution.



Trust survives even when keys change.



