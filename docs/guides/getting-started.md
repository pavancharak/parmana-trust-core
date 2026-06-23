# Getting Started with Parmana Trust Core

Welcome to Parmana Trust Core.

This guide helps you install, run, and explore the platform.

---

# What Is Parmana?

Parmana Trust Core is an open-source trust infrastructure platform focused on Authorization → Intent → Execution verification.

Traditional systems prove:

* Who approved
* When approval occurred

Parmana additionally preserves and verifies:

* What was authorized
* What execution was expected
* Whether execution matched authorization

---

# Core Trust Model

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

# Prerequisites

Required:

* Node.js 20+
* npm 10+
* Git

Verify installation:

```bash
node --version
npm --version
git --version
```

---

# Clone Repository

```bash
git clone https://github.com/pavancharak/parmana-trust-core.git

cd parmana-trust-core
```

---

# Install Dependencies

```bash
npm install
```

---

# Build Project

```bash
npm run build
```

---

# Run Services

```bash
npm run start
```

---

# Verify Trust Anchor

Retrieve the published trust anchor:

```bash
curl http://localhost:3000/trust-anchor/public-key
```

Expected response:

```json
{
  "keyId": "example-key",
  "algorithm": "ed25519",
  "publicKey": "..."
}
```

---

# Verify Attestation

Example verification workflow:

```bash
npm run verify
```

Verification validates:

* Signature integrity
* Trust Anchor identity
* Attestation authenticity

---

# Explore OpenAPI

Canonical specification:

```text
/openapi/openapi.yaml
```

Supporting assets:

```text
/openapi/components
/openapi/paths
/openapi/schemas
/openapi/examples
```

---

# Explore Documentation

Documentation index:

```text
docs/README.md
```

Architecture:

```text
docs/architecture/
```

Trust Lifecycle:

```text
docs/phases/
```

Reference Specifications:

```text
docs/reference/
```

Integration Guides:

```text
docs/integrations/
```

---

# Example Assets

Examples:

```text
examples/
```

Test fixtures:

```text
tests/fixtures/
```

Test scripts:

```text
tests/scripts/
```

---

# Current Capabilities

Completed:

* Trust Anchor Publication
* External Verification
* Execution Trust Architecture
* Trust Chain Architecture

In Progress:

* Key Rotation
* Historical Verification

Planned:

* Trust Root Publication
* Trust Root Verification
* Federated Trust

---

# Recommended Reading Order

For architects:

```text
docs/architecture/
docs/reference/
docs/phases/
```

For developers:

```text
docs/guides/
openapi/
examples/
```

For integrators:

```text
docs/integrations/
openapi/
```

---

# Project Status

Current release:

```text
v0.1.0
```

Status:

```text
Open Source Developer Preview
```

The platform is intended for evaluation, experimentation, integration development, and community feedback.

---

# Next Steps

1. Explore the architecture documentation
2. Review trust artifacts
3. Verify example attestations
4. Explore OpenAPI specifications
5. Integrate external verification
6. Follow roadmap progress

---

# Parmana Thesis

Authorization is not the trust problem.

The trust gap exists between authorized decisions and actual execution.

Parmana exists to make that gap independently verifiable.
