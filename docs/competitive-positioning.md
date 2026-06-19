\# Parmana Competitive Positioning



\## Executive Summary



Parmana is not an Identity platform.



Parmana is not a Security platform.



Parmana is not a Workflow platform.



Parmana is not a Policy Engine.



Parmana is an Authority Verification Platform.



Its purpose is to verify that organization-defined authority requirements have been satisfied before execution and to produce independently verifiable proof of that verification.



\---



\# Market Position



\## Existing Enterprise Control Layers



| Category      | Core Question                          |

| ------------- | -------------------------------------- |

| Identity      | Who are you?                           |

| Security      | Can you access this resource?          |

| Workflow      | What sequence of actions should occur? |

| Observability | What happened?                         |

| Parmana       | Was this action authorized?            |



\---



\# Identity Platforms



Examples:



\* Okta

\* Microsoft Entra ID

\* Ping Identity



Identity verifies:



```text

Who is making the request?

```



Identity does not verify:



```text

Whether authority requirements have been satisfied.

```



\### Relationship



Identity systems become trusted signal providers for Parmana.



```text

Identity

&#x20;   ↓

Trusted Signal

&#x20;   ↓

Parmana

```



\---



\# Security Platforms



Examples:



\* Palo Alto Networks

\* CrowdStrike

\* Zscaler



Security verifies:



```text

Can access occur?

```



Security does not verify:



```text

Should execution occur?

```



\### Relationship



Security systems become trusted signal providers.



```text

Security

&#x20;   ↓

Trusted Signal

&#x20;   ↓

Parmana

```



\---



\# Workflow Engines



Examples:



\* Temporal

\* Camunda

\* ServiceNow

\* AWS Step Functions



Workflow engines orchestrate execution.



They answer:



```text

What happens next?

```



Parmana answers:



```text

Should it happen at all?

```



\### Relationship



```text

Workflow

&#x20;    ↓

Authority Check

&#x20;    ↓

Parmana

&#x20;    ↓

Continue Execution

```



\---



\# Policy Engines



Examples:



\* Open Policy Agent (OPA)

\* Cedar

\* Drools



Policy engines evaluate rules.



They answer:



```text

Did a policy evaluate to true?

```



Parmana extends beyond policy evaluation.



Parmana provides:



\* Task model

\* Policy model

\* Schema model

\* Trusted signal model

\* Attestations

\* Receipts

\* Transparency logs

\* Trust roots

\* Independent verification



\### Relationship



OPA or Cedar can become policy execution components inside Parmana.



\---



\# Governance Platforms



Examples:



\* ServiceNow GRC

\* Archer

\* MetricStream



Governance platforms document controls.



Parmana enforces controls before execution.



\### Difference



Governance systems answer:



```text

What policy exists?

```



Parmana answers:



```text

Was the policy actually satisfied?

```



\---



\# Agent Frameworks



Examples:



\* LangGraph

\* CrewAI

\* AutoGen

\* OpenAI Agents



Agent frameworks coordinate AI behavior.



They help agents:



\* Plan

\* Reason

\* Execute



They do not verify organizational authority.



\### Relationship



```text

Agent

&#x20;  ↓

Proposed Action

&#x20;  ↓

Parmana

&#x20;  ↓

Execution

```



\---



\# Cloud Providers



Examples:



\* AWS

\* Azure

\* Google Cloud



Cloud providers offer:



\* Identity

\* Security

\* Workflow

\* AI Infrastructure



Parmana provides:



```text

Authority Verification

```



which sits above infrastructure.



\---



\# Strategic Positioning



Parmana does not replace:



\* IAM

\* Security

\* Workflow

\* Governance

\* AI Frameworks



Parmana integrates with them.



These systems produce signals.



Parmana verifies whether those signals satisfy authority requirements before execution.



\---



\# The Parmana Stack



```text

Identity

&#x20;     ↓

Security

&#x20;     ↓

Business Systems

&#x20;     ↓

AI Systems

&#x20;     ↓

Trusted Signals

&#x20;     ↓

Parmana

&#x20;     ↓

Execution

```



\---



\# Competitive Thesis



Identity verifies who.



Security verifies access.



Workflow engines orchestrate actions.



Observability verifies behavior.



Policy engines evaluate rules.



Parmana verifies authority.



\---



\# Canonical Positioning



Organizations decide what to trust.



Trusted signals may originate from humans, software systems, banking systems, rule engines, or AI systems.



Parmana evaluates those trusted signals against policy before execution.



Humans define authority.



Parmana makes authority verifiable and enforceable before execution.



