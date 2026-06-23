\# Repository Structure



This document describes the organization of the Parmana Trust Core repository.



The repository is structured to separate trust architecture, implementation, specifications, examples, integrations, and documentation.



\---



\# Top-Level Structure



```text

parmana-trust-core/

├── .github/

├── adr/

├── apps/

├── archive/

├── docs/

├── docs-site/

├── examples/

├── keys/

├── openapi/

├── packages/

├── policies/

├── RELEASES/

├── sdk/

├── supabase/

├── tasks/

├── tests/

├── CHANGELOG.md

├── CODE\_OF\_CONDUCT.md

├── CONTRIBUTING.md

├── LICENSE.txt

├── README.md

├── REPOSITORY-STATUS.md

├── ROADMAP.md

├── SECURITY.md

└── package.json

```



\---



\# Repository Layers



The repository is organized into six major layers.



```text

Documentation

&#x20;     ↓

Specifications

&#x20;     ↓

Trust Architecture

&#x20;     ↓

Trust Services

&#x20;     ↓

Integrations

&#x20;     ↓

Examples \& Tests

```



\---



\# .github



```text

.github/

```



Repository governance and community assets.



Contents include:



\* Issue templates

\* Pull request templates

\* Community workflows



\---



\# ADR



```text

adr/

```



Architecture Decision Records.



Documents significant design decisions and architectural evolution.



\---



\# Applications



```text

apps/

```



Executable applications and services.



Examples:



\* API services

\* Gateways

\* Administrative interfaces

\* Verification services



\---



\# Documentation



```text

docs/

```



Complete documentation corpus.



Structure:



```text

docs/

├── architecture/

├── guides/

├── integrations/

├── phases/

├── reference/

```



\---



\# Documentation Site



```text

docs-site/

```



Published documentation assets and documentation website sources.



\---



\# Examples



```text

examples/

```



Reference trust artifacts and integration examples.



Examples:



\* Attestations

\* Trust Roots

\* Verification examples

\* Policy bundles



\---



\# Keys



```text

keys/

```



Example cryptographic assets.



Repository keys are demonstration keys only.



Production deployments must generate unique keys.



\---



\# OpenAPI



```text

openapi/

```



Canonical API specifications.



Structure:



```text

openapi/

├── components/

├── examples/

├── paths/

├── schemas/

└── openapi.yaml

```



The canonical specification is:



```text

openapi/openapi.yaml

```



\---



\# Packages



```text

packages/

```



Core Parmana libraries and reusable modules.



Examples:



\* Authorization

\* Intent

\* Attestation

\* Verification

\* Execution Trust

\* Federation



\---



\# Policies



```text

policies/

```



Policy definitions and policy bundles used during authorization and trust evaluation.



\---



\# SDK



```text

sdk/

```



Developer SDKs and integration libraries.



Purpose:



\* Client integrations

\* External verification

\* API consumption



\---



\# Supabase



```text

supabase/

```



Database configuration, migrations, and persistence-related assets.



\---



\# Tasks



```text

tasks/

```



Development tasks, planning artifacts, and implementation work items.



\---



\# Tests



```text

tests/

```



Repository testing assets.



Recommended structure:



```text

tests/

├── fixtures/

├── scripts/

└── integration/

```



Contents include:



\* Test fixtures

\* Verification examples

\* Integration tests

\* Validation workflows



\---



\# Release Assets



```text

RELEASES/

```



Release notes and public release documentation.



\---



\# Archive



```text

archive/

```



Historical artifacts retained for reference.



Examples:



\* Legacy files

\* Previous exports

\* Historical documentation



Archived content is not considered canonical.



\---



\# Canonical Documentation Locations



Architecture:



```text

docs/architecture/

```



Lifecycle:



```text

docs/phases/

```



Reference Specifications:



```text

docs/reference/

```



Integrations:



```text

docs/integrations/

```



OpenAPI Specifications:



```text

openapi/

```



\---



\# Trust Architecture Mapping



The repository reflects the Parmana trust lifecycle.



```text

Authority

&#x20;     ↓

Policy

&#x20;     ↓

Decision

&#x20;     ↓

Intent

&#x20;     ↓

Attestation

&#x20;     ↓

Verification Receipt

&#x20;     ↓

Execution Token

&#x20;     ↓

Execution Record

&#x20;     ↓

Execution Trust Chain

&#x20;     ↓

Trust Anchor

&#x20;     ↓

Trust Root

&#x20;     ↓

Federated Trust

```



Documentation, specifications, APIs, examples, and implementations are organized around this lifecycle.



\---



\# Repository Principle



The repository exists to support independently verifiable Authorization → Intent → Execution trust systems.



Decisions authorize Intent.



Intent authorizes Execution.



Execution Trust verifies that execution matched intent.



