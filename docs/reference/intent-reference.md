\# Intent Reference



\## Purpose



Intent is the central artifact in the Parmana trust model.



Intent answers the most important trust question:



```text

What Exactly Was Supposed To Happen?

```



Intent sits between:



```text

Decision

```



and



```text

Execution

```



and creates the trust bridge that most systems lack.



\---



\# Canonical Principle



Decisions authorize Intent.



Intent authorizes Execution.



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



Intent is the authoritative description of the action that is permitted to occur.



\---



\# Why Intent Exists



Traditional systems record:



```text

Who Approved



When Approved

```



Traditional systems often cannot prove:



```text

What Was Actually Authorized

```



Intent solves that problem.



\---



\# The Trust Gap



Most systems contain:



```text

Decision

&#x20;   ↓

Execution

```



with no authoritative representation of:



```text

What Was Intended

```



This creates the trust gap.



\---



\# Parmana Trust Model



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Execution

```



Intent becomes the bridge between authorization and execution.



\---



\# Definition



Intent is a structured, immutable representation of the action authorized by a decision.



Intent defines:



```text

What Action



Against Which Resource



Using Which Parameters



Under Which Constraints

```



\---



\# Intent Is Not A Decision



Decision answers:



```text

Should This Happen?

```



Intent answers:



```text

What Exactly Should Happen?

```



\---



\# Intent Is Not Execution



Execution answers:



```text

What Actually Happened?

```



Intent answers:



```text

What Was Supposed To Happen?

```



\---



\# Canonical Intent Structure



Example:



```json

{

&#x20; "action": "release-payment",



&#x20; "vendorId": "V-100",



&#x20; "amount": 50000,



&#x20; "currency": "USD"

}

```



\---



\# Intent Components



Every intent contains:



```text

Action



Target



Parameters



Constraints

```



\---



\# Action



Example:



```json

{

&#x20; "action": "release-payment"

}

```



Purpose:



```text

Describe Authorized Operation

```



\---



\# Target



Example:



```json

{

&#x20; "vendorId": "V-100"

}

```



Purpose:



```text

Identify Execution Target

```



\---



\# Parameters



Example:



```json

{

&#x20; "amount": 50000,



&#x20; "currency": "USD"

}

```



Purpose:



```text

Define Execution Values

```



\---



\# Constraints



Example:



```json

{

&#x20; "maxAmount": 50000

}

```



Purpose:



```text

Define Execution Boundaries

```



\---



\# Canonical Intent Examples



\## Payment Intent



```json

{

&#x20; "action": "release-payment",



&#x20; "vendorId": "V-100",



&#x20; "amount": 50000

}

```



\---



\## Wire Transfer Intent



```json

{

&#x20; "action": "wire-transfer",



&#x20; "amount": 100000,



&#x20; "recipientBank": "BANK-ABC"

}

```



\---



\## Access Provisioning Intent



```json

{

&#x20; "action": "grant-access",



&#x20; "userId": "USR-100",



&#x20; "role": "finance-admin"

}

```



\---



\## Infrastructure Intent



```json

{

&#x20; "action": "deploy-release",



&#x20; "environment": "production",



&#x20; "application": "payments-api"

}

```



\---



\# Intent Identity



Every intent should have a unique identifier.



Example:



```json

{

&#x20; "intentId":

&#x20;   "INT-001"

}

```



Purpose:



```text

Trust Chain Correlation

```



\---



\# Intent Immutability



Intent must never change after authorization.



Reason:



```text

Authorized Intent

Must Remain Stable

```



If intent changes:



```text

New Decision Required

```



\---



\# Intent Hashing



Intent should be cryptographically bound into the trust chain.



Example:



```text

SHA-256(Intent)

```



Produces:



```text

intentHash

```



\---



\# Why Intent Hashing Exists



Intent hashing allows future verification of:



```text

Intent Integrity

```



Questions answered:



```text

Was Intent Modified?



Does Execution Match Intent?



Does Attestation Reference The Same Intent?

```



\---



\# Intent In Attestation



Attestation contains:



```json

{

&#x20; "intent": {

&#x20;   "hashAlgorithm": "sha256",



&#x20;   "intentHash": "..."

&#x20; }

}

```



Purpose:



```text

Bind Authorization

To Authorized Intent

```



\---



\# Intent In Verification



Verification validates:



```text

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

```



Integrity remains preserved.



\---



\# Intent In Execution Tokens



Execution tokens authorize:



```text

Specific Intent

```



not:



```text

General Execution

```



\---



\# Intent In Execution



Execution should reference:



```text

Authorized Intent

```



Questions become answerable:



```text

Was Execution Authorized?



Did Execution Match Intent?

```



\---



\# Intent Drift



Intent Drift occurs when:



```text

Authorized Intent

```



differs from:



```text

Executed Action

```



Example:



Authorized:



```json

{

&#x20; "amount": 50000

}

```



Executed:



```json

{

&#x20; "amount": 75000

}

```



Intent Drift exists.



\---



\# Intent Verification



Intent verification asks:



```text

Does Execution Match Intent?

```



Possible outcomes:



```text

MATCH



MISMATCH

```



\---



\# Why Intent Matters



Without intent:



```text

Decision Exists



Execution Exists



Trust Gap Exists

```



With intent:



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Execution

```



becomes verifiable.



\---



\# Relationship To Human Authority



Humans authorize:



```text

Intent

```



not:



```text

Raw Execution

```



Intent becomes the machine-readable representation of human authorization.



\---



\# Relationship To AI Systems



AI systems generate:



```text

Proposed Intent

```



Parmana verifies whether:



```text

Human Authority

\+

Organizational Policy

```



permit that intent.



\---



\# Canonical AI Model



```text

AI

&#x20;↓

Intent

&#x20;↓

Parmana

&#x20;↓

Verification

&#x20;↓

Execution

```



Intent remains the control point.



\---



\# Questions Intent Answers



```text

What Was Supposed To Happen?



Which Action Was Authorized?



Which Parameters Were Approved?



Which Constraints Applied?



What Did Humans Authorize?

```



\---



\# Questions Intent Does Not Answer



```text

Was The Intent Approved?



Was The Attestation Signed?



Was Verification Successful?



Did Execution Occur?

```



Those belong to other artifacts.



\---



\# Intent Lifecycle



```text

Decision

&#x20;   ↓

Intent Created

&#x20;   ↓

Intent Hashed

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



\---



\# Canonical Outcome



Intent is the authoritative representation of what was authorized to happen.



It bridges the trust gap between decision and execution and enables organizations to prove not only that something was approved, but exactly what was supposed to happen.



Intent is the foundation of execution trust.



