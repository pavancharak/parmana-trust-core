\# Trust Chain Model



\## Overview



Parmana establishes a verifiable trust chain between authorization and execution.



Traditional systems often record approvals, decisions, and execution events independently.



As a result, organizations can struggle to determine:



```text

What was authorized?



What was intended?



What executed?



Did execution remain within approved boundaries?

```



Parmana addresses this problem by creating a cryptographically verifiable chain of trust connecting every stage of execution.



\---



\## Core Principle



Parmana is built around a simple trust model:



```text

Authorization → Intent → Execution

```



Authority defines what is allowed.



Intent defines what is supposed to happen.



Execution produces observable outcomes.



Parmana makes execution verifiable.



\---



\## Canonical Trust Chain



The complete Parmana trust chain is:



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Policy

&#x20;  ↓

Authority Decision

&#x20;  ↓

Intent

&#x20;  ↓

Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution

&#x20;  ↓

Execution Record

&#x20;  ↓

Evidence

```



Each artifact contributes independently verifiable trust.



\---



\## Trust Chain Components



\### Subject



The actor requesting execution.



Examples:



```text

User

Agent

Application

Service

```



Identifier:



```text

subjectId

```



\---



\### Task



The operation being requested.



Examples:



```text

payment.release



refund.issue



account.create

```



Identifier:



```text

taskId

```



\---



\### Policy



Defines authorization rules.



Example:



```text

Manager approval required



KYC verification required

```



Identifiers:



```text

policyId



policyVersion

```



\---



\### Authority Decision



Evaluates policy against evidence and signals.



Produces:



```text

approved



rejected

```



Identifier:



```text

decisionId

```



Purpose:



```text

Determine whether execution is allowed.

```



\---



\### Intent



Captures the exact execution that is authorized.



Example:



```json

{

&#x20; "amount": 1000,

&#x20; "currency": "INR",

&#x20; "recipient": "merchant-123"

}

```



Identifiers:



```text

intentId



intentHash

```



Purpose:



```text

Define what execution is supposed to happen.

```



\---



\### Attestation



Creates cryptographic evidence of authorization.



Attestations bind:



```text

Decision

Intent

Policy

Task

```



Identifier:



```text

attestationId

```



Purpose:



```text

Provide signed authorization evidence.

```



\---



\### Verification Receipt



Verifies attestation validity.



Verification confirms:



```text

Signature validity



Policy validity



Trust integrity

```



Identifier:



```text

receiptId

```



Purpose:



```text

Create independent verification evidence.

```



\---



\### Execution Trust Token



Transforms verified authorization into executable authorization.



Token binds:



```text

Decision



Intent



Receipt



Policy

```



Identifier:



```text

tokenId

```



Purpose:



```text

Authorize execution.

```



\---



\### Execution



The actual action performed by an external system.



Examples:



```text

Stripe Payment



Bank Transfer



CRM Update



Database Write

```



Purpose:



```text

Perform real-world actions.

```



\---



\### Execution Record



Creates durable evidence of execution.



Identifier:



```text

executionId

```



Purpose:



```text

Record what actually executed.

```



\---



\### Evidence



Final trust artifacts preserved for audit and verification.



Stored through:



```text

audit-db



transparency-log



provenance

```



Purpose:



```text

Enable auditability and replayability.

```



\---



\## Lineage Model



Trust artifacts preserve lineage identifiers.



```text

subjectId



taskId



policyId



policyVersion



decisionId



intentId



receiptId



executionId

```



Lineage creates a continuous chain connecting authorization to execution.



\---



\## Verification Flow



Execution authorization follows a strict sequence.



```text

Evaluate Authority

&#x20;       ↓

Create Intent

&#x20;       ↓

Generate Attestation

&#x20;       ↓

Verify Attestation

&#x20;       ↓

Create Receipt

&#x20;       ↓

Generate Execution Token

&#x20;       ↓

Authorize Execution

&#x20;       ↓

Record Execution

```



Each stage depends on successful completion of the previous stage.



\---



\## Intent-Bound Execution



Execution authorization is constrained by Intent.



Parmana enforces:



```text

SHA256(executionPayload)

&#x20;         ==

&#x20;     intentHash

```



If hashes match:



```text

Execution Allowed

```



If hashes differ:



```text

Execution Denied

```



This enforcement is formalized through:



```text

INV-200

Execution Must Match Authorized Intent

```



\---



\## Independent Verification



Every trust artifact can be independently verified.



Verification targets include:



```text

Attestations



Verification Receipts



Execution Tokens



Execution Records



Trust Roots

```



Future releases extend verification beyond Parmana infrastructure.



Planned capabilities:



```text

Public Key Publication



External Verification



Key Rotation



Historical Verification



Trust Federation

```



\---



\## Architectural Guarantees



The trust chain provides:



```text

Authorization Traceability



Intent Traceability



Execution Traceability



Cryptographic Verification



Replayability



Auditability



Independent Verification

```



\---



\## Trust Gap Closure



Traditional systems typically prove:



```text

Who approved?



When approved?

```



Parmana additionally proves:



```text

What was authorized?



What was intended?



What executed?



Did execution match intent?

```



This closes the trust gap between approval and execution.



\---



\## Canonical Principle



```text

Authority defines what is allowed.



Intent defines what is supposed to happen.



Parmana makes execution verifiable.

```



```text

Authorization → Intent → Execution

```



Parmana establishes a verifiable trust chain between authority and execution.



