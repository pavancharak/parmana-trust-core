\# ADR-0004: Business Transaction Binding



\## Status



Accepted



\## Date



2026-06-21



\## Context



Parmana evaluates authority before execution.



Authority evaluation determines whether a requested task is permitted according to organizational policy and trusted signals.



Authority decisions must remain deterministic and reproducible.



The authority evaluation model is defined as:



```text

Decision =

f(taskId, policy, trusted signals)

```



The decision outcome must depend only on authority inputs.



Business transactions such as payments, refunds, account actions, approvals, access grants, and operational workflows require traceability from authorization through execution.



Without a stable business transaction identifier, an organization cannot reliably prove that:



```text

The transaction approved

=

The transaction attested

=

The transaction verified

=

The transaction executed

```



This creates auditability, compliance, and forensic investigation gaps.



\## Problem



Authority decisions alone are insufficient for execution traceability.



A decision may be approved and later executed, but there must be an explicit identifier that binds all trust-chain artifacts to the same real-world business transaction.



Examples:



```text

PAYMENT-123

REFUND-456

ACCESS-GRANT-789

```



Without a business transaction identifier, trust-chain artifacts may be linked only through internal identifiers such as:



\- decisionId

\- receiptId

\- executionId



These identifiers describe trust artifacts but do not identify the business action being authorized.



\## Decision



Introduce a mandatory:



```text

businessTransactionId

```



throughout the Parmana trust chain.



The identifier SHALL be required on authority evaluation requests.



The identifier SHALL be propagated and preserved through:



```text

Business Transaction

&#x20;       ↓

Authority Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



The identifier SHALL be persisted and retrievable from every trust-chain artifact.



\## Authority Evaluation Scope



Authority evaluation remains defined as:



```text

Decision =

f(taskId, policy, trusted signals)

```



The following inputs influence authority evaluation:



\- taskId

\- policy

\- schema

\- trusted signals



The following inputs do NOT influence authority evaluation:



\- businessTransactionId

\- decisionId

\- receiptId

\- executionId

\- other lineage identifiers



\## Non-Goal



The business transaction identifier SHALL NOT participate in authority evaluation logic.



Changing:



```text

PAYMENT-123

```



to:



```text

PAYMENT-456

```



MUST NOT change an authority decision when all authority inputs remain identical.



The identifier is trust-chain scope metadata.



It is not an authorization factor.



\## Rationale



\### Transaction Binding



Provides a stable reference for the real-world transaction being authorized.



\### Auditability



Allows auditors to trace a transaction through all trust-chain artifacts.



\### Execution Integrity



Ensures that the approved transaction is the same transaction that is executed.



\### Compliance Evidence



Provides an explicit linkage between business actions and authorization artifacts.



\### Replay Support



Creates a stable anchor for future replay, verification, and forensic workflows.



\## Consequences



\### Positive



\- End-to-end transaction traceability.

\- Stronger audit evidence.

\- Stronger execution lineage.

\- Explicit approval-to-execution binding.

\- Improved replay support.

\- Improved forensic investigation capabilities.



\### Negative



\- Additional required field on authority requests.

\- Additional persistence requirements.

\- Additional propagation requirements across trust-chain artifacts.



\## Invariants



\### INV-180



Authority decisions are deterministic.



Identical task, policy, and trusted signals MUST produce identical decisions.



\### INV-181



Lineage identifiers are outside decision scope and MUST NOT influence authority evaluation.



\### Business Transaction Binding Rule



The business transaction identifier MUST be preserved across:



```text

Decision

Attestation

Verification Receipt

Execution Record

```



The identifier MUST remain retrievable from every trust-chain artifact.



Loss of the identifier constitutes a trust-chain lineage violation.



\## Trust Chain



The canonical lineage becomes:



```text

Business Transaction

&#x20;       ↓

Authority Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



Example:



```text

PAYMENT-123

&#x20;       ↓

Approved

&#x20;       ↓

Attested

&#x20;       ↓

Verified

&#x20;       ↓

Executed

```



The business transaction identifier provides continuity across the entire trust chain.



\## Implementation



The following artifacts include:



```text

businessTransactionId

```



\### Evaluation Request



Required field.



\### Evaluation Result



Persisted with authority decision.



\### Decision Attestation



Included in signed attestation content.



\### Verification Receipt



Included in receipt generation and verification.



\### Execution Record



Persisted with execution evidence.



\## Future Considerations



Business transaction identifiers provide the foundation for future replay capabilities.



Replay systems may use:



```text

businessTransactionId

```



to reconstruct:



\- authority inputs

\- policy versions

\- verification evidence

\- execution outcomes



for deterministic verification and forensic analysis.



\## Summary



Parmana introduces a mandatory business transaction identifier that is preserved across the entire trust chain.



The identifier binds authorization artifacts to the real-world transaction being authorized while remaining outside the authority evaluation model.



Authority decisions remain deterministic:



```text

Decision =

f(taskId, policy, trusted signals)

```



while transaction lineage becomes:



```text

businessTransactionId

&#x20;       ↓

Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Receipt

&#x20;       ↓

Execution

```



This establishes end-to-end transaction traceability without altering authority semantics.



\## Architecture Notes



\### Separation of Concerns



Parmana separates:



1\. Authority evaluation

2\. Transaction lineage

3\. Execution evidence



Authority evaluation determines whether an action is allowed.



Transaction lineage identifies which business action is being discussed.



Execution evidence proves what actually occurred.



These concerns MUST remain independent.



\### Authority Boundary



Authority decisions SHALL be computed exclusively from:



```text

taskId

policy

trusted signals

```



The following identifiers SHALL NOT influence authorization outcomes:



```text

businessTransactionId

decisionId

receiptId

executionId

attestationId

```



These identifiers exist solely for lineage and auditability.



\### Lineage Boundary



Lineage identifiers provide traceability across trust-chain artifacts.



Examples:



```text

businessTransactionId

decisionId

receiptId

executionId

```



Lineage identifiers SHALL be preserved.



Lineage identifiers SHALL NOT alter authority decisions.



\### Execution Boundary



Execution occurs only after:



```text

Authority Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution

```



Execution records SHALL preserve:



```text

businessTransactionId

decisionId

receiptId

executionId

```



to maintain end-to-end traceability.



\## Compliance Implications



Business transaction binding supports:



\- Audit evidence collection

\- Internal control verification

\- Forensic investigations

\- Regulatory examinations

\- Policy compliance reviews



The binding allows auditors to reconstruct:



```text

What transaction?

Who approved it?

Under which policy?

Using which signals?

Which receipt authorized execution?

What execution occurred?

```



from preserved trust-chain artifacts.



\## Replay Readiness



This ADR establishes the minimum lineage requirements necessary for future replay capabilities.



Future replay systems may use:



```text

businessTransactionId

```



to retrieve:



```text

Decision

Attestation

Verification Receipt

Execution Record

```



and reconstruct the complete authorization history for a transaction.



Replay functionality is outside the scope of this ADR and is addressed separately.



\## Related Decisions



\- ADR-0001: Subject ID Reclassification

\- ADR-0002: Execution Trust Chain

\- ADR-0003: Authority Evaluation Model



\## Decision Statement



Parmana SHALL require a business transaction identifier and preserve it across all trust-chain artifacts.



The business transaction identifier SHALL provide transaction lineage and auditability.



The business transaction identifier SHALL NOT influence authority evaluation.



Authority remains:



```text

Decision =

f(taskId, policy, trusted signals)

```



Lineage remains:



```text

businessTransactionId

&#x20;       ↓

Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



\## Canonical Lineage Model



Business transaction lineage is independent from authority evaluation.



The canonical lineage chain is:



```text

Business Transaction

&#x20;       ↓

Authority Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



The following identifiers SHALL be preserved:



```text

businessTransactionId

decisionId

receiptId

executionId

```



\### Business Transaction



Represents the real-world action being authorized.



Examples:



```text

PAYMENT-123

REFUND-456

VENDOR-ONBOARDING-789

```



The business transaction is the root lineage identifier.



\### Authority Decision



Represents the authorization outcome.



Required lineage:



```text

businessTransactionId

decisionId

```



\### Attestation



Represents signed evidence of the authority decision.



Required lineage:



```text

businessTransactionId

decisionId

```



\### Verification Receipt



Represents verification evidence that the attestation and policy are valid.



Required lineage:



```text

businessTransactionId

decisionId

receiptId

```



\### Execution Record



Represents evidence of execution.



Required lineage:



```text

businessTransactionId

decisionId

receiptId

executionId

```



\## Retrieval Requirements



Parmana SHALL support retrieval by:



```text

businessTransactionId

decisionId

receiptId

executionId

```



Retrieval by business transaction identifier is the primary audit workflow.



Example:



```text

PAYMENT-123

&#x20;       ↓

Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Receipt

&#x20;       ↓

Execution

```



A single query using the business transaction identifier SHALL allow reconstruction of the complete trust chain.



\## Replay Dependency



Replay depends on lineage preservation.



A replay-capable system must be able to reconstruct:



```text

Business Transaction

Decision

Policy Version

Trusted Signals

Attestation

Verification Receipt

Execution Record

```



for a specific:



```text

businessTransactionId

```



This ADR establishes the lineage requirements necessary for future replay functionality.



Replay semantics are defined separately in ADR-0005.



\## Replay Preparation



The trust chain preserves authorization evidence.



Replay exists to answer a different question:



```text

Would Parmana produce the same decision again?

```



Replay is an audit and verification capability.



Replay is not execution.



Replay is not authorization.



Replay is not re-approval.



Replay reconstructs historical authority evaluation conditions and verifies that the recorded decision remains explainable.



\### Replay Objective



Given:



```text

businessTransactionId

```



Parmana should be able to reconstruct:



```text

Task

Policy Version

Schema Version

Trusted Signals

Decision

Attestation

Verification Receipt

Execution Record

```



and determine whether:



```text

Recorded Decision

=

Replayed Decision

```



\### Replay Inputs



Replay requires preservation of:



```text

businessTransactionId

taskId

policyId

policyVersion

decisionId

receiptId

executionId

```



In future versions replay may additionally require:



```text

schemaVersion

signalEvidence

signalHashes

```



to support stronger reproducibility guarantees.



\### Replay Outcome



Replay produces one of:



```text

MATCH

```



The reconstructed decision matches the recorded decision.



```text

MISMATCH

```



The reconstructed decision differs from the recorded decision.



```text

INSUFFICIENT\\\_EVIDENCE

```



Required replay inputs are unavailable.



\### Replay Scope



Replay evaluates:



```text

Authority Decision

```



Replay does not perform:



```text

Execution

Payment Release

External System Actions

State Changes

```



Replay is a verification activity only.



\### Historical Reconstruction Principle



Replay SHALL use historical trust-chain artifacts.



Replay SHALL NOT use current policy versions when historical policy versions exist.



Replay SHALL NOT use current schemas when historical schemas exist.



Replay SHALL reconstruct the original evaluation conditions as accurately as possible.



\### Replay Dependency Graph



Replay depends on preservation of:



```text

Business Transaction

\&#x20;       ↓

Decision

\&#x20;       ↓

Attestation

\&#x20;       ↓

Receipt

\&#x20;       ↓

Execution

```



Loss of any required lineage artifact may prevent deterministic replay.



\### Future ADR



Replay semantics are defined in:



```text

ADR-0005: Replay and Re-execution Model

```



This ADR only establishes the lineage prerequisites required to support replay.



