\# Override Attestation Model



\## Purpose



The Override Attestation Model defines how Parmana produces verifiable evidence that an override authority decision occurred.



An Override Attestation transforms:



```text

Override Decision

```



into:



```text

Verifiable Override Evidence

```



before execution authorization can proceed.



\---



\# Architectural Position



```text

Subject

&#x20;  ↓

Task

&#x20;  ↓

Authority Decision

&#x20;  ↓

Override Decision

&#x20;  ↓

Override Attestation

&#x20;  ↓

Verification Receipt

&#x20;  ↓

Execution Trust Token

&#x20;  ↓

Execution Record

```



Override Attestations extend the execution trust chain.



\---



\# Core Principle



```text

An override must be provable.



An override must be attributable.



An override must be immutable.



An override must be independently verifiable.

```



\---



\# Why Attestation Exists



An Override Decision alone is insufficient.



Auditors must be able to prove:



```text

Who approved



What was approved



Why it was approved



When it was approved

```



without relying on application logs.



Override Attestation creates durable evidence.



\---



\# Override Attestation Structure



```typescript

export interface OverrideAttestation {



&#x20; overrideAttestationId: string;



&#x20; overrideId: string;



&#x20; decisionId: string;



&#x20; businessTransactionId: string;



&#x20; taskId: string;



&#x20; policyId: string;



&#x20; policyVersion: string;



&#x20; overrideSubjectId: string;



&#x20; overrideAction:

&#x20;   "approve" |

&#x20;   "reject";



&#x20; overrideReason: string;



&#x20; attestedAt: string;



&#x20; attestationHash: string;



}

```



\---



\# Field Definitions



\## overrideAttestationId



Unique attestation identifier.



Example:



```text

OAT-001

```



\---



\## overrideId



Referenced Override Decision.



Example:



```text

OVR-001

```



\---



\## decisionId



Referenced Authority Decision.



Example:



```text

DEC-001

```



\---



\## businessTransactionId



Lineage identifier.



Example:



```text

CLAIM-2026-001

```



\---



\## taskId



Associated task.



Example:



```text

insurance.claim.approve

```



\---



\## policyId



Associated policy.



Example:



```text

insurance-claim-approval

```



\---



\## policyVersion



Associated policy version.



Example:



```text

1.0.0

```



\---



\## overrideSubjectId



Authority responsible for override.



Example:



```text

claims-manager-123

```



\---



\## overrideAction



Values:



```text

approve

reject

```



\---



\## overrideReason



Human justification.



Example:



```text

manual\_review\_completed

```



\---



\## attestedAt



Timestamp of attestation.



Example:



```text

2026-06-21T12:00:00Z

```



\---



\## attestationHash



Deterministic hash representing attested override evidence.



Example:



```text

a7d91e9f...

```



\---



\# Example Override Attestation



```json

{

&#x20; "overrideAttestationId": "OAT-001",

&#x20; "overrideId": "OVR-001",

&#x20; "decisionId": "DEC-001",

&#x20; "businessTransactionId": "CLAIM-2026-001",

&#x20; "taskId": "insurance.claim.approve",

&#x20; "policyId": "insurance-claim-approval",

&#x20; "policyVersion": "1.0.0",

&#x20; "overrideSubjectId": "claims-manager-123",

&#x20; "overrideAction": "approve",

&#x20; "overrideReason": "manual\_review\_completed",

&#x20; "attestedAt": "2026-06-21T12:00:00Z",

&#x20; "attestationHash": "a7d91e9f..."

}

```



\---



\# Attestation Generation



Input:



```text

Override Decision

```



Process:



```text

Canonical Serialization

&#x20;       ↓

Deterministic Hash

&#x20;       ↓

Override Attestation

```



Output:



```text

Attested Override Evidence

```



\---



\# Verification Purpose



Override Attestations allow verifiers to prove:



```text

Override Exists



Override Was Not Modified



Override Authority Is Known



Override Lineage Is Intact

```



\---



\# Lineage Requirements



Every Override Attestation must reference:



```text

overrideId

decisionId

businessTransactionId

taskId

policyId

policyVersion

```



to preserve trust-chain continuity.



\---



\# Audit Requirements



Override Attestations must be:



```text

Immutable

Retrievable

Deterministic

Auditable

```



Historical attestation records must never be modified.



\---



\# Future Extensions



Future versions may include:



```typescript

signature: string;



keyId: string;



rootVersion: string;

```



to support cryptographic verification through the Trust Anchor.



\---



\# Invariants



\## INV-140



```text

Every Override Attestation must reference an Override Decision.

```



\## INV-141



```text

Override Attestations must be immutable.

```



\## INV-142



```text

Override Attestations must preserve execution lineage.

```



\## INV-143



```text

Override Attestations must be independently verifiable.

```



\## INV-144



```text

Override Attestation hashes must be deterministic.

```



\---



\# Canonical Statement



An Override Attestation is a verifiable evidence artifact that proves an authorized override decision occurred and preserves that decision within the Parmana Execution Trust Chain.



