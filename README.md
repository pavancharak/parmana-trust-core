# Parmana Trust Core

**Execution Trust Infrastructure**

Parmana establishes trust between authority and execution.

Traditional systems can prove who approved a decision and when it was approved. They rarely prove whether execution matched what was authorized.

Parmana closes that gap.

It establishes a verifiable trust chain between:

```text
Authorization → Intent → Execution
```

Organizations can independently verify:

* What was authorized
* What was intended
* What executed
* Whether execution matched authorized intent

Parmana ensures human-defined authority governs autonomous and AI-enabled systems through verifiable execution trust.

---

## The Problem

Authorization is not the real problem.

Most organizations already have systems that record approvals, permissions, policies, and decisions.

The trust gap emerges after authorization.

Existing governance and security systems can usually answer:

```text
Who approved this?
When was it approved?
```

But they often cannot answer:

```text
What exactly was authorized?
What execution was intended?
What actually executed?
Did execution remain within authorized boundaries?
Can execution be independently verified?
```

As automation, agents, and AI-enabled systems gain execution capability, this gap becomes a governance, compliance, audit, and operational risk.

Parmana provides the trust infrastructure required to close it.

---

## Core Principle

Parmana is built around a simple trust model.

```text
Authority defines what is allowed.

Intent defines what is supposed to happen.

Execution produces observable outcomes.

Parmana ensures only authorized intent may execute.
```

```text
Authorization → Intent → Execution
```

---

## Trust Chain

```text
Subject
   ↓
Task
   ↓
Policy
   ↓
Authority Decision
   ↓
Intent
   ↓
Attestation
   ↓
Verification Receipt
   ↓
Execution Trust Token
   ↓
Execution Authorization
   ↓
Execution
   ↓
Execution Record
   ↓
Evidence

```

Each stage contributes to a cryptographically verifiable execution trust chain.

---
## Parmana Execution Boundary

Parmana establishes trust between authority and execution through the Parmana Execution Boundary.

The Parmana Execution Boundary is the trust boundary between authorized intent and execution.

Within the Parmana Execution Boundary, every execution must:

* Reference an approved decision
* Reference a valid verification receipt
* Possess a valid Execution Trust Token
* Match the authorized intent
* Pass execution authorization

```text
Authority
   ↓
Policy
   ↓
Decision
   ↓
Intent

══════════════════════════════════
     PARMANA EXECUTION BOUNDARY
══════════════════════════════════

Verification Receipt
   ↓
Execution Trust Token
   ↓
Execution Authorization

══════════════════════════════════

   ↓
Execution
   ↓
Execution Record

```
The Parmana Execution Boundary establishes enforcement before execution rather than evidence after execution.

Within the Parmana Execution Boundary:

* Nothing executes without an approved decision.
* Nothing executes without a valid verification receipt.
* Nothing executes without a valid Execution Trust Token.
* Nothing executes differently from authorized intent.

This enforcement is formalized through:

```text
INV-199 — Parmana Execution Boundary
INV-200 — Execution Must Match Authorized Intent
```

---

## Intent-Bound Execution

Parmana does not authorize execution directly from decisions.

Decisions authorize Intent.

Intent authorizes Execution.

Execution is cryptographically bound to the authorized Intent through an intent hash.

Execution is permitted only when:

```text
SHA256(executionPayload)
          ==
      intentHash
```

If execution differs from the authorized intent, execution is denied.

This enforcement is formalized through:

INV-199 — Parmana Execution Boundary

INV-200 — Execution Must Match Authorized Intent

---

## Architecture

Parmana Trust Core consists of six architectural layers.

### Authorization Layer

Determines whether an action is permitted.

```text
authority-engine
policy-registry
signal-registry
task-registry
```

### Trust Artifact Layer

Creates verifiable trust artifacts.

```text
attestation
verifier
intent
```

### Execution Trust Layer

Connects authorization to execution.

```text
execution-token
execution-verifier
execution-gateway
```

### Evidence Layer

Preserves auditability and traceability.

```text
evidence
provenance
transparency-log
audit-db
```

### Trust Infrastructure Layer

Provides cryptographic trust foundations.

```text
trust-anchor
trust-profiles
trust-federation
```

### Platform Layer

Provides shared infrastructure and support services.

```text
contracts
crypto
database
schema-registry
bundle
override-engine
sdk
server
```

---

## Getting Started

### Clone

```bash
git clone https://github.com/pavancharak/parmana-trust-core.git

cd parmana-trust-core
```

### Install

```bash
npm install
```

### Build

```bash
npm run build
```

### Run

```bash
npm start
```

---

## Docker

Pull:

```bash
docker pull parmanasystems/parmana-trust-core:latest
```

Run:

```bash
docker run --rm -p 3000:3000 parmanasystems/parmana-trust-core:latest
```

Expected output:

```text
Parmana API listening on 3000
```

Docker image verified through public Docker Hub distribution.

---

## Repository Structure

```text
apps/
docs/
examples/
openapi/
packages/
policies/
sdk/
tests/

.github/
RELEASES/
```

### Package Inventory

```text
25 Packages

attestation
audit-db
authority-engine
bundle
contracts
crypto
database
evidence
execution-gateway
execution-token
execution-verifier
intent
override-engine
policy-registry
provenance
schema-registry
sdk
server
signal-registry
task-registry
transparency-log
trust-anchor
trust-federation
trust-profiles
verifier
```

---

## Documentation

### Architecture

```text
docs/architecture/architecture-overview.md
docs/architecture/authorization-model.md
docs/architecture/intent-model.md
docs/architecture/execution-trust-model.md
docs/architecture/trust-anchor-model.md
docs/architecture/trust-federation-model.md
```

### Guides

```text
docs/guides/getting-started.md
```

### OpenAPI

```text
openapi/generated.yaml
```

### Releases

```text
RELEASES/
```

---

## Trust Anchor

The Trust Anchor is the cryptographic root of verification for a Parmana Trust Domain.

It enables independent verification of trust artifacts without requiring access to Parmana infrastructure.

Planned capabilities include:

* Public key publication
* Independent verification
* Key rotation
* Historical verification
* Trust root linkage

---

## Trust Federation

Trust Federation enables independent trust domains to exchange verification trust while maintaining separate authority, policy, and operational boundaries.

Planned capabilities include:

* Trust discovery
* Federation metadata publication
* Trust exchange
* Cross-domain verification
* Federated trust chains

---

## Current Status

### Public Release

```text
v0.1.0
```

Implemented:

```text
✓ Authorization Engine
✓ Decision Attestations
✓ Verification Receipts
✓ Intent Registry
✓ Intent-Bound Execution
✓ Execution Trust Tokens
✓ Execution Gateway
✓ Transparency Log
✓ Trust Anchor Foundation
✓ Trust Federation Foundation
✓ OpenAPI Specification
```

Core Invariants:

```text
INV-170  Append-Only Receipt History
INV-199  Parmana Execution Boundary
INV-200  Execution Must Match Authorized Intent
INV-204  Single-Use Receipt
```

Repository Snapshot:

```text
100+ commits
25 packages
150+ documentation files

Apache License 2.0
Docker Published
OpenAPI Published
```

---

## Roadmap

### Completed

```text
✓ Authorization Foundation
✓ Attestation Generation
✓ Verification Engine
✓ Intent Registry
✓ Intent-Bound Execution
✓ Execution Tokens
✓ Execution Verification
✓ Execution Gateway
✓ Transparency Log
✓ OpenAPI Specifications
✓ Trust Anchor Foundation
✓ Trust Federation Architecture
```

### Next Milestones

```text
Public Key Endpoint
External Verification
Key Rotation
Historical Verification
Federation Discovery
Cross-Domain Verification
```

---

## Contributing

See:

```text
CONTRIBUTING.md
```

---

## Security

See:

```text
SECURITY.md
```

---

## Code of Conduct

See:

```text
CODE_OF_CONDUCT.md
```

---

## License

Apache License 2.0

See:

```text
LICENSE.txt
```

---

## Vision

Parmana establishes trust between authority and execution.

```text
Authority defines what is allowed.

Intent defines what is supposed to happen.

Parmana ensures only authorized intent may execute.
```

```text
Authorization → Intent → Execution
```

Execution Trust Infrastructure for autonomous, agentic, and AI-enabled systems.
