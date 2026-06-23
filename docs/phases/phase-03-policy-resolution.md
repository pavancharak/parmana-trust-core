\# Phase 03 — Policy Resolution



\## Objective



Resolve the policy that governs a requested task.



Policy resolution determines:



```text

Which rules apply?

Which version applies?

Which signals must be evaluated?

```



Before Parmana can make a decision, it must resolve the governing policy.



\---



\# Why Policy Resolution Exists



A task defines:



```text

What is being requested?

```



A policy defines:



```text

What conditions must be satisfied?

```



Example:



```text

Task:

payment.release

```



may resolve to:



```text

Policy:

payment-release

Version:

1.0.0

```



\---



\# Input



Task Definition:



```text

tasks/payment-release/task.json

```



Example:



```json

{

&#x20; "taskId": "payment.release",

&#x20; "name": "Release Payment",



&#x20; "policy": {

&#x20;   "policyId": "payment-release",

&#x20;   "policyVersion": "1.0.0"

&#x20; }

}

```



\---



\# Policy Resolution Flow



```text

Task Request

&#x20;     ↓

Load task.json

&#x20;     ↓

Read policyId

&#x20;     ↓

Read policyVersion

&#x20;     ↓

Resolve Policy

&#x20;     ↓

Provide Policy To Evaluator

```



\---



\# Current Policy Reference



From task:



```json

{

&#x20; "policyId": "payment-release",

&#x20; "policyVersion": "1.0.0"

}

```



Resolved output:



```text

Policy ID:

payment-release



Policy Version:

1.0.0

```



\---



\# Primary Implementation



Evaluation entry point:



```text

packages/verifier/src/evaluate-task.ts

```



Task loading:



```text

packages/bundle/src/load-task.ts

```



Task resolution:



```text

packages/bundle/src/resolve-task.ts

```



Policy resolution occurs after successful task loading.



\---



\# Why Version Matters



Policies change over time.



Example:



```text

payment-release v1.0.0

```



might require:



```text

Role = finance-manager

```



while:



```text

payment-release v2.0.0

```



might require:



```text

Role = finance-manager

AND

Dual Approval

```



Versioning ensures historical decisions remain reproducible.



\---



\# Deterministic Evaluation



Parmana does not evaluate against:



```text

Latest Policy

```



Parmana evaluates against:



```text

Specific Policy Version

```



Example:



```text

payment-release

1.0.0

```



This supports:



```text

Audit

Replay

Verification

Compliance

```



\---



\# Policy Resolution Output



Successful resolution produces:



```text

Task ID

Policy ID

Policy Version

```



Example:



```json

{

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-release",

&#x20; "policyVersion": "1.0.0"

}

```



This information is passed into evaluation.



\---



\# Downstream Dependencies



Policy resolution enables:



```text

Policy

&#x20;   ↓

Signal Evaluation

&#x20;   ↓

Decision

&#x20;   ↓

Attestation

```



Without policy resolution:



```text

No Evaluation

No Decision

No Attestation

```



\---



\# Failure Conditions



\## Missing Policy ID



Example:



```json

{

&#x20; "taskId": "payment.release"

}

```



Result:



```text

Policy cannot be resolved.

```



\---



\## Missing Policy Version



Example:



```json

{

&#x20; "policyId": "payment-release"

}

```



Result:



```text

Evaluation becomes non-deterministic.

```



Not permitted.



\---



\## Invalid Policy Reference



Example:



```text

payment-release

version 99.0.0

```



Result:



```text

Policy resolution failure.

```



\---



\# Validation Checklist



Verify task definition:



```powershell

type tasks\\payment-release\\task.json

```



Verify policy fields:



```text

policyId

policyVersion

```



Verify evaluation succeeds:



```powershell

POST /attest

```



Expected:



```text

Decision Created

```



\---



\# Canonical Dependency Chain



```text

Task

&#x20;  ↓

Policy ID

&#x20;  ↓

Policy Version

&#x20;  ↓

Policy Resolution

&#x20;  ↓

Evaluation

```



\---



\# Phase Completion Criteria



Phase 03 is complete when:



```text

✓ policyId resolves

✓ policyVersion resolves

✓ evaluation receives policy information

✓ policy version is immutable

✓ evaluation is deterministic

```



\---



\# Output of Phase 03



```text

Business Task Successfully Bound To An Immutable Policy Version

```



