\# Parmana Trust Core Database Overview



\## Purpose



The Parmana database stores the evidence required to reconstruct and verify the trust chain between authorization and execution.



The database is not the source of trust.



Cryptographic evidence is the source of trust.



The database preserves that evidence for retrieval, audit, and verification.



\---



\# Core Principle



```text

Decision

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution

&#x20;   ↓

Trust Chain

```



Each stage produces records that may be persisted and later retrieved.



\---



\# Attestations



Purpose:



Store cryptographic evidence generated during authorization evaluation.



Example fields:



```text

attestationId

decisionId

businessTransactionId

taskId

policyId

policyVersion

attestationHash

signature

createdAt

```



\---



\# Verification Records



Purpose:



Store verification outcomes.



Example fields:



```text

verificationId

attestationId

valid

policyId

policyVersion

createdAt

```



\---



\# Execution Tokens



Purpose:



Track authorization to execute.



Example fields:



```text

tokenId

verificationId

executionToken

createdAt

```



\---



\# Execution Records



Purpose:



Store evidence that execution occurred.



Example fields:



```text

executionId

tokenId

status

createdAt

```



\---



\# Trust Chain Records



Purpose:



Provide end-to-end lineage.



Example structure:



```text

businessTransactionId

&#x20;   ↓

attestationId

&#x20;   ↓

verificationId

&#x20;   ↓

executionId

```



This enables retrieval through:



```http

GET /trust-chain/{businessTransactionId}

```



\---



\# Audit Storage



Parmana preserves:



```text

Attestation Hashes

Verification Receipts

Execution Evidence

Trust Roots

Published Trust Anchors

```



These records support:



\* Audit

\* Compliance

\* Independent verification

\* Forensic investigation



\---



\# Trust Root Data



Current trust root records include:



```text

rootId

rootHash

signature

keyId

publishedAt

receiptCount

```



Purpose:



Provide cryptographic integrity over collections of evidence.



\---



\# Trust Anchor Data



Published trust anchor information:



```text

keyId

algorithm

publicKey

```



Endpoint:



```http

GET /trust-anchor/public-key

```



\---



\# Database Responsibilities



The database is responsible for:



```text

Persistence

Retrieval

Lineage

Auditability

Evidence Preservation

```



The database is NOT responsible for:



```text

Trust Decisions

Signature Validation

Policy Evaluation

Authority Determination

```



Those responsibilities belong to Parmana services and cryptographic verification.



\---



\# Canonical Trust Model



```text

Database stores evidence.



Cryptography establishes trust.

```



\---



\# Strategic Outcome



The database enables reconstruction of the complete authorization-to-execution lifecycle while preserving the evidence required for independent verification.



