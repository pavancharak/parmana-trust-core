\# ADR-0001: Subject ID Reclassification



\## Status



Proposed



\## Context



The Parmana Trust Core currently requires `subjectId` in the Evaluate API.



Repository analysis established the following:



1\. Authority evaluation does not use `subjectId`.



Authority decisions are derived from:



\* taskId

\* policy

\* schema

\* signals



Changing `subjectId` does not change the authority decision.



2\. `subjectId` is propagated through the trust chain.



Current lineage:



Subject → Authority Decision → Attestation → Verification Receipt → Execution Record



3\. Replay protection is currently enforced using `receiptId`.



Replay protection is therefore attached to a governance artifact rather than a business operation identifier.



4\. Business replay identity is a separate concern.



Business systems may require identifiers such as:



\* businessTransactionId

\* executionFingerprint

\* idempotencyKey



These identifiers belong to the execution domain and are owned by the calling system.



\## Problem



The current repository treats `subjectId` as a required authority input even though authority evaluation does not depend on it.



This creates ambiguity regarding:



\* authority identity

\* business identity

\* replay identity



\## Decision



`subjectId` is reclassified as lineage metadata.



Trust Core SHALL NOT use `subjectId` for:



\* authority evaluation

\* policy selection

\* replay protection

\* execution authorization



Trust Core MAY propagate `subjectId` through lineage artifacts when supplied.



Replay protection SHALL be treated as a separate concern outside Trust Core.



Replay identity SHALL be provided by the business system using business-owned identifiers.



Examples include:



\* businessTransactionId

\* executionFingerprint

\* idempotencyKey



\## Consequences



\### Authority Domain



Authority evaluation depends only on:



\* taskId

\* policy

\* schema

\* signals



\### Lineage Domain



Lineage artifacts may contain:



\* subjectId

\* decisionId

\* attestationId

\* receiptId

\* executionId



\### Replay Domain



Replay protection is not part of authority evaluation.



Replay identity is external to Trust Core and owned by the calling business system.



\## Future Work



1\. Make `subjectId` optional in API contracts.

2\. Remove mandatory validation requiring `subjectId`.

3\. Preserve backward compatibility for existing clients.

4\. Define replay enforcement at the execution boundary outside Trust Core.



