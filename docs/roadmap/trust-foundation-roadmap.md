\# Parmana Trust Foundation Roadmap



\## Mission



Establish independently verifiable trust for authorization, attestation, verification, and execution artifacts.



\---



\## Milestone 1 — Public Key Endpoint



Status: Complete



Deliverables:



\* GET /trust-anchor/public-key

\* Published Ed25519 public key

\* OpenAPI documentation

\* Swagger documentation



Outcome:



Third parties can retrieve Parmana trust anchors.



\---



\## Milestone 2 — External Verification Example



Status: Complete



Deliverables:



\* Independent verification script

\* Real attestation verification

\* Public trust anchor retrieval

\* VALID verification result



Outcome:



Parmana trust artifacts can be independently verified using Parmana's published trust anchor.



\---



\## Milestone 3 — Key Rotation



Status: Planned



Objective:



Support multiple signing keys and verification by keyId.



Target State:



```json

{

&#x20; "keyId": "parmana-root-key-v2",

&#x20; "algorithm": "ed25519",

&#x20; "publicKey": "..."

}

```



Capabilities:



\* Multiple active keys

\* Key registry

\* Verification by keyId

\* Rotation without breaking historical verification



Success Criteria:



Attestations signed with historical keys remain verifiable after rotation.



\---



\## Milestone 4 — Trust Root Rotation



Status: Planned



Objective:



Support cryptographically linked trust root evolution.



Capabilities:



\* Trust root versioning

\* Previous root references

\* Signed root publication

\* Root verification chain



Success Criteria:



Independent verifiers can validate trust root lineage across versions.



\---



\## Long-Term Outcome



Decision

→ Intent

→ Attestation

→ Verification

→ Execution

→ Trust Root



Every step independently verifiable through published cryptographic trust anchors.



