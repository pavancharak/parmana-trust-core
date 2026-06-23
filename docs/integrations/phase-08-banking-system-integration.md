\# Integration Phase 08 — Banking System Integration



\## Objective



Explain how Parmana integrates with banking systems, payment platforms, treasury operations, and financial workflows to ensure that executed financial transactions match authorized intent.



This is one of the highest-value deployment models for Parmana because financial execution requires strong evidence, accountability, and trust.



\---



\# Core Principle



Banking systems execute transactions.



Parmana verifies authority before execution occurs.



\---



\# Canonical Positioning



Traditional banking systems answer:



```text id="wwb0he"

Was The Transaction Processed?

```



Parmana answers:



```text id="hv8mxj"

Was The Transaction Authorized?



Which Policy Allowed It?



What Exactly Was Intended?



Did Execution Match Intent?

```



\---



\# Why Banking Integration Exists



Banks process:



```text id="w46bwl"

Wire Transfers



ACH Payments



Treasury Operations



Vendor Payments



Customer Disbursements



Loan Operations



Settlement Activities

```



Most banking systems record:



```text id="7myn2w"

Who Submitted



Who Approved



When Executed

```



But often cannot independently prove:



```text id="34zyql"

What Was Authorized



Which Policy Was Evaluated



Which Signals Were Trusted



Whether Execution Matched Authorization

```



Parmana fills that gap.



\---



\# Canonical Banking Trust Model



```text id="4b4n3m"

Payment Request

&#x20;       ↓

Decision

&#x20;       ↓

Execution Intent

&#x20;       ↓

Parmana

&#x20;       ↓

Verification

&#x20;       ↓

Bank Execution

```



\---



\# Traditional Banking Flow



```text id="ttg2gr"

Request

&#x20;   ↓

Approval

&#x20;   ↓

Payment

```



\---



\# Parmana Banking Flow



```text id="2zj0m4"

Request

&#x20;   ↓

Approval

&#x20;   ↓

Intent

&#x20;   ↓

Parmana

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution Token

&#x20;   ↓

Payment

```



\---



\# Canonical Principle



```text id="f8cmjj"

Decisions Authorize Intent.



Intent Authorizes Execution.

```



\---



\# Example — Vendor Payment



Request:



```json id="d2oy5z"

{

&#x20; "vendorId": "V-100",



&#x20; "amount": 50000,



&#x20; "currency": "USD"

}

```



\---



\# Execution Intent



Generated intent:



```json id="gngx5n"

{

&#x20; "action": "release-payment",



&#x20; "vendorId": "V-100",



&#x20; "amount": 50000,



&#x20; "currency": "USD"

}

```



\---



\# Parmana Evaluation



Inputs:



```text id="zefb55"

Subject



Task



Policy



Signals



Execution Intent

```



Outputs:



```text id="rm2ziz"

Decision



Intent Evidence



Attestation

```



\---



\# Trusted Banking Signals



Examples:



```json id="8m7c9y"

{

&#x20; "managerApproved": true,



&#x20; "fraudScore": 0.01,



&#x20; "availableBalance": 250000,



&#x20; "dualApproval": true

}

```



Organizations decide which signals are trusted.



Parmana evaluates them against policy.



\---



\# Canonical Signal Principle



```text id="v8o9wz"

Organizations Decide What To Trust.



Parmana Ensures Trusted Signals

Satisfy Policy Before Execution.

```



\---



\# Wire Transfer Example



Traditional flow:



```text id="lpfb6i"

Approval

&#x20;     ↓

Wire Sent

```



Parmana flow:



```text id="m1p55l"

Approval

&#x20;     ↓

Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Verification

&#x20;     ↓

Execution Authorization

&#x20;     ↓

Wire Sent

```



\---



\# Wire Intent Example



```json id="p96d8z"

{

&#x20; "action": "wire-transfer",



&#x20; "amount": 100000,



&#x20; "recipientBank": "BANK-ABC",



&#x20; "account": "XXXX1234"

}

```



Parmana verifies:



```text id="55cdyl"

Transfer Policy



Approval Requirements



Risk Controls



Treasury Rules

```



before execution.



\---



\# ACH Processing Example



Workflow:



```text id="r6t8q6"

ACH Request

&#x20;     ↓

Approval

&#x20;     ↓

Parmana

&#x20;     ↓

ACH Submission

```



Trust evidence exists before funds move.



\---



\# Treasury Operations Example



Action:



```text id="nvc4lm"

Move Funds Between Accounts

```



Intent:



```json id="e6x5iv"

{

&#x20; "action": "treasury-transfer",



&#x20; "fromAccount": "A1",



&#x20; "toAccount": "A2",



&#x20; "amount": 1000000

}

```



Parmana verifies:



```text id="8u4i54"

Treasury Policy



Authority Limits



Approval Rules

```



before execution.



\---



\# Dual Approval Controls



Common banking requirement:



```text id="vqzj0k"

Four-Eyes Principle

```



Example:



```json id="jyk4xp"

{

&#x20; "approverOne": true,



&#x20; "approverTwo": true

}

```



Parmana verifies:



```text id="jlwmam"

Both Approvals Exist

```



before execution authorization.



\---



\# Fraud Controls



Fraud systems produce:



```json id="h4fg92"

{

&#x20; "fraudScore": 0.03

}

```



Fraud systems are not authority.



Fraud systems provide:



```text id="l1m3d5"

Trusted Signals

```



used in policy evaluation.



\---



\# AML Controls



Signals:



```json id="ydbw6k"

{

&#x20; "amlPassed": true,



&#x20; "sanctionsPassed": true

}

```



Parmana evaluates:



```text id="zdc1hm"

AML Policy



Sanctions Policy



Payment Policy

```



before execution.



\---



\# Banking AI Integration



Example:



```text id="6r8m0e"

Payment Recommendation Agent

```



Agent produces:



```text id="e2xg4j"

Suggested Payment

```



Parmana treats this as:



```text id="5v3ytr"

Execution Intent

```



not:



```text id="0x4szn"

Authority

```



\---



\# Canonical AI Principle



```text id="pl0kkf"

AI Generates Intent.



Humans Define Authority.



Parmana Verifies Authority.

```



\---



\# Core Banking Integration



Applicable systems:



```text id="zj3f2j"

Temenos



Finacle



FIS



Fiserv



Mambu



Thought Machine



Custom Core Banking Platforms

```



Integration pattern:



```text id="o9cn6r"

Core Banking

&#x20;       ↓

Parmana

&#x20;       ↓

Execution Authorization

```



\---



\# Payment Gateway Integration



Applicable systems:



```text id="ib2qve"

Stripe



Adyen



Worldpay



Checkout.com



Custom Payment Rails

```



Pattern:



```text id="9cnn7q"

Payment Intent

&#x20;      ↓

Parmana

&#x20;      ↓

Execution Token

&#x20;      ↓

Gateway Execution

```



\---



\# Treasury Platform Integration



Applicable systems:



```text id="3v4mh2"

Kyriba



GTreasury



ION



Custom Treasury Platforms

```



Parmana verifies execution authority before fund movement.



\---



\# SWIFT Integration



Example:



```text id="nfhv2q"

MT103

```



Generation flow:



```text id="4ij4e4"

Payment Intent

&#x20;      ↓

Parmana

&#x20;      ↓

Verification

&#x20;      ↓

SWIFT Message

```



Trust evidence precedes message generation.



\---



\# Banking Event Flow



```text id="9dxsul"

Payment Requested

&#x20;        ↓

Attested

&#x20;        ↓

Verified

&#x20;        ↓

Authorized

&#x20;        ↓

Executed

```



Every stage becomes traceable.



\---



\# Execution Token Pattern



Parmana generates:



```text id="45q6tw"

Execution Token

```



Banking platform validates:



```text id="29eqs7"

Authorization Exists

```



before execution proceeds.



\---



\# Execution Recording



Actual execution captured:



```json id="2d8zh2"

{

&#x20; "executionId": "...",



&#x20; "transactionReference": "...",



&#x20; "executedAt": "..."

}

```



Purpose:



```text id="hzh7j6"

Execution Evidence

```



\---



\# Trust Chain Reconstruction



Recommended identifier:



```text id="g29a2x"

businessTransactionId

```



Examples:



```text id="r3rxgu"

Payment ID



Wire ID



ACH ID



Treasury Transfer ID

```



Trust chain retrieval:



```http id="smdr2w"

GET /trust-chain/{businessTransactionId}

```



\---



\# Questions Parmana Answers



```text id="d9w1xq"

Who Authorized The Transfer?



Which Policy Was Applied?



Which Signals Were Trusted?



What Was Intended?



What Was Executed?



Did Execution Match Intent?

```



\---



\# Audit Benefits



Traditional banking systems provide:



```text id="cglg7k"

Approval Logs



Transaction Logs



Settlement Records

```



Parmana adds:



```text id="mkw6nf"

Decision Evidence



Intent Evidence



Verification Evidence



Execution Evidence

```



Together they create:



```text id="4yj6m1"

Authorization-To-Execution Traceability

```



\---



\# Regulatory Relevance



Supports evidence generation for:



```text id="18d5yx"

Internal Controls



Operational Risk



Audit Reviews



Treasury Governance



Payment Governance

```



Parmana is not a compliance system.



Parmana provides verifiable trust evidence that compliance processes can consume.



\---



\# What Banking Systems Own



```text id="2l3p0o"

Accounts



Balances



Settlement



Payment Processing



Transaction Execution

```



\---



\# What Parmana Owns



```text id="b4mdm0"

Authority Verification



Intent Verification



Execution Authorization



Trust Evidence



Trust Chains

```



\---



\# Canonical Outcome



Banking systems continue executing financial transactions.



Organizations define authority, policy, and trusted signals.



Parmana verifies that financial execution is consistent with authorized intent and preserves cryptographically verifiable evidence linking decision, intent, verification, and execution.



