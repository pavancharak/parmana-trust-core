\# Execution Token Reference



\## Purpose



The Execution Token is the artifact that authorizes execution.



It represents the transition point between:



```text id="0a1v9m"

Trust Validation

```



and



```text id="n1s3xe"

Execution Authorization

```



within the Parmana trust model.



\---



\# Canonical Principle



Verification establishes trust.



Execution Tokens authorize execution.



\---



\# Position In Trust Chain



```text id="7v2m4q"

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Verification Receipt

&#x20;   ↓

Execution Token

&#x20;   ↓

Execution

```



Execution Tokens sit immediately before execution.



\---



\# Canonical Principle



Decisions authorize Intent.



Intent authorizes Execution.



The Execution Token is the machine-verifiable representation of that authorization.



\---



\# Why Execution Tokens Exist



Most systems perform:



```text id="3l5v8g"

Verification

&#x20;    ↓

Execution

```



without preserving proof that:



```text id="t0f4p6"

Execution Was Explicitly Authorized

```



Execution Tokens solve that problem.



\---



\# Canonical Trust Question



Execution Tokens answer:



```text id="u7h3n1"

Is This Specific Execution Authorized?

```



\---



\# Definition



An Execution Token is a cryptographically verifiable authorization artifact generated from verified trust evidence.



It authorizes a specific execution.



\---



\# Responsibilities



Execution Tokens prove:



```text id="c8a2w9"

Authorization Exists



Verification Succeeded



Execution Is Permitted



Execution Scope Is Defined

```



\---



\# Execution Token Is Not A Decision



Decisions determine:



```text id="x1r5s4"

Should This Happen?

```



Execution Tokens determine:



```text id="f3g6t8"

May Execution Proceed?

```



\---



\# Execution Token Is Not Execution



Execution Tokens authorize:



```text id="j5k7p2"

Execution

```



They do not perform execution.



\---



\# Execution Token Is Not A Trust Anchor



Trust Anchors establish:



```text id="m9v4z1"

Identity

```



Execution Tokens establish:



```text id="q8c5b7"

Execution Authorization

```



\---



\# Inputs To Execution Token Generation



Execution Tokens should be generated from:



```text id="z4n2e6"

Decision



Intent



Attestation



Verification Receipt

```



\---



\# Canonical Generation Flow



```text id="w2f7g1"

Decision

&#x20;    ↓

Intent

&#x20;    ↓

Attestation

&#x20;    ↓

Verification

&#x20;    ↓

Verification Receipt

&#x20;    ↓

Execution Token

```



\---



\# Generation Preconditions



Execution Token generation requires:



```text id="r8j3m4"

VALID Verification Receipt

```



\---



\# Mandatory Rule



```text id="y6h1k8"

INVALID Verification

=

No Execution Token

```



\---



\# Canonical Structure



Example:



```json id="b4x7p9"

{

&#x20; "executionTokenId":

&#x20;   "ET-001",



&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df",



&#x20; "verificationReceiptId":

&#x20;   "VR-001",



&#x20; "intentHash":

&#x20;   "abc123...",



&#x20; "issuedAt":

&#x20;   "2026-06-23T02:15:00Z"

}

```



\---



\# Execution Token Identity



Every token must be uniquely identifiable.



Example:



```json id="g7t3k2"

{

&#x20; "executionTokenId":

&#x20;   "ET-001"

}

```



Purpose:



```text id="d8q4v6"

Execution Authorization Identity

```



\---



\# Decision Reference



Example:



```json id="s9m2c1"

{

&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df"

}

```



Purpose:



```text id="n5w7r3"

Link Execution Authorization

To Decision

```



\---



\# Verification Receipt Reference



Example:



```json id="h2p6z4"

{

&#x20; "verificationReceiptId":

&#x20;   "VR-001"

}

```



Purpose:



```text id="k8j1n5"

Prove Verification Occurred

```



\---



\# Intent Binding



Example:



```json id="v4e8q7"

{

&#x20; "intentHash":

&#x20;   "abc123..."

}

```



Purpose:



```text id="p6x3b2"

Bind Authorization

To Specific Intent

```



\---



\# Why Intent Binding Exists



Without intent binding:



```text id="m7r4z8"

Authorization

```



could potentially be reused.



With intent binding:



```text id="f2n9k1"

Authorization

```



applies only to a specific intended action.



\---



\# Canonical Security Property



Execution Tokens authorize:



```text id="t3j6v5"

Specific Intent

```



not:



```text id="y1q8m7"

General Execution

```



\---



\# Issued Timestamp



Example:



```json id="r5d2g8"

{

&#x20; "issuedAt":

&#x20;   "2026-06-23T02:15:00Z"

}

```



Purpose:



```text id="u4p7n2"

Execution Authorization Timing

```



\---



\# Future Expiration Support



Optional future field:



```json id="c9v3w6"

{

&#x20; "expiresAt":

&#x20;   "2026-06-23T03:15:00Z"

}

```



Purpose:



```text id="j2m8x4"

Authorization Lifetime Control

```



\---



\# Future Scope Controls



Optional future fields:



```json id="k7s5z9"

{

&#x20; "scope": {

&#x20;   "action":

&#x20;     "release-payment",



&#x20;   "maxAmount":

&#x20;     50000

&#x20; }

}

```



Purpose:



```text id="h3r9q5"

Execution Boundary Enforcement

```



\---



\# Future Cryptographic Signature



Recommended future structure:



```json id="z8w4t1"

{

&#x20; "signature": {

&#x20;   "algorithm":

&#x20;     "ed25519",



&#x20;   "keyId":

&#x20;     "parmana-root-key",



&#x20;   "value":

&#x20;     "..."

&#x20; }

}

```



Purpose:



```text id="x7p2m6"

Independent Token Verification

```



\---



\# Execution Authorization Flow



```text id="f4v8c3"

Execution Request

&#x20;        ↓

Execution Token

&#x20;        ↓

Validate Token

&#x20;        ↓

Allow Execution

```



\---



\# Payment Example



Authorized intent:



```json id="n6b1r4"

{

&#x20; "action": "release-payment",



&#x20; "amount": 50000

}

```



Verification succeeds.



Execution Token generated:



```text id="m5k9q2"

ET-001

```



Payment execution proceeds.



\---



\# Wire Transfer Example



Intent:



```json id="q3x7h8"

{

&#x20; "action": "wire-transfer",



&#x20; "amount": 100000

}

```



Execution Token proves:



```text id="c1v6j5"

Specific Wire Transfer

Was Authorized

```



\---



\# Infrastructure Deployment Example



Intent:



```json id="w9r2m7"

{

&#x20; "action": "deploy-release",



&#x20; "environment": "production"

}

```



Execution Token authorizes:



```text id="z6n4p1"

That Deployment

```



not unrelated actions.



\---



\# AI Agent Example



AI generates:



```text id="b5q8v3"

Proposed Intent

```



Parmana verifies:



```text id="y2m7r4"

Authority

```



Execution Token generated:



```text id="n8v1k6"

Authorized Execution

```



Agent may proceed.



\---



\# Relationship To Execution Records



Execution Tokens answer:



```text id="f9w2q7"

May Execution Proceed?

```



Execution Records answer:



```text id="u1m5z8"

What Actually Happened?

```



\---



\# Relationship To Intent



Intent defines:



```text id="k4r8v2"

Authorized Action

```



Execution Tokens authorize:



```text id="q7n3m1"

Execution Of That Action

```



\---



\# Relationship To Verification



Verification establishes:



```text id="z5x9p4"

Trust

```



Execution Tokens establish:



```text id="w2m6r8"

Authorization

```



\---



\# Relationship To Trust Chains



Execution Tokens become part of:



```text id="h8q4n7"

Execution Trust Chains

```



Flow:



```text id="c6m1v9"

Decision

&#x20;    ↓

Intent

&#x20;    ↓

Attestation

&#x20;    ↓

Verification

&#x20;    ↓

Receipt

&#x20;    ↓

Execution Token

```



\---



\# Replay Protection



Future versions should support:



```text id="v3n7q5"

Nonce



Expiration



Single Use Tokens

```



Purpose:



```text id="y9m2k4"

Prevent Reuse

```



\---



\# Security Properties



Execution Tokens provide:



```text id="d7r4x2"

Authorization



Intent Binding



Traceability



Execution Control

```



\---



\# Execution Token Immutability



After issuance:



```text id="j4v8p6"

Execution Tokens Must Not Change

```



Reason:



```text id="m1q5z9"

Authorization Evidence

Must Remain Stable

```



\---



\# Questions Execution Tokens Answer



```text id="f6w3n8"

Is Execution Authorized?



Which Intent Is Authorized?



Which Verification Produced Authorization?



Can Execution Proceed?



Can Authorization Be Proven?

```



\---



\# Questions Execution Tokens Do Not Answer



```text id="s8x4m2"

Did Execution Occur?



Did Execution Succeed?



Did Execution Match Intent?



Was The Business Outcome Successful?

```



Those belong to execution records.



\---



\# Execution Token Lifecycle



```text id="r2m7v5"

Decision

&#x20;    ↓

Intent

&#x20;    ↓

Attestation

&#x20;    ↓

Verification

&#x20;    ↓

Verification Receipt

&#x20;    ↓

Execution Token

&#x20;    ↓

Execution

```



\---



\# Future API Example



Generate:



```http id="t9q3w7"

POST /token

```



Response:



```json id="v1m6r8"

{

&#x20; "executionTokenId":

&#x20;   "ET-001"

}

```



Validate:



```http id="x4p7n2"

POST /token/verify

```



Result:



```json id="z8r5m1"

{

&#x20; "valid": true

}

```



\---



\# Canonical Outcome



An Execution Token is the authoritative execution authorization artifact within the Parmana trust model.



It is generated from verified trust evidence, bound to a specific intent, and serves as the cryptographic authorization required before execution occurs.



Execution Tokens transform validated trust into authorized execution.



