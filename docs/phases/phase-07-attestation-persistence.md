\# Phase 07 — Attestation Persistence



\## Objective



Persist cryptographically signed attestations as durable audit evidence.



An attestation is not useful if it only exists in memory.



This phase ensures attestation evidence becomes a permanent part of the Parmana trust record.



\---



\# Why Persistence Exists



Phase 06 produces:



```text

Decision Attestation

```



The attestation contains:



```text

Decision

Intent Evidence

Policy Context

Cryptographic Evidence

Digital Signature

```



If the process crashes immediately afterward:



```text

Evidence Is Lost

```



Persistence prevents that loss.



\---



\# Canonical Flow



```text

Evaluation

&#x20;    ↓

Decision

&#x20;    ↓

Intent

&#x20;    ↓

Attestation

&#x20;    ↓

Persistence

```



\---



\# Primary Route



File:



```text

packages/server/src/routes/attest.ts

```



Endpoint:



```http

POST /attest

```



\---



\# Current Implementation



Inside the route:



```ts

const attestation =

&#x20; createAttestation(

&#x20;   evaluation

&#x20; );



await saveAttestation(

&#x20; attestation

);

```



Flow:



```text

createAttestation()

&#x20;         ↓

saveAttestation()

&#x20;         ↓

Audit Database

```



\---



\# Complete Route Flow



```text

POST /attest

&#x20;       ↓

evaluateTask()

&#x20;       ↓

createAttestation()

&#x20;       ↓

saveAttestation()

&#x20;       ↓

Return Response

```



\---



\# Evaluation Stage



Implementation:



```text

packages/verifier/src/evaluate-task.ts

```



Produces:



```text

Decision

Policy Context

Intent Context

```



\---



\# Attestation Stage



Implementation:



```text

packages/attestation/src/create-attestation.ts

```



Produces:



```text

Attestation Hash

Signature

Evidence

```



\---



\# Persistence Stage



Implementation:



```text

packages/audit-db

```



Called From:



```ts

await saveAttestation(

&#x20; attestation

);

```



Purpose:



```text

Store Attestation

Preserve Evidence

Support Audit Retrieval

```



\---



\# What Is Persisted



Current attestation structure contains:



```text

schemaVersion

decisionId

businessTransactionId

subjectId

taskId

policyId

policyVersion

intent

evidence

signatures

metadata

outcome

```



All of this becomes audit evidence.



\---



\# Example Persisted Attestation



Example:



```json

{

&#x20; "schemaVersion": "2",



&#x20; "decisionId": "46181063-5252-4203-8204-4c0de03212df",



&#x20; "policyId": "payment-release",



&#x20; "policyVersion": "1.0.0",



&#x20; "evidence": \[

&#x20;   {

&#x20;     "id": "attestation-hash",

&#x20;     "hash": "e43b9b3daccea16eada75de37a7342ad35271b0ba09ffa98e88a19b150c1ec82",

&#x20;     "hashAlgorithm": "sha256"

&#x20;   }

&#x20; ],



&#x20; "signatures": {

&#x20;   "signatures": \[

&#x20;     {

&#x20;       "algorithm": "ed25519",

&#x20;       "keyId": "parmana-root-key"

&#x20;     }

&#x20;   ]

&#x20; }

}

```



\---



\# Why Persistence Matters



Persistence enables:



```text

Audit

Compliance

Forensics

Trust Chain Retrieval

Independent Verification

```



Without persistence:



```text

Attestation Exists Only Temporarily

```



With persistence:



```text

Attestation Becomes Evidence

```



\---



\# Evidence Lifecycle



```text

Evaluation

&#x20;     ↓

Attestation

&#x20;     ↓

Persistence

&#x20;     ↓

Retrieval

&#x20;     ↓

Verification

```



\---



\# Relationship To Trust Chain



Later phases require persisted attestations.



Trust chain construction depends on stored evidence.



Flow:



```text

Persisted Attestation

&#x20;         ↓

Verification Receipt

&#x20;         ↓

Execution Token

&#x20;         ↓

Execution Record

&#x20;         ↓

Trust Chain

```



\---



\# Failure Scenario



Example:



```text

createAttestation()

succeeds



saveAttestation()

fails

```



Result:



```text

Attestation Returned



Evidence Not Recorded

```



This creates audit gaps.



Persistence is therefore mandatory.



\---



\# Operational Validation



Create an attestation:



```http

POST /attest

```



Expected:



```text

200 OK

```



Verify response contains:



```text

decisionId

evidence

signatures

```



Verify no persistence errors appear in server logs.



\---



\# Current Debug Logging



Route currently outputs:



```ts

console.log(

&#x20; JSON.stringify(

&#x20;   attestation,

&#x20;   null,

&#x20;   2

&#x20; )

);

```



Purpose:



```text

Developer Validation

Evidence Inspection

```



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

&#x20;   ↓

Persistence

```



Without persistence:



```text

No Durable Evidence

```



\---



\# Phase Completion Criteria



Phase 07 is complete when:



```text

✓ Evaluation succeeds

✓ Attestation created

✓ saveAttestation() executes

✓ Attestation persisted

✓ Evidence retrievable

✓ No audit gaps exist

```



\---



\# Output Of Phase 07



```text

Cryptographically Signed Attestation Persisted As Audit Evidence

```



\---



\# Canonical Outcome



Attestation transforms authorization into cryptographic evidence.



Persistence transforms cryptographic evidence into durable trust records.



