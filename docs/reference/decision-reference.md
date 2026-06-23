\# Decision Reference



\## Purpose



A Decision is the first cryptographically significant artifact in the Parmana trust model.



A Decision represents the outcome of policy evaluation against trusted signals.



It answers:



```text

Was The Requested Action Authorized?

```



before intent, attestation, verification, or execution occur.



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



Every trust chain begins with a Decision.



\---



\# Definition



A Decision is a deterministic evaluation outcome produced by applying:



```text

Policy

\+

Trusted Signals

\+

Task Definition

```



to a requested action.



\---



\# Decision Responsibilities



A Decision determines:



```text

APPROVE



REJECT



OVERRIDE REQUIRED

```



for a requested task.



\---



\# Decision Is Not Execution



A Decision does not:



```text

Execute Actions



Move Money



Call APIs



Modify Systems

```



A Decision only determines authorization status.



\---



\# Inputs To Decision



Decision evaluation consumes:



```text

Task



Policy



Signals

```



\---



\# Task



Example:



```json

{

&#x20; "taskId": "payment.release"

}

```



Purpose:



```text

Define Requested Action

```



\---



\# Policy



Example:



```json

{

&#x20; "policyId": "payment-release",



&#x20; "policyVersion": "1.0.0"

}

```



Purpose:



```text

Define Authorization Rules

```



\---



\# Signals



Example:



```json

{

&#x20; "managerApproved": true,



&#x20; "fraudScore": 0.02

}

```



Purpose:



```text

Provide Evaluation Evidence

```



\---



\# Decision Output



Example:



```json

{

&#x20; "action": "approve"

}

```



Alternative:



```json

{

&#x20; "action": "reject"

}

```



Alternative:



```json

{

&#x20; "action": "reject",



&#x20; "requires\_override": true

}

```



\---



\# Canonical Decision States



\## APPROVE



Meaning:



```text

Policy Requirements Satisfied

```



Execution may proceed to intent generation.



\---



\## REJECT



Meaning:



```text

Policy Requirements Not Satisfied

```



Execution must not proceed.



\---



\## OVERRIDE REQUIRED



Meaning:



```text

Standard Authorization Failed



Additional Human Authority Required

```



Execution pauses pending override.



\---



\# Decision Metadata



Typical metadata:



```json

{

&#x20; "decisionId":

&#x20;   "46181063-5252-4203-8204-4c0de03212df"

}

```



Purpose:



```text

Decision Identity

```



\---



\# Decision Identity



Every decision should be uniquely identifiable.



Example:



```text

decisionId

```



Purpose:



```text

Trust Chain Correlation

```



\---



\# Deterministic Requirement



The same:



```text

Task



Policy



Signals

```



must always produce the same decision.



\---



\# Decision Evidence



Decision evidence includes:



```text

Task



Policy



Signals



Evaluation Result

```



This evidence becomes the basis for attestation.



\---



\# Relationship To Policy



Policy defines:



```text

What Must Be True

```



Decision determines:



```text

Whether It Is True

```



\---



\# Relationship To Signals



Signals provide:



```text

Evidence

```



Decision evaluates:



```text

Evidence Against Policy

```



\---



\# Relationship To Intent



Decision precedes intent.



Flow:



```text

Decision

&#x20;    ↓

Intent

```



Without a decision:



```text

No Authorized Intent Exists

```



\---



\# Relationship To Attestation



Attestation proves:



```text

A Decision Occurred

```



Decision exists before attestation.



\---



\# Relationship To Verification



Verification proves:



```text

Attestation Authenticity

```



Verification does not create decisions.



\---



\# Relationship To Execution



Execution depends upon:



```text

Authorized Intent

```



which depends upon:



```text

Approved Decision

```



\---



\# Example Payment Decision



Inputs:



```json

{

&#x20; "task": "payment.release",



&#x20; "signals": {

&#x20;   "managerApproved": true,

&#x20;   "fraudScore": 0.01

&#x20; }

}

```



Output:



```json

{

&#x20; "action": "approve"

}

```



\---



\# Example Rejected Decision



Inputs:



```json

{

&#x20; "task": "payment.release",



&#x20; "signals": {

&#x20;   "managerApproved": false

&#x20; }

}

```



Output:



```json

{

&#x20; "action": "reject"

}

```



\---



\# Example Override Decision



Output:



```json

{

&#x20; "action": "reject",



&#x20; "requires\_override": true

}

```



Meaning:



```text

Additional Authority Required

```



\---



\# Decision Lifecycle



```text

Evaluate

&#x20;   ↓

Approve / Reject

&#x20;   ↓

Intent Generation

```



or:



```text

Evaluate

&#x20;   ↓

Override Required

&#x20;   ↓

Override Workflow

```



\---



\# Decision Storage



Decisions may be stored for:



```text

Audit



Trust Chains



Evidence Reconstruction

```



but are immutable once created.



\---



\# Questions Decisions Answer



```text

Was The Action Authorized?



Which Policy Was Evaluated?



Which Signals Were Considered?



Was An Override Required?

```



\---



\# What Decisions Do Not Answer



```text

Was Intent Generated?



Was Attestation Signed?



Was Verification Successful?



Was Execution Performed?

```



Those belong to later artifacts.



\---



\# Canonical Outcome



A Decision is the authoritative outcome of policy evaluation.



It determines whether a requested action is authorized and serves as the foundation for intent generation, attestation, verification, and execution trust throughout the Parmana trust chain.



