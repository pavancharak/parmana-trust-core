# Parmana Trust Core – Remaining API Implementation Roadmap

You are working inside the Parmana Trust Core monorepo.

Current state:

Implemented APIs:

```text
POST /evaluate
POST /attest
POST /verify-attestation
```

Implemented runtime:

```text
Task
  ↓
Policy
  ↓
Authority Evaluation
  ↓
Decision
  ↓
Attestation
  ↓
Integrity Verification
```

Implemented packages:

```text
contracts
bundle
verifier
attestation
server
audit-db
transparency-log
trust-anchor
trust-federation
```

Canonical architecture:

```text
Organizations decide what to trust.

Policies define what is required.

Trusted signals provide evidence.

Parmana evaluates those trusted signals against policy before execution.

Attestation creates cryptographic evidence of authority decisions.

Verification determines whether those decisions can be trusted.

Parmana makes authority verifiable and enforceable before execution.
```

---

# Objective

Implement the remaining Authority Layer APIs in incremental phases.

Do NOT redesign existing architecture.

Do NOT introduce execution capabilities.

Do NOT introduce workflow engines.

Do NOT introduce authorization frameworks.

Maintain the canonical responsibility model:

```text
AI
 ↓
Request

Parmana
 ↓
Authority Evaluation

System Of Record
 ↓
Execution
```

---

# Phase 1: Verification Receipts

Implement:

```text
POST /receipt
GET /receipt/:receiptId
```

Create:

```text
packages/contracts/src/verification-receipt.ts
packages/attestation/src/create-receipt.ts
packages/server/src/routes/receipt.ts
```

Receipt model:

```ts
interface VerificationReceipt {

  receiptId: string;

  attestationId: string;

  verified: boolean;

  verifiedAt: string;

  verifier: string;

  verificationMethod: string;
}
```

Verification flow:

```text
Attestation
      ↓
verifyAttestation()
      ↓
createReceipt()
      ↓
Receipt
```

Store receipts using existing audit-db package.

---

# Phase 2: Transparency Log APIs

Implement:

```text
POST /transparency
GET /transparency/:entryId
GET /transparency/proof/:entryId
```

Use existing transparency-log package.

Transparency entry model:

```ts
interface TransparencyEntry {

  entryId: string;

  receiptId: string;

  leafHash: string;

  timestamp: string;
}
```

Flow:

```text
Receipt
     ↓
Transparency Entry
```

Goal:

```text
Immutable Audit History
```

---

# Phase 3: Trust Anchors

Implement:

```text
POST /anchors
GET /anchors
GET /anchors/:issuer
```

Use trust-anchor package.

Trust Anchor model:

```ts
interface TrustAnchor {

  issuer: string;

  publicKey: string;

  algorithm: string;

  createdAt: string;
}
```

Purpose:

```text
Trusted Issuer Registration
```

---

# Phase 4: Trust Federation

Implement:

```text
POST /federation/attest
POST /federation/verify
GET /federation/issuers
```

Use trust-federation package.

Federation model:

```text
Issuer
   ↓
Attestation
   ↓
Verifier
```

Purpose:

```text
Cross-Organization Trust
```

---

# Phase 5: Runtime Discovery APIs

Implement:

```text
GET /tasks
GET /tasks/:taskId

GET /policies
GET /policies/:policyId
GET /policies/:policyId/:version
```

Use existing:

```text
tasks/
policies/
```

Purpose:

```text
Runtime Introspection
```

---

# Phase 6: Governance Query APIs

Implement:

```text
GET /decisions
GET /attestations
GET /receipts
GET /audit
```

Use audit-db.

Purpose:

```text
Audit Search
Governance Visibility
Historical Analysis
```

---

# Constraints

Never violate these rules:

```text
Parmana does not execute.

Parmana does not create facts.

Parmana does not determine trust.

Organizations decide what to trust.

Policies define authority requirements.

Trusted signals provide evidence.

Parmana evaluates authority before execution.
```

---

# Target Runtime

```text
POST /evaluate
       ↓
Decision

POST /attest
       ↓
Attestation

POST /verify-attestation
       ↓
Verification

POST /receipt
       ↓
Receipt

POST /transparency
       ↓
Transparency Entry

POST /federation/verify
       ↓
Federated Trust
```

Final architecture:

```text
Task
   ↓
Policy
   ↓
Authority Evaluation
   ↓
Decision
   ↓
Attestation
   ↓
Verification
   ↓
Receipt
   ↓
Transparency
   ↓
Federation
```

Maintain compatibility with all existing APIs and architecture documents.
