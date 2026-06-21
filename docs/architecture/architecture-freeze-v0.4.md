\# Parmana Trust Core v0.4.0 Architecture Freeze



\## Status



LOCKED



Date: 2026-06-21



Version: v0.4.0



\---



\## Core Product Identity



Parmana prevents unauthorized autonomous actions.



Parmana verifies human-defined authority and organizational policy before autonomous systems act.



Parmana is not an execution engine.



Parmana is not an agent framework.



Parmana is not a workflow engine.



Parmana verifies authority and policy before execution occurs.



\---



\## Execution Trust Chain



Canonical lineage:



```text

Subject

&#x20; ↓

Task

&#x20; ↓

Authority Decision

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



\---



\## Required Lineage Identifiers



Every trust chain preserves:



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



\---



\## Trust Chain Components



\### Decision Attestation



Purpose:



Cryptographically bind decision outcome to authority and policy context.



Status:



IMPLEMENTED



\---



\### Verification Receipt



Purpose:



Verify attestation integrity and policy requirements.



Status:



IMPLEMENTED



\---



\### Execution Token



Purpose:



Authorize execution from a verified receipt.



Status:



IMPLEMENTED



\---



\### Execution Record



Purpose:



Record completed execution and preserve lineage.



Status:



IMPLEMENTED



\---



\### Trust Chain Retrieval



Purpose:



Retrieve complete execution lineage.



Status:



IMPLEMENTED



\---



\### Transparency Log



Purpose:



Append verification receipt hashes for independent verification.



Status:



IMPLEMENTED



\---



\## APIs



Implemented:



```text

POST /attest

POST /verify

POST /token

POST /execute



POST /override

POST /override/attest

POST /override/verify



GET /trust-chain/{businessTransactionId}



GET /health

GET /version

```



\---



\## SDKs



TypeScript SDK



Status: VALIDATED



Python SDK



Status: PUBLISHED



Go SDK



Status: VALIDATED



\---



\## OpenAPI



Specification:



```text

docs/openapi/parmana-trust-core-v0.4.yaml

```



Status:



VALIDATED



\---



\## Whitepaper



Execution Trust Chain™



Verifiable Authority and Policy Enforcement Before Autonomous Actions



Status:



APPROVED



\---



\## Non-Goals



Parmana does not:



\* Execute business actions

\* Replace systems of record

\* Replace organizational policy

\* Replace authority assignment

\* Act autonomously



\---



\## Frozen Scope



The v0.4 release is considered complete when:



\* Execution Trust Chain is validated

\* OpenAPI specification is published

\* TypeScript SDK is validated

\* Python SDK is published

\* Go SDK is validated

\* Documentation is published



No new architectural primitives are required for v0.4.



