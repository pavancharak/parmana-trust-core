
# Parmana Trust Core
Parmana ensures human-defined authority governs autonomous and AI-enabled systems through verifiable execution trust. 

**Open-source trust infrastructure for Authorization → Intent → Execution verification.**

Parmana Trust Core enables organizations to establish verifiable trust between human authority, organizational policy, and system execution.

Traditional systems prove **who approved** something and **when**. Parmana extends that model by making it possible to verify **what was authorized**, **what was intended**, and **what actually executed**.

---

## Why Parmana

Modern software systems increasingly make autonomous decisions and execute actions across distributed environments.

Organizations need stronger guarantees that:

* Authority was valid
* Policy was enforced
* Intent was preserved
* Execution matched authorization
* Evidence remains independently verifiable

Parmana provides the trust infrastructure required to establish those guarantees.

---

## Core Trust Model

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

Parmana's core principle:

```text
Decision → Intent → Execution
```

Decisions authorize intent.

Intent authorizes execution.

---

## Architecture Overview

### Authorization Layer

Responsible for determining whether an action is permitted.

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

Preserves traceability and auditability.

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

Shared infrastructure and support services.

```text
contracts
crypto
database
schema-registry
bundle
override-engine
```

### Access Layer

Developer and service interfaces.

```text
sdk
server
```

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

### Packages

```text
24 packages
```

```text
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

## Docker Quick Start

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

Verified using a clean Docker environment.

---

## Documentation

### Start Here

Architecture:

```text
docs/architecture/architecture-overview.md
docs/architecture/authorization-model.md
docs/architecture/intent-model.md
docs/architecture/execution-trust-model.md
docs/architecture/trust-anchor-model.md
docs/architecture/trust-federation-model.md
```

Guides:

```text
docs/guides/getting-started.md
```

OpenAPI:

```text
openapi/openapi.yaml
```

Release Notes:

```text
RELEASES/
```

---

## OpenAPI

The repository includes OpenAPI specifications describing Parmana APIs.

```text
openapi/
```

Generated specification:

```text
openapi/generated.yaml
```

---

## Trust Anchor

The Trust Anchor is the cryptographic root of verification for a Parmana Trust Domain.

Responsibilities include:

* Public key publication
* Independent verification
* Trust metadata publication
* Key rotation
* Historical verification
* Trust root linkage

---

## Trust Federation

Trust Federation enables independent trust domains to exchange verification trust without sharing private keys or internal infrastructure.

Future federation capabilities include:

* Trust discovery
* Trust exchange
* Cross-domain verification
* Federation metadata publication
* Federated trust chains

---

## Current Status

### Public Release

```text
v0.1.0
```

Repository Metrics:

```text
106+ commits
24 packages
158+ documentation files
74+ architecture documents
Apache 2.0 License
```

---

## Roadmap

### Completed

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

### Next Milestones

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

## Project Vision

Parmana ensures human-defined authority governs autonomous and AI-enabled systems through verifiable execution trust.

```text
Authorization → Intent → Execution
```

**Execution Trust Infrastructure for the next generation of autonomous systems.**
