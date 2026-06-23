\# Parmana Trust Core Architecture Overview



\## Purpose



Parmana Trust Core provides cryptographic evidence that authorized intent resulted in authorized execution.



Traditional systems answer:



\* Who approved?

\* When was it approved?



Parmana answers:



\* What exactly was authorized?

\* What exactly was supposed to happen?

\* Did execution match authorization?



\---



\# Core Principle



```text

Decisions authorize Intent.



Intent authorizes Execution.

```



This principle defines the Parmana trust model.



A decision alone is insufficient.



Execution must be linked to the intent that was authorized.



\---



\# Canonical Trust Flow



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution Token

&#x20;   ↓

Execution

&#x20;   ↓

Trust Chain

```



Every stage produces evidence.



Every stage can be independently verified.



\---



\# Components



\## Attestation



Endpoint:



```http

POST /attest

```



Purpose:



Creates cryptographic evidence of an authorization decision.



Produces:



\* Decision identity

\* Evidence hash

\* Digital signature



Output:



```text

Decision → Attestation

```



\---



\## Verification



Endpoint:



```http

POST /verify

```



Purpose:



Determines whether an attestation satisfies policy requirements.



Produces:



\* Verification receipt

\* Verification identity

\* Verification outcome



Output:



```text

Attestation → Verification

```



\---



\## Execution Token



Endpoint:



```http

POST /token

```



Purpose:



Creates authorization for execution.



Execution may proceed only after verification.



Output:



```text

Verification → Execution Token

```



\---



\## Execution



Endpoint:



```http

POST /execute

```



Purpose:



Records execution evidence.



Produces:



\* Execution identity

\* Execution status

\* Execution timestamp



Output:



```text

Execution Token → Execution Record

```



\---



\## Trust Chain



Endpoint:



```http

GET /trust-chain/{businessTransactionId}

```



Purpose:



Retrieves end-to-end lineage.



Output:



```text

Business Transaction

&#x20;   ↓

Attestation

&#x20;   ↓

Verification

&#x20;   ↓

Execution

```



\---



\# Override Architecture



Overrides provide controlled exception handling.



Workflow:



```text

Override Decision

&#x20;   ↓

Override Attestation

&#x20;   ↓

Override Verification

```



Endpoints:



```http

POST /override

POST /override/attest

POST /override/verify

```



Purpose:



Support emergency and exceptional workflows while preserving auditability.



\---



\# Trust Anchors



Endpoint:



```http

GET /trust-anchor/public-key

```



Purpose:



Publishes Parmana verification key.



Example:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



Trust anchors enable independent verification.



\---



\# Independent Verification



Verification does not require:



```text

Parmana SDK

Parmana databases

Parmana runtime

Parmana verification services

```



Required:



```text

Attestation

Signature

Published Trust Anchor

```



Verification process:



```text

Attestation Hash

&#x20;   ↓

Signature

&#x20;   ↓

Public Key

&#x20;   ↓

VALID / INVALID

```



\---



\# Human Authority Model



Parmana is built around a simple principle:



```text

Humans define authority.



Organizations define policy.



Parmana verifies that trusted signals satisfy policy before execution.

```



\---



\# AI Governance Model



Parmana does not govern AI by constraining models.



Parmana governs execution.



The objective is:



```text

Ensure human-defined authority governs AI systems.

```



Parmana prevents unauthorized autonomous actions by verifying authority and policy before execution.



\---



\# Trust Boundary



Trust should not depend on Parmana.



Trust should depend on cryptographic evidence.



Therefore:



```text

Evidence

\+

Signature

\+

Published Trust Anchor

=

Independent Verification

```



\---



\# Strategic Outcome



Parmana establishes a verifiable chain between:



```text

Decision

&#x20;   ↓

Intent

&#x20;   ↓

Execution

```



allowing organizations, auditors, regulators, and third parties to independently validate that execution remained within authorized boundaries.



