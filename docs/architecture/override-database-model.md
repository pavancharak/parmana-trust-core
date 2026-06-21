\# Override Database Model



\## Purpose



The Override Database Model defines how override authority actions are persisted within the Parmana Execution Trust Chain.



The objective is to ensure that override lineage is:



```text

Permanent

Immutable

Retrievable

Auditable

```



and connected to the original authority decision.



\---



\# Architectural Position



```text

Authority Decision

&#x20;       ↓

Override Decision

&#x20;       ↓

Override Attestation

&#x20;       ↓

Override Verification Receipt

&#x20;       ↓

Execution Authorization

&#x20;       ↓

Execution Record

```



Each artifact is persisted independently.



\---



\# Design Principles



\## Immutable Records



Override records must never be modified.



Allowed:



```text

INSERT

SELECT

```



Not allowed:



```text

UPDATE

DELETE

```



\---



\## Lineage Preservation



Every override artifact must reference:



```text

businessTransactionId

decisionId

```



to preserve trust-chain continuity.



\---



\## Independent Retrieval



Override artifacts must be retrievable independently of:



```text

Execution Records

Verification Receipts

Attestations

```



\---



\# Table: override\_decisions



Stores authority exception decisions.



```sql

create table override\_decisions (



&#x20; override\_id text primary key,



&#x20; decision\_id text not null,



&#x20; business\_transaction\_id text not null,



&#x20; task\_id text not null,



&#x20; policy\_id text not null,



&#x20; policy\_version text not null,



&#x20; override\_subject\_id text not null,



&#x20; override\_action text not null,



&#x20; override\_reason text not null,



&#x20; created\_at timestamptz not null



);

```



\---



\# Table: override\_attestations



Stores override evidence.



```sql

create table override\_attestations (



&#x20; override\_attestation\_id text primary key,



&#x20; override\_id text not null,



&#x20; decision\_id text not null,



&#x20; business\_transaction\_id text not null,



&#x20; attestation\_hash text not null,



&#x20; attested\_at timestamptz not null



);

```



\---



\# Table: override\_verification\_receipts



Stores verification outcomes.



```sql

create table override\_verification\_receipts (



&#x20; override\_receipt\_id text primary key,



&#x20; override\_id text not null,



&#x20; decision\_id text not null,



&#x20; business\_transaction\_id text not null,



&#x20; valid boolean not null,



&#x20; verified\_at timestamptz not null



);

```



\---



\# Foreign-Key Relationships



```text

authority\_decisions

&#x20;       │

&#x20;       ▼

override\_decisions

&#x20;       │

&#x20;       ▼

override\_attestations

&#x20;       │

&#x20;       ▼

override\_verification\_receipts

```



Lineage always flows downward.



\---



\# Example Records



\## Override Decision



```json

{

&#x20; "override\_id": "OVR-001",

&#x20; "decision\_id": "DEC-001",

&#x20; "business\_transaction\_id": "CLAIM-2026-001",

&#x20; "override\_subject\_id": "claims-manager-123",

&#x20; "override\_action": "approve",

&#x20; "override\_reason": "manual\_review\_completed"

}

```



\---



\## Override Attestation



```json

{

&#x20; "override\_attestation\_id": "OAT-001",

&#x20; "override\_id": "OVR-001",

&#x20; "decision\_id": "DEC-001",

&#x20; "attestation\_hash": "a7d91e9f..."

}

```



\---



\## Override Verification Receipt



```json

{

&#x20; "override\_receipt\_id": "OVR-RCP-001",

&#x20; "override\_id": "OVR-001",

&#x20; "decision\_id": "DEC-001",

&#x20; "valid": true

}

```



\---



\# Trust Chain Retrieval



Retrieval by:



```text

business\_transaction\_id

```



must return:



```text

Authority Decision



Override Decision



Override Attestation



Override Verification Receipt



Decision Attestation



Verification Receipt



Execution Record

```



\---



\# Example Retrieval Query



\## Override Decisions



```sql

select \*

from override\_decisions

where business\_transaction\_id =

'CLAIM-2026-001';

```



\---



\## Override Attestations



```sql

select \*

from override\_attestations

where business\_transaction\_id =

'CLAIM-2026-001';

```



\---



\## Override Verification Receipts



```sql

select \*

from override\_verification\_receipts

where business\_transaction\_id =

'CLAIM-2026-001';

```



\---



\# Database Invariants



\## INV-170



```text

Override Decisions must be immutable.

```



\## INV-171



```text

Override Attestations must reference Override Decisions.

```



\## INV-172



```text

Override Verification Receipts must reference Override Decisions.

```



\## INV-173



```text

Override lineage must be retrievable through businessTransactionId.

```



\## INV-174



```text

Override artifacts must remain permanently auditable.

```



\---



\# Canonical Statement



The Override Database Model persists override authority decisions, attestations, and verification receipts as immutable lineage artifacts that extend the Parmana Execution Trust Chain while preserving full auditability and retrieval.



