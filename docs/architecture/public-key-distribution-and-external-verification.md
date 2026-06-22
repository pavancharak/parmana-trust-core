\# Public Key Distribution and External Verification



\## Status



Planned



\## Objective



Allow any external system to verify Parmana Execution Tokens without calling Parmana.



Verification must be possible using only:



\* Execution Token

\* Parmana Public Key



This removes runtime trust dependencies on Parmana infrastructure and enables independent verification.



\---



\# Problem



Most authorization systems require:



Verifier

→ Call Vendor API

→ Receive Validation Result



This creates:



\* Vendor dependency

\* Availability dependency

\* Runtime trust dependency



Parmana instead enables:



Verifier

→ Public Key

→ Local Verification



No Parmana API call is required.



\---



\# Trust Model



Parmana signs Execution Tokens using the Parmana Trust Anchor private key.



External systems verify Execution Tokens using the corresponding public key.



Trust is established through cryptographic verification rather than network trust.



\---



\# Public Key Endpoint



\## Endpoint



```http

GET /trust-anchor/public-key

```



\## Purpose



Publish the active Parmana Trust Anchor public key for independent verification.



\---



\# Response



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "rootVersion": "1",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----"

}

```



\---



\# Verification Flow



\## Token Issuance



Parmana:



Execution Token

→ Sign Payload

→ Return Signed Token



\---



\## External Verification



Verifier:



Retrieve Public Key

→ Receive Execution Token

→ Verify Signature

→ Verify Expiration

→ Verify Intent Binding

→ Authorize Execution



No Parmana API call is required during verification.



\---



\# Verification Inputs



\## Execution Token



```json

{

&#x20; "tokenId": "...",

&#x20; "receiptId": "...",

&#x20; "decisionId": "...",

&#x20; "taskId": "...",

&#x20; "policyId": "...",

&#x20; "policyVersion": "...",

&#x20; "intentHash": "...",

&#x20; "issuedAt": "...",

&#x20; "expiresAt": "...",

&#x20; "signature": "..."

}

```



\## Trust Anchor



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "rootVersion": "1",

&#x20; "publicKey": "..."

}

```



\---



\# Verification Algorithm



\## Step 1: Verify Signature



```text

verify(

&#x20; payload,

&#x20; signature,

&#x20; publicKey

)

```



Result must be:



```text

true

```



\---



\## Step 2: Verify Expiration



```text

expiresAt > currentTime

```



Result must be:



```text

true

```



\---



\## Step 3: Verify Intent



Compute:



```text

actualIntentHash =

SHA256(executionIntent)

```



Compare:



```text

actualIntentHash

==

token.intentHash

```



Result must be:



```text

true

```



\---



\# Authorization Rule



Execution is authorized only if:



```text

SignatureValid

AND

TokenNotExpired

AND

IntentHashMatches

```



Otherwise:



```text

Authorization = DENIED

```



\---



\# External Verification Example



```javascript

const valid =

&#x20; verifyExecutionToken(

&#x20;   token,

&#x20;   publicKey

&#x20; );



if (!valid) {

&#x20; throw new Error(

&#x20;   "Invalid execution token"

&#x20; );

}

```



The verifier must be able to execute this process entirely offline.



\---



\# Security Properties



\## Independent Verification



Verification does not require Parmana infrastructure.



\---



\## Cryptographic Authenticity



Only holders of the Parmana Trust Anchor private key can issue valid Execution Tokens.



\---



\## Tamper Detection



Any modification of:



\* decisionId

\* receiptId

\* taskId

\* policyId

\* policyVersion

\* intentHash

\* expiresAt



invalidates the signature.



\---



\## Intent Integrity



Execution remains cryptographically bound to the originally approved intent.



\---



\# Canonical Principle



Parmana authorization artifacts must be independently verifiable using Parmana-published trust anchors without calling Parmana infrastructure.



\---



\# Future Enhancements



\## Trust Anchor Metadata



Support:



\* keyId

\* rootVersion

\* createdAt

\* expiresAt



\---



\## Trust Anchor Discovery



Support retrieval from:



```http

GET /trust-anchor/public-key

```



and future trust root distribution mechanisms.



\---



\## Trust Federation



Support multiple trusted authorities and verification chains.



\---



\# Relationship to Execution Trust Chain



Execution Intent

→ Decision Attestation

→ Verification Receipt

→ Execution Token

→ Public Key Verification

→ Execution Authorization



Public key distribution enables independent verification of the trust chain without requiring Parmana participation.



\---



\# Next Milestone



Key Rotation and Trust Root Lifecycle



Introduce:



\* keyId support

\* rootVersion support

\* trust root rotation

\* trust root revocation

\* backward-compatible verification



