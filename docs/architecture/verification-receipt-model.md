\# Verification Receipt Model



\## Status



Canonical



\## Purpose



The Verification Receipt Model defines how Parmana records proof that a Decision Attestation has been successfully verified.



Verification Receipts establish the transition from:



```text

Attestation

&#x20;   ↓

Verified Attestation

```



A receipt proves that cryptographic verification was performed and records the outcome.



\---



\# Core Principle



```text

Attestations prove what was decided.



Receipts prove the attestation was verified.

```



An attestation alone is evidence.



A verification receipt is evidence that the attestation has been validated.



\---



\# Trust Chain Position



```text

Signal Evidence

&#x20;     ↓

Authority Decision

&#x20;     ↓

Decision Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Record

```



Verification Receipts occupy the boundary between:



```text

Decision Integrity

&#x20;       and

Execution Authorization

```



\---



\# What Is A Verification Receipt?



A Verification Receipt is an immutable artifact that records:



\* What was verified

\* When verification occurred

\* Whether verification succeeded

\* Which algorithms were executed

\* Which algorithms failed

\* The resulting receipt hash



\---



\# Verification Receipt Structure



Example:



```json

{

&#x20; "receiptId": "dd62643a-40af-4f1e-a51e-1b40eb89579d",

&#x20; "businessTransactionId": "PAYMENT-E2E-001",

&#x20; "decisionId": "f6964bd8-abf0-401b-81ce-d344e93c0c2e",

&#x20; "taskId": "payment.release",

&#x20; "policyId": "payment-policy-v1",

&#x20; "policyVersion": "1.0.0",

&#x20; "valid": true,

&#x20; "verifiedAlgorithms": \[

&#x20;   "attestation-verification"

&#x20; ],

&#x20; "failedAlgorithms": \[],

&#x20; "verifiedAt": "2026-06-21T04:46:10.849Z",

&#x20; "receiptHash": "773ed15cd85e7cee4e6ce17d7b7fab57b9c12db0b4dafca36f09cdbc592c2cf0"

}

```



\---



\# receiptId



Purpose:



```text

Unique verification artifact

```



Characteristics:



```text

Required



Globally Unique



Immutable

```



Example:



```text

dd62643a-40af-4f1e-a51e-1b40eb89579d

```



\---



\# businessTransactionId



Purpose:



```text

Trust-chain lineage root

```



Example:



```text

PAYMENT-E2E-001

```



Verification receipts must preserve transaction lineage.



\---



\# decisionId



Purpose:



```text

Verified decision reference

```



Example:



```text

f6964bd8-abf0-401b-81ce-d344e93c0c2e

```



A receipt must reference exactly one decision.



\---



\# valid



Represents verification outcome.



Values:



```text

true

false

```



Example:



```json

{

&#x20; "valid": true

}

```



A valid receipt indicates all required verification checks passed.



\---



\# verifiedAlgorithms



Records successful verification operations.



Example:



```json

\[

&#x20; "attestation-verification"

]

```



Future examples:



```json

\[

&#x20; "hash-verification",

&#x20; "signature-verification",

&#x20; "trust-anchor-verification"

]

```



\---



\# failedAlgorithms



Records failed verification operations.



Example:



```json

\[

&#x20; "signature-verification"

]

```



Empty array:



```json

\[]

```



indicates no verification failures.



\---



\# verifiedAt



Timestamp representing verification completion.



Example:



```text

2026-06-21T04:46:10.849Z

```



Characteristics:



```text

Immutable



UTC



Audit Evidence

```



\---



\# receiptHash



Represents cryptographic identity of the receipt.



Example:



```text

773ed15cd85e7cee4e6ce17d7b7fab57b9c12db0b4dafca36f09cdbc592c2cf0

```



Purpose:



```text

Integrity



Tamper Detection



Verification Evidence

```



\---



\# Verification Flow



```text

Decision Attestation

&#x20;        ↓

Hash Verification

&#x20;        ↓

Signature Verification

&#x20;        ↓

Invariant Validation

&#x20;        ↓

Verification Receipt

```



A receipt is created only after verification completes.



\---



\# Relationship To Attestations



Receipts are derived from attestations.



```text

Decision Attestation

&#x20;         ↓

Verification Receipt

```



Receipts do not replace attestations.



Receipts prove attestation validity.



\---



\# Relationship To Execution



Execution records consume receipts.



```text

Verification Receipt

&#x20;         ↓

Execution Record

```



Execution must reference a verification receipt.



\---



\# Receipt Persistence



Verification receipts are persisted.



Stored attributes include:



```text

receiptId



businessTransactionId



decisionId



taskId



policyId



policyVersion



valid



verifiedAlgorithms



failedAlgorithms



verifiedAt



receiptHash

```



Receipts are immutable.



\---



\# Receipt Retrieval



Receipts are retrievable through:



```http

GET /trust-chain/{businessTransactionId}

```



Example:



```json

{

&#x20; "receipts": \[

&#x20;   {

&#x20;     "receipt\_id": "...",

&#x20;     "valid": true

&#x20;   }

&#x20; ]

}

```



\---



\# Historical Verification



Multiple receipts may exist for the same decision.



Example:



```text

Decision A



├─ Receipt 1 (invalid)

├─ Receipt 2 (invalid)

└─ Receipt 3 (valid)

```



Verification history must be preserved.



Receipts are append-only.



\---



\# Receipt Invariants



\## REC-001



Every receipt must have a unique receiptId.



\---



\## REC-002



Every receipt must reference a businessTransactionId.



\---



\## REC-003



Every receipt must reference a decisionId.



\---



\## REC-004



Every receipt must record verification outcome.



\---



\## REC-005



Every receipt must contain a receiptHash.



\---



\## REC-006



Receipts are immutable after creation.



\---



\## REC-007



Receipts must be persisted before execution.



\---



\## REC-008



Receipts must be retrievable through lineage reconstruction.



\---



\## REC-009



Execution records must reference a receipt.



\---



\# Architectural Principle



Attestations prove what authority decided.



Verification Receipts prove that the attestation was validated.



Receipts establish the trust boundary between decision integrity and execution authorization, making them a critical component of the Execution Trust Chain.



