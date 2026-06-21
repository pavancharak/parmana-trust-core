\# Execution Trust Chain v0.4



\## Abstract



Autonomous systems can generate actions at machine speed, but organizations remain accountable for the consequences of those actions. Existing AI governance approaches primarily focus on model behavior, logging, or monitoring after an action has already occurred.



Parmana introduces the Execution Trust Chain: a verification architecture that establishes whether an action was authorized before execution occurs.



The Execution Trust Chain creates a verifiable lineage connecting a subject, task, policy, attestation, verification receipt, execution authorization, and execution record.



Version 0.4 represents the first end-to-end validated implementation of this architecture.



\---



\# Problem



AI systems can propose actions, but organizations require evidence that those actions were authorized.



Traditional approaches suffer from several limitations:



\* Logs record events after execution.

\* Monitoring systems detect violations after execution.

\* Model guardrails focus on generation quality rather than authority.

\* Approval workflows rarely produce cryptographically verifiable evidence.



As AI systems gain the ability to initiate operational actions, organizations need a mechanism that proves:



1\. Who was authorized.

2\. What task was requested.

3\. Which policy applied.

4\. Whether policy requirements were satisfied.

5\. Why execution was permitted.



\---



\# Core Thesis



AI has intelligence.



Humans have authority.



Intelligence generates actions.



Authority determines what actions are allowed.



Parmana exists to verify authority before execution.



\---



\# Execution Trust Chain



The Execution Trust Chain is a sequence of verifiable artifacts.



```text

Subject

&#x20; ↓

Task

&#x20; ↓

Policy

&#x20; ↓

Decision Attestation

&#x20; ↓

Verification Receipt

&#x20; ↓

Execution Token

&#x20; ↓

Execution Record

&#x20; ↓

External System

```



Each artifact is independently identifiable, persisted, and retrievable.



\---



\# Trust Chain Components



\## Subject



A subject represents the entity requesting an action.



Examples:



\* Employee

\* Customer

\* Manager

\* Service Account

\* Agent Identity



Example:



```text

finance-manager-001

```



\---



\## Task



A task defines the action being requested.



Examples:



```text

payment.release

insurance.claim.approve

vendor.create

refund.issue

```



Tasks are mapped to organizational policies.



\---



\## Policy



Policies define authorization requirements.



Policies determine:



\* Required signals

\* Validation requirements

\* Trust requirements

\* Approval requirements



Example:



```text

payment-release

v1.0.0

```



\---



\## Decision Attestation



A Decision Attestation is a signed statement that policy evaluation occurred.



The attestation contains:



\* decisionId

\* businessTransactionId

\* subjectId

\* taskId

\* policyId

\* policyVersion

\* evidence

\* signatures

\* outcome



Example outcome:



```json

{

&#x20; "action": "approve",

&#x20; "requires\_override": false,

&#x20; "reason": "payment\_authorized"

}

```



The attestation becomes the authoritative record of the decision.



\---



\## Verification Receipt



A Verification Receipt confirms that an attestation satisfies policy verification requirements.



The receipt records:



\* receiptId

\* decisionId

\* taskId

\* policyId

\* policyVersion

\* verification result

\* verified algorithms

\* receipt hash



Verification Receipts provide independent proof that validation occurred.



\---



\## Execution Token



Execution Tokens authorize execution.



An Execution Token is derived from a valid Verification Receipt.



The token binds:



\* decision

\* policy

\* receipt

\* transaction



Without a valid token, execution is denied.



\---



\## Execution Record



Execution Records represent completed execution events.



Example:



```text

executionId

decisionId

receiptId

executionSystem

executionReference

executionStatus

executedAt

```



Execution Records connect authorization evidence to real-world execution.



\---



\# Override Trust Chain



Certain situations require human intervention.



Parmana supports a dedicated override chain.



```text

Override Decision

&#x20; ↓

Override Attestation

&#x20; ↓

Override Verification Receipt

```



Override workflows remain independently auditable.



\---



\# Transparency Logging



Verification Receipts are anchored into a transparency log.



Each entry contains:



```text

receiptId

receiptHash

previousHash

createdAt

```



The log creates tamper-evident verification history.



\---



\# Implementation Status



Execution Trust Chain v0.4 has been validated end-to-end.



Implemented capabilities:



\* Task evaluation

\* Policy evaluation

\* Decision attestation

\* Cryptographic signatures

\* Verification receipts

\* Receipt persistence

\* Transparency logging

\* Execution token issuance

\* Execution token verification

\* Execution recording

\* Override workflows

\* Trust chain retrieval

\* OpenAPI specification

\* TypeScript SDK



\---



\# Canonical Lineage



The canonical Parmana lineage is:



```text

subjectId

taskId

policyId

policyVersion

decisionId

receiptId

executionId

businessTransactionId

```



These identifiers form the permanent trust chain for an action.



\---



\# Architectural Position



Parmana does not execute actions.



Parmana does not replace systems of record.



Parmana verifies authority and policy requirements before execution occurs.



Execution is performed by the underlying execution system.



Examples:



\* Stripe

\* Banking systems

\* ERP systems

\* Claims systems

\* Internal platforms



Parmana acts as the trust layer between decision generation and execution.



\---



\# Conclusion



Organizations define authority.



Organizations define policy.



Parmana verifies that authority and policy requirements have been satisfied before autonomous systems act.



The Execution Trust Chain provides a verifiable path from request to execution, creating evidence that actions were authorized before they occurred.



This architecture establishes the foundation for trustworthy autonomous execution in enterprise environments.



