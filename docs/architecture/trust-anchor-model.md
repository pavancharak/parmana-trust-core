# Trust Anchor Model

## Purpose

The Trust Anchor Model defines the root identity layer of the Parmana architecture.

Every trust decision, verification operation, trust root validation, and federation interaction ultimately depends upon a Trust Anchor.

Trust Anchors are the starting point of trust.

Without a Trust Anchor:

```text
Verification Cannot Begin
```

Without verification:

```text
Trust Cannot Be Established
```

---

# Canonical Principle

Trust Anchors establish identity.

Trust Roots establish trust state.

Trust Chains establish trust lineage.

---

# Core Architectural Question

A Trust Anchor answers:

```text
Who Produced This Trust Evidence?
```

---

# Why Trust Anchors Exist

Every trust system must answer:

```text
Who Should Be Trusted?
```

Before answering:

```text
Can This Evidence Be Trusted?
```

Identity must exist before verification.

Trust Anchors provide that identity.

---

# The Verification Problem

Assume an organization publishes:

```text
Attestation

Verification Receipt

Trust Root
```

A verifier receives:

```text
Signature
```

Question:

```text
Whose Signature Is This?
```

Without identity:

```text
Verification Is Meaningless
```

Trust Anchors solve this problem.

---

# Definition

A Trust Anchor is the published cryptographic identity of a Trust Domain.

It enables independent verification of trust evidence.

---

# Position In Architecture

```text
Trust Anchor
       ↓
Trust Root
       ↓
Trust Chain Verification
       ↓
Federation
```

Everything above depends upon the Trust Anchor.

---

# Canonical Trust Principle

All verification begins with identity.

Identity begins with the Trust Anchor.

---

# Trust Hierarchy

```text
Trust Anchor
       ↓
Trust Root
       ↓
Trust Chains
       ↓
Trust Evidence
```

The Trust Anchor sits at the top of the trust hierarchy.

---

# Trust Anchor Responsibilities

Trust Anchors provide:

```text
Identity

Verification Authority

Trust Bootstrap

Federation Identity
```

---

# Trust Anchor Is Not A Trust Root

Trust Anchor answers:

```text
Who Signed?
```

Trust Root answers:

```text
What Was Signed?
```

---

# Trust Anchor Is Not A Trust Chain

Trust Anchor provides:

```text
Identity
```

Trust Chain provides:

```text
Execution Lineage
```

---

# Trust Anchor Is Not Policy

Policy defines:

```text
Authorization Rules
```

Trust Anchor defines:

```text
Verification Identity
```

---

# Canonical Architecture

```text
Private Key
      ↓
Signs
      ↓
Trust Evidence

Public Key
      ↓
Published As
      ↓
Trust Anchor
```

---

# Core Components

A Trust Anchor contains:

```text
Key Identifier

Algorithm

Public Key

Metadata
```

---

# Key Identifier

Purpose:

```text
Identity Discovery
```

Example:

```json
{
  "keyId":
    "parmana-root-key"
}
```

---

# Canonical Rule

Every Trust Anchor must have a globally unique key identifier.

---

# Algorithm

Purpose:

```text
Verification Compatibility
```

Example:

```json
{
  "algorithm":
    "ed25519"
}
```

Current Parmana implementation:

```text
ed25519
```

---

# Public Key

Purpose:

```text
Independent Verification
```

Example:

```json
{
  "publicKey":
    "-----BEGIN PUBLIC KEY-----..."
}
```

This is the core Trust Anchor artifact.

---

# Metadata

Purpose:

```text
Identity Context
```

Example:

```json
{
  "domainId":
    "finance-production"
}
```

---

# Canonical Trust Anchor Structure

Example:

```json
{
  "keyId":
    "parmana-root-key",

  "algorithm":
    "ed25519",

  "publicKey":
    "-----BEGIN PUBLIC KEY-----..."
}
```

---

# Trust Anchor Publication

Trust Anchors must be publicly discoverable.

Current endpoint:

```http
GET /trust-anchor/public-key
```

Purpose:

```text
Identity Discovery
```

---

# Current Parmana Milestone

Implemented:

```http
GET /trust-anchor/public-key
```

Response:

```json
{
  "keyId":
    "parmana-root-key",

  "algorithm":
    "ed25519",

  "publicKey":
    "-----BEGIN PUBLIC KEY-----..."
}
```

---

# Trust Bootstrap

Trust cannot begin with verification.

Trust must begin with identity.

Bootstrap sequence:

```text
Trust Anchor
      ↓
Verification
      ↓
Trust
```

---

# Independent Verification

A verifier requires:

```text
Trust Anchor

Trust Evidence
```

to validate authenticity.

No internal system access is required.

---

# Canonical Verification Flow

```text
Retrieve Trust Anchor
          ↓
Retrieve Trust Evidence
          ↓
Verify Signature
          ↓
VALID
```

---

# Attestation Verification Example

Verifier receives:

```text
Attestation
```

Containing:

```text
Signature

keyId
```

Verifier retrieves:

```http
GET /trust-anchor/public-key
```

Verifier validates:

```text
Signature
```

Result:

```text
VALID
```

---

# Trust Root Verification Example

Verifier retrieves:

```http
GET /trust-root/current
```

and:

```http
GET /trust-anchor/public-key
```

Verifier validates:

```text
Trust Root Signature
```

Result:

```text
VALID
```

---

# Trust Anchor Lifecycle

```text
Generate Key Pair
         ↓
Assign Key ID
         ↓
Publish Public Key
         ↓
Verify Evidence
```

---

# Key Pair Generation

Every Trust Anchor originates from:

```text
Private Key

Public Key
```

pair generation.

---

# Security Principle

Private keys never leave the Trust Domain.

Only public keys become Trust Anchors.

---

# Trust Anchor Immutability

Trust Anchors should remain stable throughout the life of a key.

Reason:

```text
Historical Verification
```

depends upon stable identity.

---

# Trust Anchor Discovery

Current endpoint:

```http
GET /trust-anchor/public-key
```

Future endpoints:

```http
GET /trust-anchor/current

GET /trust-anchor/history

GET /trust-anchor/{keyId}
```

---

# Trust Anchor History

Historical Trust Anchors must remain available.

Example:

```text
Trust Anchor v1

Trust Anchor v2

Trust Anchor v3
```

Purpose:

```text
Historical Verification
```

---

# Relationship To Key Rotation

Key Rotation changes:

```text
Signing Identity
```

Trust Anchors preserve:

```text
Identity Lineage
```

---

# Example

```text
Key v1
    ↓
Key v2
    ↓
Key v3
```

Verification uses:

```text
keyId
```

to retrieve the correct Trust Anchor.

---

# Canonical Principle

Trust survives key changes through Trust Anchor lineage.

---

# Relationship To Trust Domains

Every Trust Domain owns:

```text
Trust Anchor
```

The Trust Anchor represents the domain's verification identity.

---

# Relationship To Trust Roots

Trust Roots provide:

```text
Trust State
```

Trust Anchors provide:

```text
Verification Identity
```

Together they provide:

```text
Verifiable Trust
```

---

# Relationship To Trust Chains

Trust Chains provide:

```text
Execution Evidence
```

Trust Anchors make that evidence verifiable.

---

# Relationship To Trust Federation

Trust Federation begins with:

```text
Trust Anchor Discovery
```

Organizations cannot verify each other without discovering identity first.

---

# Federation Example

```text
Organization A
       ↓
Trust Anchor A

Organization B
       ↓
Retrieves
       ↓
Trust Anchor A
```

Verification becomes possible.

---

# Trust Anchor Security Properties

Trust Anchors provide:

```text
Identity

Authenticity

Verification Authority

Trust Bootstrap
```

---

# Trust Anchors Do Not Provide

Trust Anchors do not answer:

```text
What Was Authorized?

What Was Executed?

What Trust State Exists?
```

Those belong to:

```text
Trust Chains

Trust Roots
```

---

# Relationship To Parmana Positioning

Parmana ensures:

```text
Trusted Signals
Satisfy Policy
Before Execution
```

Trust Anchors ensure:

```text
Trust Evidence
Can Be Verified
```

independently.

---

# Questions Trust Anchors Answer

```text
Who Signed This?

Which Key Produced This Evidence?

How Can This Be Verified?

Can Verification Occur Independently?

Which Identity Owns This Trust?
```

---

# Questions Trust Anchors Do Not Answer

```text
Was This Action Authorized?

Did Execution Match Intent?

What Is The Current Trust State?
```

Those are answered by other trust artifacts.

---

# Canonical Outcome

A Trust Anchor is the root identity of a Trust Domain.

It provides the cryptographic foundation upon which all verification depends.

Trust Roots publish trust state.

Trust Chains provide trust evidence.

Trust Anchors make trust verifiable.

Every trust relationship in Parmana ultimately begins with a Trust Anchor.
