# Parmana Trust Core

Open-source trust infrastructure for Authorization → Intent → Execution verification.

Parmana helps organizations independently verify that execution matched what was authorized.

Traditional systems answer:

```text
Who Approved?
```

Parmana answers:

```text
What Exactly Was Supposed To Happen?

Did Execution Match It?
```

---

# Why Parmana Exists

Most systems can prove:

* Who approved
* When approval occurred
* Which policy was evaluated

Most systems cannot prove:

* What was actually authorized
* What execution was expected
* Whether execution matched authorization

Parmana introduces a trust architecture that preserves authorization intent and execution evidence as a verifiable trust chain.

---

# Core Architecture

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

Canonical principle:

```text
Decisions authorize Intent.

Intent authorizes Execution.

Execution Trust verifies that execution matched intent.
```

---

# Current Capabilities

## Trust Anchor Publication

Publish verification identity:

```http
GET /trust-anchor/public-key
```

Returns:

```json
{
  "keyId": "parmana-root-key",
  "algorithm": "ed25519",
  "publicKey": "..."
}
```

---

## Independent Verification

Verify attestations without calling Parmana internals.

Supported:

* Signature verification
* Trust Anchor validation
* External verification workflows

---

## Execution Trust Architecture

Support for:

* Decision lineage
* Intent preservation
* Attestation generation
* Verification receipts
* Execution tokens
* Execution records
* Trust chains

---

# Documentation

## Getting Started

```text
docs/guides/
```

## Architecture

```text
docs/architecture/
```

## Trust Lifecycle

```text
docs/phases/
```

## Integrations

```text
docs/integrations/
```

## Artifact Reference

```text
docs/reference/
```

---

# Quick Start

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Start services:

```bash
npm run start
```

Retrieve trust anchor:

```bash
curl http://localhost:3000/trust-anchor/public-key
```

Verify an attestation:

```bash
npm run verify
```

---

# Trust Foundation Roadmap

## Milestone 001

Trust Anchor Publication

Status:

```text
COMPLETE
```

---

## Milestone 002

External Verification

Status:

```text
COMPLETE
```

---

## Milestone 003

Key Rotation

Planned:

* keyId versioning
* trust-anchor history
* historical verification
* trust-root lineage

Status:

```text
IN PROGRESS
```

---

## Future Milestones

* Trust Root Publication
* Trust Root Verification
* Federation Discovery
* Federated Trust Exchange

---

# Security

Example keys contained in:

```text
keys/
```

are public demonstration keys used for:

* Examples
* Documentation
* Automated tests
* Local development

They must never be used in production.

Generate unique signing keys for every deployment.

---

# Open Source

Contributions are welcome.

See:

```text
CONTRIBUTING.md
```

Security policy:

```text
SECURITY.md
```

License:

```text
Apache License 2.0
```

---

# Parmana Thesis

Authorization is not the trust problem.

The trust gap exists between authorized decisions and actual execution.

Parmana exists to make that gap independently verifiable.
