\# Execution Record Reference



\## Purpose



The Execution Record is the artifact that captures what actually happened.



It is the execution-side counterpart to Intent.



Intent answers:



```text id="d4k1m9"

What Was Supposed To Happen?

```



Execution Records answer:



```text id="p7v2r5"

What Actually Happened?

```



Together they establish execution trust.



\---



\# Canonical Principle



Intent defines authorized execution.



Execution Records capture actual execution.



Execution Trust exists when execution matches intent.



\---



\# Position In Trust Chain



```text id="f8m3q2"

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

Execution Record

```



Execution Records are the final operational artifact in the trust chain.



\---



\# Why Execution Records Exist



Most systems store:



```text id="j1n7x4"

Application Logs



Audit Logs



Transaction Logs

```



These often answer:



```text id="u3p8z6"

What Happened?

```



but cannot always prove:



```text id="w6r4m2"

Was It Authorized?



Did It Match Intent?



Did It Match Policy?

```



Execution Records provide that linkage.



\---



\# Canonical Trust Question



Execution Records answer:



```text id="t9v1q7"

What Actually Happened?

```



\---



\# Definition



An Execution Record is an immutable artifact describing the actual execution of an authorized intent.



It captures:



```text id="m2x8k5"

Execution Outcome



Execution Metadata



Execution Context



Execution References

```



\---



\# Responsibilities



Execution Records prove:



```text id="q5r9w1"

Execution Occurred



Execution Was Attempted



Execution Produced An Outcome



Execution Can Be Compared To Intent

```



\---



\# Execution Record Is Not Intent



Intent describes:



```text id="z4m6n8"

Authorized Execution

```



Execution Records describe:



```text id="s8q2v5"

Actual Execution

```



\---



\# Execution Record Is Not Authorization



Authorization determines:



```text id="r1k5x9"

May Execution Proceed?

```



Execution Records determine:



```text id="n7v3m4"

What Happened After Authorization?

```



\---



\# Canonical Structure



Example:



```json id="a6q8w3"

{

&#x20; "executionId":

&#x20;   "EX-001",



&#x20; "executionTokenId":

&#x20;   "ET-001",



&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df",



&#x20; "businessTransactionId":

&#x20;   "TX-1001",



&#x20; "status":

&#x20;   "SUCCESS",



&#x20; "executedAt":

&#x20;   "2026-06-23T02:30:00Z"

}

```



\---



\# Execution Identity



Every execution record must be uniquely identifiable.



Example:



```json id="v5r2m8"

{

&#x20; "executionId":

&#x20;   "EX-001"

}

```



Purpose:



```text id="y1n6q4"

Execution Traceability

```



\---



\# Business Transaction Reference



Example:



```json id="j9m3x7"

{

&#x20; "businessTransactionId":

&#x20;   "TX-1001"

}

```



Purpose:



```text id="c8q5w2"

Cross-System Correlation

```



\---



\# Execution Token Reference



Example:



```json id="b2v7r1"

{

&#x20; "executionTokenId":

&#x20;   "ET-001"

}

```



Purpose:



```text id="h4n8m5"

Link Execution

To Authorization

```



\---



\# Decision Reference



Example:



```json id="x6m1q3"

{

&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df"

}

```



Purpose:



```text id="r9w2k7"

Link Execution

To Original Decision

```



\---



\# Execution Status



Canonical values:



```text id="p3m8x1"

SUCCESS



FAILED



PARTIAL



CANCELLED

```



\---



\# SUCCESS



Meaning:



```text id="v7q4r2"

Execution Completed

```



Expected outcome achieved.



\---



\# FAILED



Meaning:



```text id="m8n2w5"

Execution Attempted



Execution Unsuccessful

```



\---



\# PARTIAL



Meaning:



```text id="s5x9q1"

Execution Began



Execution Partially Completed

```



\---



\# CANCELLED



Meaning:



```text id="n4v7m3"

Execution Did Not Complete

```



\---



\# Execution Timestamp



Example:



```json id="r6k2x8"

{

&#x20; "executedAt":

&#x20;   "2026-06-23T02:30:00Z"

}

```



Purpose:



```text id="q1m9w4"

Execution Timing Evidence

```



\---



\# Execution Outcome



Example:



```json id="w8n3v6"

{

&#x20; "outcome": {

&#x20;   "transactionReference":

&#x20;     "WIRE-12345",



&#x20;   "amount":

&#x20;     50000

&#x20; }

}

```



Purpose:



```text id="t4r7q2"

Capture Execution Results

```



\---



\# Payment Example



Intent:



```json id="m3q8v1"

{

&#x20; "action": "release-payment",



&#x20; "amount": 50000

}

```



Execution:



```json id="k7x2m5"

{

&#x20; "transactionReference":

&#x20;   "PAY-1001",



&#x20; "amount":

&#x20;   50000

}

```



Comparison:



```text id="j5v9r3"

MATCH

```



\---



\# Intent Match Verification



Core question:



```text id="n8q4w7"

Did Execution Match Intent?

```



\---



\# Matching Example



Intent:



```json id="h2m6x1"

{

&#x20; "amount": 50000

}

```



Execution:



```json id="y7q3v8"

{

&#x20; "amount": 50000

}

```



Result:



```text id="r4n8m2"

MATCH

```



\---



\# Mismatch Example



Intent:



```json id="t6x1q5"

{

&#x20; "amount": 50000

}

```



Execution:



```json id="w3m7v9"

{

&#x20; "amount": 75000

}

```



Result:



```text id="s9q2r6"

MISMATCH

```



\---



\# Intent Drift



Intent Drift occurs when:



```text id="m1w8x4"

Authorized Intent

```



does not equal:



```text id="q7r3v5"

Actual Execution

```



This is one of the most important concepts in the Parmana trust model.



\---



\# Canonical Trust Question



Execution Trust asks:



```text id="v2m9q1"

Did Execution Match Authorized Intent?

```



\---



\# Execution Metadata



Optional metadata:



```json id="x5n7w3"

{

&#x20; "executor":

&#x20;   "payments-service",



&#x20; "environment":

&#x20;   "production"

}

```



Purpose:



```text id="r8q4m6"

Execution Context

```



\---



\# External References



Example:



```json id="k3v9x2"

{

&#x20; "externalReference":

&#x20;   "SWIFT-MT103-12345"

}

```



Purpose:



```text id="n6m2q8"

Cross-System Correlation

```



\---



\# AI Agent Example



Intent:



```json id="j4q8w6"

{

&#x20; "action":

&#x20;   "issue-refund",



&#x20; "amount":

&#x20;   100

}

```



Execution:



```json id="m7v1x5"

{

&#x20; "refundAmount":

&#x20;   100

}

```



Execution Trust:



```text id="t8q3m7"

MATCH

```



\---



\# Banking Example



Intent:



```json id="v9w2r4"

{

&#x20; "action":

&#x20;   "wire-transfer",



&#x20; "amount":

&#x20;   100000

}

```



Execution:



```json id="q2m7x8"

{

&#x20; "wireAmount":

&#x20;   100000

}

```



Trust preserved.



\---



\# Workflow Example



Intent:



```json id="w6q1m4"

{

&#x20; "action":

&#x20;   "grant-access",



&#x20; "role":

&#x20;   "finance-admin"

}

```



Execution:



```json id="n3v8r5"

{

&#x20; "grantedRole":

&#x20;   "finance-admin"

}

```



Trust preserved.



\---



\# Relationship To Intent



Intent defines:



```text id="j7q2m9"

Expected State

```



Execution Records capture:



```text id="v5n8r1"

Observed State

```



Execution Trust compares the two.



\---



\# Relationship To Execution Tokens



Execution Tokens authorize:



```text id="k1m7q4"

Execution

```



Execution Records document:



```text id="r8v2n5"

Execution Outcome

```



\---



\# Relationship To Trust Chains



Execution Records complete:



```text id="m9q3v6"

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution

```



\---



\# Relationship To Trust Roots



Execution Records may contribute to:



```text id="t5n1q8"

Published Trust State

```



through trust root generation.



\---



\# Security Properties



Execution Records provide:



```text id="x4v7m2"

Traceability



Auditability



Outcome Preservation



Execution Evidence

```



\---



\# Execution Record Immutability



After recording:



```text id="q6n8r3"

Execution Records Must Not Change

```



Reason:



```text id="m2v5q9"

Execution Evidence

Must Remain Stable

```



\---



\# Questions Execution Records Answer



```text id="w7m3q1"

Did Execution Occur?



What Happened?



When Did It Happen?



Which System Executed?



What Outcome Was Produced?



Did Execution Match Intent?

```



\---



\# Questions Execution Records Do Not Answer



```text id="r1v8m4"

Was Authorization Valid?



Was Verification Successful?



Was Policy Correct?

```



Those belong to earlier trust artifacts.



\---



\# Execution Record Lifecycle



```text id="n5q2v7"

Execution Token

&#x20;     ↓

Execution

&#x20;     ↓

Execution Record

&#x20;     ↓

Intent Comparison

```



\---



\# Future API Example



Record execution:



```http id="p8m4q6"

POST /execute

```



Response:



```json id="v2r7n1"

{

&#x20; "executionId":

&#x20;   "EX-001"

}

```



Retrieve:



```http id="x9q3m5"

GET /executions/{executionId}

```



\---



\# Canonical Outcome



An Execution Record is the authoritative record of what actually happened.



It captures the outcome of execution, links that outcome to authorization evidence, and enables comparison between authorized intent and actual execution.



Execution Records complete the authorization-to-execution journey and provide the final evidence required for execution trust.



