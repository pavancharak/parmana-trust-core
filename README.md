# Parmana Trust Core

Open-source trust infrastructure for Authorization → Intent → Execution verification.

## Overview

Traditional systems can prove:

* Who approved
* When approval occurred

They typically cannot prove:

* What was actually authorized
* What execution was expected
* Whether execution matched authorization

Parmana Trust Core introduces an execution trust architecture that preserves intent and enables independent verification of execution outcomes.

---

## Core Thesis

Authorization is not the trust problem.

The trust gap exists between authorized decisions and actual execution.

Parmana exists to make that gap independently verifiable.

---

## Trust Lifecycle

```text
Authority
      ↓
Policy
      ↓
Decision
      ↓
Intent
      ↓
Attestation
      ↓
Verification Receipt
      ↓
Execution Token
      ↓
Execution Record
      ↓
Execution Trust Chain
```

Principle:

```text
Decisions authorize Intent.

Intent authorizes Execution.

Execution Trust verifies that execution matched intent.
```

---

## Why Parmana?

Modern organizations increasingly rely on:

* Automated systems
* Workflow engines
* Autonomous services
* AI-assisted systems
* Agentic architectures

These systems often execute actions after an approval decision has been made.

Parmana provides cryptographic trust artifacts and verification mechanisms that preserve evidence from authorization through execution.

---

## Package Architecture

Parmana Trust Core is organized as a modular trust infrastructure platform.

### Core Trust Packages

| Package            | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| authority-engine   | Authority evaluation and authorization decisions |
| policy-registry    | Policy registration and retrieval                |
| task-registry      | Task definitions and lifecycle management        |
| signal-registry    | Signal registration and evaluation               |
| attestation        | Cryptographic attestation generation             |
| verifier           | Attestation verification                         |
| execution-token    | Execution authorization tokens                   |
| execution-verifier | Execution token verification                     |
| execution-gateway  | Execution trust gateway                          |
| trust-anchor       | Trust anchor publication and verification        |
| trust-federation   | Federated trust architecture                     |
| trust-profiles     | Trust profile definitions                        |
| transparency-log   | Transparency and audit logging                   |
| evidence           | Evidence generation and preservation             |
| provenance         | Provenance tracking and lineage                  |
| audit-db           | Audit persistence and retrieval                  |

### Platform Packages

| Package         | Purpose                            |
| --------------- | ---------------------------------- |
| contracts       | Shared platform contracts          |
| bundle          | Policy and trust bundles           |
| crypto          | Cryptographic primitives           |
| database        | Persistence abstractions           |
| sdk             | Developer SDK                      |
| server          | API server implementation          |
| override-engine | Controlled override workflows      |
| schema-registry | Schema registration and validation |

---

## Architecture Documentation

Architecture documentation is available in:

```text
docs/architecture/
```

Key documents:

```text
architecture-overview.md
authorization-model.md
intent-model.md
execution-trust-model.md
execution-trust-chain-model.md
trust-anchor-model.md
trust-root-model.md
trust-federation-model.md
key-rotation-model.md
```

---

## OpenAPI Specifications

Canonical specification:

```text
openapi/openapi.yaml
```

Supporting assets:

```text
openapi/components/
openapi/paths/
openapi/schemas/
openapi/examples/
```

---

## Documentation

Documentation index:

```text
docs/README.md
```

Documentation areas:

```text
docs/architecture/
docs/guides/
docs/integrations/
docs/phases/
docs/reference/
```

---

## Integrations

Documented integration patterns include:

* REST APIs
* Event-Driven Systems
* Workflow Engines
* AI Agent Systems
* ServiceNow
* Salesforce
* Banking Systems
* Federated Trust Domains

---

## Examples

Reference artifacts:

```text
examples/
```

Includes:

* Attestations
* Trust Roots
* Verification Examples
* Policy Bundles
* Execution Tokens

---

## Security

Security policy:

```text
SECURITY.md
```

Important:

* Example keys are provided for demonstration purposes only.
* Production deployments must generate their own signing keys.
* Production private keys must never be committed to source control.

---

## Contributing

Contribution guide:

```text
CONTRIBUTING.md
```

Code of conduct:

```text
CODE_OF_CONDUCT.md
```

Roadmap:

```text
ROADMAP.md
```

Repository status:

```text
REPOSITORY-STATUS.md
```

---

## Repository Statistics

Current repository snapshot:

* 101 commits
* 686 tracked files
* 24 packages
* 158 documentation files
* 74 architecture documents

---

## Current Status

Open Source Developer Preview

Completed:

* Trust Anchor Publication
* Public Key Distribution
* Independent Verification
* Attestation Verification
* Execution Trust Tokens
* Execution Records
* Execution Trust Chains
* OpenAPI Specifications

In Progress:

* Key Rotation
* Historical Verification
* Trust Anchor Lineage

Planned:

* Trust Root Publication
* Trust Root Verification
* Trust Root Lineage
* Federated Trust Discovery
* Federated Trust Exchange

---

## License

Apache License 2.0

See:

```text
LICENSE.txt
```

---

## Vision

Organizations define authority.

Organizations define policy.

Parmana preserves intent and enables independent verification that execution matched authorization.

The goal is to establish open trust infrastructure for Authorization → Intent → Execution verification.
