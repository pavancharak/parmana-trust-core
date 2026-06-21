\# Key Rotation Model



\## Purpose



The Key Rotation Model defines how Parmana evolves trust anchors without breaking verification of previously authorized executions.



The objective is:



```text

Rotate Keys

Without Breaking Trust

```



Key rotation allows Parmana to:



```text

Replace Compromised Keys

Upgrade Cryptography

Expire Old Keys

Maintain Trust Continuity

```



while preserving historical verification.



\---



\# Problem Statement



Without rotation:



```text

One Root Key

&#x20;     ↓

Forever

```



creates:



```text

Key Compromise Risk

Operational Risk

Compliance Risk

```



A production trust system must support controlled root evolution.



\---



\# Architectural Position



```text

Trust Root v1

&#x20;     │

&#x20;     ▼

Trust Root v2

&#x20;     │

&#x20;     ▼

Trust Root v3

```



Every version extends trust history.



\---



\# Design Goals



\## Trust Continuity



Previously issued tokens must remain verifiable.



```text

Token Issued Under v1

&#x20;       ↓

Root Rotated To v2

&#x20;       ↓

Verification Still Works

```



\---



\## Forward Security



New tokens should use:



```text

Latest Active Root

```



only.



\---



\## Historical Auditability



Auditors must be able to verify:



```text

Past Tokens

Past Receipts

Past Decisions

```



using historical trust roots.



\---



\## Deterministic Verification



Verification result must not depend on:



```text

Current Root Only

```



Verification must use:



```text

Token Root Version

```



\---



\# Trust Root



\## Definition



A Trust Root represents the active set of trusted anchors.



```typescript

interface TrustRoot {



&#x20; id: string;



&#x20; version: string;



&#x20; previousVersion?: string;



&#x20; anchors: TrustAnchor\[];



&#x20; createdAt: string;



}

```



\---



\# Root Evolution



Example:



```text

v1

&#x20;│

&#x20;▼

v2

&#x20;│

&#x20;▼

v3

```



Chain:



```text

v3

&#x20;↓

v2

&#x20;↓

v1

```



Every root references its predecessor.



\---



\# Rotation Flow



\## Before Rotation



```text

Current Root

&#x20;     ↓

v1

```



\---



\## Rotation Event



```text

rotateTrustRoot()

```



creates:



```text

v2

```



with:



```text

previousVersion = v1

```



\---



\## After Rotation



```text

v1

&#x20;│

&#x20;▼

v2

```



Both remain verifiable.



\---



\# Token Requirements



Execution Tokens must include:



```typescript

keyId: string;



rootVersion: string;

```



Example:



```json

{

&#x20; "keyId": "parmana-root-key-v2",

&#x20; "rootVersion": "v2"

}

```



\---



\# Verification Flow



Verifier receives:



```json

{

&#x20; "rootVersion": "v2"

}

```



Verifier:



```text

Find Root v2

&#x20;     ↓

Find Key

&#x20;     ↓

Verify Signature

```



Historical verification remains possible.



\---



\# Root Registry



Future registry:



```text

trust\_roots

```



Columns:



| Column           | Type        |

| ---------------- | ----------- |

| root\_id          | text        |

| version          | text        |

| previous\_version | text        |

| created\_at       | timestamptz |

| status           | text        |



\---



\# Anchor Registry



Future registry:



```text

trust\_anchors

```



Columns:



| Column       | Type |

| ------------ | ---- |

| key\_id       | text |

| root\_version | text |

| algorithm    | text |

| public\_key   | text |

| status       | text |



\---



\# Root States



\## Active



```text

Used For Signing

Used For Verification

```



\---



\## Retired



```text

Not Used For Signing

Still Used For Verification

```



\---



\## Revoked



```text

Not Used For Signing

Not Trusted For Verification

```



Used only during compromise scenarios.



\---



\# Compromise Recovery



Example:



```text

Root v2 Compromised

```



Response:



```text

Create v3

Retire v2

Issue New Tokens

```



Existing v1 tokens remain valid.



\---



\# Root Verification



Implementation:



```typescript

verifyChain(

&#x20; roots

)

```



Purpose:



```text

Verify Trust Continuity

Detect Broken History

```



\---



\# Trust Chain Example



```text

Root v1

&#x20;   │

&#x20;   ▼

Root v2

&#x20;   │

&#x20;   ▼

Root v3

```



Verification:



```text

v3

&#x20;↓

v2

&#x20;↓

v1

```



Chain must remain intact.



\---



\# Future Multi-Key Model



Future root:



```text

Root v5

```



may contain:



```text

Ed25519

Post-Quantum Key

Regional Key

```



simultaneously.



\---



\# Compliance Benefits



Supports:



```text

SOC 2

ISO 27001

PCI DSS

Financial Services Controls

```



through controlled key lifecycle management.



\---



\# Invariants



\## INV-700



```text

Trust Roots must be versioned.

```



\## INV-701



```text

Trust Roots must preserve lineage.

```



\## INV-702



```text

Historical verification must remain possible.

```



\## INV-703



```text

Retired roots remain verifiable.

```



\## INV-704



```text

New authorization artifacts use the latest active root.

```



\## INV-705



```text

Root compromise must not invalidate historical trust.

```



\---



\# Canonical Statement



The Key Rotation Model enables Parmana to evolve trust anchors while preserving cryptographic verification of historical authorization artifacts and maintaining continuous trust across root generations.



