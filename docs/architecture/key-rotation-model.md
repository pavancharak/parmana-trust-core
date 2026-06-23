# Key Rotation Model

## Purpose

The Key Rotation Model defines how Parmana preserves trust continuity while cryptographic identities evolve over time.

Trust Anchors should not remain static forever.

Keys may be rotated because of:

```text
Security Requirements

Operational Policies

Cryptographic Upgrades

Compromise Recovery
```

The challenge is preserving trust while identity changes.

Key Rotation solves this problem.

---

# Canonical Principle

Trust Identity May Change.

Trust Continuity Must Not.

---

# Core Architectural Question

Key Rotation answers:

```text
How Can Trust Remain Verifiable
When Signing Keys Change?
```

---

# Why Key Rotation Exists

Every cryptographic system eventually requires key replacement.

Reasons include:

```text
Scheduled Rotation

Algorithm Upgrades

Key Compromise

Governance Requirements

Regulatory Requirements
```

Without rotation:

```text
Long-Term Trust Becomes Risky
```

---

# The Verification Problem

Suppose:

```text
Attestation
      ↓
Signed By Key A
```

Years later:

```text
Key A
```

has been replaced by:

```text
Key B
```

Question:

```text
How Can Historical Evidence
Still Be Verified?
```

Key Rotation provides the answer.

---

# Canonical Principle

Historical verification must survive identity evolution.

---

# Position In Architecture

```text
Trust Anchor
       ↓
Key Rotation
       ↓
Trust Root
       ↓
Verification
       ↓
Federation
```

Key Rotation sits between identity and verification.

---

# Trust Identity Lifecycle

```text
Key A
   ↓
Key B
   ↓
Key C
   ↓
Key D
```

Identity evolves.

Trust remains continuous.

---

# Definition

Key Rotation is the controlled replacement of a Trust Domain's signing key while preserving historical verification and trust continuity.

---

# What Changes

During rotation:

```text
Private Key

Public Key

Key Identifier
```

may change.

---

# What Must Not Change

```text
Trust Domain Identity

Verification Capability

Historical Trust
```

must remain intact.

---

# Canonical Principle

Keys Rotate.

Trust Persists.

---

# Trust Anchor Evolution

Example:

Version 1:

```json
{
  "keyId": "key-v1"
}
```

Version 2:

```json
{
  "keyId": "key-v2"
}
```

Version 3:

```json
{
  "keyId": "key-v3"
}
```

Each represents a new trust anchor.

---

# Key Lineage

Keys form lineage.

Example:

```text
key-v1
   ↓
key-v2
   ↓
key-v3
```

Purpose:

```text
Trust Continuity
```

---

# Canonical Rule

Key lineage must be preserved permanently.

---

# Trust Anchor History

A Trust Domain must maintain:

```text
Current Key

Historical Keys
```

Example:

```text
key-v1

key-v2

key-v3
```

Historical keys remain verifiable.

---

# Why History Matters

Consider:

```text
Attestation Created:
January 2026

Signed By:
key-v1
```

Verification in:

```text
January 2029
```

must still succeed.

---

# Canonical Principle

Historical evidence must remain independently verifiable.

---

# Key Discovery

Current endpoint:

```http
GET /trust-anchor/public-key
```

returns:

```text
Current Trust Anchor
```

---

# Future Endpoint

```http
GET /trust-anchor/{keyId}
```

Purpose:

```text
Historical Key Retrieval
```

---

# Trust Anchor History Endpoint

Future endpoint:

```http
GET /trust-anchor/history
```

Example response:

```json
[
  {
    "keyId": "key-v1"
  },
  {
    "keyId": "key-v2"
  },
  {
    "keyId": "key-v3"
  }
]
```

---

# Verification During Rotation

Verification flow:

```text
Read keyId
      ↓
Retrieve Matching Trust Anchor
      ↓
Verify Signature
      ↓
VALID
```

Verification remains deterministic.

---

# Canonical Verification Principle

Verification uses the signing key that created the evidence.

Not the current key.

---

# Attestation Example

Attestation:

```json
{
  "keyId": "key-v1",
  "signature": "..."
}
```

Verifier:

```text
Reads keyId
      ↓
Retrieves key-v1
      ↓
Verifies Signature
```

Result:

```text
VALID
```

---

# Trust Root Rotation

Trust Roots must record:

```text
keyId
```

Example:

```json
{
  "rootVersion": 7,
  "keyId": "key-v2"
}
```

This enables historical verification.

---

# Canonical Principle

Every signed artifact must identify the key that signed it.

---

# Rotation Workflow

```text
Generate New Key Pair
          ↓
Assign New KeyId
          ↓
Publish New Trust Anchor
          ↓
Begin Signing New Artifacts
          ↓
Retain Historical Keys
```

---

# Rotation Event

Example:

Before:

```text
Current Key:
key-v1
```

After:

```text
Current Key:
key-v2
```

Result:

```text
New Evidence
      ↓
Signed By key-v2

Old Evidence
      ↓
Verified By key-v1
```

---

# Trust Root Lineage

Trust Roots also evolve.

Example:

```text
Root v1
     ↓
Root v2
     ↓
Root v3
```

Each root may reference:

```text
keyId
```

used during publication.

---

# Combined Lineage

```text
Key v1
      ↓
Root v1

Key v2
      ↓
Root v2

Key v3
      ↓
Root v3
```

This creates trust continuity.

---

# Federation Impact

Federated participants must support:

```text
Historical Key Retrieval
```

Otherwise:

```text
Historical Verification Fails
```

---

# Federation Verification Flow

```text
Receive Trust Root
          ↓
Read keyId
          ↓
Retrieve Historical Key
          ↓
Verify Signature
```

Trust survives rotation.

---

# Compromise Recovery

Rotation may occur because:

```text
Key Compromise
```

Workflow:

```text
Revoke Compromised Key
         ↓
Publish New Trust Anchor
         ↓
Publish New Trust Root
```

Future evidence uses the new key.

Historical evidence remains traceable.

---

# Revocation

Future architecture may support:

```json
{
  "keyId": "key-v1",
  "status": "revoked"
}
```

Purpose:

```text
Compromise Transparency
```

---

# Trust Continuity Model

```text
Trust Domain
      ↓
Trust Anchor Lineage
      ↓
Trust Root Lineage
      ↓
Historical Verification
```

This preserves continuity.

---

# Security Benefits

Key Rotation provides:

```text
Cryptographic Agility

Compromise Recovery

Long-Term Trust

Operational Governance
```

---

# Operational Benefits

Organizations gain:

```text
Controlled Identity Evolution

Historical Auditability

Verification Stability

Federation Compatibility
```

---

# Relationship To Trust Anchors

Trust Anchors provide:

```text
Identity
```

Key Rotation manages:

```text
Identity Evolution
```

---

# Relationship To Trust Roots

Trust Roots publish:

```text
Trust State
```

Key Rotation ensures trust state remains verifiable across identity changes.

---

# Relationship To Federation

Federation depends upon:

```text
Historical Verification
```

Key Rotation makes historical verification possible.

---

# Relationship To Parmana Roadmap

Key Rotation is the third trust-foundation milestone.

Dependencies:

```text
Trust Anchor Publication
        ↓
External Verification
        ↓
Key Rotation
```

Future milestones build on it.

---

# Questions Key Rotation Answers

```text
How Can Keys Change Safely?

How Is Historical Verification Preserved?

How Does Trust Survive Identity Changes?

How Are Historical Signatures Verified?

How Does Federation Survive Rotation?
```

---

# Questions Key Rotation Does Not Answer

```text
What Trust State Exists?

Did Execution Match Intent?

Was A Specific Decision Authorized?
```

Those remain responsibilities of other trust artifacts.

---

# Canonical Outcome

The Key Rotation Model enables Parmana Trust Domains to evolve cryptographic identities without losing trust continuity.

Trust Anchors may change.

Trust Roots may evolve.

Historical evidence remains independently verifiable.

Trust survives identity evolution through key lineage, historical retrieval, and deterministic verification.

Keys rotate.

Trust persists.
