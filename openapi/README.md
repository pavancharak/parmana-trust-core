\# Parmana Trust Core OpenAPI Specifications



This directory contains the OpenAPI specifications, schemas, examples, and supporting assets for Parmana Trust Core.



The OpenAPI corpus provides a machine-readable description of Parmana Trust APIs and trust artifacts.



\---



\# Purpose



The OpenAPI specification serves as the canonical contract between:



\* Clients

\* SDKs

\* Integrations

\* External Verifiers

\* Trust Domains



It enables consistent implementation, testing, validation, and documentation.



\---



\# Directory Structure



```text

openapi/

├── components/

├── dist/

├── examples/

├── paths/

├── schemas/

├── archive/

└── openapi.yaml

```



\---



\# Canonical Specification



```text

openapi.yaml

```



This is the authoritative OpenAPI specification for Parmana Trust Core.



External integrations, SDK generators, API documentation systems, and validation tooling should reference this file.



\---



\# Components



```text

components/

```



Reusable OpenAPI components.



Examples:



\* Request bodies

\* Responses

\* Parameters

\* Security definitions



\---



\# Paths



```text

paths/

```



Endpoint definitions organized by capability.



Examples:



\* Trust Anchor APIs

\* Verification APIs

\* Execution APIs

\* Federation APIs



\---



\# Schemas



```text

schemas/

```



Canonical Parmana Trust object definitions.



Examples:



\* Intent

\* Attestation

\* Verification Receipt

\* Execution Token

\* Execution Record

\* Trust Root

\* Trust Anchor



\---



\# Examples



```text

examples/

```



Reference payloads and example API interactions.



Used for:



\* Documentation

\* Integration development

\* Testing

\* SDK validation



\---



\# Distribution Artifacts



```text

dist/

```



Generated documentation and distribution assets.



May include:



\* Bundled specifications

\* Generated API documentation

\* Validation outputs



\---



\# Archived Specifications



```text

archive/

```



Historical and generated specifications retained for reference.



These files are not considered authoritative.



The current canonical specification is:



```text

openapi.yaml

```



\---



\# Versioning



OpenAPI specifications follow repository versioning.



Current release:



```text

v0.1.0

```



Future versions may introduce new endpoints, schemas, trust artifacts, and federation capabilities.



\---



\# Related Documentation



Architecture:



```text

docs/architecture/

```



Trust Lifecycle:



```text

docs/phases/

```



Integrations:



```text

docs/integrations/

```



Reference Specifications:



```text

docs/reference/

```



\---



\# Trust Architecture Alignment



The OpenAPI specifications model the Parmana trust lifecycle:



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

```



The API surface is designed to preserve verifiable lineage throughout this lifecycle.



\---



\# Project Principle



Decisions authorize Intent.



Intent authorizes Execution.



Execution Trust verifies that execution matched intent.



