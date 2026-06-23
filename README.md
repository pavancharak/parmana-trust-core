# Parmana Trust Core

**Execution Trust Infrastructure for Autonomous and AI-Enabled Systems**

Parmana ensures human-defined authority governs autonomous and AI-enabled systems through verifiable execution trust.

Traditional systems can prove who approved a decision and when it was approved. They rarely prove whether execution matched what was actually authorized.

Parmana closes that gap.

It establishes a verifiable trust chain connecting:

```text
Authorization → Intent → Execution
```

so organizations can independently verify:

* What was authorized
* What was intended
* What actually executed
* Whether execution remained within approved authority and policy boundaries

---

## The Problem

As organizations adopt automation, agents, and AI-enabled systems, a new trust gap emerges.

Existing security and governance systems answer:

```text
Who approved this?
When was it approved?
```

But they often cannot answer:

```text
What exactly was authorized?
What execution was intended?
Did execution remain within authorized boundaries?
Can the result be independently verified?
```

This gap creates operational, compliance, and governance risk.

Parmana provides the trust infrastructure required to close it.

---

## Core Principle

Parmana is built around a simple trust model:

```text
Decision → Intent → Execution
```

Decisions authorize intent.

Intent authorizes execution.

Execution produces verifiable evidence.

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
Attestation
   ↓
Verification
   ↓
Execution Token
   ↓
Execution
   ↓
Execution Record
   ↓
Evidence
```

Each stage contributes to a cryptographically verifiable execution trust chain.

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
```

### Execution Trust Layer

Connects authorization to execution.

```text
execution-token
execution-verifier
execution-gateway
```

### Evidence Layer

Preserves auditability and replayability.

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

Provides supporting infrastructure.

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

Build:

```bash
docker build -t parmana-trust-core .
```

Run:

```bash
docker run --rm -p 3000:3000 parmana-trust-core
```

Expected output:

```text
Parmana API listening on 3000
```

Validated using a clean Docker environment.

---

## Documentation

### Start Here

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

---

## Trust Anchor

The Trust Anchor is the cryptographic root of verification for a trust domain.

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
* Federation metadata
* Cross-domain verification
* Trust exchange
* Federated trust chains

---

## Status

Current release:

```text
v0.1.0
```

Repository snapshot:

```text
106+ commits
24 packages
158+ documentation files
74+ architecture documents
Apache License 2.0
```

---

## Roadmap

Completed:

```text
✓ Authorization Foundation
✓ Attestation Generation
✓ Verification Engine
✓ Execution Tokens
✓ Execution Verification
✓ Execution Gateway
✓ OpenAPI Specifications
✓ Trust Anchor Foundation
✓ Trust Federation Architecture
```

Next:

```text
Key Rotation
Trust Root Publication
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

## Security

See:

```text
SECURITY.md
```

## Code of Conduct

See:

```text
CODE_OF_CONDUCT.md
```

## License

Apache License 2.0

See:

```text
LICENSE.txt
```

---

## Vision

Parmana establishes verifiable trust between authorization, intent, and execution.

It provides the execution trust infrastructure required for the next generation of autonomous and AI-enabled systems.
