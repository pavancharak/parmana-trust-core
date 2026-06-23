\# Integration Phase 06 — ServiceNow Integration



\## Objective



Explain how Parmana integrates with ServiceNow to provide verifiable authorization evidence for approvals, workflow execution, AI-assisted operations, and automated actions.



This integration transforms ServiceNow from:



```text

Approval Tracking

```



to:



```text

Authorization-To-Execution Trust

```



\---



\# Core Principle



ServiceNow manages workflow.



Parmana verifies execution authority.



\---



\# Canonical Positioning



ServiceNow answers:



```text

Who Approved?

```



Parmana answers:



```text

What Exactly Was Authorized?



Which Policy Allowed It?



Did Execution Match Authorization?

```



\---



\# Why ServiceNow Integration Exists



ServiceNow manages:



```text

Service Requests



Catalog Requests



Change Requests



Incident Response



Access Requests



AI Workflows

```



These workflows often contain approvals.



However approvals alone do not prove:



```text

Execution Authority



Intent Integrity



Execution Compliance

```



Parmana fills that gap.



\---



\# Canonical Architecture



Traditional ServiceNow:



```text

Request

&#x20;   ↓

Approval

&#x20;   ↓

Execution

```



Parmana-Enabled ServiceNow:



```text

Request

&#x20;   ↓

Approval

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



\# ServiceNow Integration Layer



Recommended integration point:



```text

Immediately Before Execution

```



Architecture:



```text

ServiceNow

&#x20;     ↓

Parmana API

&#x20;     ↓

Execution System

```



\---



\# Integration Methods



Supported patterns:



```text

REST APIs



Flow Designer Actions



Script Includes



Business Rules



IntegrationHub



AI Agents

```



\---



\# Service Catalog Integration



Example:



```text

New Laptop Request

```



Flow:



```text

Employee Request

&#x20;       ↓

Manager Approval

&#x20;       ↓

Procurement Approval

&#x20;       ↓

Parmana Verification

&#x20;       ↓

Order Placement

```



\---



\# Catalog Request Intent



Before execution:



```json

{

&#x20; "action": "purchase-laptop",



&#x20; "employeeId": "EMP-100",



&#x20; "cost": 1500

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

Authorized



Rejected



Override Required

```



\---



\# Change Management Integration



ServiceNow Change Request:



```text

Normal Change

```



Traditional Flow:



```text

CAB Approval

&#x20;     ↓

Change Executed

```



\---



\# Parmana Flow



```text

CAB Approval

&#x20;     ↓

Execution Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution Authorization

&#x20;     ↓

Change Executed

```



\---



\# Example Change Intent



```json

{

&#x20; "action": "deploy-release",



&#x20; "environment": "production",



&#x20; "application": "payments-api"

}

```



Parmana verifies:



```text

Deployment Policy



Approval Signals



Risk Requirements

```



before execution.



\---



\# Incident Management Integration



Example:



```text

Priority 1 Incident

```



Workflow:



```text

Incident

&#x20;    ↓

Recommended Action

&#x20;    ↓

Parmana Verification

&#x20;    ↓

Execution

```



\---



\# Security Operations Example



Action:



```text

Disable User Account

```



Intent:



```json

{

&#x20; "action": "disable-account",



&#x20; "userId": "USR-123"

}

```



Parmana verifies:



```text

Security Policy



Authority



Required Approvals

```



before account changes occur.



\---



\# Access Request Integration



Traditional:



```text

Request Access

&#x20;      ↓

Approve Access

&#x20;      ↓

Grant Access

```



Parmana:



```text

Request Access

&#x20;      ↓

Approve Access

&#x20;      ↓

Intent Verification

&#x20;      ↓

Execution Authorization

&#x20;      ↓

Grant Access

```



\---



\# Flow Designer Integration



Recommended architecture:



```text

Flow Step

&#x20;     ↓

Parmana Action

&#x20;     ↓

Condition

&#x20;     ↓

Execution Step

```



\---



\# Example Flow



```text

Manager Approval

&#x20;      ↓

Finance Approval

&#x20;      ↓

Parmana Verify

&#x20;      ↓

Release Payment

```



\---



\# Flow Designer Action



Custom Action:



```text

Verify Execution Authority

```



Inputs:



```text

Task



Signals



Execution Intent

```



Outputs:



```text

Approved



Rejected



Override Required

```



\---



\# IntegrationHub Pattern



Flow:



```text

ServiceNow

&#x20;     ↓

IntegrationHub

&#x20;     ↓

Parmana REST API

&#x20;     ↓

Trust Decision

```



No ServiceNow customization required.



\---



\# Business Rule Integration



Trigger:



```text

Before Update



Before Insert



Before Execution

```



Business Rule:



```text

Call Parmana

```



Purpose:



```text

Verify Authority Before Action

```



\---



\# Script Include Pattern



Reusable component:



```javascript

ParmanaClient

```



Responsibilities:



```text

Evaluate



Attest



Verify



Generate Token

```



Used across:



```text

Flows



Business Rules



UI Actions



Custom Apps

```



\---



\# ServiceNow AI Integration



Applicable to:



```text

Now Assist



Virtual Agent



Custom AI Agents

```



\---



\# AI Workflow Pattern



Traditional:



```text

AI Recommendation

&#x20;       ↓

Execution

```



Parmana:



```text

AI Recommendation

&#x20;       ↓

Execution Intent

&#x20;       ↓

Parmana

&#x20;       ↓

Verification

&#x20;       ↓

Execution

```



\---



\# Canonical AI Principle



```text

AI Generates Intent.



Humans Define Authority.



Parmana Verifies Authority.

```



\---



\# Approval Signals



Examples:



```json

{

&#x20; "managerApproved": true,



&#x20; "cabApproved": true,



&#x20; "securityApproved": true

}

```



These become:



```text

Trusted Signals

```



evaluated against policy.



\---



\# ServiceNow As Signal Source



ServiceNow can provide:



```text

Approvals



Change Status



Assignment Groups



Risk Scores



CMDB Context



Workflow State

```



Parmana evaluates those signals.



\---



\# Execution Token Pattern



After verification:



```text

Parmana

&#x20;     ↓

Execution Token

```



ServiceNow passes token to:



```text

Deployment Platform



Identity System



ERP



Banking System



Custom Application

```



\---



\# Trust Chain Reconstruction



Every workflow should include:



```text

businessTransactionId

```



Example:



```text

CHG0012345



REQ0012345



INC0012345

```



Used to retrieve:



```http

GET /trust-chain/{businessTransactionId}

```



\---



\# Audit Benefits



ServiceNow provides:



```text

Approval History

```



Parmana provides:



```text

Decision Evidence



Intent Evidence



Verification Evidence



Execution Evidence

```



Together they create:



```text

Authorization-To-Execution Traceability

```



\---



\# Example — Production Deployment



Workflow:



```text

Change Request

&#x20;      ↓

CAB Approval

&#x20;      ↓

Parmana

&#x20;      ↓

Execution Token

&#x20;      ↓

CI/CD Deployment

```



Questions answerable later:



```text

Who Approved?



What Was Approved?



Which Policy Applied?



What Was Intended?



Did Deployment Match Intent?

```



\---



\# Example — Access Provisioning



Workflow:



```text

Access Request

&#x20;      ↓

Manager Approval

&#x20;      ↓

Security Approval

&#x20;      ↓

Parmana

&#x20;      ↓

Identity Platform

```



Execution becomes verifiable.



\---



\# What ServiceNow Owns



```text

Workflow



Approvals



Tasks



Records



Process Management

```



\---



\# What Parmana Owns



```text

Authority Verification



Intent Verification



Execution Authorization



Trust Evidence



Trust Chains

```



\---



\# Canonical Outcome



ServiceNow remains the system of workflow orchestration.



Organizations define authority and policy.



Parmana verifies that approved workflow actions are authorized before execution and preserves verifiable evidence linking approvals, intent, and execution.



