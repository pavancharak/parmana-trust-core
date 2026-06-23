\# Phase 01 — Trust Foundation Assets



\## Objective



Establish the cryptographic trust foundation used by Parmana Trust Core.



All attestation signatures ultimately depend on this trust foundation.



Without these assets:



\* Attestations cannot be signed.

\* Signatures cannot be verified.

\* Independent verification cannot occur.



\---



\# Repository Location



Private key:



```text

keys/attestation-private.pem

```



Public key:



```text

keys/attestation-public.pem

```



Full paths:



```text

D:\\last\\parmana-trust-core\\keys\\attestation-private.pem



D:\\last\\parmana-trust-core\\keys\\attestation-public.pem

```



\---



\# Primary Implementation



File:



```text

packages/attestation/src/crypto.ts

```



Responsibilities:



```text

Load private key

Load public key

Sign hashes

Verify signatures

Export public key

```



\---



\# Cryptographic Functions



\## signHash()



Purpose:



```text

Create Ed25519 signature

```



Used by:



```text

packages/attestation/src/create-attestation.ts

```



Flow:



```text

Attestation Hash

&#x20;       ↓

signHash()

&#x20;       ↓

Digital Signature

```



\---



\## verifyHash()



Purpose:



```text

Verify Ed25519 signature

```



Flow:



```text

Hash

&#x20;   +

Signature

&#x20;   +

Public Key

&#x20;       ↓

VALID / INVALID

```



\---



\## getPublicKey()



Purpose:



```text

Export Parmana public key

```



Used by:



```text

packages/attestation/src/ed25519-provider.ts

```



and



```text

packages/server/src/routes/trust-anchor-public-key.ts

```



\---



\# Signature Provider



File:



```text

packages/attestation/src/provider.ts

```



Creates:



```text

Ed25519Provider

```



Implementation:



```text

packages/attestation/src/ed25519-provider.ts

```



Capabilities:



```text

algorithm()

sign()

verify()

publicKey()

```



\---



\# Current Key Identity



Current key identifier:



```text

parmana-root-key

```



Current algorithm:



```text

ed25519

```



Used in:



```text

Attestations

Trust Roots

Trust Anchor Publication

External Verification

```



\---



\# Trust Anchor Publication



Route:



```text

packages/server/src/routes/trust-anchor-public-key.ts

```



Endpoint:



```http

GET /trust-anchor/public-key

```



Response:



```json

{

&#x20; "keyId": "parmana-root-key",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "-----BEGIN PUBLIC KEY-----..."

}

```



Purpose:



Publish verification material required for independent verification.



\---



\# Validation Checklist



Verify keys exist:



```powershell

dir keys

```



Verify endpoint:



```powershell

curl http://localhost:3000/trust-anchor/public-key

```



Expected:



```text

keyId

algorithm

publicKey

```



\---



\# Phase Completion Criteria



Phase 01 is complete when:



```text

✓ Private key loads

✓ Public key loads

✓ signHash() works

✓ verifyHash() works

✓ Public key endpoint works

✓ External verifier can retrieve public key

```



\---



\# Output of Phase 01



```text

Cryptographic Trust Foundation Established

```



