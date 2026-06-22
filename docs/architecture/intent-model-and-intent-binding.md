\# Intent Model and Intent Binding



\## Status



Completed



\## Objective



Define Intent as a first-class Parmana primitive.



Intent is the bridge between authorization and execution.



Parmana does not merely verify that a decision was made.



Parmana verifies that execution matches the specific intent that was authorized.



\---



\# The Problem



Traditional authorization systems typically prove:



```text

Who approved?

```



or



```text

Was the action allowed?

```



They do not prove:



```text

What exactly was approved?

```



As a result, execution may diverge from authorization.



Example:



```text

Approved:

Pay Vendor A

Amount: $10,000



Executed:

Pay Vendor B

Amount: $100,000

```



The authorization remains technically valid even though execution differs from what was intended.



Parmana closes this gap through Intent Binding.



\---



\# What Is Intent?



Intent represents the exact execution payload that an external system intends to perform.



Example:



```json

{

&#x20; "amount": 10000,

&#x20; "currency": "USD",

&#x20; "recipient": "vendor-123"

}

```



Intent is execution-specific.



Intent is not policy.



Intent is not authority.



Intent is not a decision.



Intent describes the exact action that will occur if execution is authorized.



\---



\# Parmana Trust Model



Parmana introduces five distinct concepts:



```text

Subject

&#x20;   ↓

Task

&#x20;   ↓

Policy

&#x20;   ↓

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Execution

```



Each concept answers a different question.



\---



\# Subject



Subject answers:



```text

Who is requesting?

```



Example:



```text

manager-123

```



\---



\# Task



Task answers:



```text

What kind of action?

```



Example:



```text

payment.release

```



\---



\# Policy



Policy answers:



```text

Under what conditions?

```



Example:



```text

managerApproved = true

kycVerified = true

```



\---



\# Decision



Decision answers:



```text

Allowed or denied?

```



Example:



```text

approved

```



or



```text

denied

```



\---



\# Intent



Intent answers:



```text

What exactly will happen?

```



Example:



```json

{

&#x20; "amount": 10000,

&#x20; "currency": "USD",

&#x20; "recipient": "vendor-123"

}

```



\---



\# Execution



Execution answers:



```text

What actually happened?

```



Example:



```json

{

&#x20; "amount": 10000,

&#x20; "currency": "USD",

&#x20; "recipient": "vendor-123"

}

```



\---



\# Why Intent Exists



Decision and execution are not the same thing.



Example:



```text

Decision:

approved

```



does not specify:



```text

Which account?

Which recipient?

Which amount?

Which destination?

```



Intent captures the execution details that the decision is authorizing.



\---



\# Canonical Principle



```text

Decisions authorize Intent.



Intent authorizes Execution.

```



A decision alone is insufficient.



Execution must be bound to the specific intent that was approved.



\---



\# Intent Binding



Parmana binds intent using a cryptographic commitment.



Compute:



```text

intentHash =

SHA256(intent)

```



Example:



```text

e94419e4fcf311d0ea8b5a0992bbefbd968c1e004212878ad8d33785358c0b65

```



The hash becomes the immutable representation of intent.



\---



\# Intent Propagation



The same intent hash propagates through the entire trust chain.



```text

Execution Intent

&#x20;     ↓

Intent Hash

&#x20;     ↓

Decision Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Token

&#x20;     ↓

Execution Gateway

```



\---



\# Decision Attestation



Attestations contain:



```json

{

&#x20; "intent": {

&#x20;   "hashAlgorithm": "sha256",

&#x20;   "intentHash": "..."

&#x20; }

}

```



The attestation cryptographically binds the decision to a specific intent.



\---



\# Verification Receipt



Receipts contain:



```json

{

&#x20; "receiptId": "...",

&#x20; "intentHash": "...",

&#x20; "valid": true

}

```



The receipt independently verifies the approved intent.



\---



\# Execution Token



Execution Tokens contain:



```json

{

&#x20; "tokenId": "...",

&#x20; "intentHash": "...",

&#x20; "signature": "..."

}

```



The token authorizes execution of that specific intent.



\---



\# Execution Authorization



The Execution Gateway computes:



```text

actualHash =

SHA256(actualExecutionIntent)

```



and compares:



```text

actualHash

==

token.intentHash

```



\---



\# Authorization Rule



Execution is authorized only when:



```text

Hash(actualExecutionIntent)

==

AuthorizedIntentHash

```



Otherwise:



```text

DENIED

```



\---



\# Security Properties



\## Intent Integrity



Execution cannot silently change after approval.



\---



\## Intent Authenticity



Only approved intents may be executed.



\---



\## Intent Traceability



Every execution token can be traced back to the original intent.



\---



\## Independent Verification



Intent binding can be verified without re-evaluating policy.



\---



\# Relationship to Execution Trust Chain



Execution Trust Chain:



```text

Subject

→ Authority Evaluation

→ Decision Attestation

→ Verification Receipt

→ Execution Token

→ Execution Authorization

→ Execution

```



Intent Binding provides the cryptographic continuity between authorization and execution.



\---



\# Canonical Parmana Principle



```text

Parmana does not merely prove that a decision was authorized.



Parmana proves that execution matches the intent that was authorized.

```



\---



\# Strategic Significance



Most governance systems verify decisions.



Parmana verifies decisions, intent, and execution alignment.



This closes the trust gap between:



```text

Approved

```



and



```text

Executed

```



and establishes Intent as a first-class primitive within the Parmana architecture.



