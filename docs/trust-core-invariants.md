\# Parmana Trust Core Invariants



\## INV-100

Decision must exist before attestation issuance.



Boundary:

\- decision



\## INV-101

Every attestation references exactly one decision.



Boundary:

\- attestation



\## INV-120

Attestation signatures must be cryptographically valid.



Boundary:

\- verification



\## INV-121

Attestation signatures must be independently verifiable.



Boundary:

\- verification



\## INV-130

Trust roots must be cryptographically signed.



Boundary:

\- trust-root



\## INV-131

Trust root signatures must be independently verifiable.



Boundary:

\- trust-root



\## INV-140

Evidence must be present before attestation issuance.



Boundary:

\- attestation



\## INV-150

Evidence tampering must be detectable.



Boundary:

\- verification



\## INV-160

Verification receipts must be cryptographically bound to verified attestations.



Boundary:

\- receipt

\- verification



\## INV-170

Receipt history must be append-only and cryptographically linked.



Boundary:

\- receipt

\- transparency



\## INV-103

Transparency entries reference valid receipt hashes.



Boundary:

\- transparency



\## INV-104

Trust roots are deterministically derived from receipt hashes.



Boundary:

\- trust-root



\## INV-105

Trust root generation is reproducible.



Boundary:

\- trust-root



\## META-010

Organizations decide what to trust.

Parmana evaluates trusted signals against policy before execution.



Boundary:

\- decision

\- attestation

\- verification

\- receipt

\- transparency

\- trust-root

