\# End-to-End Validation Guide



\## Purpose



This document validates the complete Parmana Execution Trust Chain.



The objective is to prove:



```text

Authority Decision

&#x20;       ↓

Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Trust Token

&#x20;       ↓

Trust Anchor Verification

&#x20;       ↓

Execution Record

&#x20;       ↓

Database Persistence

```



and verify that all artifacts are retrievable from the trust chain.



\---



\# Preconditions



Server running:



```powershell

npm run dev

```



Expected:



```text

Server listening on port 3000

```



\---



\# Test 1 — Create Verification Receipt



Issue verification request.



```powershell

Invoke-RestMethod `

&#x20; -Method POST `

&#x20; -Uri "http://localhost:3000/verify" `

&#x20; -ContentType "application/json" `

&#x20; -Body '{

&#x20;   "businessTransactionId":"PAYMENT-E2E-001"

&#x20; }' `

| ConvertTo-Json -Depth 20

```



Expected:



```json

{

&#x20; "receiptId":"...",

&#x20; "valid":true

}

```



Save:



```powershell

$receipt =

Invoke-RestMethod `

&#x20; -Method POST `

&#x20; -Uri "http://localhost:3000/verify" `

&#x20; -ContentType "application/json" `

&#x20; -Body '{

&#x20;   "businessTransactionId":"PAYMENT-E2E-001"

&#x20; }'

```



\---



\# Test 2 — Create Execution Token



```powershell

$token =

Invoke-RestMethod `

&#x20; -Method POST `

&#x20; -Uri "http://localhost:3000/token" `

&#x20; -ContentType "application/json" `

&#x20; -Body (@{

&#x20;     receiptId =

&#x20;       $receipt.receiptId

&#x20;   } | ConvertTo-Json)

```



Inspect:



```powershell

$token | ConvertTo-Json -Depth 20

```



Expected:



```json

{

&#x20; "tokenId":"...",

&#x20; "decisionId":"...",

&#x20; "receiptId":"...",

&#x20; "signature":"..."

}

```



\---



\# Test 3 — Persist Token



```powershell

$token |

ConvertTo-Json -Depth 20 |

Out-File token.json

```



Verify:



```powershell

type token.json

```



\---



\# Test 4 — Restart Server



Stop:



```powershell

Ctrl+C

```



Start:



```powershell

npm run dev

```



\---



\# Test 5 — Reload Token



```powershell

$token =

Get-Content token.json -Raw |

ConvertFrom-Json

```



Inspect:



```powershell

$token

```



\---



\# Test 6 — Execute Using Old Token



```powershell

$body = @{



&#x20; executionToken =

&#x20;   $token



&#x20; executionSystem =

&#x20;   "stripe"



&#x20; executionReference =

&#x20;   "pi\_restart\_test"



} | ConvertTo-Json -Depth 20

```



Execute:



```powershell

Invoke-RestMethod `

&#x20; -Method POST `

&#x20; -Uri "http://localhost:3000/execute" `

&#x20; -ContentType "application/json" `

&#x20; -Body $body

```



Expected:



```json

{

&#x20; "executionId":"...",

&#x20; "executionStatus":"completed"

}

```



This proves:



```text

Trust Anchor Persistence

```



\---



\# Test 7 — Tamper Detection



Modify token:



```powershell

$token.policyVersion =

&#x20; "999.0.0"

```



Build request:



```powershell

$body = @{



&#x20; executionToken =

&#x20;   $token



&#x20; executionSystem =

&#x20;   "stripe"



&#x20; executionReference =

&#x20;   "pi\_tampered"



} | ConvertTo-Json -Depth 20

```



Execute:



```powershell

Invoke-RestMethod `

&#x20; -Method POST `

&#x20; -Uri "http://localhost:3000/execute" `

&#x20; -ContentType "application/json" `

&#x20; -Body $body

```



Expected:



```json

{

&#x20; "error":

&#x20; "INV-170 violation: invalid execution trust token"

}

```



This proves:



```text

Token Integrity Enforcement

```



\---



\# Test 8 — Trust Chain Retrieval



Retrieve lineage:



```powershell

Invoke-RestMethod `

&#x20; -Method GET `

&#x20; -Uri "http://localhost:3000/trust-chain/PAYMENT-E2E-001" `

| ConvertTo-Json -Depth 50

```



Expected:



```json

{

&#x20; "decision": {...},

&#x20; "signals": \[...],

&#x20; "receipts": \[...],

&#x20; "executions": \[...]

}

```



\---



\# Test 9 — Verify Database Persistence



Verify authority decisions:



```sql

select

decision\_id,

business\_transaction\_id,

created\_at

from authority\_decisions;

```



\---



Verify attestations:



```sql

select

decision\_id,

policy\_id,

policy\_version

from decision\_attestations;

```



\---



Verify receipts:



```sql

select

receipt\_id,

decision\_id,

valid

from verification\_receipts;

```



\---



Verify executions:



```sql

select

execution\_id,

receipt\_id,

execution\_system,

execution\_reference

from execution\_records;

```



Expected:



```text

Records Exist

Records Persist

Records Link Correctly

```



\---



\# Test 10 — Lineage Verification



For a single transaction:



```text

PAYMENT-E2E-001

```



Verify:



```text

authority\_decisions

&#x20;       ↓

decision\_attestations

&#x20;       ↓

verification\_receipts

&#x20;       ↓

execution\_records

```



using:



```text

businessTransactionId

decisionId

receiptId

```



as lineage identifiers.



\---



\# Success Criteria



Execution Trust Chain v1 is validated when:



```text

✓ Authority Decision Stored



✓ Attestation Stored



✓ Receipt Stored



✓ Token Generated



✓ Token Survives Restart



✓ Tampering Detected



✓ Execution Authorized



✓ Execution Persisted



✓ Trust Chain Retrievable



✓ Database Records Linked



✓ Cryptographic Verification Working

```



\---



\# Canonical Validation Statement



Parmana Execution Trust Chain v1 is considered operationally validated when a previously issued execution token survives service restart, authorizes execution, detects tampering, persists execution lineage, and can be fully reconstructed from database records using businessTransactionId.



