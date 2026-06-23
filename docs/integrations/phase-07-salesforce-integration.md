\# Integration Phase 07 — Salesforce Integration



\## Objective



Explain how Parmana integrates with Salesforce to provide verifiable authorization, intent validation, and execution trust for CRM-driven actions, approvals, automation, and AI-assisted workflows.



This integration transforms Salesforce from:



```text

Customer Workflow Automation

```



into:



```text

Customer Workflow Trust Infrastructure

```



\---



\# Core Principle



Salesforce manages customer processes.



Parmana verifies execution authority.



\---



\# Canonical Positioning



Salesforce answers:



```text

What Customer Action Should Occur?

```



Parmana answers:



```text

Is This Customer Action Authorized?



Which Policy Allows It?



Does Execution Match Intent?

```



\---



\# Why Salesforce Integration Exists



Salesforce drives:



```text

Sales Approvals



Discount Approvals



Quote Generation



Contract Workflows



Customer Service Actions



Partner Operations



Revenue Operations



AI-Powered CRM Actions

```



Many of these workflows eventually trigger:



```text

Financial Actions



Contractual Actions



Customer Actions



System Actions

```



Those actions require authority verification.



\---



\# Canonical CRM Trust Model



```text

CRM Record

&#x20;     ↓

Business Decision

&#x20;     ↓

Execution Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Verification

&#x20;     ↓

Execution

```



\---



\# Traditional Salesforce Flow



```text

Opportunity

&#x20;     ↓

Approval

&#x20;     ↓

Contract

&#x20;     ↓

Execution

```



\---



\# Parmana-Enabled Flow



```text

Opportunity

&#x20;     ↓

Approval

&#x20;     ↓

Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Attestation

&#x20;     ↓

Verification

&#x20;     ↓

Execution

```



\---



\# Salesforce Integration Points



Recommended integration locations:



```text

Flow Builder



Apex Services



Platform Events



Approval Processes



Agentforce



External Integrations

```



\---



\# Opportunity Approval Example



Sales rep submits:



```text

Enterprise Deal

```



Workflow:



```text

Sales Manager Approval

&#x20;         ↓

Finance Approval

&#x20;         ↓

Contract Generation

```



\---



\# Traditional Question



Salesforce records:



```text

Who Approved?

```



\---



\# Parmana Question



Parmana records:



```text

What Exactly Was Approved?



Which Pricing Policy Applied?



Which Signals Were Trusted?



What Execution Was Authorized?

```



\---



\# Quote Approval Example



Quote:



```json

{

&#x20; "customer": "ACME",



&#x20; "contractValue": 500000,



&#x20; "discountPercent": 25

}

```



Execution intent:



```text

Approve Enterprise Contract

```



Parmana evaluates:



```text

Discount Policy



Approval Requirements



Revenue Policy



Authority Policy

```



before execution.



\---



\# Contract Execution Example



Traditional:



```text

Approval

&#x20;     ↓

Contract Sent

```



Parmana:



```text

Approval

&#x20;     ↓

Execution Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Execution Authorization

&#x20;     ↓

Contract Sent

```



\---



\# Revenue Operations Example



Action:



```text

Apply Special Pricing

```



Intent:



```json

{

&#x20; "action": "apply-discount",



&#x20; "discount": 30,



&#x20; "opportunityId": "OPP-100"

}

```



Parmana verifies:



```text

Pricing Authority



Revenue Policy



Required Approvals

```



before pricing changes occur.



\---



\# Salesforce Flow Builder Integration



Recommended pattern:



```text

Flow Step

&#x20;     ↓

Parmana Verification

&#x20;     ↓

Decision Branch

&#x20;     ↓

Execution Step

```



\---



\# Example Flow Builder Process



```text

Manager Approval

&#x20;     ↓

Finance Approval

&#x20;     ↓

Parmana

&#x20;     ↓

Generate Contract

```



\---



\# Apex Integration Pattern



Service:



```text

ParmanaService

```



Responsibilities:



```text

Evaluate



Attest



Verify



Generate Token



Record Execution

```



Used by:



```text

Flows



Triggers



Controllers



Custom Applications

```



\---



\# Platform Events Integration



Salesforce publishes:



```text

QuoteApproved



ContractReady



OpportunityWon

```



Parmana consumes:



```text

Execution Intent

```



and generates:



```text

Attestation



Verification



Execution Authorization

```



\---



\# Event-Driven CRM Flow



```text

Opportunity Won

&#x20;       ↓

Platform Event

&#x20;       ↓

Parmana

&#x20;       ↓

Execution Authorization

&#x20;       ↓

ERP Integration

```



\---



\# CPQ Integration



Salesforce CPQ actions:



```text

Quote Creation



Discount Approval



Contract Generation

```



become:



```text

Execution Intents

```



verified by Parmana before execution.



\---



\# Example CPQ Intent



```json

{

&#x20; "action": "generate-contract",



&#x20; "quoteId": "Q-100",



&#x20; "contractValue": 750000

}

```



Parmana verifies:



```text

Approval Policy



Revenue Policy



Authority Requirements

```



\---



\# Customer Service Integration



Example:



```text

Issue Refund

```



Traditional:



```text

Agent Approval

&#x20;     ↓

Refund Issued

```



Parmana:



```text

Agent Approval

&#x20;     ↓

Refund Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Execution Authorization

&#x20;     ↓

Refund Issued

```



\---



\# Customer Data Actions



Examples:



```text

Delete Customer



Export Customer Data



Modify Sensitive Records

```



Parmana verifies:



```text

Authority



Privacy Policy



Data Governance Policy

```



before execution.



\---



\# Salesforce Agentforce Integration



Agentforce generates:



```text

Recommendations



Plans



Actions



Tool Calls

```



Parmana treats these as:



```text

Execution Intents

```



not:



```text

Execution Authority

```



\---



\# Canonical Agentforce Model



```text

Agentforce

&#x20;     ↓

Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Authority Verification

&#x20;     ↓

Execution

```



\---



\# AI-Powered CRM Actions



Examples:



```text

Issue Refund



Modify Contract



Apply Discount



Send Legal Notice



Close Opportunity

```



Parmana verifies authority before execution.



\---



\# Trusted Signal Sources



Salesforce can provide:



```text

Approval Status



Role Hierarchy



Opportunity Stage



Account Tier



Revenue Classification



Contract Status

```



These become:



```text

Trusted Signals

```



for policy evaluation.



\---



\# Canonical Signal Principle



```text

Organizations Decide What To Trust.



Parmana Ensures Trusted Signals

Satisfy Policy Before Execution.

```



\---



\# Multi-System CRM Flow



Example:



```text

Salesforce

&#x20;     ↓

Parmana

&#x20;     ↓

ERP

&#x20;     ↓

Billing

```



Parmana provides:



```text

Cross-System Trust

```



between systems.



\---



\# Execution Token Pattern



After verification:



```text

Parmana

&#x20;     ↓

Execution Token

```



Token accompanies:



```text

Contract



Refund



Discount



Customer Action

```



into downstream systems.



\---



\# Trust Chain Reconstruction



Recommended identifier:



```text

businessTransactionId

```



Examples:



```text

Opportunity ID



Quote ID



Contract ID



Case ID

```



Trust chain retrieval:



```http

GET /trust-chain/{businessTransactionId}

```



\---



\# Audit Benefits



Salesforce provides:



```text

Record History



Approval History



Field History

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



\# Example — Enterprise Discount Approval



Workflow:



```text

Sales Rep

&#x20;     ↓

Manager Approval

&#x20;     ↓

Finance Approval

&#x20;     ↓

Parmana

&#x20;     ↓

Contract Generation

```



Questions answerable later:



```text

Who Approved?



What Discount Was Authorized?



Which Policy Applied?



What Contract Was Generated?



Did Execution Match Authorization?

```



\---



\# Example — Customer Refund



Workflow:



```text

Support Agent

&#x20;      ↓

Approval

&#x20;      ↓

Parmana

&#x20;      ↓

Refund Platform

```



Execution becomes independently verifiable.



\---



\# What Salesforce Owns



```text

CRM Records



Opportunities



Quotes



Approvals



Customer Processes



Agent Workflows

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



Salesforce remains the system of customer engagement and workflow orchestration.



Organizations define authority and policy.



Parmana verifies that customer-impacting actions, financial actions, contractual actions, and AI-generated actions are authorized before execution and preserves verifiable evidence linking decision, intent, and execution.



