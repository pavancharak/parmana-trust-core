\# Authorization Model



\## Purpose



The Authorization Model defines how Parmana determines whether an action is permitted before execution occurs.



Authorization is the first trust decision in the Parmana architecture.



It establishes whether a requested action satisfies organizational authority and policy requirements.



\---



\# Canonical Principle



Authorization determines whether execution may be considered.



Authorization does not perform execution.



\---



\# Core Architectural Question



Authorization answers:



```text

Should This Happen?

```



before answering:



```text

What Exactly Should Happen?

```



\---



\# Why Authorization Exists



Most systems focus on:



```text

Authentication

&#x20;     ↓

Authorization

&#x20;     ↓

Execution

```



and assume trust after authorization.



Parmana introduces additional trust layers:



```text

Authorization

&#x20;     ↓

Intent

&#x20;     ↓

Verification

&#x20;     ↓

Execution

```



because authorization alone is insufficient for execution trust.



\---



\# Canonical Parmana Principle



Authorization determines permission.



Intent determines expected execution.



Execution Trust determines whether execution matched authorization.



\---



\# Authorization Architecture



```text

Authority

&#x20;     ↓

Trusted Signals

&#x20;     ↓

Policy Evaluation

&#x20;     ↓

Decision

&#x20;     ↓

Intent

```



This is the canonical authorization flow.



\---



\# Authorization Inputs



Authorization evaluates:



```text

Authority



Policy



Trusted Signals



Task Definition



Context

```



\---



\# Authority



Authority defines:



```text

Who May Authorize?

```



Examples:



```text

Finance Manager



Treasury Officer



Operations Director



Compliance Officer

```



Authority is assigned by the organization.



\---



\# Canonical Principle



Humans define authority.



Organizations define policy.



Parmana verifies compliance before execution.



\---



\# Trusted Signals



Organizations decide what signals are trusted.



Examples:



```text

Human Approval



Risk Engine Result



Fraud Score



ERP Status



Banking System Response



AI Assessment

```



Parmana does not decide which signals are trusted.



Organizations decide.



\---



\# Canonical Principle



Organizations decide what to trust.



Parmana ensures trusted signals satisfy policy before execution.



\---



\# Signal Evaluation



Trusted signals become policy inputs.



Example:



```json

{

&#x20; "role": "finance-manager",

&#x20; "riskScore": 12,

&#x20; "vendorVerified": true

}

```



Signals are evaluated against policy requirements.



\---



\# Policy



Policy defines:



```text

Under What Conditions

Can Authorization Occur?

```



Example:



```json

{

&#x20; "paymentAmount": {

&#x20;   "max": 50000

&#x20; }

}

```



Policy is organizational.



Parmana enforces evaluation.



\---



\# Policy Evaluation



Policy evaluation determines:



```text

Satisfied



Not Satisfied



Override Required

```



\---



\# Example



Request:



```json

{

&#x20; "amount": 25000,

&#x20; "role": "finance-manager"

}

```



Policy:



```json

{

&#x20; "maxAmount": 50000

}

```



Result:



```text

Satisfied

```



\---



\# Decision Layer



Policy evaluation produces a decision.



Decision answers:



```text

Should This Happen?

```



\---



\# Canonical Decision Outcomes



```text

Approve



Reject



Override Required

```



\---



\# Approve



Meaning:



```text

Authority Valid



Policy Satisfied



Execution Eligible

```



Example:



```json

{

&#x20; "action": "approve"

}

```



\---



\# Reject



Meaning:



```text

Authority Invalid



or



Policy Failed

```



Example:



```json

{

&#x20; "action": "reject"

}

```



\---



\# Override Required



Meaning:



```text

Policy Failed



Additional Authority Required

```



Example:



```json

{

&#x20; "action": "reject",

&#x20; "requires\_override": true

}

```



\---



\# Override Model



Overrides are explicit authorization events.



Overrides do not bypass trust.



Overrides become trust evidence.



\---



\# Canonical Override Flow



```text

Policy Failure

&#x20;      ↓

Override Request

&#x20;      ↓

Override Authority

&#x20;      ↓

Override Decision

```



\---



\# Authorization Output



Authorization produces:



```text

Decision

```



which becomes input to:



```text

Intent Generation

```



\---



\# Authorization And Intent



Authorization answers:



```text

Should This Happen?

```



Intent answers:



```text

What Exactly Should Happen?

```



These are separate concerns.



\---



\# Example



Decision:



```json

{

&#x20; "action": "approve"

}

```



Intent:



```json

{

&#x20; "action": "release-payment",

&#x20; "amount": 50000,

&#x20; "vendorId": "V-100"

}

```



Authorization permits intent.



Intent defines execution.



\---



\# Authorization Evidence



Authorization alone is not sufficient.



Parmana creates evidence that authorization occurred.



Evidence includes:



```text

Decision



Policy Context



Trusted Signals



Intent



Attestation

```



\---



\# Attestation Generation



After authorization:



```text

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

```



Attestation becomes cryptographic proof that authorization occurred.



\---



\# Authorization Trust Model



Traditional systems:



```text

Authorization

&#x20;     ↓

Execution

```



Parmana:



```text

Authorization

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution

```



This creates verifiable authorization.



\---



\# AI Authorization Model



AI systems may generate:



```text

Proposed Intent

```



Example:



```json

{

&#x20; "action": "issue-refund",

&#x20; "amount": 100

}

```



Parmana evaluates:



```text

Authority



Policy



Trusted Signals

```



before authorization.



\---



\# Canonical AI Principle



AI does not define authority.



Humans define authority.



Organizations define policy.



Parmana verifies compliance before execution.



\---



\# Authorization And Human Authority



Parmana ensures:



```text

Human-Defined Authority

```



governs execution.



This is the foundation of execution trust.



\---



\# Authorization Lifecycle



```text

Task

&#x20;   ↓

Trusted Signals

&#x20;   ↓

Policy Evaluation

&#x20;   ↓

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

```



\---



\# Authorization Artifacts



Authorization produces:



```text

Decision

```



and contributes to:



```text

Intent



Attestation



Trust Chain

```



\---



\# Authorization Security Properties



Authorization provides:



```text

Permission Evaluation



Policy Enforcement



Authority Verification



Override Control

```



\---



\# Authorization Does Not Provide



Authorization does not prove:



```text

Execution Occurred



Execution Succeeded



Execution Matched Intent

```



Those are handled later in the trust chain.



\---



\# Relationship To Trust Artifacts



Authorization feeds:



```text

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

```



and ultimately contributes to:



```text

Execution Trust

```



\---



\# Relationship To Trust Profiles



Trust Profiles define:



```text

How Authorization Must Be Proven

```



Different industries may require:



```text

Additional Evidence



Additional Verification



Additional Retention

```



\---



\# Relationship To Trust Federation



Authorization remains local to a trust domain.



Federation exchanges:



```text

Trust Evidence

```



not authorization authority.



\---



\# Canonical Outcome



The Authorization Model determines whether an action is permitted according to organizational authority, policy, and trusted signals.



Authorization is the first step in the Parmana trust architecture.



It produces a decision, enables intent creation, and establishes the foundation upon which all subsequent trust evidence is built.



Authorization determines whether execution may be considered.



Execution Trust determines whether execution matched what was authorized.



