\# Parmana Execution Gateway Architecture v1



\## Purpose



The Execution Gateway is the final enforcement point in the Parmana Trust Chain.



Its responsibility is to determine whether a requested execution is authorized before an external system performs the action.



The gateway does not evaluate policy.



The gateway does not make authority decisions.



The gateway verifies that execution matches a previously authorized intent.



\---



\# Position in the Trust Chain



Subject

→ Authority Evaluation

→ Decision Attestation

→ Verification Receipt

→ Execution Token

→ Execution Gateway

→ External System



The gateway operates after authority evaluation and before execution.



\---



\# Inputs



The gateway receives:



1\. Execution Token

2\. Execution Intent



Example:



Execution Token



```json

{

&#x20; "tokenId": "...",

&#x20; "receiptId": "...",

&#x20; "decisionId": "...",

&#x20; "intentHash": "...",

&#x20; "signature": "..."

}

```



Execution Intent



```json

{

&#x20; "amount": 10000,

&#x20; "currency": "USD",

&#x20; "recipient": "vendor-123"

}

```



\---



\# Authorization Process



Step 1



Compute:



```text

actualHash =

SHA256(executionIntent)

```



Step 2



Extract:



```text

expectedHash =

token.intentHash

```



Step 3



Compare:



```text

actualHash

==

expectedHash

```



If comparison fails:



```text

DENY

```



If comparison succeeds:



```text

CONTINUE

```



\---



\# Token Verification



The gateway verifies:



1\. Signature validity

2\. Token expiration

3\. Trust root validity

4\. Key status



Verification uses the Parmana Trust Anchor public key.



The gateway must not trust unsigned tokens.



\---



\# Authorization Result



Successful authorization requires:



```text

Signature Valid

AND



Token Not Expired

AND



Intent Hash Match

```



Result:



```text

AUTHORIZED

```



Otherwise:



```text

DENIED

```



\---



\# Security Model



\## Intent Substitution Protection



Prevents:



```text

Approved:

$10,000 → Vendor A



Executed:

$100,000 → Vendor B

```



Hash mismatch causes denial.



\---



\## Replay Protection



Future milestone.



Execution Tokens will support:



\* tokenId uniqueness

\* nonce tracking

\* replay detection



\---



\## Trust Anchor Protection



Gateway validates signatures using Parmana Trust Anchor public keys.



Compromised or rotated keys may be revoked.



\---



\# Responsibility Boundaries



Authority Engine



Responsible for:



\* Policy evaluation

\* Authority determination



Execution Gateway



Responsible for:



\* Token validation

\* Intent validation

\* Authorization decision



External System



Responsible for:



\* Actual execution



Examples:



\* Payment processor

\* Banking system

\* ERP

\* Agent runtime

\* Workflow engine



\---



\# Design Principle



Parmana separates:



Authority Verification



from



Execution Authorization



Authority determines whether an action may occur.



Execution Gateway determines whether the requested execution matches the authorized intent.



\---



\# Canonical Rule



Execution is authorized only when the execution request cryptographically matches the intent that was previously evaluated, attested, verified, and tokenized.



\---



\# Future Enhancements



\## Public Key Endpoint



```text

GET /trust-anchor/public-key

```



Allows independent token verification.



\## Key Rotation



Support:



```text

keyId

rootVersion

```



within execution tokens.



\## Trust Federation



Support multiple trusted authorities.



\## Replay Detection



Prevent token reuse.



\## Execution Records



Persist:



Execution Token

→ Execution Result

→ Execution Record

→ Transparency Log



```

```



