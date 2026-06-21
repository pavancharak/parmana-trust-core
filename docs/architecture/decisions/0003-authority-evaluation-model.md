\# ADR-0003: Authority Evaluation Model



\## Status



Accepted



\## Context



Parmana Trust Core evaluates whether an action is authorized before execution.



During architecture review, the authority evaluation boundary was analyzed.



The following observations were verified from implementation:



1\. Authority evaluation is performed by the authority engine.



2\. Authority decisions are derived from:



\* taskId

\* policy

\* schema

\* trusted signals



3\. Authority evaluation does not depend on:



\* subjectId

\* decisionId

\* receiptId

\* executionId



4\. Identical authority inputs produce identical authority outcomes.



5\. Lineage identifiers are propagated through the trust chain but are outside decision scope.



These findings resulted in:



\* INV-180: Authority decisions are deterministic.

\* INV-181: Lineage identifiers are outside decision scope.



\## Problem



Authority systems frequently mix:



\* authority identity

\* lineage identity

\* execution identity

\* business identity



This creates ambiguity regarding what information is actually used to determine authorization.



Parmana requires a precise definition of authority evaluation.



\## Decision



Authority evaluation is defined as:



Authority Decision = f(Task, Policy, Schema, Trusted Signals)



Where:



Task

→ identifies the operation being evaluated



Policy

→ defines the authority requirements for the task



Schema

→ defines the required signals and structure



Trusted Signals

→ provide evidence used to satisfy policy requirements



Authority decisions SHALL be derived exclusively from these inputs.



\## Non-Authority Inputs



The following identifiers SHALL NOT influence authority evaluation:



\* subjectId

\* decisionId

\* attestationId

\* receiptId

\* executionId



These identifiers are lineage artifacts.



They exist for traceability and auditability.



They do not participate in policy evaluation.



\## Determinism



Authority evaluation SHALL be deterministic.



Given:



\* identical task

\* identical policy

\* identical schema

\* identical trusted signals



Parmana SHALL produce the same:



\* decision

\* policyId

\* policyVersion

\* reasons



Operational identifiers may differ.



Examples include:



\* decisionId

\* attestation identifiers

\* receipt identifiers



These identifiers are generated after evaluation and are outside decision scope.



\## Authority Domain



Authority evaluation consists of:



Task

→ Policy

→ Schema

→ Trusted Signals

→ Decision



Authority answers a single question:



"Is this action authorized?"



\## Lineage Domain



Lineage consists of:



\* subjectId

\* decisionId

\* attestation

\* receiptId

\* executionId



Lineage answers:



"What happened?"



Lineage does not answer:



"Is this action authorized?"



\## Business Domain



Business systems define:



\* businessTransactionId

\* idempotencyKey

\* executionFingerprint



Business systems answer:



"Has this operation already been executed?"



Business identity is outside authority evaluation.



\## Consequences



Authority evaluation remains independent of:



\* replay protection

\* execution systems

\* business transaction identifiers

\* lineage identifiers



This separation preserves determinism and allows authority decisions to be independently reproduced and verified.



\## Mathematical Model



Authority Decision = f(Task, Policy, Schema, Trusted Signals)



Authority Decision ≠ f(Subject Identity)



Authority Decision ≠ f(Lineage Identity)



Authority Decision ≠ f(Receipt Identity)



Authority Decision ≠ f(Business Transaction Identity)



\## Architectural Boundary



Parmana Trust Core determines whether an action is authorized.



Parmana Trust Core does not determine:



\* whether a business operation is duplicated

\* whether an operation has already executed

\* whether a transaction identifier has been reused



Those responsibilities belong to business systems outside the authority boundary.



\## Authority Trust Chain



Parmana Trust Core operates as a trust chain.



Task

→ Policy

→ Schema

→ Trusted Signals

→ Authority Decision

→ Attestation

→ Verification Receipt

→ Execution Record



Each stage depends on the output of the previous stage.



Authority evaluation occurs before attestation.



Attestation occurs before verification.



Verification occurs before execution.



Execution lineage is generated after execution.



\## Responsibility Separation



\### Authority Engine



Responsibilities:



\* evaluate policy

\* evaluate trusted signals

\* produce authority decisions



Does not:



\* execute actions

\* perform business replay protection

\* manage business transaction identifiers



\### Attestation Layer



Responsibilities:



\* bind decisions to evidence

\* create verifiable trust artifacts

\* support independent verification



Does not:



\* determine authority

\* execute actions



\### Verification Layer



Responsibilities:



\* verify attestations

\* verify trust artifacts

\* issue verification receipts



Does not:



\* determine authority

\* perform business replay protection



\### Execution Layer



Responsibilities:



\* consume verified authorization

\* record execution lineage

\* preserve auditability



Does not:



\* determine authority

\* define business replay identity



\### Business Systems



Responsibilities:



\* define businessTransactionId

\* define idempotency boundaries

\* prevent duplicate business operations



Business systems remain the system of record for execution semantics.



\## Trust Core Principle



Parmana does not execute authority.



Parmana evaluates authority.



Parmana does not execute business operations.



Parmana verifies that business operations are authorized before execution.



Execution is performed by the underlying system of record.



\## Canonical Statement



Humans define authority.



Organizations define policy.



Trusted signals provide evidence.



Parmana evaluates policy against trusted signals before execution.



Parmana prevents unauthorized autonomous actions.



\## Business Transaction Identity



Parmana Trust Core does not define or generate business transaction identifiers.



Every production execution system SHOULD define a mandatory business transaction identifier.



Examples:



\* PAYMENT-123

\* ORDER-456

\* REFUND-789



The business transaction identifier is owned by the business system.



Parmana Trust Core does not evaluate, generate, store, or enforce business transaction identifiers.



Business transaction identifiers exist outside the authority boundary.



They are used by business systems for:



\* idempotency

\* duplicate operation detection

\* replay protection

\* business reconciliation



Authority evaluation remains independent of business transaction identity.



