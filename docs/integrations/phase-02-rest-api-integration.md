\# Integration Phase 02 — REST API Integration



\## Objective



Explain how external applications integrate with Parmana through APIs.



This is the most common integration model.



\---



\# Core Principle



Applications remain responsible for:



```text

Business Logic

User Experience

Data Management

Execution

```



Parmana provides:



```text

Authorization Evidence

Verification

Execution Trust

```



\---



\# Canonical API Flow



```text

Application

&#x20;    ↓

Parmana API

&#x20;    ↓

Trust Artifacts

&#x20;    ↓

Application

```



\---



\# Integration Lifecycle



```text

Evaluate

&#x20;   ↓

Attest

&#x20;   ↓

Verify

&#x20;   ↓

Token

&#x20;   ↓

Execute

&#x20;   ↓

Trust Chain

```



\---



\# Step 1 — Evaluate



Purpose:



```text

Determine Whether Action Is Authorized

```



Endpoint:



```http

POST /evaluate

```



Request:



```json

{

&#x20; "task": "payment-release",



&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



Response:



```json

{

&#x20; "decision": {

&#x20;   "action": "approve"

&#x20; }

}

```



\---



\# Step 2 — Attest



Purpose:



```text

Create Authorization Evidence

```



Endpoint:



```http

POST /attest

```



Request:



```json

{

&#x20; "task": "payment-release",



&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



Response:



```json

{

&#x20; "decisionId": "...",



&#x20; "policyId": "payment-release",



&#x20; "signatures": {

&#x20;   "signatures": \[

&#x20;     {

&#x20;       "keyId": "parmana-root-key"

&#x20;     }

&#x20;   ]

&#x20; }

}

```



\---



\# Step 3 — Verify



Purpose:



```text

Verify Attestation Authenticity

```



Endpoint:



```http

POST /verify

```



Response:



```json

{

&#x20; "valid": true

}

```



\---



\# Step 4 — Create Execution Token



Purpose:



```text

Authorize Execution

```



Endpoint:



```http

POST /token

```



Response:



```json

{

&#x20; "token": "..."

}

```



\---



\# Step 5 — Record Execution



Purpose:



```text

Capture Actual Execution

```



Endpoint:



```http

POST /execute

```



Response:



```json

{

&#x20; "executionId": "..."

}

```



\---



\# Step 6 — Retrieve Trust Chain



Purpose:



```text

Retrieve Authorization-To-Execution Evidence

```



Endpoint:



```http

GET /trust-chain/{businessTransactionId}

```



Response:



```json

{

&#x20; "businessTransactionId": "...",



&#x20; "attestationId": "...",



&#x20; "verificationId": "...",



&#x20; "executionId": "..."

}

```



\---



\# Complete API Sequence



```text

Client

&#x20;  ↓

POST /evaluate

&#x20;  ↓

POST /attest

&#x20;  ↓

POST /verify

&#x20;  ↓

POST /token

&#x20;  ↓

POST /execute

&#x20;  ↓

GET /trust-chain

```



\---



\# Trust Foundation APIs



Retrieve trust anchor:



```http

GET /trust-anchor/public-key

```



Retrieve trust root:



```http

GET /trust-root/current

```



Purpose:



```text

Independent Verification

```



\---



\# Example Architecture



```text

Web App

&#x20;  ↓

Parmana API

&#x20;  ↓

Banking Platform

```



Flow:



```text

User Request

&#x20;     ↓

Parmana Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution

&#x20;     ↓

Trust Chain

```



\---



\# Error Handling



Applications should handle:



```text

400 Invalid Request



404 Resource Not Found



500 Internal Error

```



and treat:



```text

Verification Failure

```



as:



```text

Execution Block Condition

```



\---



\# Security Model



Applications never receive:



```text

Private Keys

```



Applications may retrieve:



```text

Public Keys

Trust Anchors

Trust Roots

```



for independent verification.



\---



\# Canonical Outcome



REST API integration allows existing applications to consume Parmana without architectural changes.



Applications continue performing business operations.



Parmana provides verifiable authorization-to-execution trust evidence.



