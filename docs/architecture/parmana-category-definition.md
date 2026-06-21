\# Parmana Category Definition



\## Status



Canonical



\## Purpose



This document defines the category Parmana creates and occupies.



It explains:



\* What Parmana is

\* What Parmana is not

\* Why existing categories are insufficient

\* Why a new category is required

\* How Parmana differs from adjacent systems



\---



\# Core Thesis



```text

Autonomous systems can generate actions.



Organizations must determine whether those actions are authorized.



Parmana exists to verify authority before execution.

```



\---



\# The Problem



Modern systems increasingly allow software to:



```text

Generate decisions



Recommend actions



Initiate workflows



Trigger execution

```



Examples:



```text

AI Agents



LLMs



Workflow Automation



RPA Systems



Decision Engines

```



These systems can generate actions.



They do not inherently establish authority.



\---



\# The Missing Layer



Most enterprise architectures contain:



```text

Identity

&#x20;   ↓

Access

&#x20;   ↓

Execution

```



Or:



```text

AI

&#x20;   ↓

Execution

```



What is often missing:



```text

Authority Verification

```



The question becomes:



```text

Why was this action allowed?

```



Not:



```text

Who executed it?

```



\---



\# Existing Categories



Several categories solve adjacent problems.



None solve authority verification.



\---



\# Identity Infrastructure



Examples:



```text

Okta



Microsoft Entra ID



Auth0

```



Identity systems answer:



```text

Who are you?

```



Identity systems do not answer:



```text

Should this action be authorized?

```



\---



\# Access Control



Examples:



```text

RBAC



ABAC



IAM

```



Access systems answer:



```text

Can this user access this resource?

```



Access systems do not answer:



```text

Did trusted evidence satisfy policy before execution?

```



\---



\# Workflow Engines



Examples:



```text

Temporal



Camunda



Airflow

```



Workflow engines answer:



```text

What sequence of steps should execute?

```



Workflow engines do not verify authority.



\---



\# Policy Engines



Examples:



```text

OPA



Cedar



OpenFGA

```



Policy engines answer:



```text

What policy evaluates to true?

```



Policy engines typically do not preserve:



```text

Decision lineage



Attestation lineage



Verification lineage



Execution lineage

```



\---



\# Audit Systems



Examples:



```text

Logs



SIEM



Monitoring Platforms

```



Audit systems answer:



```text

What happened?

```



Audit systems generally do not answer:



```text

Why was execution authorized?

```



\---



\# Agent Frameworks



Examples:



```text

LangGraph



CrewAI



AutoGen



OpenAI Agents

```



Agent frameworks answer:



```text

How do autonomous systems act?

```



Agent frameworks do not establish authority.



\---



\# What Parmana Is



Parmana is:



```text

Execution Trust Infrastructure

```



\---



\# Definition



Execution Trust Infrastructure is the layer that verifies authority before execution and preserves evidence proving why execution was allowed.



\---



\# Core Question



Parmana answers:



```text

Why was this action authorized?

```



And:



```text

Can that authorization be independently verified?

```



\---



\# Execution Trust Infrastructure



Execution Trust Infrastructure provides:



```text

Authority Verification



Policy Evaluation



Evidence Preservation



Attestation



Verification



Execution Lineage

```



\---



\# The Parmana Model



```text

Trusted Signals

&#x20;       ↓

Policy Evaluation

&#x20;       ↓

Authority Decision

&#x20;       ↓

Decision Attestation

&#x20;       ↓

Verification Receipt

&#x20;       ↓

Execution Record

```



This sequence forms the:



```text

Execution Trust Chain

```



\---



\# Category Definition



\## Execution Trust Infrastructure



Execution Trust Infrastructure is software that:



```text

Verifies authority before execution



Evaluates trusted evidence against policy



Produces verifiable authorization decisions



Preserves execution lineage



Enables independent reconstruction of authorization history

```



\---



\# What Parmana Verifies



Parmana verifies:



```text

Was the action authorized?



Which policy authorized it?



Which evidence satisfied policy?



Can authorization be independently verified?



Can execution be traced to authorization?

```



\---



\# What Parmana Does Not Do



Parmana does not:



```text

Manage identity



Authenticate users



Execute workflows



Move money



Perform business operations



Act as a system of record

```



Parmana verifies authority.



\---



\# Systems Around Parmana



```text

Identity Systems

&#x20;        ↓

Signal Providers

&#x20;        ↓

Parmana

&#x20;        ↓

Execution Systems

```



Examples:



```text

Okta

Stripe

SAP

Workday

Salesforce

ServiceNow

```



Parmana sits between trust and execution.



\---



\# Authority-Centric Architecture



Traditional architecture:



```text

Identity

&#x20;     ↓

Access

&#x20;     ↓

Execution

```



Parmana architecture:



```text

Identity

&#x20;     ↓

Trusted Signals

&#x20;     ↓

Authority Verification

&#x20;     ↓

Execution

```



Authority becomes explicit.



\---



\# Why The Category Exists



Autonomous systems increase the number of actions that can be generated.



As generation increases:



```text

Authority becomes more important than execution.

```



The limiting factor is no longer:



```text

Can a system act?

```



The limiting factor becomes:



```text

Should a system act?

```



\---



\# Category Boundary



Execution Trust Infrastructure begins when:



```text

An action is requested.

```



Execution Trust Infrastructure ends when:



```text

Execution evidence is preserved.

```



\---



\# Canonical Positioning



Primary statement:



```text

Parmana prevents unauthorized autonomous actions.

```



Supporting statement:



```text

Parmana verifies human-defined authority and organizational policy before autonomous systems act.

```



Expanded statement:



```text

Organizations decide what to trust.



Parmana ensures those trusted signals satisfy policy before execution.

```



\---



\# Market Category Statement



```text

Parmana is the first Execution Trust Infrastructure platform.



It verifies authority before execution and preserves the complete trust chain connecting trusted evidence, policy evaluation, authorization, verification, and execution.

```



\---



\# Architectural Principle



Identity establishes who is acting.



Policy establishes what is allowed.



Trust establishes which evidence matters.



Parmana verifies that trusted evidence satisfies policy before execution and preserves the resulting trust chain.



That capability defines the Execution Trust Infrastructure category.



