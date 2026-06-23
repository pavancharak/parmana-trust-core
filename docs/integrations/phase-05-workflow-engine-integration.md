\# Integration Phase 05 — Workflow Engine Integration



\## Objective



Explain how Parmana integrates with workflow engines to ensure that workflow execution is governed by verifiable authority, policy, and execution trust.



This integration pattern applies to:



```text

ServiceNow Flow Designer



Camunda



Temporal



Power Automate



Pega



Appian



JBPM



Custom BPMN Platforms

```



\---



\# Core Principle



Workflow engines orchestrate execution.



Parmana verifies authority before execution occurs.



\---



\# Canonical Positioning



Workflow engines answer:



```text

What Happens Next?

```



Parmana answers:



```text

Is The Next Action Authorized?

```



\---



\# Traditional Workflow Architecture



```text

Workflow

&#x20;   ↓

Task

&#x20;   ↓

Execution

```



\---



\# Parmana Workflow Architecture



```text

Workflow

&#x20;   ↓

Task

&#x20;   ↓

Intent

&#x20;   ↓

Parmana

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



\---



\# Why Workflow Integration Exists



Workflow engines coordinate:



```text

Approvals



Payments



Employee Onboarding



Customer Operations



Service Requests



Security Processes

```



However they typically record:



```text

Who Approved



When Approved

```



but cannot always prove:



```text

What Exactly Was Authorized



Which Policy Applied



Whether Execution Matched Authorization

```



Parmana provides that evidence layer.



\---



\# Canonical Workflow Trust Model



```text

Workflow Decision

&#x20;        ↓

Execution Intent

&#x20;        ↓

Parmana Verification

&#x20;        ↓

Execution Authorization

&#x20;        ↓

Workflow Execution

```



\---



\# Workflow Engine Responsibilities



Workflow engines own:



```text

Task Routing



Approvals



Escalations



Timers



Retries



Orchestration

```



\---



\# Parmana Responsibilities



Parmana owns:



```text

Authority Verification



Policy Evaluation



Intent Verification



Attestation Generation



Execution Authorization



Trust Evidence

```



\---



\# Workflow Integration Point



Recommended placement:



```text

Immediately Before Execution

```



\---



\# Canonical Placement



```text

Workflow Step

&#x20;       ↓

Execution Intent

&#x20;       ↓

Parmana

&#x20;       ↓

Execution Authorization

&#x20;       ↓

Next Workflow Step

```



\---



\# Example — Payment Approval Workflow



Workflow:



```text

Manager Approval

&#x20;       ↓

Finance Approval

&#x20;       ↓

Release Payment

```



Traditional flow:



```text

Approval

&#x20;    ↓

Payment Executes

```



\---



\# Parmana Flow



```text

Approval

&#x20;    ↓

Intent Generated

&#x20;    ↓

Parmana

&#x20;    ↓

Attestation

&#x20;    ↓

Verification

&#x20;    ↓

Execution Token

&#x20;    ↓

Payment Executes

```



\---



\# Example Execution Intent



Workflow creates:



```json

{

&#x20; "action": "release-payment",



&#x20; "amount": 10000,



&#x20; "vendorId": "V-100"

}

```



This becomes:



```text

Execution Intent

```



\---



\# Parmana Evaluation



Inputs:



```text

Subject



Task



Policy



Signals



Execution Intent

```



Output:



```text

Decision

```



\---



\# Workflow Decision Outcomes



Possible outcomes:



```text

APPROVED



REJECTED



OVERRIDE REQUIRED

```



\---



\# Approved Flow



```text

Workflow

&#x20;   ↓

Intent

&#x20;   ↓

Parmana

&#x20;   ↓

APPROVED

&#x20;   ↓

Execution

```



\---



\# Rejected Flow



```text

Workflow

&#x20;   ↓

Intent

&#x20;   ↓

Parmana

&#x20;   ↓

REJECTED

```



Execution stops.



\---



\# Override Flow



```text

Workflow

&#x20;    ↓

Intent

&#x20;    ↓

Parmana

&#x20;    ↓

OVERRIDE REQUIRED

&#x20;    ↓

Human Review

```



\---



\# ServiceNow Example



Flow Designer:



```text

Approval Step

&#x20;     ↓

Custom Parmana Action

&#x20;     ↓

Execution Step

```



Parmana verifies authority before the execution step runs.



\---



\# Camunda Example



BPMN:



```text

User Task

&#x20;     ↓

Service Task

&#x20;     ↓

Parmana Verification

&#x20;     ↓

Execution Task

```



\---



\# Temporal Example



Workflow:



```text

Activity

&#x20;     ↓

Parmana Verification Activity

&#x20;     ↓

Execution Activity

```



\---



\# Power Automate Example



Flow:



```text

Approval

&#x20;     ↓

HTTP Action

&#x20;     ↓

Parmana

&#x20;     ↓

Condition

&#x20;     ↓

Execute Action

```



\---



\# Human Approval Workflows



Human approval is treated as:



```text

Trusted Signal

```



Example:



```json

{

&#x20; "managerApproved": true

}

```



Organizations decide that this signal is trusted.



Parmana evaluates it against policy.



\---



\# Multi-Approval Workflows



Example:



```text

Manager Approval

&#x20;       ↓

Finance Approval

&#x20;       ↓

Security Approval

```



Signals:



```json

{

&#x20; "managerApproved": true,



&#x20; "financeApproved": true,



&#x20; "securityApproved": true

}

```



Parmana verifies policy satisfaction.



\---



\# Workflow Auditability



Workflow systems answer:



```text

Who Completed A Task?

```



Parmana answers:



```text

What Was Authorized?



Which Policy Applied?



Which Signals Were Trusted?



Was Execution Authorized?

```



\---



\# Long-Running Workflows



Example:



```text

Day 1

Approval

```



```text

Day 7

Execution

```



Parmana preserves:



```text

Authorization Evidence

```



across time.



\---



\# Workflow Retry Behavior



Allowed:



```text

Network Errors



Temporary Service Failures



Timeouts

```



Not automatically retried:



```text

Policy Failures



Verification Failures



Authority Failures

```



These require remediation.



\---



\# Execution Trust Chain



Workflow execution generates:



```text

Decision

&#x20;    ↓

Intent

&#x20;    ↓

Attestation

&#x20;    ↓

Verification

&#x20;    ↓

Execution

```



Trust chain retrieval:



```http

GET /trust-chain/{businessTransactionId}

```



\---



\# Workflow Correlation



Every workflow instance should include:



```text

businessTransactionId

```



Purpose:



```text

Trust Chain Reconstruction

```



Example:



```json

{

&#x20; "businessTransactionId":

&#x20;   "WF-1001"

}

```



\---



\# Workflow Governance



Workflow engines govern:



```text

Process Flow

```



Parmana governs:



```text

Execution Authority

```



These are complementary responsibilities.



\---



\# Relationship To AI Agents



Workflow engines increasingly invoke:



```text

AI Agents

```



Recommended architecture:



```text

Workflow

&#x20;     ↓

AI Agent

&#x20;     ↓

Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Execution

```



Authority remains externally verifiable.



\---



\# Relationship To Enterprise Systems



Workflow engines orchestrate:



```text

SAP



Salesforce



ServiceNow



Banking Systems



Custom Applications

```



Parmana provides a consistent trust layer across all of them.



\---



\# Canonical Outcome



Workflow engines determine how work progresses.



Organizations define policy and authority.



Parmana verifies that workflow execution is consistent with authorized intent before execution occurs.



This creates a verifiable chain from workflow decision to workflow execution.



