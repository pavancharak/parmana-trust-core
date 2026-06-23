\# Parmana Architecture Overview



\## Purpose



Parmana is an Execution Trust Platform.



Its purpose is to ensure that execution can be traced back to authorized intent and independently verified trust evidence.



Parmana exists because modern systems can often prove:



```text

Who Approved



When Approved

```



but cannot reliably prove:



```text

What Exactly Was Supposed To Happen?



Was Execution Authorized?



Did Execution Match Intent?

```



Parmana solves this trust gap.



\---



\# The Core Problem



Traditional systems focus on:



```text

Identity



Authentication



Authorization



Audit Logs

```



These systems answer:



```text

Who?



When?

```



but frequently cannot answer:



```text

What Exactly Was Authorized?



What Was Supposed To Happen?



Did Execution Match Authorization?

```



This gap becomes increasingly important in:



```text

AI Systems



Autonomous Systems



Financial Systems



Enterprise Workflows



Government Systems

```



where execution may occur automatically.



\---



\# The Trust Gap



Most systems operate as:



```text

Decision

&#x20;   ↓

Execution

```



with no authoritative representation of:



```text

What Was Intended

```



As a result:



```text

Authorization Exists



Execution Exists



Trust Gap Exists

```



\---



\# Parmana Trust Model



Parmana introduces Intent as the missing trust layer.



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Execution

```



This creates a verifiable authorization-to-execution lineage.



\---



\# Canonical Principle



Decisions authorize Intent.



Intent authorizes Execution.



\---



\# Core Positioning



Parmana ensures human-defined authority governs AI systems.



Organizations define policy.



Organizations decide what signals are trusted.



Parmana ensures those trusted signals satisfy policy before execution.



\---



\# What Parmana Does



Parmana provides:



```text

Authorization Evidence



Intent Evidence



Verification Evidence



Execution Evidence

```



that can be independently verified.



\---



\# What Parmana Does Not Do



Parmana does not:



```text

Execute Business Operations



Replace Business Logic



Replace Policy Engines



Replace Workflow Engines

```



Parmana provides trust infrastructure.



\---



\# Core Architecture



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

Verification

&#x20;     ↓

Execution Token

&#x20;     ↓

Execution

&#x20;     ↓

Execution Record

```



This is the canonical Parmana trust flow.



\---



\# Architecture Layers



\## Layer 1 — Authority Layer



Defines:



```text

Who Has Authority?

```



Examples:



```text

Finance Manager



Treasury Officer



Procurement Lead



AI Governance Reviewer

```



Authority determines who may authorize actions.



\---



\## Layer 2 — Policy Layer



Defines:



```text

Under What Conditions?

```



Examples:



```text

Payment Limits



Approval Thresholds



Risk Controls



Compliance Requirements

```



Policy determines whether authorization is allowed.



\---



\## Layer 3 — Decision Layer



Answers:



```text

Should This Happen?

```



Output:



```text

Approve



Reject



Override Required

```



\---



\## Layer 4 — Intent Layer



Answers:



```text

What Exactly Was Supposed To Happen?

```



Example:



```json

{

&#x20; "action": "release-payment",

&#x20; "amount": 50000,

&#x20; "vendorId": "V-100"

}

```



Intent becomes the authoritative description of authorized execution.



\---



\## Layer 5 — Attestation Layer



Creates cryptographic evidence that:



```text

Authorization Existed



Intent Existed



Policy Was Evaluated

```



\---



\## Layer 6 — Verification Layer



Answers:



```text

Can This Evidence Be Trusted?

```



Verification transforms evidence into independently verifiable trust.



\---



\## Layer 7 — Execution Authorization Layer



Produces:



```text

Execution Token

```



which authorizes a specific execution.



\---



\## Layer 8 — Execution Layer



Execution occurs in:



```text

Workflow Engines



Banking Systems



AI Agents



Enterprise Applications



External Services

```



Parmana itself does not perform execution.



\---



\## Layer 9 — Execution Evidence Layer



Produces:



```text

Execution Record

```



which captures what actually happened.



\---



\## Layer 10 — Trust Chain Layer



Connects:



```text

Decision

Intent

Attestation

Verification

Execution

```



into a single lineage.



\---



\# Trust Artifacts



Parmana produces a series of trust artifacts.



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

&#x20;     ↓

Trust Chain

```



Each artifact answers a specific trust question.



\---



\# Core Trust Questions



\## Decision



```text

Should This Happen?

```



\---



\## Intent



```text

What Exactly Was Supposed To Happen?

```



\---



\## Attestation



```text

Can Authorization Be Proven?

```



\---



\## Verification



```text

Can Authorization Evidence Be Trusted?

```



\---



\## Execution Token



```text

May Execution Proceed?

```



\---



\## Execution Record



```text

What Actually Happened?

```



\---



\## Trust Chain



```text

Did Execution Match Intent?

```



\---



\# Trust Foundations



Parmana trust is built on four foundational capabilities.



\---



\## Foundation 1 — Trust Anchor



Provides:



```text

Identity

```



Endpoint:



```http

GET /trust-anchor/public-key

```



Purpose:



```text

Independent Verification

```



\---



\## Foundation 2 — External Verification



Allows third parties to verify:



```text

Attestations



Trust Roots



Execution Evidence

```



without access to Parmana internals.



\---



\## Foundation 3 — Key Rotation



Ensures:



```text

Historical Verification



Identity Evolution



Trust Continuity

```



across key changes.



\---



\## Foundation 4 — Trust Federation



Enables:



```text

Cross-Organization Trust

```



through trust anchors and trust roots.



\---



\# Trust Domains



A Trust Domain represents an independently managed trust environment.



Examples:



```text

Bank



Enterprise



Government Agency



Hospital



AI Platform

```



Each trust domain publishes:



```text

Trust Anchor



Trust Root

```



and maintains its own trust chains.



\---



\# Trust Profiles



Trust Profiles adapt the architecture to different industries.



Examples:



```text

Enterprise



Banking



Healthcare



Government



AI Systems

```



All use the same architecture while enforcing different trust requirements.



\---



\# AI Systems Architecture



Traditional AI systems often operate as:



```text

Prompt

&#x20;   ↓

Model

&#x20;   ↓

Action

```



Parmana introduces trust controls:



```text

Prompt

&#x20;   ↓

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



This ensures human-defined authority governs AI systems.



\---



\# Execution Trust



Execution Trust is Parmana's core architectural outcome.



Execution Trust exists when:



```text

Authorized Intent

```



matches:



```text

Actual Execution

```



\---



\# Intent Drift



Intent Drift occurs when:



```text

Authorized Intent

```



does not match:



```text

Actual Execution

```



Example:



Authorized:



```json

{

&#x20; "amount": 50000

}

```



Executed:



```json

{

&#x20; "amount": 75000

}

```



Result:



```text

Intent Drift

```



Parmana makes this detectable.



\---



\# Independent Verification



A fundamental architectural principle:



```text

Trust Must Not Depend On Access

```



Verification should require only:



```text

Trust Anchor



Trust Root



Trust Evidence

```



and not:



```text

Database Access



Private APIs



Internal Systems

```



\---



\# Federation Architecture



Multiple organizations can exchange trust through:



```text

Trust Anchor

&#x20;      ↓

Trust Root

&#x20;      ↓

Verification

```



without sharing internal infrastructure.



\---



\# Canonical Architecture Diagram



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

Verification

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Token

&#x20;     ↓

Execution

&#x20;     ↓

Execution Record

&#x20;     ↓

Trust Chain

&#x20;     ↓

Trust Root

&#x20;     ↓

Trust Federation

```



\---



\# Architectural Outcome



Parmana provides an Authorization → Intent → Execution trust architecture.



It enables organizations to prove:



```text

Who Authorized



What Was Intended



Why It Was Allowed



What Was Executed



Whether Execution Matched Intent

```



through independently verifiable trust evidence.



Parmana's ultimate purpose is to transform authorization into execution trust.



