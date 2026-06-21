\# External Verification Model



\## Purpose



The External Verification Model defines how systems outside Parmana independently verify execution authorization artifacts before performing sensitive actions.



The objective is:



```text

Trust The Authorization

Without Trusting The Runtime

```



External systems should not need:



```text

Parmana Database Access

Parmana Internal APIs

Parmana Internal State

```



to determine whether execution is authorized.



\---



\# Problem Statement



An execution system receives:



```text

Execution Trust Token

```



and must answer:



```text

Was this execution authorized?

```



without relying on Parmana availability.



Verification must be:



```text

Portable

Independent

Deterministic

Cryptographic

```



\---



\# Architectural Position



```text

Parmana

&#x20;   │

&#x20;   ▼

Execution Trust Token

&#x20;   │

&#x20;   ▼

External Verifier

&#x20;   │

&#x20;   ▼

Execution System

```



The verifier becomes the trust boundary.



\---



\# Verification Inputs



External verification requires only:



```text

Execution Token

Public Key

```



No additional Parmana dependencies are required.



\---



\# Verification Pipeline



\## Step 1



Receive token.



```text

Execution Token

```



\---



\## Step 2



Validate expiration.



```text

now < expiresAt

```



Required.



\---



\## Step 3



Reconstruct signed payload.



```text

businessTransactionId

decisionId

receiptId

taskId

policyId

policyVersion

issuedAt

expiresAt

```



\---



\## Step 4



Verify signature.



```typescript

verifyPayload(

&#x20; payload,

&#x20; token.signature

)

```



\---



\## Step 5



Produce decision.



```text

Valid Signature

&#x20;      +

Not Expired

&#x20;      ↓

Authorized

```



or



```text

Invalid Signature

&#x20;      ↓

Rejected

```



\---



\# Reference Verification Flow



```text

Execution Token

&#x20;      │

&#x20;      ▼

Expiration Check

&#x20;      │

&#x20;      ▼

Payload Reconstruction

&#x20;      │

&#x20;      ▼

Signature Verification

&#x20;      │

&#x20;      ▼

Authorization Decision

```



\---



\# Example Payment Flow



```text

AI Agent

&#x20;   │

&#x20;   ▼

Request Payment

&#x20;   │

&#x20;   ▼

Parmana

&#x20;   │

&#x20;   ▼

Execution Trust Token

&#x20;   │

&#x20;   ▼

Stripe Adapter

&#x20;   │

&#x20;   ▼

Verify Signature

&#x20;   │

&#x20;   ▼

Create Payment

```



The Stripe adapter does not need to call Parmana.



\---



\# Example Verifier



```typescript

const payload =

&#x20; JSON.stringify({



&#x20;   businessTransactionId:

&#x20;     token.businessTransactionId,



&#x20;   decisionId:

&#x20;     token.decisionId,



&#x20;   receiptId:

&#x20;     token.receiptId,



&#x20;   taskId:

&#x20;     token.taskId,



&#x20;   policyId:

&#x20;     token.policyId,



&#x20;   policyVersion:

&#x20;     token.policyVersion,



&#x20;   issuedAt:

&#x20;     token.issuedAt,



&#x20;   expiresAt:

&#x20;     token.expiresAt



&#x20; });



const valid =

&#x20; verifyPayload(

&#x20;   payload,

&#x20;   token.signature

&#x20; );

```



\---



\# Authorization Outcomes



\## Authorized



Requirements:



```text

Signature Valid

Token Not Expired

Trusted Public Key

```



Result:



```text

Execution Permitted

```



\---



\## Rejected



Examples:



```text

Signature Invalid

Token Expired

Unknown Key

Malformed Token

```



Result:



```text

Execution Denied

```



\---



\# Trust Boundary



The execution system trusts:



```text

Public Key

```



not:



```text

Parmana Server

Parmana Database

Parmana Availability

```



Trust originates from cryptographic verification.



\---



\# Benefits



\## Offline Verification



Verification works during:



```text

Network Failures

API Outages

Database Outages

```



\---



\## Independent Auditability



Auditors can independently verify:



```text

Authorization

Integrity

Authenticity

```



without Parmana access.



\---



\## Cross-Organization Trust



Organizations can verify:



```text

Parmana Authorization

```



without sharing infrastructure.



\---



\# Future Evolution



\## External Verification v1



```text

Single Public Key

Single Trust Anchor

Single Verification Path

```



\---



\## External Verification v2



```text

Multiple Active Keys

Root Rotation

Historical Verification

```



\---



\## External Verification v3



```text

Trust Federation

Cross-Organization Verification

Delegated Trust Anchors

```



\---



\# Invariants



\## INV-600



```text

Execution authorization must be independently verifiable.

```



\## INV-601



```text

Verification must not require Parmana runtime access.

```



\## INV-602



```text

Authorization decisions must be reproducible.

```



\## INV-603



```text

Signature verification must be deterministic.

```



\## INV-604



```text

Expired tokens must not authorize execution.

```



\---



\# Canonical Statement



External Verification allows execution systems to independently verify that Parmana authorized an action before execution, using only a trusted public key and the execution authorization artifact.



