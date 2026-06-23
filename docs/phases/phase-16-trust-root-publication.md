\# Phase 16 — Trust Root Publication



\## Objective



Publish a cryptographically verifiable trust root representing the current state of Parmana trust evidence.



This phase extends trust beyond individual attestations and enables verification of the system's overall integrity state.



\---



\# Why Trust Root Publication Exists



Previous phases established:



```text id="2b9tv7"

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

```



and:



```text id="j77zfh"

Trust Anchor

&#x20;   ↓

Independent Verification

```



These prove individual evidence artifacts.



However, organizations also need to prove:



```text id="m4k63k"

What is the current state of trust evidence?



What evidence existed at publication time?



Has evidence been altered after publication?



Can independent parties verify the trust state?

```



Trust Root Publication answers these questions.



\---



\# Canonical Principle



Individual evidence proves individual decisions.



Trust roots prove the integrity of the overall trust state.



\---



\# Canonical Flow



```text id="xvwgyq"

Attestations

Verification Receipts

Execution Evidence

&#x20;        ↓

Trust Root

&#x20;        ↓

Publication

&#x20;        ↓

Independent Verification

```



\---



\# Trust Foundation Milestone



Roadmap Milestone:



```text id="7ek12r"

Trust Root Publication

```



Status:



```text id="p13l8s"

IMPLEMENTED

```



Current routes exist and produce trust root artifacts.



\---



\# What Is A Trust Root?



A trust root is a signed summary of trust evidence.



Instead of verifying:



```text id="1wjlwm"

Record 1

Record 2

Record 3

...

Record N

```



individually,



a verifier can validate:



```text id="wdyz91"

Trust Root

```



which represents all included evidence.



\---



\# Current Trust Root Route



Endpoint:



```http id="xydys0"

GET /trust-root/current

```



Implementation:



```text id="dzbl4x"

packages/server/src/routes/trust-root-current.ts

```



\---



\# Trust Root Creation Route



Endpoint:



```http id="9hy5cx"

POST /trust-root

```



Implementation:



```text id="1q5hzw"

packages/server/src/routes/trust-root.ts

```



Purpose:



```text id="5n3wyu"

Create Trust Root Objects

```



\---



\# Current Publication Flow



Implementation:



```text id="1k3m63"

getReceiptHashes()

&#x20;     ↓

buildRoot()

&#x20;     ↓

provider.sign()

&#x20;     ↓

Publish Trust Root

```



\---



\# Evidence Collection



Current route retrieves:



```ts id="hnd17f"

getReceiptHashes()

```



Source:



```text id="q89kk0"

packages/audit-db

```



Purpose:



```text id="sczgif"

Collect Trust Evidence Hashes

```



\---



\# Root Construction



Implementation:



```ts id="4nrx3t"

buildRoot(

&#x20; hashes

)

```



Source:



```text id="xg03gm"

packages/transparency-log

```



Purpose:



```text id="cz7rmt"

Generate Root Hash

```



\---



\# Root Hash



Output:



```text id="2q87y4"

rootHash

```



Purpose:



Represent all included evidence.



Flow:



```text id="0t3uxv"

Evidence Hashes

&#x20;      ↓

Root Construction

&#x20;      ↓

rootHash

```



\---



\# Root Signing



Implementation:



```ts id="ckmrxq"

provider.sign(

&#x20; rootHash

)

```



Purpose:



```text id="sj6lc4"

Create Signed Trust Root

```



\---



\# Current Response Structure



Example:



```json id="0j2tlv"

{

&#x20; "rootId": "...",



&#x20; "algorithm": "sha256",



&#x20; "receiptCount": 100,



&#x20; "rootHash": "...",



&#x20; "signature": "...",



&#x20; "signatureAlgorithm": "ed25519",



&#x20; "keyId": "parmana-root-key",



&#x20; "publishedAt": "..."

}

```



\---



\# Response Fields



\## rootId



Purpose:



```text id="sq0v5z"

Unique Trust Root Identity

```



\---



\## rootHash



Purpose:



```text id="1o8wm8"

Represents Included Evidence

```



\---



\## receiptCount



Purpose:



```text id="grm7tb"

Evidence Coverage

```



Example:



```text id="c7hpc6"

100 Receipts Included

```



\---



\## signature



Purpose:



```text id="n1wzjo"

Cryptographic Authenticity

```



\---



\## keyId



Current:



```text id="lxllol"

parmana-root-key

```



Future:



```text id="ynmzpi"

Versioned Trust Anchors

```



\---



\## publishedAt



Purpose:



```text id="nzb6g5"

Trust State Timestamp

```



\---



\# Trust Root Verification



Verification flow:



```text id="39kjiy"

rootHash

&#x20;    ↓

signature

&#x20;    ↓

public key

&#x20;    ↓

VALID

```



Uses:



```http id="07x14l"

GET /trust-anchor/public-key

```



\---



\# Relationship To Trust Anchors



Trust anchors verify:



```text id="j6fyfp"

Attestations

```



and



```text id="5y7y4u"

Trust Roots

```



Trust roots therefore inherit trust from the published trust anchor.



\---



\# Why Publication Matters



Without publication:



```text id="o9hgjm"

Trust Root Exists Internally

```



With publication:



```text id="nqg8t8"

Trust Root Becomes Verifiable

```



External parties can validate the trust state independently.



\---



\# Transparency Model



Canonical transparency flow:



```text id="vz6e9j"

Evidence

&#x20;   ↓

Hash

&#x20;   ↓

Root Hash

&#x20;   ↓

Signature

&#x20;   ↓

Publication

```



This allows later verification of:



```text id="7t7h97"

Integrity

Completeness

Consistency

```



\---



\# Future Trust Root Versioning



Current implementation:



```text id="0l6rnt"

Single Root Generation

```



Future implementation:



```text id="k7p6vk"

rootVersion

previousVersion

rootHash

signature

```



Example:



```json id="zyj53r"

{

&#x20; "rootVersion": 2,



&#x20; "previousVersion": 1,



&#x20; "rootHash": "...",



&#x20; "keyId": "parmana-root-key-v2"

}

```



\---



\# Future Trust Root Lineage



Canonical model:



```text id="5j4y4w"

Root v1

&#x20;  ↓

Root v2

&#x20;  ↓

Root v3

```



Each publication becomes part of trust history.



\---



\# Relationship To Federation



Future federation architecture depends on published trust roots.



Organizations exchange:



```text id="8qck6u"

Trust Roots

```



rather than raw evidence.



This enables:



```text id="9nny6f"

Cross-Organization Verification

```



\---



\# Relationship To Execution Trust Chains



Trust chains answer:



```text id="zwhi7w"

What happened?

```



Trust roots answer:



```text id="n2uwpn"

Can the published trust state be verified?

```



These are complementary capabilities.



\---



\# Operational Validation



Request:



```http id="h5a2e6"

GET /trust-root/current

```



Expected:



```json id="cznhkb"

{

&#x20; "rootId": "...",

&#x20; "rootHash": "...",

&#x20; "signature": "...",

&#x20; "keyId": "parmana-root-key"

}

```



Status:



```text id="wxavmk"

200 OK

```



\---



\# Dependency Chain



```text id="2g4qwc"

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution Evidence

&#x20;   ↓

Trust Root

&#x20;   ↓

Publication

```



Without trust root publication:



```text id="g7oqxe"

Individual Evidence Exists



System Trust State Does Not

```



\---



\# Phase Completion Criteria



```text id="f7lf94"

✓ Trust root generated

✓ Root hash generated

✓ Root signed

✓ Root published

✓ Trust anchor linked

✓ Independent verification possible

```



\---



\# Output Of Phase 16



```text id="rn62sd"

Published Cryptographically Signed Trust Root

```



\---



\# Canonical Outcome



Attestations prove individual authorization events.



Execution records prove individual execution events.



Trust roots prove the integrity of the published trust state.



A trust root allows independent parties to verify not merely a decision, but the integrity of the evidence ecosystem that produced it.



