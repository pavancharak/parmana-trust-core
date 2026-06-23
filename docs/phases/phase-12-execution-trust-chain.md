\# Phase 12 — Execution Trust Chain



\## Objective



Construct and retrieve the complete chain of evidence linking authorization to execution.



This phase enables Parmana to answer:



```text

What exactly happened?

```



using verifiable evidence collected throughout the lifecycle.



\---



\# Why The Trust Chain Exists



Most systems can answer:



```text

Who approved?

```



Some systems can answer:



```text

When was it approved?

```



Few systems can answer:



```text

What exactly was authorized?



What evidence supported the authorization?



What execution occurred?



Did execution follow authorization?

```



The Execution Trust Chain exists to answer those questions.



\---



\# Canonical Principle



Traditional systems preserve approvals.



Parmana preserves authorization-to-execution lineage.



\---



\# Canonical Parmana Lineage



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Decision

&#x20;  ↓

Intent

&#x20;  ↓

Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Token

&#x20;  ↓

Execution Record

```



This chain represents the complete authorization lifecycle.



\---



\# Canonical Trust Model



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Execution

```



The trust chain preserves evidence for every step.



\---



\# Trust Chain Endpoint



Endpoint:



```http

GET /trust-chain/{businessTransactionId}

```



Purpose:



Retrieve the complete chain associated with a business transaction.



\---



\# Route



Implementation:



```text

packages/server/src/routes/trust-chain.ts

```



Schema:



```text

packages/server/src/schemas/trust-chain-response.ts

```



OpenAPI:



```text

GET /trust-chain/{businessTransactionId}

```



\---



\# Trust Chain Identity



The chain is anchored by:



```text

businessTransactionId

```



Example:



```text

txn-001

```



Every downstream artifact references this business context.



\---



\# Current Response Structure



Example:



```json

{

&#x20; "businessTransactionId": "txn-001",



&#x20; "attestationId": "att-001",



&#x20; "verificationId": "ver-001",



&#x20; "executionId": "exec-001"

}

```



\---



\# Why Business Transaction Identity Matters



Without a common identifier:



```text

Attestation

Verification

Execution

```



remain isolated records.



With a common identifier:



```text

Business Transaction

&#x20;        ↓

Attestation

&#x20;        ↓

Verification

&#x20;        ↓

Execution

```



becomes reconstructable.



\---



\# Trust Chain Construction



The trust chain combines evidence from:



```text

Evaluation

Attestation

Verification

Execution

```



into a single retrievable lineage.



Flow:



```text

Business Transaction

&#x20;        ↓

Locate Attestation

&#x20;        ↓

Locate Verification

&#x20;        ↓

Locate Execution

&#x20;        ↓

Build Trust Chain

```



\---



\# Current Lineage Components



Current trust chain includes:



```text

businessTransactionId

attestationId

verificationId

executionId

```



\---



\# Future Lineage Expansion



Parmana roadmap lineage:



```text

subjectId

taskId

policyId

policyVersion

decisionId

receiptId

executionId

```



Future chain:



```json

{

&#x20; "subjectId": "...",

&#x20; "taskId": "...",

&#x20; "policyId": "...",

&#x20; "policyVersion": "...",

&#x20; "decisionId": "...",

&#x20; "receiptId": "...",

&#x20; "executionId": "..."

}

```



This is aligned with the Execution Trust Chain architecture.



\---



\# Relationship To Attestation



Attestation answers:



```text

What was authorized?

```



\---



\# Relationship To Verification



Verification answers:



```text

Was the authorization authentic?

```



\---



\# Relationship To Execution



Execution answers:



```text

What actually happened?

```



\---



\# Trust Chain Significance



The trust chain connects:



```text

Authorization Evidence

```



to



```text

Execution Evidence

```



This is the core Parmana capability.



\---



\# The Trust Gap



Traditional systems often stop at:



```text

Decision

```



Parmana continues through:



```text

Intent

Attestation

Verification

Execution

```



This closes the gap between:



```text

Authorized

```



and



```text

Executed

```



\---



\# Questions The Trust Chain Can Answer



```text

What task was requested?



Which policy was evaluated?



What decision was made?



What intent was authorized?



Was the attestation verified?



Was execution authorized?



Did execution occur?

```



\---



\# Retrieval Flow



Request:



```http

GET /trust-chain/txn-001

```



Flow:



```text

Business Transaction ID

&#x20;          ↓

Find Evidence

&#x20;          ↓

Build Chain

&#x20;          ↓

Return Lineage

```



\---



\# Failure Scenario



Request:



```http

GET /trust-chain/non-existent

```



Response:



```http

404 Not Found

```



Meaning:



```text

Trust Chain Not Found

```



\---



\# Dependency Chain



```text

Task

&#x20;  ↓

Policy

&#x20;  ↓

Signals

&#x20;  ↓

Decision

&#x20;  ↓

Intent

&#x20;  ↓

Attestation

&#x20;  ↓

Verification

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Token

&#x20;  ↓

Execution Record

&#x20;  ↓

Execution Trust Chain

```



Without the trust chain:



```text

Evidence Exists



Lineage Does Not

```



\---



\# Validation Example



Request:



```http

GET /trust-chain/{businessTransactionId}

```



Expected Response:



```json

{

&#x20; "businessTransactionId": "txn-001",

&#x20; "attestationId": "att-001",

&#x20; "verificationId": "ver-001",

&#x20; "executionId": "exec-001"

}

```



\---



\# Operational Meaning



A successful trust chain retrieval means:



```text

Authorization Evidence Located



Execution Evidence Located



Lineage Successfully Reconstructed

```



\---



\# Phase Completion Criteria



Phase 12 is complete when:



```text

✓ businessTransactionId available

✓ Attestation linked

✓ Verification linked

✓ Execution linked

✓ Trust chain retrievable

✓ End-to-end lineage preserved

```



\---



\# Output Of Phase 12



```text

Authorization-To-Execution Lineage Retrieved

```



\---



\# Canonical Outcome



The Execution Trust Chain preserves the complete path from authorization to execution.



It enables Parmana to answer:



"What exactly was supposed to happen?"



and



"What actually happened?"



using verifiable evidence rather than assumptions.



