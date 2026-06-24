# Intent Model

## Overview

Intent is the bridge between authorization and execution.

Traditional systems often authorize actions without explicitly defining the exact execution that is permitted.

Parmana introduces Intent as a first-class trust artifact that captures what execution is supposed to happen.

Intent exists to answer a simple question:

```text
What exactly was authorized to execute?
```

Intent is the foundation of Execution Trust.

---

## Role in the Trust Chain

Parmana establishes a verifiable trust chain between authority and execution.

```text
Authorization
      ↓
Intent
      ↓
Execution
```

Authority defines what is allowed.

Intent defines what is supposed to happen.

Execution produces observable outcomes.

Parmana makes execution verifiable.

---

## Why Intent Exists

Most systems can prove:

```text
Who approved a decision?
When was it approved?
```

Few systems can prove:

```text
What execution was actually authorized?
```

Without an explicit Intent layer:

```text
Authorization
      ↓
Execution
```

there is no verifiable boundary between approval and execution.

Intent closes this gap.

---

## Intent Structure

An Intent contains:

```typescript
interface Intent {

  intentId: string;

  businessTransactionId: string;

  decisionId: string;

  taskId: string;

  policyId: string;

  policyVersion: string;

  executionIntent: unknown;

  intentHash: string;

  createdAt: string;
}
```

---

## Intent Identifier

Each Intent receives a unique identifier.

```text
intentId
```

The identifier enables lineage tracking across trust artifacts.

Intent IDs are propagated through:

```text
Verification Receipt
Execution Trust Token
Execution Record
```

---

## Intent Hash

Every Intent produces a deterministic cryptographic hash.

```text
intentHash
```

The hash is generated from the authorized execution payload.

```text
intentHash
    =
SHA256(executionIntent)
```

The intent hash becomes the authoritative representation of approved execution.

---

## Intent Creation

Intent is created immediately after an authority decision.

```text
Authority Decision
        ↓
      Intent
```

A decision does not authorize execution directly.

Instead:

```text
Decision
    ↓
Intent
    ↓
Execution
```

This separation enables independent verification of execution behavior.

---

## Intent Persistence

Intent is stored as an independent trust artifact.

```text
intents
```

Intent persistence provides:

* Auditability
* Replayability
* Traceability
* Independent verification

Intent remains available even after execution completes.

---

## Intent Lineage

Intent lineage is preserved throughout the execution trust chain.

```text
Intent
   ↓
Verification Receipt
   ↓
Execution Trust Token
   ↓
Execution Record
```

Each artifact carries:

```text
intentId
intentHash
```

This creates a continuous chain of trust from authorization to execution.

---

## Intent-Bound Execution

Execution is authorized only when execution matches the approved Intent.

Parmana enforces:

```text
SHA256(executionPayload)
          ==
      intentHash
```

If hashes match:

```text
Execution Allowed
```

If hashes differ:

```text
Execution Denied
```

---

## INV-200

Intent-Bound Execution is formalized through:

```text
INV-200
Execution Must Match Authorized Intent
```

Rule:

```text
Execution payload must exactly match
the authorized intent.
```

Violation:

```text
INV-200 violation:
Execution payload does not match authorized intent.
```

---

## Example

Authorized Intent:

```json
{
  "amount": 1000,
  "currency": "INR",
  "recipient": "merchant-123"
}
```

Generated:

```text
intentHash =
405ff5dccd32dbb7c36d5b2778916da4b41bff04e170f71ecc84cf9aebcc3715
```

Attempted Execution:

```json
{
  "amount": 1900,
  "currency": "INR",
  "recipient": "merchant-123"
}
```

Generated:

```text
actualHash =
a69f539775f6d72b8b9fbf42759c7f736092655451a4bfaf35118a873c031f19
```

Result:

```text
INV-200 violation

Execution blocked
```

---

## Architectural Significance

Intent is the mechanism that transforms authorization into execution trust.

Without Intent:

```text
Authority
    ↓
Execution
```

With Intent:

```text
Authority
    ↓
Intent
    ↓
Execution
```

Intent provides the verifiable boundary that allows organizations to independently determine:

```text
What was authorized
What was intended
What executed
Whether execution matched intent
```

---

## Canonical Principle

```text
Authority defines what is allowed.

Intent defines what is supposed to happen.

Parmana makes execution verifiable.
```

```text
Authorization → Intent → Execution
```
