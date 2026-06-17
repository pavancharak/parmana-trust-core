You're at the point where adding more endpoints has diminishing returns. The next phase should be **productization**.

## Phase 2: Trust Root History

You already have:

```text id="6pnvsm"
POST /trust-root/publish
GET  /trust-root/current
```

Add:

```text id="kq5xt6"
GET /trust-root/latest
GET /trust-root/:rootId
```

### Route 1

File:

```text id="fxm76w"
packages/server/src/routes/trust-root-latest.ts
```

Query:

```sql id="2xqvht"
select *
from trust_roots
order by published_at desc
limit 1
```

### Route 2

File:

```text id="mqw3yq"
packages/server/src/routes/trust-root-by-id.ts
```

Query:

```sql id="yzrsg3"
select *
from trust_roots
where root_id = ?
```

This gives immutable historical trust roots.

---

## Phase 3: Publish Actual Roots

Right now:

```text id="z39sq6"
GET /trust-root/current
```

computes a root.

Instead:

```text id="yj95vv"
POST /trust-root/publish
```

should become the only publisher.

Then:

```text id="6fjxud"
GET /trust-root/current
```

returns latest published root.

This matches real transparency systems.

---

## Phase 4: Evidence API

Current chain:

```text id="qofwgu"
Decision
 ↓
Attestation
 ↓
Receipt
```

Missing:

```text id="4c9ucv"
Evidence
```

Add:

```text id="zl3hy7"
GET /decision/:decisionId
GET /attestation/:decisionId
GET /receipt/:decisionId
```

This makes every trust artifact retrievable.

---

## Phase 5: Canonical Documentation

Create:

```text id="i1dw7y"
docs/architecture/trust-core-runtime.mdx
```

Sections:

```text id="84sh2y"
Authority Evaluation
Attestation
Verification
Receipt
Transparency
Trust Root
```

Canonical runtime diagram:

```text id="bdg1t0"
Task
 ↓
Policy
 ↓
Decision
 ↓
Attestation
 ↓
Verification
 ↓
Receipt
 ↓
Transparency Log
 ↓
Published Trust Root
```

---

## Phase 6: Release v0.1.0

After trust-root history APIs:

```powershell id="3r3cwa"
git add .
git commit -m "feat: Parmana Trust Core v0.1"
git tag v0.1.0
git push origin main
git push origin v0.1.0
```

---

## What I'd Lock As v0.1 Scope

```text id="zuwz8k"
✓ Policy Evaluation
✓ Decision Generation
✓ Attestation
✓ Verification
✓ Receipt
✓ Transparency Log
✓ Transparency Proof
✓ Trust Root
✓ OpenAPI
✓ Swagger
✓ Supabase Persistence
```

And defer to v0.2:

```text id="8qaqm0"
Merkle Trees
Signed Trust Roots
Trust Federation
Multi-tenant Policies
External Verifiers
SDK Generation
```

That keeps Parmana focused on its core thesis:

```text id="n8j4s8"
Organizations decide what to trust.

Parmana evaluates trusted signals
against policy before execution.

Every decision becomes attestable,
verifiable,
auditable,
and transparently published.
```
Use this as the canonical engineering prompt for Parmana's **Quantum Era Readiness Assessment**:

# Parmana Quantum Readiness Gap Analysis

Evaluate the current Parmana Trust Core architecture and identify all work required to make the platform fully quantum-era ready.

Current Architecture:

Task
→ Policy
→ Decision
→ Attestation
→ Verification
→ Receipt
→ Transparency Log
→ Transparency Proof
→ Trust Root

Current Persistence:

* authority_decisions
* decision_attestations
* verification_receipts
* transparency_log
* trust_roots

Current APIs:

* POST /evaluate
* POST /attest
* POST /verify-attestation
* POST /receipt
* POST /transparency
* GET /transparency/{receiptId}
* GET /transparency/proof/{receiptId}
* GET /trust-root/current
* POST /trust-root/publish

Core Parmana Thesis:

Organizations decide what to trust.

Policies define requirements.

Trusted signals provide evidence.

Parmana evaluates those trusted signals against policy before execution.

Humans define authority. Parmana makes authority verifiable and enforceable before execution.

Analyze the system from a post-quantum perspective and classify components into:

1. Quantum-safe today
2. Quantum-vulnerable
3. Requires redesign
4. Future strategic opportunities

Specifically assess:

## Cryptography

* Hashing algorithms
* Signature algorithms
* Key management
* Attestation signing
* Receipt signing
* Trust root signing
* Transparency proof signing

## Transparency Infrastructure

* Trust root generation
* Merkle tree requirements
* Inclusion proofs
* Consistency proofs
* Tamper-evidence guarantees

## Trust Federation

* Cross-organization trust
* Federated trust roots
* Third-party verifiers
* Independent auditors
* Transparency witnesses

## Post-Quantum Cryptography

Evaluate support and migration plans for:

* ML-DSA (Dilithium)
* Falcon
* SPHINCS+
* SHA3
* SHA-512
* Hybrid signatures
* Crypto agility

## Architecture Review

Determine whether Parmana's authority model:

Authority ≠ Cryptography

Authority = Policy + Trusted Signals + Verification

is fundamentally quantum-resistant.

Identify any assumptions that would fail in a world where RSA and ECC are broken.

## Required Engineering Roadmap

Provide:

### v0.2

Immediate post-quantum readiness improvements

### v0.3

Cryptographic agility layer

### v0.4

Post-quantum transparency infrastructure

### v1.0

Fully quantum-era authority platform

## Deliverables

For every recommendation include:

* Why it is needed
* Security benefit
* Engineering effort
* Priority (Critical / High / Medium / Low)
* Dependencies
* Impact on existing APIs

Output a final Quantum Readiness Score (0–100) for:

* Architecture
* Cryptography
* Transparency
* Federation
* Overall Parmana Platform

Based on what you've built, I would expect the assessment to conclude roughly:

```text
Architecture:        90/100
Authority Model:     95/100
Transparency:        70/100
Cryptography:        35/100
Federation:          10/100
Overall:             65/100
```

The biggest missing items are:

```text
1. Post-quantum signatures (ML-DSA)
2. Cryptographic agility framework
3. Merkle trees
4. Signed trust roots
5. Consistency proofs
6. Trust federation
7. External witnesses/auditors
8. Key rotation and algorithm migration
```

Your core authority architecture is already largely quantum-compatible because it is policy-centric rather than signature-centric. The remaining work is primarily in the cryptographic and transparency layers.
