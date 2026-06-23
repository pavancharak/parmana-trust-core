\# Integration Phase 04 — AI Agent Integration



\## Objective



Explain how Parmana integrates with AI agents and autonomous systems to ensure human-defined authority governs AI-driven execution.



This is the primary integration model for AI-native systems.



\---



\# Core Principle



AI generates recommendations.



AI generates plans.



AI generates intents.



AI does not authorize execution.



Parmana verifies authority before execution occurs.



\---



\# Canonical Positioning



Traditional AI Architecture:



```text

User

&#x20;  ↓

AI Agent

&#x20;  ↓

Action

```



Parmana Architecture:



```text

User

&#x20;  ↓

AI Agent

&#x20;  ↓

Intent

&#x20;  ↓

Parmana

&#x20;  ↓

Verification

&#x20;  ↓

Execution

```



\---



\# Canonical Parmana Principle



```text

Decisions Authorize Intent.



Intent Authorizes Execution.

```



\---



\# The AI Trust Gap



Most AI systems can answer:



```text

What should happen?

```



Few can prove:



```text

Who authorized it?



What policy allowed it?



What intent was approved?



Did execution match intent?

```



This gap exists between:



```text

Authorized

```



and



```text

Executed

```



Parmana closes that gap.



\---



\# Why AI Agents Need Parmana



AI agents increasingly perform:



```text

Financial Actions



Customer Actions



Administrative Actions



Infrastructure Actions



Security Actions

```



Examples:



```text

Send Payment



Approve Refund



Modify CRM



Reset Credentials



Provision Resources

```



These actions require authority.



\---



\# Canonical AI Trust Model



```text

Human Authority

&#x20;       ↓

Organizational Policy

&#x20;       ↓

Agent Intent

&#x20;       ↓

Parmana Verification

&#x20;       ↓

Execution

```



\---



\# What AI Produces



AI systems produce:



```text

Predictions



Recommendations



Plans



Actions



Intents

```



Parmana treats these as:



```text

Proposed Intent

```



not:



```text

Authorized Execution

```



\---



\# Intent-Centric Architecture



AI Agent:



```json

{

&#x20; "action": "release-payment",



&#x20; "amount": 50000,



&#x20; "recipient": "vendor-123"

}

```



This becomes:



```text

Execution Intent

```



\---



\# Parmana Evaluation



Input:



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



and



```text

Intent Evidence

```



\---



\# Canonical AI Flow



```text

User Request

&#x20;      ↓

AI Agent

&#x20;      ↓

Intent

&#x20;      ↓

Parmana

&#x20;      ↓

Attestation

&#x20;      ↓

Verification

&#x20;      ↓

Execution Token

&#x20;      ↓

Execution

```



\---



\# Example — Payment Agent



Agent receives:



```text

Pay Vendor Invoice

```



Agent generates:



```json

{

&#x20; "action": "release-payment",



&#x20; "amount": 10000,



&#x20; "vendorId": "V-100"

}

```



\---



\# Without Parmana



```text

Agent

&#x20;  ↓

Payment Executed

```



\---



\# With Parmana



```text

Agent

&#x20;  ↓

Intent

&#x20;  ↓

Parmana

&#x20;  ↓

Authority Verification

&#x20;  ↓

Execution Token

&#x20;  ↓

Payment Executed

```



\---



\# Human Authority Model



Organizations define:



```text

Who May Act



What May Be Done



Under Which Conditions

```



Parmana verifies those conditions.



\---



\# Canonical Authority Chain



```text

Human

&#x20;  ↓

Policy

&#x20;  ↓

Agent

&#x20;  ↓

Intent

&#x20;  ↓

Execution

```



Authority always originates with humans.



\---



\# AI Agent Is Not Authority



AI may determine:



```text

Best Action

```



AI does not determine:



```text

Authority

```



Authority is determined by:



```text

Human Policy

```



\---



\# AI Agent Signals



Examples:



```json

{

&#x20; "riskScore": 0.12,



&#x20; "fraudScore": 0.04,



&#x20; "confidence": 0.93

}

```



These are:



```text

Signals

```



not:



```text

Authority

```



Organizations decide whether such signals are trusted.



\---



\# Trusted Signal Model



Organizations define:



```text

Trusted Signals

```



Examples:



```text

Human Approval



Risk Engine



Fraud Engine



Banking System



AI Model

```



Parmana evaluates them against policy.



\---



\# Canonical Signal Principle



```text

Organizations Decide What To Trust.



Parmana Ensures Trusted Signals

Satisfy Policy Before Execution.

```



\---



\# Multi-Agent Architecture



Example:



```text

Research Agent

&#x20;       ↓

Planning Agent

&#x20;       ↓

Execution Agent

```



Parmana sits before execution.



\---



\# Multi-Agent Flow



```text

Agent Network

&#x20;     ↓

Intent

&#x20;     ↓

Parmana

&#x20;     ↓

Authorization

&#x20;     ↓

Execution

```



Regardless of how many agents exist:



```text

Authority Verification

```



occurs once.



\---



\# LLM Integration



Supported models:



```text

GPT



Claude



Gemini



Llama



Mistral



Custom Models

```



Parmana remains model-independent.



\---



\# Agent Framework Integration



Supported frameworks:



```text

LangGraph



LangChain



CrewAI



AutoGen



Semantic Kernel



Custom Agent Frameworks

```



Parmana integrates at execution boundaries.



\---



\# Recommended Integration Point



Place Parmana:



```text

Immediately Before Execution

```



Example:



```text

LLM

&#x20;↓

Tool Selection

&#x20;↓

Parmana

&#x20;↓

Tool Execution

```



\---



\# Tool Calling Architecture



Without Parmana:



```text

LLM

&#x20;↓

Tool

```



With Parmana:



```text

LLM

&#x20;↓

Tool Request

&#x20;↓

Parmana

&#x20;↓

Tool Execution

```



\---



\# High-Risk Actions



Recommended Parmana enforcement:



```text

Payments



Fund Transfers



Account Changes



Security Changes



Customer Data Access



Infrastructure Changes

```



\---



\# Attestation Purpose



Attestation proves:



```text

What Was Authorized

```



before execution occurs.



\---



\# Verification Purpose



Verification proves:



```text

Authorization Evidence

Is Authentic

```



\---



\# Execution Token Purpose



Execution token proves:



```text

Execution Is Authorized

```



\---



\# Execution Record Purpose



Execution record proves:



```text

What Actually Happened

```



\---



\# Trust Chain Purpose



Trust chain proves:



```text

Decision

&#x20;  ↓

Intent

&#x20;  ↓

Execution

```



end-to-end.



\---



\# Agent Auditability



Questions Parmana enables:



```text

What Did The Agent Intend?



Which Policy Was Evaluated?



Which Signals Were Trusted?



Was Execution Authorized?



Did Execution Match Intent?

```



\---



\# Relationship To Human-in-the-Loop



Parmana is not a Human-in-the-Loop system.



Parmana is an Authority Verification system.



Humans define authority.



Organizations define policy.



AI systems operate within those human-defined boundaries.



\---



\# Canonical Outcome



AI agents generate intents.



Organizations define authority.



Parmana verifies that human-defined authority and organizational policy permit execution before actions occur.



This ensures human-defined authority governs AI systems.



