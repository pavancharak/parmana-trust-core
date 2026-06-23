\# Parmana Trust Foundation Milestone #2



\## External Verification Example



\*\*Status:\*\* Complete (Locked)



\*\*Date Completed:\*\* 2026-06-23



\---



\## Objective



Demonstrate that a third party can independently verify Parmana attestation artifacts using a published Parmana trust anchor without relying on Parmana verification services, databases, SDKs, or runtime infrastructure.



This milestone establishes cryptographic portability of trust artifacts and proves that verification can occur outside the Parmana trust boundary.



\---



\## Deliverables



\### Public Trust Anchor Endpoint



Endpoint:



```http

GET /trust-anchor/public-key

```



Example Response:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----"

}

```



Capabilities:



\* Publishes Parmana verification key

\* Supports independent verification

\* Exposed through OpenAPI specification

\* Available through Swagger documentation



\---



\### PublicKeyResponse Schema



OpenAPI schema added:



```yaml

PublicKeyResponse:

&#x20; type: object

&#x20; properties:

&#x20;   keyId:

&#x20;     type: string

&#x20;   algorithm:

&#x20;     type: string

&#x20;   publicKey:

&#x20;     type: string

```



\---



\### Trust Anchor Route



Implemented route:



```text

packages/server/src/routes/trust-anchor-public-key.ts

```



Provides:



\* keyId

\* algorithm

\* Ed25519 public key



Retrieved from Parmana signing infrastructure.



\---



\### External Verification Example



Implemented example:



```text

examples/verify-attestation.ts

```



Verification flow:



1\. Fetch Parmana trust anchor

2\. Parse Ed25519 public key

3\. Load attestation hash

4\. Load attestation signature

5\. Verify signature

6\. Produce VALID or INVALID result



Example result:



```text

Verification Result:

VALID

```



\---



\## Verification Architecture



```text

Decision

&#x20;  ↓

Attestation

&#x20;  ↓

Attestation Hash

&#x20;  ↓

Ed25519 Signature

&#x20;  ↓

Published Trust Anchor

&#x20;  ↓

Independent Verification

&#x20;  ↓

VALID / INVALID

```



\---



\## Trust Property Proven



A third party can:



1\. Retrieve Parmana public key

2\. Receive Parmana attestation

3\. Extract attestation hash

4\. Extract signature

5\. Verify cryptographically

6\. Determine authenticity independently



Without:



\* Parmana SDK

\* Parmana APIs

\* Parmana databases

\* Parmana runtime access

\* Parmana verification service



\---



\## Canonical Trust Claim



Parmana trust artifacts can be independently verified using Parmana's published trust anchor.



\---



\## Important Verification Rule



Hash and signature MUST originate from the same attestation artifact.



Reason:



```text

createdAt participates in attestation hashing

```



Each attestation produces a unique hash and signature pair.



Valid:



```text

hash A + signature A

```



Invalid:



```text

hash A + signature B

```



\---



\## Evidence of Completion



Trust anchor retrieval succeeded:



```text

GET /trust-anchor/public-key

```



Returned:



```text

keyId: parmana-root-key

algorithm: ed25519

publicKey: published

```



Attestation generated successfully:



```text

POST /attest

```



Independent verification executed successfully:



```text

Verification Result:

VALID

```



\---



\## Roadmap Status



Completed:



```text

✓ Public Key Endpoint

✓ External Verification Example

```



Remaining:



```text

→ Key Rotation

→ Trust Root Rotation

```



\---



\## Strategic Significance



This milestone establishes Parmana's first externally verifiable trust boundary.



Trust is no longer dependent on:



\* Parmana runtime

\* Parmana infrastructure

\* Parmana operational environment



Trust can now be validated through cryptographic evidence and a published trust anchor.



This forms the foundation for:



\* Key rotation

\* Trust root rotation

\* Transparency logs

\* External auditors

\* Independent trust verification

\* Cross-organization trust federation



\---



\## Repository Artifacts



```text

openapi/generated.yaml



packages/server/src/index.ts

packages/server/src/openapi/generate.ts



packages/server/src/routes/trust-anchor-public-key.ts

packages/server/src/schemas/public-key-response.ts



examples/verify-attestation.ts

```



\---



\## Milestone Outcome



Parmana now publishes a trust anchor and demonstrates independent cryptographic verification of attestation artifacts outside the Parmana trust boundary.



