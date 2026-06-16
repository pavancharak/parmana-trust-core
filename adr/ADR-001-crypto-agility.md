\# ADR-001 Crypto Agility



Status: Accepted



\## Context



Parmana must support evolving cryptographic standards

without requiring changes to business logic.



The trust layer should remain independent of any

specific cryptographic implementation.



\## Decision



All cryptographic operations shall be implemented

through provider interfaces.



Business logic must not depend directly on:



\- Ed25519

\- ECDSA

\- ML-DSA

\- SLH-DSA



or any future algorithm.



\## Consequences



\- Easier cryptographic migration

\- Post-quantum readiness

\- Reduced operational risk

\- Long-term decision integrity

