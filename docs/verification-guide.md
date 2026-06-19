\# Parmana Trust Core Verification Guide



\## Purpose



This guide describes how independent verifiers validate trust within the Parmana Trust Core.



Verification does not require access to internal systems.



Verification relies on cryptographic evidence, attestations, receipts, transparency logs, trust roots, and public verification keys.



\---



\# Verification Principles



Verification must be:



\* Independent

\* Deterministic

\* Reproducible

\* Cryptographically verifiable



Trust is established through verification, not assertion.



\---



\# Verification Sequence



The recommended verification order is:



```text

Evidence

&#x20;  ↓

Attestation

&#x20;  ↓

Receipt

&#x20;  ↓

Transparency Chain

&#x20;  ↓

Trust Root

&#x20;  ↓

Verification Key

```



Every layer depends on successful verification of the previous layer.



\---



\# Step 1 — Verify Evidence



Purpose:



Confirm that evidence used during policy evaluation has not been modified.



Checks:



\* Evidence exists

\* Required evidence is present

\* Evidence hashes match expected values



Relevant Invariants:



\* INV-140

\* INV-150



Failure Result:



```text

Evidence verification failed

```



Trust must not be established.



\---



\# Step 2 — Verify Attestation



Purpose:



Confirm that the attestation accurately represents the original decision.



Checks:



\* Decision reference exists

\* Evidence hash is valid

\* Signature exists

\* Signature verifies successfully



Relevant Invariants:



\* INV-100

\* INV-101

\* INV-120

\* INV-121



Verification Endpoint:



```http

POST /verify-attestation

```



Expected Response:



```json

{

&#x20; "valid": true

}

```



Failure Result:



```text

Attestation verification failed

```



\---



\# Step 3 — Verify Receipt



Purpose:



Confirm that verification occurred and produced a valid verification receipt.



Checks:



\* Receipt exists

\* Receipt hash is valid

\* Receipt references the expected decision



Relevant Invariant:



\* INV-160



Failure Result:



```text

Receipt verification failed

```



\---



\# Step 4 — Verify Transparency Chain



Purpose:



Confirm that receipt history is complete and append-only.



Checks:



\* Previous hash references are valid

\* Chain continuity is preserved

\* No entries are missing

\* No entries were reordered



Relevant Invariants:



\* INV-103

\* INV-170



Failure Result:



```text

Transparency chain verification failed

```



\---



\# Step 5 — Verify Trust Root



Purpose:



Confirm that the published trust root accurately represents transparency history.



Checks:



\* Root hash is deterministic

\* Root hash is reproducible

\* Signature is valid



Relevant Invariants:



\* INV-104

\* INV-105

\* INV-130

\* INV-131



Verification Endpoint:



```http

POST /trust-root/verify

```



Expected Response:



```json

{

&#x20; "valid": true

}

```



Failure Result:



```text

Trust root verification failed

```



\---



\# Step 6 — Verify Public Key



Purpose:



Confirm that signatures were generated using the active Parmana verification key.



Endpoint:



```http

GET /keys/current

```



Example Response:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



Checks:



\* Key identifier matches expected value

\* Algorithm matches expected value

\* Public key successfully verifies signatures



Failure Result:



```text

Public key verification failed

```



\---



\# Verification Outcome



Trust may be established only if:



```text

Evidence           PASS

Attestation        PASS

Receipt            PASS

Transparency Log   PASS

Trust Root         PASS

Verification Key   PASS

```



Any failed verification invalidates trust.



\---



\# Auditor Checklist



\* Verify evidence integrity

\* Verify attestation signature

\* Verify receipt integrity

\* Verify transparency chain continuity

\* Verify trust root signature

\* Verify active verification key



All checks must succeed before trust is established.



\---



\# Canonical Parmana Statement



Organizations decide what to trust.



Parmana evaluates trusted signals against policy before execution.



Humans define authority.



Parmana makes authority verifiable and enforceable before execution.



