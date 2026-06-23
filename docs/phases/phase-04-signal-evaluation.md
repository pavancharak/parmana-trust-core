\# Phase 04 — Signal Evaluation



\## Objective



Evaluate trusted signals against organizational policy to determine whether execution should be authorized.



This is the decision-making phase of Parmana.



\---



\# Canonical Principle



Organizations decide what to trust.



Parmana evaluates those trusted signals against policy before execution.



\---



\# Why Signal Evaluation Exists



A task identifies:



```text

What action is requested?

```



A policy identifies:



```text

What conditions must be satisfied?

```



Signals provide:



```text

Evidence about reality.

```



Evaluation determines:



```text

Do trusted signals satisfy policy?

```



\---



\# Input To Evaluation



Evaluation receives:



```text

Task

Policy

Trusted Signals

```



Example:



```json

{

&#x20; "task": "payment-release",



&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



\---



\# Trusted Signal Sources



Signals may originate from:



```text

Humans

Identity Providers

Business Applications

Banking Systems

Rule Engines

Risk Engines

AI Systems

```



Parmana does not decide which signals are trusted.



Organizations make that decision.



\---



\# Example Signals



Example:



```json

{

&#x20; "role": "finance-manager",

&#x20; "approvalId": "APR-1001",

&#x20; "amount": 5000,

&#x20; "currency": "USD"

}

```



These signals become evaluation inputs.



\---



\# Evaluation Flow



```text

Task

&#x20;  ↓

Policy

&#x20;  ↓

Trusted Signals

&#x20;  ↓

Policy Evaluation

&#x20;  ↓

Decision

```



\---



\# Primary Implementation



Evaluation Engine:



```text

packages/verifier/src/evaluate-task.ts

```



Entry Point:



```text

packages/server/src/routes/evaluate.ts

```



Attestation Route Uses Evaluation:



```text

packages/server/src/routes/attest.ts

```



\---



\# Authority Determination



Evaluation determines whether authority requirements are satisfied.



Example:



```text

Role = finance-manager

```



may satisfy policy.



Example:



```text

Role = contractor

```



may fail policy.



Authority is derived from trusted signals.



\---



\# Policy Evaluation



Example Policy Requirements:



```text

Role must equal finance-manager

Approval must exist

Amount must be below threshold

```



Evaluation compares:



```text

Policy Requirements

&#x20;         vs

Trusted Signals

```



\---



\# Successful Evaluation



Example Result:



```json

{

&#x20; "action": "approve",

&#x20; "requires\_override": false

}

```



Meaning:



```text

Policy satisfied.

Authority confirmed.

Execution may proceed.

```



\---



\# Failed Evaluation



Example Result:



```json

{

&#x20; "action": "reject",

&#x20; "requires\_override": true,

&#x20; "reason": "payment\_requirements\_not\_satisfied"

}

```



Meaning:



```text

Policy not satisfied.

Execution not authorized.

```



\---



\# Override Path



When requirements are not satisfied:



```text

Evaluation

&#x20;    ↓

Reject

&#x20;    ↓

Override Workflow

```



Later phases cover:



```text

Override Decision

Override Attestation

Override Verification

```



\---



\# Evaluation Output



Evaluation produces:



```text

Decision

Authority Outcome

Policy Outcome

Execution Intent

```



This becomes the input to attestation.



\---



\# Relationship To Intent



Evaluation does not create execution.



Evaluation creates authorization for execution.



Canonical flow:



```text

Decision

&#x20;   ↓

Intent

```



The resulting intent describes what execution is authorized to do.



\---



\# Dependency Chain



Signal evaluation requires:



```text

Task Definition

&#x20;     ↓

Policy Resolution

&#x20;     ↓

Trusted Signals

&#x20;     ↓

Signal Evaluation

```



Without signals:



```text

No Evaluation

No Decision

No Attestation

```



\---



\# Validation Example



Request:



```json

{

&#x20; "task": "payment-release",



&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



Expected:



```text

Evaluation Completed

```



Result:



```json

{

&#x20; "action": "approve"

}

```



or



```json

{

&#x20; "action": "reject"

}

```



\---



\# Phase Completion Criteria



Phase 04 is complete when:



```text

✓ Signals received

✓ Trusted signals identified

✓ Policy requirements evaluated

✓ Authority determined

✓ Decision generated

✓ Execution intent produced

```



\---



\# Output Of Phase 04



```text

Trusted Signals Successfully Evaluated Against Policy

```



\---



\# Canonical Outcome



Organizations define policy.



Organizations decide what signals are trusted.



Parmana evaluates those trusted signals against policy before execution.



