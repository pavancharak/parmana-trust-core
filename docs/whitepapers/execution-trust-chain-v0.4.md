\# Execution Trust Chain v0.4



Status: VALIDATED



Version: 0.4.0



Validation Date: 2026-06-21



Implementation State:



\* Attestation Chain: Complete

\* Verification Chain: Complete

\* Execution Chain: Complete

\* Override Chain: Complete

\* Transparency Log: Complete

\* OpenAPI Specification: Complete

\* TypeScript SDK: Complete

\* Python SDK: Complete



\---



\# Abstract



Autonomous systems can generate actions at machine speed, but organizations remain accountable for the consequences of those actions.



As AI systems move from answering questions to initiating actions, organizations require a mechanism that verifies authority before execution occurs.



Parmana introduces the Execution Trust Chain, a trust infrastructure that creates verifiable authorization evidence connecting a subject, task, policy, attestation, verification receipt, execution authorization, and execution record.



Execution Trust Chain v0.4 represents the first validated end-to-end implementation of this architecture.



\---



\# Problem



AI systems can recommend actions.



AI systems can automate workflows.



AI systems can initiate operational processes.



However, organizations remain responsible for answering a critical question:



Why was this action allowed?



Traditional approaches are insufficient.



Logs explain events after execution.



Monitoring detects violations after execution.



Approval workflows often produce weak evidence.



Guardrails constrain model behavior but do not establish organizational authority.



As autonomous systems gain access to payment systems, claims systems, procurement systems, ERP platforms, and internal business applications, organizations require authorization evidence before execution occurs.



\---



\# Core Thesis



AI has intelligence.



Humans have authority.



Intelligence generates actions.



Authority determines what actions are allowed.



Parmana exists to verify authority before execution.



\---



\# The Execution Trust Chain



The Execution Trust Chain creates a verifiable lineage from request to execution.



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



Every artifact is independently identifiable, persisted, and retrievable.



\---



\# Trust Chain Components



\## Subject



The subject represents the entity requesting an action.



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

refund.issue

vendor.create

```



Tasks are mapped to organizational policies.



\---



\## Policy



Policies define authorization requirements.



Policies determine:



\* Required signals

\* Validation requirements

\* Approval requirements

\* Trust requirements



Example:



```text

policyId: payment-release

policyVersion: 1.0.0

```



\---



\## Decision Attestation



A Decision Attestation is a signed statement that policy evaluation occurred.



Each attestation contains:



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



The attestation becomes the authoritative decision artifact.



\---



\## Verification Receipt



A Verification Receipt confirms that an attestation satisfies verification requirements.



The receipt records:



\* receiptId

\* decisionId

\* taskId

\* policyId

\* policyVersion

\* verification result

\* verified algorithms

\* receipt hash



Verification Receipts provide independently verifiable authorization evidence.



\---



\## Execution Token



Execution Tokens authorize execution.



Execution Tokens are derived from valid Verification Receipts.



They bind:



\* Decision

\* Policy

\* Receipt

\* Transaction



Without a valid execution token, execution is denied.



\---



\## Execution Record



Execution Records represent completed execution events.



Each execution record contains:



\* executionId

\* receiptId

\* decisionId

\* executionSystem

\* executionReference

\* executionStatus

\* executedAt



Execution Records connect authorization evidence to real-world execution.



\---



\# Override Trust Chain



Certain situations require explicit human intervention.



Parmana supports a dedicated override chain.



```text

Override Decision

&#x20; ↓

Override Attestation

&#x20; ↓

Override Verification Receipt

```



Override authorization remains independently auditable.



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



The transparency log provides tamper-evident verification history.



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



These identifiers form the permanent trust chain of an action.



\---



\# Design Principles



\## Authority Before Execution



Authorization evidence must exist before execution occurs.



Authorization cannot be created retroactively.



\---



\## Explicit Policy Binding



Every decision must reference an explicit policy.



Implicit authorization is prohibited.



\---



\## Immutable Lineage



Trust chain identifiers remain immutable once created.



\---



\## Cryptographic Verifiability



Trust assertions are not evidence.



Evidence must be independently verifiable through signatures, hashes, receipts, and transparency log entries.



\---



\## Separation of Responsibilities



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



Decision generation and execution authorization are separate responsibilities.



\---



\## System-of-Record Neutrality



Parmana is not a system of record.



Parmana is not an execution engine.



Parmana acts as an authorization layer between decision generation and execution.



\---



\# Threat Model



\## Unauthorized Execution



An autonomous system attempts execution without satisfying policy.



Mitigation:



\* Verification receipts

\* Execution tokens

\* Token verification



\---



\## Policy Drift



Execution occurs under different policy conditions than originally evaluated.



Mitigation:



\* Policy binding

\* Version binding

\* Receipt validation



\---



\## Evidence Tampering



Authorization evidence is modified after creation.



Mitigation:



\* Cryptographic signatures

\* Receipt hashes

\* Transparency logging



\---



\## Audit Gaps



Organizations cannot explain why an action occurred.



Mitigation:



\* Persistent lineage

\* Receipt preservation

\* Execution preservation



\---



\# Category Definition



\## The Autonomous Execution Problem



Most AI infrastructure answers:



> What should happen?



Organizations also need an answer to:



> Should this be allowed to happen?



These are different problems.



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



Parmana is designed as Authority Infrastructure.



\---



\## Why Existing Approaches Are Insufficient



\### Logging



Logs explain what happened.



Logs do not establish authority before execution.



\### Monitoring



Monitoring detects violations after execution.



Monitoring does not authorize execution.



\### Approval Workflows



Approval systems rarely produce independently verifiable authorization evidence.



\### AI Guardrails



Guardrails constrain models.



Guardrails do not establish organizational authority.



Authority belongs to organizations, not models.



\---



\## Execution Trust Infrastructure



Parmana introduces a new category:



Execution Trust Infrastructure.



Execution Trust Infrastructure verifies that:



\* Authority exists

\* Policy requirements are satisfied

\* Evidence is preserved

\* Execution is authorized



before actions occur.



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



Examples of execution systems include:



\* Payment processors

\* Banking systems

\* Claims systems

\* ERP systems

\* Procurement systems

\* Enterprise applications



\---



\# Implementation Validation



Execution Trust Chain v0.4 has been validated end-to-end through:



\* REST API

\* TypeScript SDK

\* Python SDK



Validated capabilities:



\* Task evaluation

\* Policy evaluation

\* Decision attestation

\* Signature generation

\* Signature verification

\* Verification receipt issuance

\* Transparency log anchoring

\* Execution token issuance

\* Execution token verification

\* Execution recording

\* Override workflows

\* Trust chain retrieval



\---

\# Enterprise Adoption Model



\## Why Organizations Adopt Execution Trust Infrastructure



Organizations do not purchase authorization infrastructure because they want more approvals.



Organizations purchase authorization infrastructure because they need confidence that autonomous execution remains aligned with organizational authority.



As autonomous systems gain access to operational systems, the risk shifts from information generation to action execution.



The question becomes:



> How do we prove this action was authorized?



Execution Trust Infrastructure provides that answer.



\---



\# Primary Enterprise Drivers



\## Autonomous Payments



AI systems can initiate payment requests.



Organizations require evidence that:



\* The requester was authorized.

\* Policy requirements were satisfied.

\* Verification occurred before execution.

\* The payment can be explained later.



Parmana creates that evidence chain.



\---



\## Claims Processing



AI systems increasingly assist with claims decisions.



Organizations require:



\* Policy traceability.

\* Authorization evidence.

\* Independent verification.

\* Audit readiness.



Execution Trust Chains preserve those artifacts.



\---



\## Procurement



Autonomous procurement introduces execution risk.



Organizations must verify:



\* Spending authority.

\* Policy compliance.

\* Organizational approval requirements.



before orders are created.



\---



\## Internal Enterprise Operations



Examples:



\* Vendor onboarding

\* Refund issuance

\* Account provisioning

\* Credit approvals

\* Risk exceptions



Each action benefits from verifiable authorization evidence.



\---



\# Buyer Profiles



\## Primary Buyer



Chief Risk Officer



Responsibilities:



\* Operational risk

\* Governance

\* Audit readiness

\* Regulatory response



Parmana provides evidence for execution authorization.



\---



\## Secondary Buyer



Chief Compliance Officer



Responsibilities:



\* Policy enforcement

\* Regulatory obligations

\* Evidence preservation



Parmana provides traceable authorization records.



\---



\## Technical Validator



Chief Technology Officer



Responsibilities:



\* Architecture

\* Integration

\* Security

\* Platform governance



Parmana provides a deployable authorization layer without replacing existing systems.



\---



\# Deployment Model



Parmana sits between decision generation and execution.



```text

AI System

&#x20;   ↓

Parmana

&#x20;   ↓

Execution System

```



Parmana does not replace:



\* ERP systems

\* Banking systems

\* Claims systems

\* Workflow systems



Parmana verifies authorization before those systems execute actions.



\---



\# Compliance Implications



Execution Trust Infrastructure supports evidence generation for:



\* SOC 2

\* ISO 27001

\* Internal Controls

\* Risk Reviews

\* Regulatory Examinations



Parmana is not a compliance product.



Parmana produces authorization evidence that compliance programs can consume.



\---



\# Long-Term Vision



The internet created identity infrastructure.



Cloud computing created compute infrastructure.



AI created intelligence infrastructure.



Autonomous execution requires authority infrastructure.



Parmana is designed to become that authority infrastructure layer.



Organizations decide what authority means.



Organizations decide which signals are trusted.



Parmana verifies that trusted signals satisfy organizational policy before execution occurs.



\# Canonical Parmana Statement



Humans define authority.



Organizations define policy.



Parmana makes authority verifiable and enforceable before execution.



Autonomous systems may generate actions.



Parmana verifies whether those actions are authorized before they occur.



\---



\# Conclusion



As autonomous systems gain the ability to perform real-world actions, organizations require infrastructure that establishes authorization before execution.



The Execution Trust Chain provides a verifiable path from request to execution through attestations, verification receipts, execution tokens, execution records, and transparency logging.



Execution Trust Chain v0.4 demonstrates that authority can be represented, verified, preserved, and retrieved as a first-class system artifact.



This architecture establishes the foundation for trustworthy autonomous execution in enterprise environments.



