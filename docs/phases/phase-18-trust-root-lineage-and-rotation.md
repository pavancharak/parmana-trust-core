\# Phase 18 — Trust Root Lineage and Rotation



\## Objective



Enable trust roots to evolve over time while preserving verification of historical trust states.



This phase introduces:



```text

Trust Root Versioning

Trust Root Lineage

Trust Root Rotation

Historical Verification

```



and establishes the long-term trust history architecture for Parmana.



\---



\# Why Trust Root Lineage Exists



Phase 16 introduced:



```text

Trust Root Publication

```



Phase 17 introduced:



```text

Trust Root Verification

```



Both operate on a single trust root.



However, production trust systems continuously evolve.



New trust roots are published as:



```text

New Evidence Arrives

New Receipts Are Generated

New Executions Occur

```



The system therefore requires:



```text

Multiple Trust Root Generations

```



rather than a single trust root.



\---



\# Canonical Principle



Trust roots evolve.



Historical trust must remain verifiable.



\---



\# The Problem



Suppose:



```text

January

```



publishes:



```text

Trust Root v1

```



and:



```text

February

```



publishes:



```text

Trust Root v2

```



and:



```text

March

```



publishes:



```text

Trust Root v3

```



Questions immediately arise:



```text

Which root was active?



Can old roots still be verified?



Can trust history be reconstructed?



Can root lineage be audited?

```



\---



\# Canonical Flow



```text

Trust Root v1

&#x20;     ↓

Trust Root v2

&#x20;     ↓

Trust Root v3

&#x20;     ↓

Trust Root v4

```



Every trust root becomes part of trust history.



\---



\# Current State



Current implementation publishes:



```http

GET /trust-root/current

```



Response:



```json

{

&#x20; "rootId": "...",

&#x20; "rootHash": "...",

&#x20; "signature": "...",

&#x20; "keyId": "parmana-root-key"

}

```



This represents:



```text

Single Active Trust Root

```



\---



\# Future State



Trust roots become versioned.



Example:



```json

{

&#x20; "rootVersion": 3,



&#x20; "rootHash": "...",



&#x20; "signature": "...",



&#x20; "keyId":

&#x20;   "parmana-root-key-v2",



&#x20; "previousVersion": 2

}

```



\---



\# Trust Root Version



Purpose:



```text

Identify Trust Root Generation

```



Examples:



```text

Version 1

Version 2

Version 3

Version 4

```



Each publication increments the version.



\---



\# Previous Version



Purpose:



```text

Link Trust Root History

```



Example:



```json

{

&#x20; "rootVersion": 3,

&#x20; "previousVersion": 2

}

```



Meaning:



```text

Root v3 Descends From Root v2

```



\---



\# Root Lineage



Canonical model:



```text

Root v1

&#x20;  ↓

Root v2

&#x20;  ↓

Root v3

&#x20;  ↓

Root v4

```



This creates:



```text

Trust Root Lineage

```



\---



\# Why Lineage Matters



Without lineage:



```text

Historical Roots Become Isolated

```



With lineage:



```text

Trust History Becomes Traceable

```



\---



\# Trust History



A verifier should be able to answer:



```text

What Was The Published Trust State

On A Specific Date?

```



Lineage enables that capability.



\---



\# Trust Root Rotation



Trust roots rotate whenever:



```text

New Evidence Is Published

```



or



```text

Trust State Changes

```



Rotation creates a new version.



\---



\# Canonical Rotation Flow



```text

Root v1 Published

&#x20;      ↓

New Evidence

&#x20;      ↓

Root v2 Published

&#x20;      ↓

New Evidence

&#x20;      ↓

Root v3 Published

```



\---



\# Trust Root Registry



Future architecture introduces:



```text

Trust Root Registry

```



Purpose:



```text

Store Historical Roots

```



Examples:



```text

Root v1

Root v2

Root v3

Root v4

```



All remain retrievable.



\---



\# Future Storage Model



Each root stores:



```text

rootVersion

previousVersion

rootHash

signature

keyId

publishedAt

```



\---



\# Historical Verification



Requirement:



A verifier must be able to verify:



```text

Root v1

```



even when:



```text

Root v20

```



is active.



\---



\# Verification Flow



Verifier receives:



```json

{

&#x20; "rootVersion": 1,

&#x20; "keyId": "parmana-root-key-v1"

}

```



Flow:



```text

Read rootVersion

&#x20;       ↓

Locate Historical Root

&#x20;       ↓

Locate Historical Key

&#x20;       ↓

Verify Signature

```



Verification succeeds.



\---



\# Relationship To Key Rotation



Phase 15 introduced:



```text

Trust Anchor Rotation

```



Flow:



```text

Key v1

&#x20;    ↓

Key v2

&#x20;    ↓

Key v3

```



Trust roots must track:



```text

Which Key Signed Which Root

```



\---



\# Example



Root v1:



```json

{

&#x20; "rootVersion": 1,

&#x20; "keyId": "parmana-root-key-v1"

}

```



Root v2:



```json

{

&#x20; "rootVersion": 2,

&#x20; "keyId": "parmana-root-key-v2"

}

```



Verification remains deterministic.



\---



\# Future Trust Root Endpoint



Current:



```http

GET /trust-root/current

```



Future:



```http

GET /trust-root/current

```



returns:



```text

Active Trust Root

```



Additional endpoint:



```http

GET /trust-root/{version}

```



returns:



```text

Historical Trust Root

```



\---



\# Future Trust Root List Endpoint



Example:



```http

GET /trust-roots

```



Response:



```json

\[

&#x20; {

&#x20;   "rootVersion": 1

&#x20; },

&#x20; {

&#x20;   "rootVersion": 2

&#x20; },

&#x20; {

&#x20;   "rootVersion": 3

&#x20; }

]

```



Purpose:



```text

Trust History Discovery

```



\---



\# Trust Root Chain Verification



Future verification:



```text

Root v5

&#x20;  ↓

Verify Signature

&#x20;  ↓

Verify Parent Root

&#x20;  ↓

Verify Parent Root

&#x20;  ↓

Verify Parent Root

```



until:



```text

Root v1

```



This enables complete trust history validation.



\---



\# Relationship To Transparency



Trust roots become:



```text

Transparency Checkpoints

```



Each version represents:



```text

Published Trust State

At A Specific Time

```



\---



\# Relationship To Federation



Organizations exchange:



```text

Versioned Trust Roots

```



rather than:



```text

Raw Evidence

```



This enables:



```text

Cross-Organization Trust Validation

```



using trust root history.



\---



\# Relationship To Trust Chains



Trust chains answer:



```text

What Happened?

```



Trust root lineage answers:



```text

What Was The Published Trust State

At That Time?

```



Together they create:



```text

Historical Trust Reconstruction

```



\---



\# Dependency Chain



```text

Evidence

&#x20;   ↓

Trust Root v1

&#x20;   ↓

Trust Root v2

&#x20;   ↓

Trust Root v3

&#x20;   ↓

Trust Root Lineage

```



Without lineage:



```text

Trust State Exists



Trust History Does Not

```



\---



\# Future Trust Root Structure



Target model:



```json

{

&#x20; "rootVersion": 3,



&#x20; "previousVersion": 2,



&#x20; "rootHash": "...",



&#x20; "signature": "...",



&#x20; "keyId": "parmana-root-key-v2",



&#x20; "publishedAt": "..."

}

```



\---



\# Validation Requirements



Future implementation must support:



```text

✓ rootVersion

✓ previousVersion

✓ Historical root retrieval

✓ Root lineage reconstruction

✓ Root rotation

✓ Historical verification

✓ Key version linkage

```



\---



\# Phase Completion Criteria



```text

✓ Root versioning implemented

✓ Root lineage implemented

✓ Historical roots retrievable

✓ Root rotation supported

✓ Historical verification supported

✓ Trust history reconstructable

```



\---



\# Output Of Phase 18



```text

Versioned Trust Root Lineage Established

```



\---



\# Canonical Outcome



Trust roots are not isolated publications.



Each trust root becomes part of a verifiable trust history.



New trust roots can be published indefinitely while preserving verification of historical trust states.



Trust is preserved not only across evidence generations, but across trust-root generations themselves.



