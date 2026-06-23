\# Parmana Trust Core Documentation



This directory contains the complete documentation corpus for Parmana Trust Core.



The documentation is organized around the lifecycle of trust, authorization, intent preservation, verification, execution trust, and federated trust.



\---



\# Documentation Structure



```text

docs/

├── architecture/

├── guides/

├── integrations/

├── phases/

└── reference/

```



\---



\# Architecture



```text

docs/architecture/

```



Conceptual and system-level architecture.



Includes:



\* Authorization Model

\* Intent Model

\* Execution Trust Model

\* Trust Domain Model

\* Trust Anchor Model

\* Trust Root Model

\* Federation Model

\* Key Rotation Model

\* Execution Trust Chain Model



Recommended reading order:



```text

architecture-overview.md

authorization-model.md

intent-model.md

execution-trust-model.md

execution-trust-chain-model.md

```



\---



\# Guides



```text

docs/guides/

```



Practical implementation and usage guides.



Audience:



\* Developers

\* Integrators

\* Architects

\* Platform Teams



\---



\# Integrations



```text

docs/integrations/

```



External system integration patterns.



Examples:



\* REST APIs

\* Event Systems

\* AI Agents

\* Workflow Engines

\* ServiceNow

\* Salesforce

\* Banking Platforms

\* Federated Trust Domains



\---



\# Phases



```text

docs/phases/

```



Step-by-step trust lifecycle documentation.



Documents how authorization evolves into verifiable execution.



Coverage includes:



\* Subject Resolution

\* Task Definition

\* Policy Resolution

\* Signal Evaluation

\* Decision Generation

\* Intent Generation

\* Attestation Generation

\* Verification

\* Execution Recording

\* Trust Chains

\* Trust Anchors

\* Trust Roots

\* Federation



\---



\# Reference



```text

docs/reference/

```



Canonical trust artifact specifications.



Examples:



\* Intent

\* Attestation

\* Verification

\* Verification Receipt

\* Execution Token

\* Execution Record

\* Trust Chain

\* Trust Anchor

\* Trust Root

\* Federation

\* Trust Profiles



\---



\# Recommended Reading Path



For new contributors:



```text

README.md

↓

docs/README.md

↓

architecture/

↓

reference/

↓

phases/

↓

integrations/

```



\---



\# Canonical Principle



Organizations define authority.



Organizations define policy.



Parmana preserves intent and enables independent verification that execution matched authorization.



