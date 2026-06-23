\# Attestation Reference



\## Purpose



An Attestation is the first cryptographically signed artifact in the Parmana trust model.



It serves as verifiable proof that:



```text

A Decision Occurred



An Intent Existed



Policy Was Evaluated



Authorization Was Granted

```



at a specific point in time.



\---



\# Canonical Principle



An Attestation proves that an authorized intent existed before execution occurred.



\---



\# Position In Trust Chain



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

```



Attestation is the cryptographic bridge between authorization and trust.



\---



\# Why Attestation Exists



Traditional systems often store:



```text

Approval Records



Workflow Logs



Database Entries

```



These records can be:



```text

Modified



Deleted



Corrupted



Disputed

```



Attestation creates cryptographic proof that authorization occurred.



\---



\# Canonical Trust Question



Attestation answers:



```text

Can We Prove

What Was Authorized?

```



\---



\# Definition



An Attestation is a signed authorization artifact generated from:



```text

Decision



Intent



Policy



Metadata

```



and protected using cryptographic signatures.



\---



\# Responsibilities



An Attestation proves:



```text

Authorization Existed



Intent Existed



Policy Context Existed



Evidence Was Preserved

```



\---



\# Attestation Is Not A Decision



Decision answers:



```text

Should This Happen?

```



Attestation answers:



```text

Can We Prove

That Authorization Happened?

```



\---



\# Attestation Is Not Verification



Attestation creates evidence.



Verification validates evidence.



\---



\# Attestation Is Not Execution



Attestation proves:



```text

Authorization

```



Execution proves:



```text

Action

```



\---



\# Canonical Structure



Example:



```json

{

&#x20; "schemaVersion": "2",



&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df",



&#x20; "taskId":

&#x20;   "payment.release",



&#x20; "policyId":

&#x20;   "payment-release",



&#x20; "policyVersion":

&#x20;   "1.0.0",



&#x20; "intent": {

&#x20;   "hashAlgorithm": "sha256",



&#x20;   "intentHash": "..."

&#x20; },



&#x20; "evidence": \[],



&#x20; "signatures": {},



&#x20; "metadata": {},



&#x20; "outcome": {}

}

```



\---



\# Attestation Identity



Every attestation is uniquely identifiable.



Example:



```json

{

&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df"

}

```



Purpose:



```text

Trust Chain Correlation

```



\---



\# Schema Version



Example:



```json

{

&#x20; "schemaVersion": "2"

}

```



Purpose:



```text

Version Control

```



Allows future schema evolution.



\---



\# Decision Reference



Example:



```json

{

&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df"

}

```



Purpose:



```text

Link Attestation

To Decision

```



\---



\# Policy Reference



Example:



```json

{

&#x20; "policyId":

&#x20;   "payment-release",



&#x20; "policyVersion":

&#x20;   "1.0.0"

}

```



Purpose:



```text

Preserve Authorization Context

```



Questions answered later:



```text

Which Policy Authorized This?

```



\---



\# Intent Reference



Example:



```json

{

&#x20; "intent": {

&#x20;   "hashAlgorithm": "sha256",



&#x20;   "intentHash": "abc123..."

&#x20; }

}

```



Purpose:



```text

Bind Authorization

To Authorized Intent

```



\---



\# Why Intent Is Hashed



Attestations do not necessarily store the entire intent.



Instead they store:



```text

Cryptographic Evidence Of Intent

```



through:



```text

intentHash

```



This enables:



```text

Integrity Verification

```



without requiring intent duplication.



\---



\# Evidence Section



Example:



```json

{

&#x20; "evidence": \[

&#x20;   {

&#x20;     "id": "attestation-hash",



&#x20;     "hash":

&#x20;       "e43b9b3d...",



&#x20;     "hashAlgorithm":

&#x20;       "sha256"

&#x20;   }

&#x20; ]

}

```



Purpose:



```text

Cryptographic Integrity

```



\---



\# Attestation Hash



Generated from:



```text

Business Context



Subject



Task



Policy



Intent



Outcome



Timestamp

```



Purpose:



```text

Create Stable Signing Input

```



\---



\# Signature Section



Example:



```json

{

&#x20; "signatures": {

&#x20;   "signatures": \[

&#x20;     {

&#x20;       "algorithm": "ed25519",



&#x20;       "keyId":

&#x20;         "parmana-root-key",



&#x20;       "value": "...",



&#x20;       "createdAt": "..."

&#x20;     }

&#x20;   ]

&#x20; }

}

```



\---



\# Signature Purpose



The signature proves:



```text

Parmana Produced This Attestation

```



and:



```text

The Attestation Has Not Been Modified

```



\---



\# Algorithm



Current implementation:



```text

ed25519

```



Purpose:



```text

Digital Signature Verification

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

Identify Verification Key

```



Used during independent verification.



\---



\# Signature Value



Example:



```json

{

&#x20; "value":

&#x20;   "IOmZK8CGAsDM..."

}

```



Purpose:



```text

Cryptographic Proof

```



\---



\# Metadata Section



Example:



```json

{

&#x20; "metadata": {

&#x20;   "profile": "default",



&#x20;   "createdAt":

&#x20;     "2026-06-23T01:21:19.859Z"

&#x20; }

}

```



Purpose:



```text

Operational Context

```



\---



\# Profile



Example:



```json

{

&#x20; "profile": "default"

}

```



Purpose:



```text

Trust Profile Identification

```



Future profiles may include:



```text

Financial



Healthcare



Government



Enterprise

```



\---



\# Created Timestamp



Example:



```json

{

&#x20; "createdAt":

&#x20;   "2026-06-23T01:21:19.859Z"

}

```



Purpose:



```text

Authorization Timestamp

```



\---



\# Outcome Section



Example:



```json

{

&#x20; "outcome": {

&#x20;   "result": {

&#x20;     "action": "approve"

&#x20;   }

&#x20; }

}

```



Purpose:



```text

Preserve Decision Result

```



\---



\# Rejected Outcome Example



```json

{

&#x20; "action": "reject"

}

```



Attestation may still exist.



Reason:



```text

Rejected Decisions

May Require Evidence

```



\---



\# Override Outcome Example



```json

{

&#x20; "action": "reject",



&#x20; "requires\_override": true

}

```



Purpose:



```text

Preserve Override Context

```



\---



\# Attestation Lifecycle



```text

Evaluate

&#x20;   ↓

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Hash

&#x20;   ↓

Sign

&#x20;   ↓

Attestation

```



\---



\# Attestation Immutability



After creation:



```text

Attestation Must Never Change

```



If authorization changes:



```text

New Decision



New Intent



New Attestation

```



must be generated.



\---



\# Independent Verification



Attestation verification requires:



```text

Attestation Hash



Signature



Public Key

```



No database access required.



\---



\# Verification Flow



```text

Attestation

&#x20;     ↓

Hash

&#x20;     ↓

Signature

&#x20;     ↓

Public Key

&#x20;     ↓

VALID

```



\---



\# Relationship To Trust Anchor



Verification depends upon:



```text

Trust Anchor

```



retrieved from:



```http

GET /trust-anchor/public-key

```



The trust anchor provides:



```text

Public Verification Key

```



\---



\# Relationship To Trust Roots



Attestations contribute to:



```text

Published Trust State

```



through:



```text

Trust Root Construction

```



\---



\# Relationship To Execution Tokens



Execution tokens are derived from:



```text

Verified Authorization Evidence

```



Attestation is part of that evidence.



\---



\# Relationship To Execution Records



Execution records answer:



```text

What Happened?

```



Attestations answer:



```text

What Was Authorized?

```



\---



\# Questions Attestations Answer



```text

Did Authorization Exist?



Which Policy Was Evaluated?



Which Decision Was Produced?



Which Intent Was Authorized?



Can Authorization Be Proven?

```



\---



\# Questions Attestations Do Not Answer



```text

Was Verification Successful?



Did Execution Occur?



Did Execution Match Intent?



Was The Transaction Completed?

```



Those belong to later artifacts.



\---



\# Operational Validation



Create:



```http

POST /attest

```



Retrieve:



```json

{

&#x20; "evidence": \[],

&#x20; "signatures": {}

}

```



Verify:



```http

POST /verify

```



Expected:



```text

VALID

```



\---



\# Canonical Outcome



An Attestation is a cryptographically signed proof that an authorized intent existed.



It binds decision, policy, intent, and authorization evidence into a tamper-evident artifact that can be independently verified without access to Parmana's internal systems.



Attestation is the foundational trust artifact of the Parmana trust chain.



