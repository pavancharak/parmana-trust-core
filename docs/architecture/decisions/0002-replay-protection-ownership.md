\# ADR-0002: Replay Protection Ownership



\## Status



Accepted



\## Context



Parmana Trust Core provides:



\* Authority evaluation

\* Policy enforcement

\* Attestation generation

\* Verification

\* Execution lineage



During architecture review, replay protection ownership was evaluated.



Several candidate replay identities were considered:



\* receiptId

\* decisionId

\* subjectId

\* businessTransactionId

\* executionFingerprint



Analysis showed that authority evaluation and replay protection solve different problems.



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



Replay enforcement therefore belongs to the execution boundary and not to the authority core.



\## Rejected Alternatives



\### Receipt-Based Replay Protection



A replay model based on receiptId was evaluated.



Example:



getExecutionByReceipt(receiptId)



Under this model, a receipt may be executed only once.



This approach was rejected because receiptId is a governance artifact rather than a business operation identifier.



A business operation may legitimately produce multiple governance artifacts over time.



Example:



Business Operation

→ Authority Decision A

→ Receipt A



Business Operation

→ Authority Decision B

→ Receipt B



Preventing reuse of Receipt A does not prevent duplicate execution of the underlying business operation.



Receipt replay protection and business replay protection are different concerns.



\### Decision-Based Replay Protection



A replay model based on decisionId was evaluated.



This approach was rejected because decisionId represents a specific authority evaluation instance.



Multiple evaluations of the same business operation produce different decision identifiers.



Decision identifiers therefore cannot serve as stable replay identities.



\### Subject-Based Replay Protection



A replay model based on subjectId was evaluated.



This approach was rejected because subjectId was reclassified as optional lineage metadata.



Authority evaluation does not depend on subjectId.



Lineage identifiers are outside decision scope and are not replay identities.



\### Trust-Core-Owned Replay Protection



A replay model in which Parmana Trust Core owns replay enforcement was evaluated.



This approach was rejected because replay boundaries are business-defined.



Only the business system can determine whether two requests represent the same business operation.



Parmana therefore cannot authoritatively define replay identity.



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



\## Architectural Boundary



Parmana Trust Core ends at:



Task

→ Authority Decision

→ Attestation

→ Verification Receipt

→ Execution Record



Replay protection begins at:



Business Transaction Identity

→ Execution Gateway

→ System of Record



Authority and replay are intentionally separated.



Parmana determines whether an action is authorized.



Business systems determine whether an operation has already been executed.



