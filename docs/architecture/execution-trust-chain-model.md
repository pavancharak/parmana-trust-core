\# Execution Trust Chain Model



\## Purpose



The Execution Trust Chain Model defines how Parmana establishes verifiable lineage from authorization through execution.



It is the capstone architecture of the Parmana platform.



Every architectural component ultimately exists to support the Execution Trust Chain.



\---



\# Canonical Principle



Trust Is Not A Point-In-Time Event.



Trust Is A Verifiable Chain.



\---



\# Core Architectural Question



The Execution Trust Chain answers:



```text

How Did We Get

From Authorization

To Execution?

```



and



```text

Can Every Step

Be Independently Verified?

```



\---



\# Why Execution Trust Chains Exist



Traditional systems often provide:



```text

Authorization

```



or



```text

Execution Logs

```



but not the lineage connecting them.



Result:



```text

Decision Exists



Execution Exists



Lineage Missing

```



Parmana solves this by preserving the entire chain.



\---



\# Canonical Trust Problem



Most systems answer:



```text

Who Approved?

```



Some systems answer:



```text

What Happened?

```



Very few systems answer:



```text

How Did Authorization

Become Execution?

```



\---



\# Definition



An Execution Trust Chain is a cryptographically verifiable lineage connecting authorization, intent, verification, and execution.



It provides evidence that execution originated from authorized intent.



\---



\# Canonical Trust Equation



```text

Authorized Intent

&#x20;        ↓

Verified Intent

&#x20;        ↓

Authorized Execution

&#x20;        ↓

Observed Execution

```



If lineage remains intact:



```text

Execution Trust Exists

```



\---



\# Position In Architecture



```text

Authority

&#x20;     ↓

Policy

&#x20;     ↓

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Token

&#x20;     ↓

Execution Record

&#x20;     ↓

Execution Trust Chain

```



This is the canonical Parmana architecture.



\---



\# Core Trust Chain Components



The Execution Trust Chain contains:



```text

Decision



Intent



Attestation



Verification Receipt



Execution Token



Execution Record

```



Each component contributes trust evidence.



\---



\# Component 1 — Decision



Question answered:



```text

Should This Happen?

```



Purpose:



```text

Authorization

```



Example:



```json

{

&#x20; "result": "approve"

}

```



\---



\# Component 2 — Intent



Question answered:



```text

What Exactly Was Supposed To Happen?

```



Purpose:



```text

Execution Definition

```



Example:



```json

{

&#x20; "action": "release-payment",

&#x20; "amount": 50000

}

```



Intent becomes the central artifact of the chain.



\---



\# Component 3 — Attestation



Question answered:



```text

Can Authorization Be Proven?

```



Purpose:



```text

Authorization Evidence

```



Attestation binds:



```text

Decision



Intent



Policy Context

```



into signed evidence.



\---



\# Component 4 — Verification Receipt



Question answered:



```text

Was The Attestation Verified?

```



Purpose:



```text

Verification Evidence

```



Verification transforms:



```text

Claimed Trust

```



into:



```text

Verified Trust

```



\---



\# Component 5 — Execution Token



Question answered:



```text

May Execution Proceed?

```



Purpose:



```text

Execution Authorization

```



Execution Tokens link execution to verified intent.



\---



\# Component 6 — Execution Record



Question answered:



```text

What Actually Happened?

```



Purpose:



```text

Execution Evidence

```



Example:



```json

{

&#x20; "action": "release-payment",

&#x20; "amount": 50000

}

```



\---



\# Canonical Chain Structure



```text

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Token

&#x20;     ↓

Execution Record

```



Every artifact references the previous artifact.



\---



\# Lineage Principle



Every artifact must preserve lineage identifiers.



Without lineage:



```text

Trust Cannot Be Reconstructed

```



\---



\# Canonical Parmana Lineage



```text

decisionId

&#x20;     ↓

intentId

&#x20;     ↓

attestationId

&#x20;     ↓

receiptId

&#x20;     ↓

executionTokenId

&#x20;     ↓

executionId

```



This forms the trust chain backbone.



\---



\# Chain Integrity



Trust Chains require:



```text

Continuity



Completeness



Verifiability

```



\---



\# Continuity



Every artifact must reference its predecessor.



Example:



```text

Execution Token

&#x20;      ↓

Verification Receipt

```



\---



\# Completeness



Missing artifacts create trust gaps.



Example:



```text

Decision

&#x20;     ↓

Intent



X



Execution

```



Result:



```text

Broken Trust Chain

```



\---



\# Verifiability



Every artifact must be independently verifiable.



Verification should not require:



```text

Database Access



Internal APIs



Administrative Access

```



\---



\# Chain Construction



The chain is built incrementally.



```text

Decision Created

&#x20;      ↓

Intent Created

&#x20;      ↓

Attestation Generated

&#x20;      ↓

Receipt Issued

&#x20;      ↓

Token Generated

&#x20;      ↓

Execution Recorded

```



\---



\# Chain Reconstruction



A verifier should be able to reconstruct:



```text

Execution

&#x20;     ↓

Execution Token

&#x20;     ↓

Receipt

&#x20;     ↓

Attestation

&#x20;     ↓

Intent

&#x20;     ↓

Decision

```



without access to internal systems.



\---



\# Execution Trust



Execution Trust exists when:



```text

Intent

```



matches:



```text

Execution Record

```



and lineage remains intact.



\---



\# Canonical Formula



```text

Valid Lineage

&#x20;         +

Intent Match

&#x20;         +

Verification

&#x20;         =

Execution Trust

```



\---



\# Intent Drift Detection



Intent Drift occurs when:



```text

Intent

```



does not match:



```text

Execution Record

```



Example:



Intent:



```json

{

&#x20; "amount": 50000

}

```



Execution:



```json

{

&#x20; "amount": 75000

}

```



Result:



```text

Intent Drift

```



The chain exposes the mismatch.



\---



\# AI Systems Example



Traditional AI:



```text

Prompt

&#x20;     ↓

Model

&#x20;     ↓

Action

```



Missing:



```text

Authorization



Intent



Verification

```



\---



\# Parmana AI Chain



```text

Prompt

&#x20;     ↓

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution

```



Execution becomes auditable.



\---



\# Canonical AI Principle



AI May Propose.



Humans Authorize.



Execution Must Match Intent.



\---



\# Banking Example



Trust Chain:



```text

Treasury Approval

&#x20;        ↓

Payment Intent

&#x20;        ↓

Attestation

&#x20;        ↓

Verification

&#x20;        ↓

Execution Token

&#x20;        ↓

Payment Execution

```



Question:



```text

Did The Authorized Payment

Actually Occur?

```



Answer:



```text

Execution Trust Chain

```



\---



\# Healthcare Example



Trust Chain:



```text

Clinical Authorization

&#x20;        ↓

Treatment Intent

&#x20;        ↓

Verification

&#x20;        ↓

Clinical Execution

```



Lineage becomes provable.



\---



\# Government Example



Trust Chain:



```text

Permit Approval

&#x20;        ↓

Permit Intent

&#x20;        ↓

Verification

&#x20;        ↓

Permit Issuance

```



Every step remains traceable.



\---



\# Relationship To Trust Anchors



Trust Anchors provide:



```text

Identity

```



Trust Chains provide:



```text

Lineage

```



\---



\# Relationship To Trust Roots



Trust Roots publish:



```text

Trust State

```



Trust Chains generate:



```text

Trust Evidence

```



Trust Roots are derived from trust chains.



\---



\# Relationship To Trust Federation



Federation exchanges:



```text

Trust Roots

```



Trust Chains remain:



```text

Domain-Level Evidence

```



\---



\# Relationship To Trust Profiles



Trust Profiles define:



```text

Required Chain Components

```



Example:



```text

Banking:

&#x20; Full Chain Required



Enterprise:

&#x20; Partial Chain Allowed



AI Systems:

&#x20; Intent Matching Required

```



\---



\# Security Properties



Execution Trust Chains provide:



```text

Traceability



Auditability



Verifiability



Execution Accountability



Intent Preservation

```



\---



\# Operational Benefits



Organizations gain:



```text

Execution Assurance



Root Cause Analysis



Compliance Evidence



Execution Transparency

```



\---



\# Questions Execution Trust Chains Answer



```text

Who Authorized?



What Was Intended?



What Was Verified?



What Was Executed?



Did Execution Match Intent?



Can The Entire Process Be Proven?

```



\---



\# Questions Execution Trust Chains Do Not Answer



```text

Should The Organization Trust This Domain?



Which Trust Profile Applies?



What Is The Current Trust Root?

```



Those belo# Example Keys

## Purpose

The files in this directory are provided exclusively for local development, testing, examples, demonstrations, and documentation.

These keys exist so that developers can immediately run Parmana Trust Core examples without generating cryptographic material during initial setup.

---

# Important Warning

The keys in this directory are public.

They are committed to the repository intentionally and must be treated as compromised by design.

Do not use these keys for:

* Production environments
* Real trust domains
* Customer environments
* Staging environments
* Security testing
* Any deployment requiring cryptographic trust

---

# Included Files

```text
attestation-private.pem
attestation-public.pem
```

These files form an Ed25519 key pair used by examples, tests, and documentation throughout the repository.

---

# Intended Usage

These keys may be used for:

* Local development
* Example attestation generation
* Verification demonstrations
* Documentation examples
* Automated tests
* Tutorial walkthroughs

---

# Production Deployments

Production deployments must generate unique signing keys.

Example:

```bash
openssl genpkey -algorithm Ed25519 -out attestation-private.pem

openssl pkey \
  -in attestation-private.pem \
  -pubout \
  -out attestation-public.pem
```

Generated keys should be stored securely and must never be committed to source control.

---

# Security Model

Parmana Trust Core assumes that every production Trust Domain owns and controls its own signing keys.

Trust Anchors published by a Trust Domain should be derived from keys generated and managed by that domain.

Repository example keys do not represent a production trust anchor.

---

# Open Source Policy

The keys in this directory are intentionally published as example artifacts to support reproducible demonstrations and developer onboarding.

Because these keys are public, any signatures generated using them should be considered demonstration signatures only.

---

# Canonical Rule

Example keys may be public.

Production keys must remain private.
ng to higher-level trust architecture components.



\---



\# Canonical Architecture Summary



```text

Authority

&#x20;     ↓

Policy

&#x20;     ↓

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Token

&#x20;     ↓

Execution Record

&#x20;     ↓

Execution Trust Chain

&#x20;     ↓

Trust Root

&#x20;     ↓

Federation

```



This is the complete Parmana trust architecture.



\---



\# Relationship To Parmana Positioning



Traditional systems answer:



```text

Who Approved?

```



Parmana answers:



```text

What Exactly Was Supposed To Happen?

```



and



```text

Did Execution Match It?

```



The Execution Trust Chain is the mechanism that makes those answers provable.



\---



\# Canonical Outcome



The Execution Trust Chain Model defines the complete authorization-to-execution lineage of the Parmana platform.



It connects decisions, intent, attestations, verification, execution authorization, and execution evidence into a single verifiable chain.



The result is Execution Trust:



```text

Authorized Intent

&#x20;        ↓

Verified Intent

&#x20;        ↓

Observed Execution

&#x20;        ↓

Provable Trust

```



This is the architectural foundation of Parmana and the culmination of the Authorization → Intent → Execution trust model.



