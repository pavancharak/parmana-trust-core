\# Parmana Execution Trust Chain v1



\## Status



Completed



\## Objective



Ensure execution authorization is cryptographically bound to the exact execution intent that was evaluated, attested, verified, and approved.



Traditional authorization systems prove that a decision occurred.



Parmana proves:



\* Who was authorized

\* What task was authorized

\* Which policy was evaluated

\* Which decision was reached

\* Which execution intent was approved

\* Whether execution matches the approved intent



\---



\# Execution Trust Chain



Subject

→ Authority Evaluation

→ Decision Attestation

→ Verification Receipt

→ Execution Token

→ Execution Authorization

→ Execution



\---



\# Execution Intent



Execution Intent represents the action that an external system intends to perform.



Example:



```json

{

&#x20; "amount": 10000,

&#x20; "currency": "USD",

&#x20; "recipient": "vendor-123"

}

```



Parmana computes:



```text

intentHash = SHA256(executionIntent)

```



Example:



```text

e94419e4fcf311d0ea8b5a0992bbefbd968c1e004212878ad8d33785358c0b65

```



\---



\# Decision Attestation



Authority evaluation produces a signed attestation.



Attestation includes:



\* decisionId

\* businessTransactionId

\* subjectId

\* taskId

\* policyId

\* policyVersion

\* outcome

\* intentHash



Example:



```json

{

&#x20; "intent": {

&#x20;   "hashAlgorithm": "sha256",

&#x20;   "intentHash": "<hash>"

&#x20; }

}

```



The attestation signature binds the approved intent to the decision.



\---



\# Verification Receipt



Independent verification produces a verification receipt.



Receipt contains:



\* receiptId

\* businessTransactionId

\* subjectId

\* decisionId

\* taskId

\* policyId

\* policyVersion

\* intentHash

\* verification result



Example:



```json

{

&#x20; "receiptId": "...",

&#x20; "intentHash": "<hash>",

&#x20; "valid": true

}

```



Verification receipts are persisted in the audit database.



\---



\# Execution Token



A valid receipt may be exchanged for an Execution Token.



Execution Token contains:



\* tokenId

\* receiptId

\* decisionId

\* taskId

\* policyId

\* policyVersion

\* intentHash

\* issuedAt

\* expiresAt

\* signature



Example:



```json

{

&#x20; "tokenId": "...",

&#x20; "intentHash": "<hash>",

&#x20; "signature": "..."

}

```



Execution Tokens are signed by the Parmana Trust Anchor.



\---



\# Authorization Rule



Execution authorization requires:



```text

Hash(actualExecutionIntent)

==

ExecutionToken.intentHash

```



If hashes differ:



```text

Authorization = DENIED

```



If hashes match:



```text

Authorization = APPROVED

```



\---



\# Security Properties



\## Intent Integrity



Execution cannot silently change after approval.



\## Policy Binding



Execution remains tied to:



\* policyId

\* policyVersion



used during evaluation.



\## Receipt Traceability



Every execution token references a verification receipt.



\## Cryptographic Continuity



The same intent hash propagates through:



Execution Intent

→ Attestation

→ Receipt

→ Token



\## Independent Verification



Execution Tokens can be verified without re-running policy evaluation.



\---



\# Milestone Achieved



Execution Intent

→ Intent Hash

→ Decision Attestation

→ Verification Receipt

→ Execution Token



is implemented and validated end-to-end.



This establishes the foundation for intent-bound execution authorization in Parmana.



\---



\# Next Milestones



1\. Public Key Endpoint



&#x20;  \* GET /trust-anchor/public-key



2\. External Verification Example



&#x20;  \* Verify execution tokens using Parmana public key without calling Parmana



3\. Key Rotation



&#x20;  \* keyId support

&#x20;  \* rootVersion support



4\. Trust Root Distribution



&#x20;  \* Trust Anchor publication

&#x20;  \* verifier bootstrap process



