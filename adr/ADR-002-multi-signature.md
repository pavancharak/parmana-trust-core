\# ADR-002 Multi Signature Architecture



Status: Accepted



\## Context



Trust records may need to survive multiple

cryptographic transitions over decades.



A single signature algorithm introduces

migration risk.



\## Decision



Attestations shall support multiple signatures.



Every signature must include:



\- algorithm

\- key identifier

\- signature value

\- timestamp



\## Consequences



\- Dual-signing support

\- Post-quantum migration path

\- Long-term verification

\- Re-attestation support

