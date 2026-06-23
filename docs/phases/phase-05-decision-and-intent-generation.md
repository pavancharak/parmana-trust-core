\# Phase 05 — Decision and Intent Generation



\## Objective



Transform evaluation results into a decision and a corresponding execution intent.



This phase establishes the critical link between authorization and execution.



\---



\# Why This Phase Exists



Traditional systems typically stop at:



```text

Decision

```



Example:



```text

Approved

Rejected

```



However, approval alone does not define:



```text

What exactly was authorized?

What exactly should happen next?

```



Parmana introduces:



```text

Decision

&#x20;   ↓

Intent

```



Intent bridges authorization and execution.



\---



\# Canonical Principle



Decisions authorize Intent.



Intent authorizes Execution.



This is the foundational trust model of Parmana.



\---



\# Input To This Phase



Output from Phase 04:



```text

Policy Evaluation

Authority Evaluation

Decision Outcome

```



Example:



```json

{

&#x20; "action": "approve",

&#x20; "requires\_override": false

}

```



or



```json

{

&#x20; "action": "reject",

&#x20; "requires\_override": true

}

```



\---



\# Decision Generation



A decision represents the outcome of policy evaluation.



Examples:



```text

APPROVE

REJECT

OVERRIDE\_REQUIRED

```



Decision answers:



```text

Was authorization granted?

```



\---



\# Limitation Of Decisions



A decision alone does not answer:



```text

What exactly may execute?

```



Example:



```text

APPROVED

```



does not specify:



```text

Transfer amount

Destination

Allowed action

Policy version

Authorized scope

```



This creates the authorization gap.



\---



\# Intent Generation



Intent captures the execution authorized by the decision.



Intent answers:



```text

What exactly was approved?

```



Example:



```json

{

&#x20; "action": "release-payment",

&#x20; "policyId": "payment-release",

&#x20; "policyVersion": "1.0.0"

}

```



\---



\# Intent Characteristics



Intent should be:



```text

Explicit

Deterministic

Verifiable

Immutable

```



Intent becomes the authoritative description of expected execution.



\---



\# Intent Flow



```text

Trusted Signals

&#x20;      ↓

Evaluation

&#x20;      ↓

Decision

&#x20;      ↓

Intent

```



Output:



```text

Authorized Execution Description

```



\---



\# Why Intent Matters



Without intent:



```text

Decision

&#x20;     ↓

Execution

```



creates ambiguity.



With intent:



```text

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Execution

```



execution can be compared against what was authorized.



\---



\# Relationship To Attestation



The next phase will attest:



```text

Decision

Intent

Policy

Outcome

```



not merely:



```text

Decision

```



This creates stronger evidence.



\---



\# Example



Input:



```json

{

&#x20; "task": "payment-release",

&#x20; "signals": {

&#x20;   "role": "finance-manager"

&#x20; }

}

```



Evaluation:



```json

{

&#x20; "action": "approve"

}

```



Generated intent:



```json

{

&#x20; "authorizedAction": "payment.release",

&#x20; "policyId": "payment-release",

&#x20; "policyVersion": "1.0.0"

}

```



\---



\# Future Intent Hashing



Later phases introduce:



```text

Intent

&#x20;   ↓

SHA-256

&#x20;   ↓

Intent Hash

```



Intent hashes are embedded into attestations.



Example from current implementation:



```text

packages/attestation/src/create-attestation.ts

```



Current logic:



```text

executionIntent

&#x20;     ↓

SHA-256

&#x20;     ↓

intentHash

```



\---



\# Trust Significance



Intent is the first artifact that can later answer:



```text

What exactly was supposed to happen?

```



This is a key distinction between Parmana and traditional approval systems.



\---



\# Dependency Chain



```text

Task

&#x20;   ↓

Policy

&#x20;   ↓

Trusted Signals

&#x20;   ↓

Evaluation

&#x20;   ↓

Decision

&#x20;   ↓

Intent

```



Without intent:



```text

Authorization Exists



Execution Meaning Is Lost

```



\---



\# Phase Completion Criteria



Phase 05 is complete when:



```text

✓ Evaluation produces decision

✓ Decision produces intent

✓ Intent describes authorized execution

✓ Intent is deterministic

✓ Intent can be hashed

✓ Intent can be attested

```



\---



\# Output Of Phase 05



```text

Authorized Execution Intent Generated

```



\---



\# Canonical Outcome



Decision authorizes Intent.



Intent authorizes Execution.



Intent preserves the answer to:



"What exactly was supposed to happen?"



