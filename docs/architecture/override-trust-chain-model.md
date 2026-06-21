\# Override Trust Chain Model



\## Purpose



The Override Trust Chain Model defines how exception handling integrates into the Parmana Execution Trust Chain.



The objective is to ensure that override authority actions are:



```text id="4s8w1i"

Verifiable

Auditable

Retrievable

Cryptographically Defensible

```



without breaking lineage continuity.



\---



\# Problem



Most enterprise systems require exception handling.



Examples:



```text id="5n3z8f"

Insurance Claim Escalations

Payment Exceptions

Compliance Reviews

Fraud Investigations

```



A trust system must answer:



```text id="0xkgj5"

Why was this action executed

despite policy rejection?

```



The answer must be retrievable years later.



\---



\# Core Principle



```text id="8c6xow"

Overrides are not outside

the trust chain.



Overrides become part

of the trust chain.

```



No execution may occur through an undocumented exception path.



\---



\# Standard Trust Chain



Without override:



```text id="6wd4k4"

Subject

&#x20;  ↓

Task

&#x20;  ↓

Authority Decision

&#x20;  ↓

Decision Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution Record

```



\---



\# Override Trust Chain



With override:



```text id="2jlwmw"

Subject

&#x20;  ↓

Task

&#x20;  ↓

Authority Decision

&#x20;  ↓

Override Decision

&#x20;  ↓

Override Attestation

&#x20;  ↓

Override Verification Receipt

&#x20;  ↓

Decision Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution Record

```



The override path extends lineage.



It does not replace lineage.



\---



\# Execution Authorization Rule



Execution authorization requires:



\## Standard Flow



```text id="39wjlwm"

Verification Receipt

&#x20;       ↓

Valid

&#x20;       ↓

Execution Allowed

```



\---



\## Override Flow



```text id="glbspm"

Override Verification Receipt

&#x20;              +

Verification Receipt

&#x20;              ↓

Execution Allowed

```



Both receipts become part of authorization evidence.



\---



\# Lineage Requirements



Every override artifact must reference:



```text id="mrr5l2"

businessTransactionId

decisionId

taskId

policyId

policyVersion

```



This guarantees continuity across the trust chain.



\---



\# Trust Chain Retrieval



A complete retrieval must return:



```text id="n8gsr3"

Authority Decision



Override Decision



Override Attestation



Override Verification Receipt



Decision Attestation



Verification Receipt



Execution Token



Execution Record

```



No override artifact may be omitted.



\---



\# Example Insurance Flow



\## Policy Evaluation



```text id="w56l7r"

Fraud Check Failed

```



Result:



```text id="qj1rji"

Reject

Requires Override

```



\---



\## Human Review



```text id="sl2of7"

Claims Manager

```



reviews supporting evidence.



Decision:



```text id="2fglcq"

Override Approve

```



\---



\## Trust Chain



```text id="z0mfxn"

Authority Decision

&#x20;       ↓

Override Decision

&#x20;       ↓

Override Attestation

&#x20;       ↓

Override Verification Receipt

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Token

&#x20;       ↓

Claim Payment

```



\---



\# Audit Reconstruction



Auditors must be able to answer:



```text id="1j0zgt"

Who approved?



Why was approval granted?



Which authority approved?



Which policy was overridden?



When did approval occur?

```



using only trust-chain records.



\---



\# Retrieval Requirements



Trust-chain retrieval APIs must expose:



```json id="72h4w2"

{

&#x20; "decision": {},

&#x20; "overrideDecision": {},

&#x20; "overrideAttestation": {},

&#x20; "overrideVerificationReceipt": {},

&#x20; "attestation": {},

&#x20; "receipt": {},

&#x20; "execution": {}

}

```



for override-based execution paths.



\---



\# Security Properties



\## Attribution



```text id="1j7r26"

Override Authority Identified

```



\---



\## Integrity



```text id="dc7mde"

Override Evidence Protected

```



\---



\## Auditability



```text id="j0v9v6"

Override History Preserved

```



\---



\## Determinism



```text id="v0u8iu"

Override Lineage Reconstructable

```



\---



\# Future Extensions



Future trust chains may support:



```text id="owk2au"

Multi-Level Approval



Dual Authorization



Escalation Chains



Delegated Authority

```



while preserving the same lineage model.



\---



\# Invariants



\## INV-160



```text id="pjlwm0"

Override artifacts must become part of execution lineage.

```



\## INV-161



```text id="6ht5vv"

Execution through override requires verified override evidence.

```



\## INV-162



```text id="y4wsj8"

Override trust chains must be fully retrievable.

```



\## INV-163



```text id="jqv8j4"

Override authority must remain attributable.

```



\## INV-164



```text id="pk8k18"

Override lineage must remain immutable.

```



\## INV-165



```text id="7kp5u7"

No execution may occur through an undocumented override path.

```



\---



\# Canonical Statement



The Override Trust Chain Model extends the Parmana Execution Trust Chain with governed exception handling, ensuring that every override decision, attestation, verification, and execution remains permanently attributable, auditable, and retrievable.



