\# Parmana Trust Core



Parmana Trust Core is a TypeScript trust-verification framework for building auditable, cryptographically verifiable decision systems.



It provides evidence tracking, decision attestations, trust policies, trust anchors, bundle packaging, receipt generation, and verification workflows.



\---



\# Features



\* Evidence Records

\* Decision Attestations

\* Attestation Chains

\* Trust Policies

\* Trust Profiles

\* Trust Anchors

\* Trust Root Rotation

\* Signature Verification

\* Bundle Packaging

\* Bundle Hashing

\* Bundle Receipts

\* CLI Verification

\* Ed25519 Support

\* ML-DSA-65 (Post-Quantum) Support

\* End-to-End Verification Tests



\---



\# Architecture



```text

Evidence

&#x20;   ↓

Attestation

&#x20;   ↓

Trust Policy Validation

&#x20;   ↓

Trust Root

&#x20;   ↓

Bundle

&#x20;   ↓

Receipt

&#x20;   ↓

Verification

```



\---



\# Repository Structure



```text

parmana-trust-core



packages/

├── contracts

├── crypto

├── evidence

├── provenance

├── attestation

├── trust-profiles

├── trust-anchor

├── verifier

└── bundle



apps/

├── cli

└── playground



tests/

```



\---



\# Packages



\## @parmana/contracts



Core shared interfaces and schemas.



```text

SignatureRecord

SignatureSet

TrustProfile

AttestationV2

```



\---



\## @parmana/crypto



Cryptographic providers and abstractions.



```text

Signer

Registry

Factory



Ed25519

ML-DSA-65

```



\---



\## @parmana/evidence



Evidence record definitions and hashing support.



\---



\## @parmana/provenance



Provenance tracking primitives.



\---



\## @parmana/attestation



Decision attestation generation and management.



```text

createAttestation()

appendChain()

reattest()

```



\---



\## @parmana/trust-profiles



Trust policies and profile definitions.



```text

TrustPolicy

TrustProfile

```



\---



\## @parmana/trust-anchor



Trust root management.



```text

createTrustRoot()

rotateTrustRoot()

verifyChain()

```



\---



\## @parmana/verifier



Verification engine.



```text

verifySignatureSet()

verifyPolicy()

verifyDecision()

```



\---



\## @parmana/bundle



Bundle packaging and verification.



```text

createBundle()

verifyBundle()



serializeBundle()

deserializeBundle()



hashBundle()



createReceipt()



signBundle()

verifyBundleSignature()



saveBundle()

loadBundle()

```



\---



\# Installation



Clone the repository:



```bash

git clone <repository-url>



cd parmana-trust-core

```



Install dependencies:



```bash

npm install

```



\---



\# Build



Build all packages:



```bash

npm run build

```



\---



\# Test



Run the complete test suite:



```bash

npm test

```



\---



\# Quick Example



Create a trust root, generate a receipt, and verify the trust chain.



```ts

import {

&#x20; createTrustRoot,

&#x20; verifyChain

} from "@parmana/trust-anchor";



import {

&#x20; createReceipt

} from "@parmana/bundle";



const trustRoot =

&#x20; createTrustRoot(

&#x20;   "root-1",

&#x20;   \[],

&#x20;   "v1"

&#x20; );



const bundle = {

&#x20; bundleId: "bundle-001",

&#x20; trustRoot

};



const receipt =

&#x20; createReceipt(

&#x20;   bundle as any

&#x20; );



const chainResult =

&#x20; verifyChain(\[

&#x20;   trustRoot

&#x20; ]);



console.log(receipt);



console.log(chainResult);

```



Example output:



```text

{

&#x20; bundleId: 'bundle-001',

&#x20; bundleHash: '...',

&#x20; trustRootId: 'root-1',

&#x20; trustRootVersion: 'v1',

&#x20; createdAt: '...'

}



{

&#x20; valid: true,

&#x20; versions: \['v1'],

&#x20; errors: \[]

}

```



\---



\# Verification Example



```ts

import {

&#x20; verifyPolicy

} from "@parmana/verifier";



const result =

&#x20; verifyPolicy(

&#x20;   \[

&#x20;     {

&#x20;       algorithm: "ed25519"

&#x20;     }

&#x20;   ] as any,

&#x20;   {

&#x20;     requiredAlgorithms: \[

&#x20;       "ed25519"

&#x20;     ]

&#x20;   } as any

&#x20; );



console.log(result.valid);

```



Output:



```text

true

```



\---



\# CLI Usage



Verify a bundle:



```bash

npx tsx apps/cli/src/verify.ts loan.bundle.json

```



Generate a receipt:



```bash

npx tsx apps/cli/src/receipt.ts

```



\---



\# Test Coverage



Current test coverage includes:



```text

Bundle Creation

Bundle Serialization

Bundle Roundtrip



Receipt Generation



Trust Root Creation

Trust Root Rotation

Trust Chain Verification



Policy Verification

Decision Verification



Signature Verification



End-to-End Trust Flow

```



\---



\# Security



Parmana Trust Core supports:



```text

Ed25519

ML-DSA-65

```



ML-DSA-65 provides a foundation for post-quantum migration strategies.



Future releases will support:



```text

Hybrid Signatures

Threshold Signatures

Transparency Logs

Trust Federation

```



\---



\# Roadmap



\## v0.2



\### Hybrid Cryptography



```text

Ed25519 + ML-DSA-65

```



\### Threshold Trust



```text

2-of-3 approvals

3-of-5 approvals

```



\### Trust Federation



```text

Multiple trust roots

Cross-root validation

```



\### Transparency Logs



```text

Append-only audit logs

Merkle proofs

```



\### Policy Engine v2



```text

Threshold rules

Algorithm requirements

Expiration checks

Issuer restrictions

```



\---



\# Development



Build:



```bash

npm run build

```



Test:



```bash

npm test

```



Run playground examples:



```bash

npm run playground:bundle



npm run playground:verify



npm run playground:trust-root

```



\---



\# Release Status



Current target:



```text

v0.1.0

```



Project status:



```text

Build System       ✓

Monorepo           ✓

Crypto             ✓

Evidence           ✓

Attestation        ✓

Trust Profiles     ✓

Trust Anchors      ✓

Verifier           ✓

Bundles            ✓

Receipts           ✓

CLI                ✓

Unit Tests         ✓

Integration Tests  ✓

End-to-End Tests   ✓

```



\---



\# License



MIT License.



