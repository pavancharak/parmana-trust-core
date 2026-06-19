\# Why Parmana



\## Why Existing Systems Are Not Enough



Organizations already use:



\* Identity Platforms

\* Security Platforms

\* Workflow Engines

\* Rules Engines

\* Governance Platforms



So why does Parmana need to exist?



The answer is simple:



None of these systems verify authority for autonomous systems.



\---



\# Identity Is Not Authority



Identity answers:



```text

Who is making the request?

```



Examples:



\* Okta

\* Microsoft Entra ID

\* Ping Identity



Identity can prove who initiated a request.



Identity cannot prove whether an action should occur.



\---



\# Security Is Not Authority



Security answers:



```text

Can this entity access this resource?

```



Examples:



\* Palo Alto

\* CrowdStrike

\* Zscaler



Security controls access.



Security does not verify whether organizational authority requirements have been satisfied.



\---



\# Workflow Engines Are Not Authority



Workflow systems answer:



```text

What sequence of steps should occur?

```



Examples:



\* Camunda

\* Temporal

\* ServiceNow



Workflows automate process execution.



They do not create independently verifiable proof that authority requirements were satisfied.



\---



\# Rules Engines Are Not Authority



Rules engines answer:



```text

Did a rule evaluate to true?

```



Examples:



\* Drools

\* Open Policy Agent

\* Custom business rules



Rules engines evaluate conditions.



They do not provide:



\* Authority modeling

\* Cryptographic attestations

\* Verification receipts

\* Transparency history

\* Trust roots



\---



\# Observability Is Not Authority



Observability answers:



```text

What happened?

```



Examples:



\* Datadog

\* Splunk

\* New Relic



Observability is retrospective.



Authority verification is preventative.



Parmana evaluates authority before execution.



\---



\# The Autonomous Systems Problem



Traditional software executes instructions.



Autonomous systems generate actions.



This introduces a new requirement:



```text

Was this action authorized?

```



The answer must be:



\* Deterministic

\* Auditable

\* Independently verifiable



\---



\# Parmana's Approach



Parmana models authority as:



```text

Task

&#x20; ↓

Policy

&#x20; ↓

Schema

&#x20; ↓

Signals

&#x20; ↓

Decision

```



And proves authority through:



```text

Decision

&#x20; ↓

Attestation

&#x20; ↓

Receipt

&#x20; ↓

Transparency Log

&#x20; ↓

Trust Root

```



\---



\# What Parmana Does



Parmana does not:



\* Manage identities

\* Execute workflows

\* Execute actions

\* Replace security systems



Parmana:



\* Evaluates trusted signals

\* Verifies authority

\* Produces cryptographic proof

\* Enables independent verification



\---



\# Strategic Position



Identity verifies who.



Security verifies access.



Workflow engines orchestrate actions.



Observability verifies behavior.



Parmana verifies authority.



\---



\# Canonical Statement



Organizations decide what to trust.



Parmana evaluates trusted signals against policy before execution.



Humans define authority.



Parmana makes authority verifiable and enforceable before execution.



