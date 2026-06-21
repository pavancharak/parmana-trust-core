\# ADR-0002: Replay Protection Ownership



\## Status



Accepted



\## Context



Parmana Trust Core provides authority evaluation, attestation, verification, and execution lineage.



During architecture review, replay protection ownership was evaluated.



Several candidate replay identities were considered:



\* receiptId

\* decisionId

\* subjectId

\* businessTransactionId

\* executionFingerprint



Analysis showed that replay protection and authority evaluation solve different problems.



Authority answers:



"Is this action authorized?"



Replay answers:



"Has this business operation already executed?"



These concerns belong to different domains.



\## Decision



Replay protection is outside Parmana Trust Core.



Parmana Trust Core SHALL NOT own:



\* businessTransactionId

\* idempotencyKey

\* executionFingerprint

\* replay stores

\* duplicate business operation detection



Parmana Trust Core SHALL own:



\* authority evaluation

\* policy enforcement

\* attestation generation

\* verification

\* execution lineage



Business systems SHALL own replay protection using business-defined identifiers.



Examples include:



\* businessTransactionId

\* idempotencyKey

\* executionFingerprint



\## Rationale



Replay identity is business-specific.



Parmana cannot determine whether:



\* PAYMENT-123

\* ORDER-456

\* REFUND-789

\* ACCESS-REQUEST-321



represent duplicate business operations.



Only the business system can define replay boundaries.



Therefore replay enforcement belongs to the execution boundary and not to the authority core.



\## Consequences



\### Authority Domain



Authority decisions are determined by:



\* taskId

\* policy

\* schema

\* trusted signals



\### Lineage Domain



Lineage artifacts may contain:



\* subjectId

\* decisionId

\* receiptId

\* executionId



Lineage identifiers are not replay identifiers.



\### Replay Domain



Replay protection is enforced outside Parmana Trust Core.



Business systems are responsible for detecting and preventing duplicate execution of business operations.



\## Invariants



Replay ownership SHALL NOT influence:



\* authority evaluation

\* policy selection

\* attestation generation

\* verification outcomes



Authority and replay remain separate architectural concerns.



