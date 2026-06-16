Use this as your \*\*master resume prompt\*\* for the next session:



\---



\# PARMANA TRUST CORE — RESUME CONTEXT



We are building a TypeScript monorepo called \*\*Parmana Trust Core\*\*.



Current environment:



```text

Node.js 20.20.2

npm 10.8.2

TypeScript 5.9.3

Turbo 2.0.14 (PINNED)

Vitest 3.x

Windows PowerShell

```



Repository:



```text

parmana-trust-core

```



Monorepo structure:



```text

packages/

&#x20; contracts/

&#x20; crypto/

&#x20; provenance/

&#x20; evidence/

&#x20; attestation/

&#x20; trust-profiles/

&#x20; trust-anchor/

&#x20; verifier/

&#x20; bundle/



apps/

&#x20; cli/

&#x20; playground/



tests/

```



\---



\# IMPORTANT DISCOVERIES



Turbo 2.9.x caused false build failures.



Pinned:



```json

"turbo": "2.0.14"

```



Builds now work.



Do NOT upgrade Turbo unless explicitly requested.



\---



\# CURRENT STATUS



All package builds succeed:



```text

@parmana/contracts

@parmana/crypto

@parmana/provenance

@parmana/evidence

@parmana/attestation

@parmana/trust-profiles

@parmana/trust-anchor

@parmana/verifier

@parmana/bundle

```



Verified using:



```powershell

npm run build --workspace=@parmana/contracts

...

```



and



```powershell

npx turbo run build

```



\---



\# COMPLETED FEATURES



\## Contracts



Implemented:



```text

SignatureRecord

SignatureSet

TrustProfile

AttestationV2

```



\---



\## Crypto



Implemented:



```text

Ed25519 provider

ML-DSA-65 provider

Crypto factory

Multi-signer support

```



Verified with playground tests.



\---



\## Evidence



Implemented:



```text

EvidenceRecord

Hashing utilities

```



\---



\## Attestation



Implemented:



```text

DecisionAttestation

AttestationMetadata

AttestationChain

Re-attestation

Chain append

Builder

```



Resolved duplicate:



```text

AttestationChain

```



export conflict.



\---



\## Trust Profiles



Implemented:



```text

TrustPolicy

TrustProfile

Policy requirements

```



\---



\## Verifier



Implemented:



```text

verifySignatureSet()

verifyPolicy()

verifyDecision()

```



Verified via:



```text

decision-test.ts

policy-test.ts

```



\---



\## Trust Anchors



Implemented:



```text

TrustAnchor

TrustRoot

AnchorStore

rotateTrustRoot()

verifyChain()

```



Trust root supports:



```ts

interface TrustRoot {

&#x20; id: string;

&#x20; version: string;

&#x20; anchors: TrustAnchor\[];

&#x20; createdAt: string;

}

```



Version retained intentionally for:



```text

root-1 v1

root-1 v2

root-1 v3

```



and PQ migrations.



Rotation tested successfully.



\---



\## Bundle Package



Implemented:



```text

DecisionBundle

createBundle()

serializeBundle()

deserializeBundle()

hashBundle()

createReceipt()

verifyBundle()

verifyBundleSignature()

```



Receipt structure:



```text

bundleId

bundleHash

trustRootId

trustRootVersion

createdAt

```



\---



\## CLI



Implemented:



```text

apps/cli/src/verify.ts

apps/cli/src/receipt.ts

```



Verified:



```powershell

npx tsx apps/cli/src/verify.ts loan.bundle.json

```



returns valid verification output.



\---



\# TEST STATUS



Vitest configured.



All tests currently PASS.



Current passing suite:



```text

bundle.test.ts

receipt.test.ts

trust-root.test.ts

signature-verification.test.ts

bundle-roundtrip.test.ts

receipt-generation.test.ts

```



Latest result:



```text

Test Files: PASS

Tests: PASS

```



Receipt-generation test was fixed because:



```ts

createReceipt(bundle)

```



expects:



```ts

DecisionBundle

```



not individual arguments.



\---



\# IMPORTANT CLEANUP ALREADY DONE



Removed generated artifacts from:



```text

packages/bundle/src/\*.js

packages/bundle/src/\*.d.ts

```



Only source TS should remain in src.



Generated output belongs in:



```text

dist/

```



\---



\# ROOT CONFIG



package.json:



```json

{

&#x20; "packageManager": "npm@10.8.2"

}

```



Turbo pinned:



```json

"turbo": "2.0.14"

```



\---



\# NEXT TASKS



Priority order:



\## 1. GitHub Actions CI



Create:



```text

.github/workflows/ci.yml

```



Pipeline:



```yaml

npm ci

npm run build

npm test

```



\---



\## 2. Add Real Verification Tests



Create:



```text

tests/verify-policy.test.ts

tests/verify-decision.test.ts

tests/trust-chain.test.ts

```



Cover:



```text

valid policy

invalid policy

valid decision

invalid signature

trust chain validation

```



\---



\## 3. Public API Audit



Verify every package exports everything through:



```text

src/index.ts

```



Packages:



```text

contracts

crypto

evidence

provenance

attestation

trust-profiles

trust-anchor

verifier

bundle

```



Goal:



```ts

import { createReceipt } from "@parmana/bundle";

```



instead of source-file imports.



\---



\## 4. README



Create comprehensive README with:



```text

architecture

install

build

test

bundle example

trust root example

verification example

```



\---



\## 5. Release Preparation



Create:



```text

LICENSE

CHANGELOG.md

```



Add:



```json

"engines": {

&#x20; "node": ">=20"

}

```



\---



\## 6. v0.2 Roadmap



Planned:



```text

Hybrid Signatures

Ed25519 + ML-DSA



Threshold Signatures



Trust Logs



Certificate Transparency



Advanced Policy Engine

```



\---



\# CURRENT GOAL WHEN RESUMING



Start with:



```text

Implement GitHub Actions CI

Then add verify-policy.test.ts

Then add verify-decision.test.ts

Then add trust-chain.test.ts

Then audit package exports

Then prepare v0.1.0 release

```



All builds and tests are currently green. Do not revisit Turbo, TypeScript, or workspace debugging unless a new failure appears.



