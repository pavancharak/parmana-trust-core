\# Integration Phase 03 — Event-Driven Integration



\## Objective



Explain how Parmana integrates into asynchronous and event-driven architectures.



This integration pattern is designed for:



```text

Kafka

RabbitMQ

AWS EventBridge

Azure Event Grid

Google Pub/Sub

NATS

Redpanda

Enterprise Message Buses

```



where decisions and executions occur through events rather than direct API calls.



\---



\# Core Principle



Parmana does not execute events.



Parmana provides trust evidence for event-driven execution.



\---



\# Canonical Architecture



Traditional Event Flow:



```text

Event

&#x20;  ↓

Consumer

&#x20;  ↓

Execution

```



Parmana Event Flow:



```text

Event

&#x20;  ↓

Decision

&#x20;  ↓

Attestation

&#x20;  ↓

Verification

&#x20;  ↓

Execution Authorization

&#x20;  ↓

Execution

```



\---



\# Why Event Integration Exists



Modern systems are increasingly asynchronous.



Examples:



```text

Payment Processing



Order Fulfillment



Inventory Updates



Fraud Detection



AI Agent Workflows



Microservices Architectures

```



In these environments:



```text

Decision Time

```



and



```text

Execution Time

```



are often separated.



Parmana preserves trust across that gap.



\---



\# Canonical Event Model



```text

Business Event

&#x20;      ↓

Parmana Evaluation

&#x20;      ↓

Attestation Event

&#x20;      ↓

Verification Event

&#x20;      ↓

Execution Event

```



\---



\# Example: Payment Release



Payment request arrives:



```json

{

&#x20; "eventType": "payment.requested",

&#x20; "transactionId": "TX-1001"

}

```



\---



\# Event Processing Flow



```text

Payment Requested

&#x20;        ↓

Evaluate Policy

&#x20;        ↓

Create Attestation

&#x20;        ↓

Verify Attestation

&#x20;        ↓

Generate Execution Token

&#x20;        ↓

Execute Payment

```



\---



\# Event Topics



Typical event topics:



```text

payments.requested



payments.attested



payments.verified



payments.authorized



payments.executed

```



\---



\# Example Kafka Flow



Producer:



```text

Payment Service

```



Publishes:



```text

payments.requested

```



\---



\# Parmana Consumer



Consumes:



```text

payments.requested

```



Creates:



```text

Attestation

```



Publishes:



```text

payments.attested

```



\---



\# Verification Consumer



Consumes:



```text

payments.attested

```



Creates:



```text

Verification Receipt

```



Publishes:



```text

payments.verified

```



\---



\# Execution Consumer



Consumes:



```text

payments.verified

```



Creates:



```text

Execution Token

```



Publishes:



```text

payments.authorized

```



\---



\# Execution System



Consumes:



```text

payments.authorized

```



Performs:



```text

Actual Payment

```



Publishes:



```text

payments.executed

```



\---



\# Event Sequence



```text

Requested

&#x20;   ↓

Attested

&#x20;   ↓

Verified

&#x20;   ↓

Authorized

&#x20;   ↓

Executed

```



\---



\# Event Payload Design



Minimum event payload:



```json

{

&#x20; "businessTransactionId": "TX-1001",



&#x20; "subjectId": "user-123",



&#x20; "taskId": "payment.release"

}

```



\---



\# Correlation IDs



Every event should contain:



```text

businessTransactionId

```



Purpose:



```text

Trust Chain Correlation

```



Example:



```json

{

&#x20; "businessTransactionId":

&#x20;   "TX-1001"

}

```



This allows reconstruction of:



```text

Decision

Intent

Verification

Execution

```



across multiple services.



\---



\# Distributed Systems Model



```text

Service A

&#x20;   ↓

Event



Service B

&#x20;   ↓

Event



Service C

&#x20;   ↓

Event

```



Parmana maintains:



```text

Single Trust Chain

```



across all services.



\---



\# Event Sourcing Integration



Parmana works naturally with:



```text

Event Sourcing

```



Flow:



```text

Domain Event

&#x20;     ↓

Attestation Event

&#x20;     ↓

Verification Event

&#x20;     ↓

Execution Event

```



Trust evidence becomes part of the event stream.



\---



\# AI Agent Integration



Example:



```text

AI Agent

&#x20;     ↓

Action Request Event

```



Parmana:



```text

Evaluate

Attest

Verify

Authorize

```



Execution proceeds only after authorization evidence exists.



\---



\# Failure Handling



If verification fails:



```text

Verification Event

&#x20;      ↓

INVALID

```



Publish:



```text

authorization.failed

```



Execution must not occur.



\---



\# Retry Model



Transient failures:



```text

Network Failure



Broker Failure



Temporary Service Failure

```



may retry.



Trust failures:



```text

Policy Failure



Verification Failure



Invalid Signature

```



must not retry automatically.



\---



\# Event Retention



Organizations should retain:



```text

Attestation Events



Verification Events



Execution Events

```



for audit and trust reconstruction.



\---



\# Trust Chain Reconstruction



Retrieve:



```text

businessTransactionId

```



Then:



```text

Requested

Attested

Verified

Authorized

Executed

```



can be reconstructed across the event stream.



\---



\# Example Architecture



```text

Kafka

&#x20;  ↓

Parmana Evaluation Consumer

&#x20;  ↓

Kafka

&#x20;  ↓

Parmana Verification Consumer

&#x20;  ↓

Kafka

&#x20;  ↓

Execution Consumer

```



Parmana becomes:



```text

Trust Infrastructure

```



inside the event pipeline.



\---



\# What Parmana Owns



```text

Decision Evidence



Intent Evidence



Verification Evidence



Execution Authorization

```



\---



\# What Event Platforms Own



```text

Message Delivery



Retry Logic



Ordering



Partitioning



Scalability

```



\---



\# Supported Platforms



```text

Apache Kafka



Confluent Cloud



AWS EventBridge



RabbitMQ



NATS



Azure Event Grid



Google Pub/Sub



Redpanda

```



\---



\# Canonical Outcome



Parmana integrates into event-driven architectures by creating verifiable trust evidence between decision and execution events.



Events continue to flow through existing messaging infrastructure.



Parmana ensures every execution can be traced back to a verified authorization decision.



