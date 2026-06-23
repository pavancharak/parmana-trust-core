\# Integration Phase 01 — Integrating Parmana Into Enterprise Systems



\## Objective



Explain how Parmana is embedded into existing enterprise architectures without replacing existing systems.



\---



\# Core Principle



Parmana does not replace:



```text

Applications

Databases

Workflow Engines

Policy Engines

AI Systems

Identity Providers

```



Parmana provides:



```text

Trust Infrastructure

```



between authorization and execution.



\---



\# Canonical Positioning



Traditional Architecture:



```text

Decision

&#x20;   ↓

Execution

```



Parmana Architecture:



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



Parmana becomes a trust layer.



\---



\# Integration Philosophy



Organizations already have:



```text

Business Applications



Workflow Systems



AI Systems



Rule Engines



Approval Systems

```



Parmana integrates with them.



It does not replace them.



\---



\# Enterprise Placement



Canonical placement:



```text

Users

&#x20;  ↓

Business System

&#x20;  ↓

Decision

&#x20;  ↓

Parmana

&#x20;  ↓

Execution System

```



\---



\# Example: Payment Approval



Without Parmana:



```text

User

&#x20;  ↓

Approve Payment

&#x20;  ↓

Payment Executed

```



With Parmana:



```text

User

&#x20;  ↓

Approve Payment

&#x20;  ↓

Parmana

&#x20;  ↓

Attestation

&#x20;  ↓

Verification

&#x20;  ↓

Execution Token

&#x20;  ↓

Payment Executed

```



\---



\# Example: AI Agent



Without Parmana:



```text

AI Agent

&#x20;    ↓

Execute Action

```



With Parmana:



```text

AI Agent

&#x20;    ↓

Request Action

&#x20;    ↓

Parmana

&#x20;    ↓

Verify Authority

&#x20;    ↓

Execution Token

&#x20;    ↓

Action Executes

```



\---



\# Integration Modes



Parmana supports:



```text

API Integration



SDK Integration



Workflow Integration



Event Integration

```



\---



\# API Integration



Application calls:



```http

POST /attest



POST /verify



POST /token



POST /execute

```



\---



\# SDK Integration



Application imports:



```text

@parmana/sdk

```



Flow:



```text

Application

&#x20;     ↓

SDK

&#x20;     ↓

Parmana APIs

```



\---



\# Workflow Integration



Examples:



```text

ServiceNow



Camunda



Temporal



Power Automate

```



Flow:



```text

Workflow Step

&#x20;     ↓

Parmana Verification

&#x20;     ↓

Execution Step

```



\---



\# Event Integration



Examples:



```text

Kafka



RabbitMQ



AWS EventBridge

```



Flow:



```text

Decision Event

&#x20;      ↓

Parmana

&#x20;      ↓

Execution Event

```



\---



\# What Parmana Requires



Minimum inputs:



```text

Subject



Task



Policy



Signals

```



\---



\# What Parmana Produces



Outputs:



```text

Decision



Intent



Attestation



Verification Receipt



Execution Token



Execution Record



Trust Chain

```



\---



\# Integration Boundary



Parmana owns:



```text

Authorization Evidence

```



External systems own:



```text

Business Execution

```



\---



\# Canonical Architecture



```text

Business System

&#x20;       ↓

Decision

&#x20;       ↓

Parmana

&#x20;       ↓

Execution Authorization

&#x20;       ↓

External System

```



\---



\# Examples Of External Systems



```text

SAP



Salesforce



ServiceNow



Workday



Stripe



Banking Platforms



AI Agents



Custom Applications

```



\---



\# What Parmana Does Not Require



Parmana does not require:



```text

Database Replacement



Workflow Replacement



Identity Replacement



Application Rewrite

```



\---



\# Canonical Outcome



Organizations continue using existing systems.



Parmana becomes the trust infrastructure that proves:



Decision

↓

Intent

↓

Execution



across those systems.



