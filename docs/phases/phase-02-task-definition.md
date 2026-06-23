\# Phase 02 — Task Definition



\## Objective



Define the business task that Parmana will evaluate.



A task is the entry point into the authorization process.



Before Parmana can:



\* Evaluate

\* Attest

\* Verify

\* Execute



it must first resolve a task definition.



\---



\# Purpose of a Task



A task answers:



```text

What action is being requested?

Which policy governs that action?

```



Examples:



```text

payment.release

payment.approve

account.close

funds.transfer

```



\---



\# Repository Location



Task definitions are stored in:



```text

tasks/

```



Example:



```text

D:\\last\\parmana-trust-core\\tasks\\payment-release\\task.json

```



\---



\# Example Task



File:



```text

tasks/payment-release/task.json

```



Contents:



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



\# Task Components



\## taskId



Unique business identifier.



Example:



```text

payment.release

```



Used throughout the trust chain.



\---



\## name



Human-readable task description.



Example:



```text

Release Payment

```



Used for display and documentation.



\---



\## policyId



Policy governing the task.



Example:



```text

payment-release

```



\---



\## policyVersion



Specific immutable policy version.



Example:



```text

1.0.0

```



This ensures evaluation is reproducible.



\---



\# Resolution Flow



When a request arrives:



```json

{

&#x20; "task": "payment-release"

}

```



Parmana performs:



```text

Task Request

&#x20;     ↓

Load task.json

&#x20;     ↓

Resolve policyId

&#x20;     ↓

Resolve policyVersion

&#x20;     ↓

Load policy

&#x20;     ↓

Begin evaluation

```



\---



\# Primary Implementation



Task resolution begins in:



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



\---



\# Current Example Flow



Input:



```json

{

&#x20; "task": "payment-release"

}

```



Resolved task:



```json

{

&#x20; "taskId": "payment.release",

&#x20; "policy": {

&#x20;   "policyId": "payment-release",

&#x20;   "policyVersion": "1.0.0"

&#x20; }

}

```



Output:



```text

Task Loaded Successfully

```



\---



\# Common Failure



Example:



```text

ENOENT:

tasks/payment-transfer/task.json

```



Observed during development:



```text

Error:

D:\\last\\parmana-trust-core\\tasks\\payment-transfer\\task.json

```



Root cause:



```text

Requested task does not exist.

```



\---



\# Resolution



Either:



\### Create Task



```text

tasks/payment-transfer/task.json

```



or



\### Use Existing Task



```json

{

&#x20; "task": "payment-release"

}

```



\---



\# Validation Checklist



Verify task exists:



```powershell

type tasks\\payment-release\\task.json

```



Verify task can be evaluated:



```powershell

Invoke-RestMethod `

&#x20; -Method POST `

&#x20; -Uri http://localhost:3000/attest `

&#x20; -ContentType "application/json" `

&#x20; -Body $body

```



Expected:



```text

Attestation Returned

```



No ENOENT errors.



\---



\# Dependency Chain



Task definition enables:



```text

Task

&#x20;  ↓

Policy

&#x20;  ↓

Evaluation

&#x20;  ↓

Decision

&#x20;  ↓

Attestation

```



Without a task:



```text

No Policy Resolution

No Evaluation

No Attestation

```



\---



\# Phase Completion Criteria



Phase 02 is complete when:



```text

✓ Task exists

✓ task.json loads successfully

✓ Policy reference resolves

✓ Evaluation can start

✓ No ENOENT errors occur

```



\---



\# Output of Phase 02



```text

Business Task Successfully Mapped To Policy

```



