\# Human Approval → AI Action



\## Overview



This example demonstrates how Parmana establishes a verifiable trust chain between human decisions and AI actions.



A manager approves a customer refund.



Parmana converts the approved decision into a verifiable Intent.



The AI system executes the refund.



Parmana verifies that the execution matches the approved Intent.



\---



\## Scenario



A customer requests a refund of ₹1000.



A manager reviews the request and approves the refund.



\### Approved Decision



```json

{

&#x20; "decision": "approve\_refund",

&#x20; "amount": 1000,

&#x20; "currency": "INR"

}

```



\---



\## Intent Generation



Parmana generates an Intent that defines exactly what execution is authorized.



```json

{

&#x20; "action": "refund",

&#x20; "amount": 1000,

&#x20; "currency": "INR"

}

```



Parmana computes:



```text

intentHash = SHA256(Intent)

```



\---



\## AI Execution



The AI system executes the approved action.



```json

{

&#x20; "action": "refund",

&#x20; "amount": 1000,

&#x20; "currency": "INR"

}

```



Parmana computes:



```text

executionHash = SHA256(Execution Payload)

```



\---



\## Verification



Parmana verifies:



```text

intentHash == executionHash

```



Result:



```text

VERIFIED

```



The AI executed exactly what was approved.



\---



\## Trust Chain



```text

Manager Approval

&#x20;       ↓

&#x20;     Intent

&#x20;       ↓

&#x20;   AI Action

&#x20;       ↓

&#x20;  Verification

```



\---



\## Question Answered



Did the AI execute the action that was approved?



Yes.



Parmana provides cryptographic evidence that the execution matched the authorized Intent.



\---



\## Why This Matters



Traditional systems typically record approvals and execution events separately.



Parmana introduces Intent as a verifiable contract between decision and execution.



This enables independent verification that AI actions remain aligned with authorized decisions.



