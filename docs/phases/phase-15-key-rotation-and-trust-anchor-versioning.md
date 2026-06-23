\# Phase 15 — Key Rotation and Trust Anchor Versioning



\## Objective



Enable Parmana trust anchors to evolve over time without breaking verification of previously issued attestations.



This phase introduces:



```text

Key Rotation

Trust Anchor Versioning

Backward Verification

Trust Root Evolution

```



\---



\# Why Key Rotation Exists



Current implementation uses:



```text

keyId:

parmana-root-key

```



and a single key pair:



```text

attestation-private.pem

attestation-public.pem

```



This works initially.



However, long-term systems require:



```text

Key Expiration

Key Replacement

Security Upgrades

Compromise Recovery

Cryptographic Agility

```



Without rotation:



```text

One Key Must Live Forever

```



which is not acceptable.



\---



\# Canonical Principle



Trust anchors evolve.



Trust must remain verifiable.



\---



\# Current State



Attestation Signature:



```json

{

&#x20; "algorithm": "ed25519",

&#x20; "keyId": "parmana-root-key",

&#x20; "value": "..."

}

```



Verification:



```text

keyId

&#x20;   ↓

Public Key

&#x20;   ↓

Verification

```



Current architecture supports:



```text

Single Active Key

```



\---



\# Problem Without Versioning



Suppose:



```text

2026

```



uses:



```text

parmana-root-key

```



and:



```text

2028

```



uses:



```text

parmana-root-key-v2

```



An attestation signed in 2026 must still verify in:



```text

2035

```



Without versioning:



```text

Historical Verification Breaks

```



\---



\# Trust Foundation Milestone



Roadmap Milestone:



```text

Key Rotation

```



Status:



```text

PLANNED

```



Phase 15 documents the target architecture.



\---



\# Canonical Flow



```text

Trust Anchor v1

&#x20;      ↓

Attestation

&#x20;      ↓

Verification

```



Later:



```text

Trust Anchor v2

&#x20;      ↓

Attestation

&#x20;      ↓

Verification

```



Both must remain valid.



\---



\# Future Key Identity Model



Current:



```text

parmana-root-key

```



Future:



```text

parmana-root-key-v1

parmana-root-key-v2

parmana-root-key-v3

```



Each key becomes independently addressable.



\---



\# Key ID Purpose



Every signature must declare:



```text

Which Key Signed This?

```



Example:



```json

{

&#x20; "keyId": "parmana-root-key-v2"

}

```



Verifier then knows:



```text

Which Public Key To Use

```



\---



\# Future Signature Structure



Example:



```json

{

&#x20; "algorithm": "ed25519",



&#x20; "keyId":

&#x20;   "parmana-root-key-v2",



&#x20; "value":

&#x20;   "...",



&#x20; "createdAt":

&#x20;   "2028-01-01T00:00:00Z"

}

```



\---



\# Trust Anchor Versioning



Current endpoint:



```http

GET /trust-anchor/public-key

```



returns:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "..."

}

```



Future:



```json

{

&#x20; "keyId": "parmana-root-key-v2",

&#x20; "rootVersion": 2,

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "..."

}

```



\---



\# Root Version



Purpose:



```text

Identify Trust Root Generation

```



Example:



```text

Version 1

```



Original trust anchor.



```text

Version 2

```



Rotated trust anchor.



```text

Version 3

```



Future trust anchor.



\---



\# Trust Root Evolution



Canonical model:



```text

Root v1

&#x20;  ↓

Root v2

&#x20;  ↓

Root v3

```



Each version records lineage.



\---



\# Future Trust Root Structure



Example:



```json

{

&#x20; "rootVersion": 2,



&#x20; "keyId":

&#x20;   "parmana-root-key-v2",



&#x20; "previousVersion": 1,



&#x20; "publicKey":

&#x20;   "..."

}

```



Purpose:



```text

Preserve Trust History

```



\---



\# Backward Verification



Requirement:



An attestation signed with:



```text

parmana-root-key-v1

```



must continue verifying after:



```text

parmana-root-key-v2

```



is deployed.



\---



\# Verification Flow



Verifier receives:



```json

{

&#x20; "keyId":

&#x20;   "parmana-root-key-v1"

}

```



Flow:



```text

Read keyId

&#x20;     ↓

Locate Matching Public Key

&#x20;     ↓

Verify Signature

```



No ambiguity exists.



\---



\# Trust Anchor Registry



Future architecture introduces:



```text

Trust Anchor Registry

```



Purpose:



```text

Store All Historical Keys

```



Example:



```text

v1

v2

v3

```



All remain retrievable.



\---



\# Future Endpoint



Current:



```http

GET /trust-anchor/public-key

```



Future:



```http

GET /trust-anchor/public-key

```



returns current active key.



Additional endpoint:



```http

GET /trust-anchor/keys/{keyId}

```



returns a specific historical key.



\---



\# Rotation Event



Example:



```text

Key v1 Active

```



New key generated:



```text

Key v2 Created

```



Flow:



```text

Publish v2

&#x20;     ↓

Mark v2 Active

&#x20;     ↓

Retain v1 For Verification

```



Old attestations remain valid.



\---



\# Compromise Recovery



If a key is compromised:



```text

Generate New Key

```



```text

Publish New Trust Anchor

```



```text

Move Signing To New Key

```



Verification of historical evidence remains possible.



\---



\# Cryptographic Agility



Future upgrades may include:



```text

Ed25519

Ed448

Post-Quantum Algorithms

```



Versioning enables migration.



\---



\# Relationship To Independent Verification



Independent verification requires:



```text

Correct Public Key

```



Versioning ensures:



```text

Correct Historical Key

```



can always be located.



\---



\# Relationship To Trust Roots



Future trust root publication will include:



```text

rootVersion

keyId

signature

previousVersion

```



forming a verifiable trust lineage.



\---



\# Dependency Chain



```text

Trust Anchor v1

&#x20;     ↓

Attestation

&#x20;     ↓

Verification



Trust Anchor v2

&#x20;     ↓

Attestation

&#x20;     ↓

Verification

```



All historical evidence remains valid.



\---



\# Validation Requirements



Future implementation must support:



```text

✓ Multiple keyIds

✓ Multiple root versions

✓ Historical key retrieval

✓ Backward verification

✓ Active key selection

✓ Key rotation without trust loss

```



\---



\# Future OpenAPI Evolution



Current:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "..."

}

```



Target:



```json

{

&#x20; "rootVersion": 2,

&#x20; "keyId": "parmana-root-key-v2",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "...",

&#x20; "previousVersion": 1

}

```



\---



\# Phase Completion Criteria



```text

✓ keyId versioning implemented

✓ rootVersion implemented

✓ trust root lineage preserved

✓ key rotation supported

✓ backward verification supported

✓ historical key retrieval supported

```



\---



\# Output Of Phase 15



```text

Versioned Trust Anchor Architecture Established

```



\---



\# Canonical Outcome



Trust anchors evolve over time.



Attestations remain verifiable forever.



Key rotation changes which key signs new evidence.



It never breaks verification of existing evidence.



Trust is preserved across trust-anchor generations.



