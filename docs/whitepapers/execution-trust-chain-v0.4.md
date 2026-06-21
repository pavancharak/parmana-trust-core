Status: VALIDATED



Version: 0.4.0



Validation Date: 2026-06-21



Implementation State:



\* Attestation Chain: Complete

\* Verification Chain: Complete

\* Execution Chain: Complete

\* Override Chain: Complete

\* OpenAPI Specification: Complete

\* TypeScript SDK: Complete

\* Transparency Log: Complete





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



\# Design Principles



The Execution Trust Chain is governed by the following principles.



\## Authority Before Execution



Execution must never occur before authority verification.



Authorization evidence is created before execution and cannot be retroactively generated.



\---



\## Explicit Policy Binding



Every decision must reference an explicit policy.



Implicit authorization is prohibited.



Each decision references:



\* policyId

\* policyVersion



This ensures that authorization can be replayed and understood in its original context.



\---



\## Immutable Lineage



Trust chain identifiers are immutable once created.



The lineage:



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



must remain stable throughout the lifecycle of the transaction.



\---



\## Cryptographic Verifiability



Trust assertions are not accepted as evidence.



Evidence must be independently verifiable.



Verification receipts, signatures, hashes, and transparency log entries provide objective validation.



\---



\## Separation of Concerns



Decision generation and execution authorization are separate responsibilities.



```text

AI

&#x20; ↓

Generates recommendation



Parmana

&#x20; ↓

Verifies authority



Execution System

&#x20; ↓

Performs action

```



This separation reduces risk and improves auditability.



\---



\## System-of-Record Neutrality



Parmana is not a system of record.



Parmana is not an execution engine.



Parmana integrates with existing systems while providing an independent authorization layer.



\---



\# Threat Model



The Execution Trust Chain is designed to address several classes of risk.



\## Unauthorized Execution



An autonomous system attempts an action without satisfying policy.



Mitigation:



\* Verification receipt required

\* Execution token required

\* Token verification required



\---



\## Policy Drift



Execution occurs under different policy conditions than originally evaluated.



Mitigation:



\* policyId binding

\* policyVersion binding

\* receipt verification



\---



\## Evidence Tampering



Authorization evidence is modified after creation.



Mitigation:



\* Cryptographic signatures

\* Receipt hashes

\* Transparency log anchoring



\---



\## Audit Gaps



Organizations cannot explain why an action occurred.



Mitigation:



\* Persistent lineage

\* Receipt preservation

\* Execution record preservation



\---



\# Future Roadmap



\# Category Definition



\## The Autonomous Execution Problem



Most AI infrastructure focuses on intelligence.



Examples include:



\* Foundation models

\* Agent frameworks

\* Retrieval systems

\* Tool orchestration systems

\* Workflow engines



These systems answer:



> What should happen?



They do not answer:



> Should this be allowed to happen?



As autonomous systems become capable of initiating real-world actions, a new infrastructure layer becomes necessary.



\---



\## From Intelligence Infrastructure to Authority Infrastructure



The first generation of AI infrastructure solved intelligence.



The next generation must solve authority.



```text

Cloud Infrastructure

&#x20;   ↓

Data Infrastructure

&#x20;   ↓

AI Infrastructure

&#x20;   ↓

Authority Infrastructure

```



Authority Infrastructure ensures that actions satisfy organizational requirements before execution.



Parmana is designed as Authority Infrastructure.



\---



\## Why Existing Approaches Are Insufficient



\### Logging



Logs explain what happened.



Logs do not prevent unauthorized execution.



\---



\### Monitoring



Monitoring identifies issues after execution.



Monitoring does not establish authority before execution.



\---



\### Human Approval Workflows



Approvals often exist as emails, tickets, or workflow states.



These systems rarely produce verifiable authorization evidence.



\---



\### AI Guardrails



Guardrails constrain model behavior.



Guardrails do not establish organizational authority.



Authority belongs to organizations, not models.



\---



\## The Parmana Category



Parmana introduces a new category:



\### Execution Trust Infrastructure



Execution Trust Infrastructure verifies that:



\* Authority exists

\* Policy requirements are satisfied

\* Evidence is preserved

\* Execution is authorized



before actions occur.



\---



\## What Parmana Is Not



Parmana is not:



\* A workflow engine

\* An orchestration platform

\* An agent framework

\* A model gateway

\* A policy authoring platform

\* A system of record



Parmana is the trust layer that sits between decision generation and execution.



\---



\# Reference Architecture



```text

Human

&#x20; ↓

AI System

&#x20; ↓

Task

&#x20; ↓

Policy

&#x20; ↓

Parmana Verification

&#x20; ↓

Verification Receipt

&#x20; ↓

Execution Token

&#x20; ↓

Execution System

&#x20; ↓

External Action

```



Examples of execution systems:



\* Payment processors

\* Banking systems

\* Claims systems

\* ERP systems

\* Procurement systems

\* Internal enterprise applications



\---



\# Enterprise Implications



Execution Trust Infrastructure creates a new operational capability.



Organizations gain:



\* Pre-execution authorization

\* Independent verification

\* Tamper-evident evidence

\* Trust-chain retrieval

\* Audit readiness

\* Policy traceability



The result is a verifiable answer to a critical question:



> Why was this action allowed?



\---



\# Canonical Parmana Statement



Humans define authority.



Organizations define policy.



Parmana makes authority verifiable and enforceable before execution.



Autonomous systems may generate actions.



Parmana verifies whether those actions are authorized before they occur.





\## v0.5



Trust Chain Retrieval API maturity.



Goals:



\* Full trust-chain query API

\* Multi-transaction retrieval

\* Advanced lineage search



\---



\## v0.6



Trust Federation.



Goals:



\* Multiple trust anchors

\* Cross-organization verification

\* Federated authority validation



\---



\## v0.7



Enterprise Policy Administration.



Goals:



\* Policy lifecycle management

\* Policy approval workflows

\* Policy governance controls



\---



\## v1.0



Execution Trust Infrastructure.



Goals:



\* Production readiness

\* Federated trust

\* Enterprise deployment support

\* Compliance evidence generation

\* Large-scale execution authorization



