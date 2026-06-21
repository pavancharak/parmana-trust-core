\# KMS Trust Anchor Model



\## Purpose



The KMS Trust Anchor Model defines how Parmana manages cryptographic signing keys in production environments.



The objective is:



```text

Protect Trust Anchor Keys

Without Storing Private Keys

Inside Parmana

```



This architecture replaces locally stored signing keys with managed key infrastructure.



The Trust Anchor remains the root of trust for execution authorization, while key custody is delegated to a dedicated key management system.



\---



\# Problem Statement



Current Trust Anchor v1 uses:



```text

root-private.pem

root-public.pem

```



stored on disk.



This is appropriate for:



```text

Development

Testing

Reference Implementations

POCs

```



but introduces risk in production environments.



Examples:



```text

Server Compromise

Container Escape

Filesystem Theft

Backup Exposure

Credential Leakage

```



Production systems require stronger key protection.



\---



\# Architectural Evolution



\## Trust Anchor v1



Current architecture:



```text

Execution Token

&#x20;       │

&#x20;       ▼

Private Key (PEM)

&#x20;       │

&#x20;       ▼

Signature

```



Private key exists within application infrastructure.



\---



\## Trust Anchor v2



Production architecture:



```text

Execution Token

&#x20;       │

&#x20;       ▼

Trust Signer

&#x20;       │

&#x20;       ▼

KMS

&#x20;       │

&#x20;       ▼

Signature

```



Private key never leaves managed infrastructure.



\---



\# Design Goals



\## Key Isolation



Private signing keys must never be stored within:



```text

Application Source Code

Application Repositories

Containers

Runtime Memory

Persistent Storage

```



\---



\## Centralized Trust Management



All signing operations originate from:



```text

Managed Trust Infrastructure

```



rather than individual application instances.



\---



\## Auditability



Every signing operation should be attributable.



Required metadata:



```text

Key Used

Timestamp

Request Source

Signing Outcome

```



\---



\## Rotation Support



The architecture must support:



```text

Key Creation

Key Rotation

Key Retirement

Key Revocation

```



without disrupting verification.



\---



\# Supported Platforms



\## AWS KMS



Example:



```text

arn:aws:kms:region:account:key/...

```



Capabilities:



```text

Managed Keys

Audit Logging

IAM Integration

Automatic Rotation

```



\---



\## Google Cloud KMS



Capabilities:



```text

Managed Keys

Versioned Keys

IAM Controls

Audit Logging

```



\---



\## Azure Key Vault



Capabilities:



```text

Managed Keys

Certificate Management

RBAC Controls

Audit Logging

```



\---



\## Hashicorp Vault



Capabilities:



```text

Transit Signing

Self-Hosted Deployment

Key Versioning

Policy Controls

```



\---



\# Trust Signer Abstraction



Parmana should not directly depend on a specific KMS provider.



Recommended abstraction:



```typescript

export interface TrustSigner {



&#x20; sign(

&#x20;   payload: string

&#x20; ): Promise<string>;



&#x20; getPublicKey():

&#x20;   Promise<string>;



&#x20; getKeyId():

&#x20;   Promise<string>;



}

```



\---



\# PEM Trust Signer



Development implementation.



```typescript

class PemTrustSigner

```



Uses:



```text

root-private.pem

root-public.pem

```



Purpose:



```text

Local Development

Testing

Reference Deployments

```



\---



\# KMS Trust Signer



Production implementation.



```typescript

class KmsTrustSigner

```



Uses:



```text

AWS KMS

Google Cloud KMS

Azure Key Vault

Hashicorp Vault

```



Purpose:



```text

Production Signing

Managed Key Lifecycle

Enterprise Security

```



\---



\# Signing Flow



\## Step 1



Execution Token payload generated.



```text

Execution Authorization Payload

```



\---



\## Step 2



Payload sent to Trust Signer.



```text

trustSigner.sign()

```



\---



\## Step 3



Trust Signer forwards signing request.



```text

KMS Sign Request

```



\---



\## Step 4



KMS generates signature.



```text

Signature

```



\---



\## Step 5



Signature returned to Parmana.



```text

Execution Trust Token

```



created.



\---



\# Verification Flow



Verification remains unchanged.



```text

Execution Token

&#x20;       │

&#x20;       ▼

Public Key

&#x20;       │

&#x20;       ▼

verifyPayload()

&#x20;       │

&#x20;       ▼

Authorized

or

Rejected

```



Verification never requires KMS access.



\---



\# Public Key Distribution



Execution systems obtain:



```text

Public Key

Key Identifier

Algorithm

Root Version

```



through Parmana public trust endpoints.



Private keys remain inaccessible.



\---



\# Token Metadata



Execution Tokens should include:



```typescript

keyId: string;



rootVersion: string;



algorithm: string;

```



Example:



```json

{

&#x20; "keyId": "parmana-root-key-v4",

&#x20; "rootVersion": "v4",

&#x20; "algorithm": "ed25519"

}

```



This enables:



```text

Key Rotation

Historical Verification

Multi-Key Verification

```



\---



\# Multi-Key Architecture



Future trust roots may contain:



```text

Signing Key

Backup Key

Regional Key

Post-Quantum Key

```



simultaneously.



Example:



```text

Root v5

&#x20;├─ key-1

&#x20;├─ key-2

&#x20;└─ key-3

```



Execution tokens identify the signing key used.



\---



\# Security Benefits



\## Private Key Protection



Private keys never leave managed infrastructure.



\---



\## Reduced Blast Radius



Application compromise does not expose signing material.



\---



\## Centralized Governance



Trust anchor management becomes centralized.



\---



\## Audit Logging



Every signing operation becomes auditable.



\---



\## Compliance Alignment



Supports:



```text

SOC 2

ISO 27001

PCI DSS

Financial Services Controls

```



through managed key lifecycle controls.



\---



\# Failure Model



\## KMS Unavailable



Impact:



```text

New Signatures Cannot Be Issued

```



However:



```text

Existing Tokens Remain Verifiable

```



because verification uses public keys.



\---



\## Application Unavailable



Impact:



```text

Authorization Requests Delayed

```



Trust anchors remain intact.



\---



\## Public Key Distribution Failure



Impact:



```text

New Verifiers Cannot Bootstrap Trust

```



Previously cached keys continue functioning.



\---



\# Operational Requirements



\## Monitoring



Track:



```text

Signing Requests

Signing Failures

Key Rotation Events

KMS Availability

```



\---



\## Alerting



Generate alerts for:



```text

KMS Outage

Key Revocation

Unexpected Key Usage

Signature Failure Rate

```



\---



\## Backup Strategy



Backup:



```text

Public Keys

Trust Root Metadata

Key Version Metadata

```



Never export production private keys.



\---



\# Invariants



\## INV-800



```text

Production signing keys must not reside in application storage.

```



\## INV-801



```text

Private keys must never be exposed through APIs.

```



\## INV-802



```text

Verification must remain independent of KMS availability.

```



\## INV-803



```text

Every signature must be attributable to a trusted key.

```



\## INV-804



```text

Key rotation must be supported without service interruption.

```



\## INV-805



```text

Trust continuity must survive key replacement.

```



\---



\# Canonical Statement



The KMS Trust Anchor Model establishes production-grade cryptographic trust by isolating signing keys within managed key infrastructure while preserving independent verification of Parmana authorization artifacts and maintaining continuity across trust root evolution.



