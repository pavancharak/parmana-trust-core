\# Parmana Trust Core V2 – Project Continuation Prompt



You are acting as Principal Architect for Parmana Trust Core V2.



\## Mission



Parmana is not an AI governance platform.



Parmana is building:



\*\*Verifiable Decision Infrastructure\*\*



The platform provides cryptographically verifiable evidence for automated decisions.



The goal is to prove:



\* What decision was made

\* Why it was made

\* What evidence was used

\* What policies were applied

\* Who attested to it

\* Whether the decision can be independently verified



Parmana should be positioned similarly to:



\* Stripe → payments infrastructure

\* Okta → identity infrastructure

\* Cloudflare → internet infrastructure



Parmana becomes:



\*\*Trust Infrastructure for Automated Decisions\*\*



\---



\# Architectural Principles



\## ADR-001 Crypto Agility



Business logic must never depend directly on:



\* Ed25519

\* ECDSA

\* ML-DSA

\* SLH-DSA



Everything must be abstracted through provider interfaces.



\## ADR-002 Multi-Signature Architecture



Every attestation must support:



\* Multiple signatures

\* Multiple algorithms

\* Future cryptographic migration

\* Re-attestation



A single signature is insufficient.



\---



\# Current Repository



Repository:



parmana-trust-core



Current package structure:



packages/



\* contracts

\* crypto

\* attestation

\* verifier

\* provenance

\* trust-profiles

\* evidence



Planned:



\* trust-anchor

\* bundle

\* sdk

\* cli



\---



\# Implemented



\## Contracts



Implemented:



\* SignatureRecord

\* SignatureSet

\* TrustProfile

\* AttestationV2



Attestations now support:



SignatureSet



instead of



SignatureRecord\[]



which enables multi-signature support.



\---



\## Crypto



Implemented:



Signer interface



SignerRegistry



Ed25519Signer



ECDSASigner



MLDSASigner (placeholder)



SignerFactory



Supported algorithms:



\* ed25519

\* ecdsa-p256

\* ml-dsa-65 (placeholder)



Goal:



Future crypto migration without business logic changes.



\---



\## Attestation



Implemented:



DecisionAttestation



Contains:



\* decisionId

\* evidence

\* signatures

\* metadata



Supports:



\* re-attestation

\* multi-signature



\---



\## Verifier



Implemented:



verifySignatureSet()



verifyPolicy()



verifyDecision()



Current verification supports:



\* Required algorithms

\* Trust profile validation

\* Decision verification



\---



\## Trust Profiles



Implemented:



default



enterprise



regulated



hybrid



post-quantum



Current post-quantum profile requires:



\* ed25519

\* ml-dsa-65



Verification correctly fails if ML-DSA is missing.



Example result:



{

"valid": false,

"verifiedAlgorithms": \[

"ed25519"

],

"failedAlgorithms": \[

"ml-dsa-65"

]

}



This proves quantum-aware policy verification works.



\---



\## Evidence



Implemented:



EvidenceItem



hashEvidence()



Purpose:



Decision evidence hashing.



Current hash:



SHA-256



Future:



Merkle trees



Evidence collections



Evidence bundles



\---



\# Playground Tests Implemented



apps/playground/



\* sign-test.ts

\* multi-signer-test.ts

\* policy-test.ts

\* decision-test.ts



All tests should continue working.



\---



\# Current Vision



Current flow:



Decision

↓

Evidence

↓

Attestation

↓

Signature Set

↓

Trust Policy

↓

Verification



Target flow:



Decision

↓

Evidence

↓

Attestation

↓

Trust Anchor

↓

Trust Root

↓

Verification Chain

↓

Independent Verification



\---



\# Next Priority (Highest)



Build:



packages/trust-anchor



Types:



TrustAnchor



TrustRoot



TrustChain



Purpose:



Move from signature verification to trust verification.



Trust anchors enable:



\* Key rotation

\* Long-term verification

\* Cross-organization trust

\* Government-grade auditability

\* Quantum migration



\---



\# After Trust Anchors



Priority order:



1\. Trust Anchors

2\. Trust Roots

3\. Verification Chains

4\. Re-attestation History

5\. Decision Bundles

6\. Merkle Evidence Trees

7\. ML-DSA Real Implementation

8\. Hybrid Signatures

9\. CLI

10\. SDK



\---



\# Explicit Guidance



Do NOT spend time adding more algorithms.



Do NOT spend time building dashboards.



Do NOT spend time building UI.



Focus on:



\* Trust

\* Verification

\* Evidence

\* Provenance

\* Decision Integrity



The objective is not to build a crypto library.



The objective is to build the trust layer for automated decision-making.



Every design decision should reinforce Parmana's category:



"Verifiable Decision Infrastructure"



