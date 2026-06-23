\# Phase 06 — Attestation Generation



\## Objective



Convert an authorization decision and execution intent into a cryptographically signed attestation.



This is the first phase where authorization becomes cryptographic evidence.



\---



\# Why Attestation Exists



Evaluation produces:



```text

Decision

Intent

```



However, evaluation alone is not portable proof.



Parmana therefore creates:



```text

Decision

&#x20;   +

Intent

&#x20;   +

Policy Context

&#x20;   ↓

Attestation

```



The attestation becomes the authoritative trust artifact.



\---



\# Canonical Flow



```text

Trusted Signals

&#x20;       ↓

Evaluation

&#x20;       ↓

Decision

&#x20;       ↓

Intent

&#x20;       ↓

Attestation

```



\---



\# Primary Implementation



File:



```text

packages/attestation/src/create-attestation.ts

```



Function:



```ts

createAttestation(

&#x20; evaluation

)

```



Input:



```text

Evaluation Result

```



Output:



```text

Decision Attestation

```



\---



\# Attestation Structure



The generated attestation contains:



```text

Decision Identity

Business Context

Policy Context

Intent Evidence

Cryptographic Evidence

Digital Signature

```



Example:



```json

{

&#x20; "schemaVersion": "2",



&#x20; "decisionId": "...",



&#x20; "policyId": "payment-release",



&#x20; "policyVersion": "1.0.0",



&#x20; "evidence": \[],



&#x20; "signatures": {}

}

```



\---



\# Step 1 — Generate Timestamp



Implementation:



```ts

const createdAt =

&#x20; new Date().toISOString();

```



Purpose:



```text

Bind attestation to a specific time.

```



Output:



```text

2026-06-23T01:21:19.859Z

```



\---



\# Step 2 — Generate Outcome



Implementation:



```ts

const outcome = {

&#x20; result:

&#x20;   evaluation.decision

};

```



Purpose:



Capture evaluation result.



Example:



```json

{

&#x20; "action": "reject",

&#x20; "requires\_override": true

}

```



\---



\# Step 3 — Generate Intent Hash



Implementation:



```ts

crypto

&#x20; .createHash("sha256")

```



Input:



```text

executionIntent

```



Flow:



```text

Execution Intent

&#x20;       ↓

JSON Serialization

&#x20;       ↓

SHA-256

&#x20;       ↓

Intent Hash

```



Output:



```text

intentHash

```



Purpose:



Create immutable evidence of authorized intent.



\---



\# Why Intent Hashing Matters



Intent may contain:



```text

Action

Scope

Policy

Authorization Details

```



Hashing creates:



```text

Compact

Immutable

Verifiable

Evidence

```



Later verification can prove intent has not changed.



\---



\# Step 4 — Generate Attestation Hash



Implementation:



```ts

crypto

&#x20; .createHash("sha256")

```



Input:



```text

businessTransactionId

subjectId

taskId

policyId

policyVersion

intentHash

outcome

createdAt

```



Flow:



```text

Attestation Data

&#x20;       ↓

Canonical Serialization

&#x20;       ↓

SHA-256

&#x20;       ↓

Attestation Hash

```



Output:



```text

attestationHash

```



Example:



```text

e43b9b3daccea16eada75de37a7342ad35271b0ba09ffa98e88a19b150c1ec82

```



\---



\# Step 5 — Generate Digital Signature



Implementation:



```ts

provider.sign(

&#x20; attestationHash

)

```



Provider:



```text

packages/attestation/src/provider.ts

```



Implementation:



```text

packages/attestation/src/ed25519-provider.ts

```



Underlying crypto:



```text

packages/attestation/src/crypto.ts

```



Flow:



```text

Attestation Hash

&#x20;       ↓

Ed25519 Sign

&#x20;       ↓

Signature

```



Output:



```text

Base64 Signature

```



Example:



```text

IOmZK8CGAsDM9MO8K2eWkPoeeF+FnmuxTgJHfutHfRihwcyO2CDts6v4DmSJp09EjCBKvWRvad9fhIvOCYX4Cg==

```



\---



\# Step 6 — Build Evidence Section



Example:



```json

{

&#x20; "id": "attestation-hash",

&#x20; "hash": "...",

&#x20; "hashAlgorithm": "sha256"

}

```



Purpose:



Expose cryptographic evidence for verification.



\---



\# Step 7 — Build Signature Section



Example:



```json

{

&#x20; "algorithm": "ed25519",



&#x20; "keyId": "parmana-root-key",



&#x20; "value": "...",



&#x20; "createdAt": "..."

}

```



Purpose:



Bind evidence to Parmana's trust anchor.



\---



\# Current Trust Anchor



Key ID:



```text

parmana-root-key

```



Algorithm:



```text

ed25519

```



Published through:



```http

GET /trust-anchor/public-key

```



\---



\# Final Attestation



Result:



```text

Decision

Intent

Policy Context

Evidence

Signature

```



combined into:



```text

Decision Attestation

```



\---



\# Storage



Attestation Route:



```text

packages/server/src/routes/attest.ts

```



Persistence:



```ts

saveAttestation(

&#x20; attestation

)

```



Database Package:



```text

packages/audit-db

```



\---



\# Why Attestation Matters



Attestation answers:



```text

What decision was made?

What policy was used?

What intent was authorized?

```



while preserving cryptographic proof.



\---



\# Dependency Chain



```text

Task

&#x20;   ↓

Policy

&#x20;   ↓

Signals

&#x20;   ↓

Evaluation

&#x20;   ↓

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

```



Without attestation:



```text

Authorization Exists



Portable Proof Does Not

```



\---



\# Validation Checklist



Create attestation:



```http

POST /attest

```



Verify response contains:



```text

decisionId

policyId

policyVersion

evidence

signatures

```



Verify signature exists:



```text

signatures.signatures\[0].value

```



Verify evidence hash exists:



```text

evidence\[0].hash

```



\---



\# Phase Completion Criteria



Phase 06 is complete when:



```text

✓ Intent hash generated

✓ Attestation hash generated

✓ Signature generated

✓ Evidence recorded

✓ Attestation returned

✓ Attestation persisted

```



\---



\# Output Of Phase 06



```text

Cryptographically Signed Decision Attestation Created

```



\---



\# Canonical Outcome



Decisions authorize Intent.



Attestations preserve cryptographic evidence of that authorization.



