\# Execution Token



\## Purpose



An Execution Token authorizes an execution after a verification receipt has been successfully generated.



Execution Tokens ensure that only verified decisions may proceed to execution.



\---



\## Position in the Trust Chain



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



\## Inputs



Execution Tokens are issued from:



```text

Verification Receipt

```



Required identifiers:



```text

receiptId

decisionId

taskId

policyId

policyVersion

businessTransactionId

```



\---



\## Output



Execution Token:



```json

{

&#x20; "tokenId": "...",

&#x20; "receiptId": "...",

&#x20; "decisionId": "...",

&#x20; "taskId": "...",

&#x20; "policyId": "...",

&#x20; "policyVersion": "...",

&#x20; "issuedAt": "...",

&#x20; "expiresAt": "...",

&#x20; "signature": "..."

}

```



\---



\## Security Properties



\### Lineage Binding



The token is bound to:



\* Decision

\* Policy

\* Receipt

\* Task



\### Expiration



Execution Tokens are short-lived.



Expired tokens must not authorize execution.



\### Signature Protection



Execution Tokens are cryptographically signed.



Modification invalidates authorization.



\---



\## Responsibility Boundary



Parmana does not execute actions.



Parmana issues authorization for execution.



Execution is performed by the underlying system.



\---



\## Status



Implemented



Validated in:



\* REST API

\* TypeScript SDK

\* Python SDK

\* Go SDK



