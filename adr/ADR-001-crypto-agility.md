\# ADR-001 Crypto Agility



Status: Accepted



\## Context



Parmana must support evolving cryptographic standards

without changing business logic.



\## Decision



Cryptographic algorithms shall be abstracted behind

provider interfaces.



Business systems shall not directly depend on

Ed25519, ECDSA, ML-DSA, or any future algorithm.



\## Consequences



\- Easier algorithm upgrades

\- Post-quantum readiness

\- Reduced migration risk

\- Long-term trust preservation

